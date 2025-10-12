from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from auth import authenticate_user, get_db, create_access_token
from sqlalchemy.orm import Session
from models import UsuarioBD
from schemas import UsuarioCreate, UsuarioSchema
from auth import get_db, get_password_hash
from datetime import timedelta

routerusuarios = APIRouter()

ACCESS_TOKEN_EXPIRE_MINUTES = 30

@routerusuarios.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(status_code=401, detail="Nombre o clave incorrectos")
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(data={"sub": user.usuario}, expires_delta=access_token_expires)
    return {"access_token": access_token, "token_type": "bearer"}

@routerusuarios.post("/register", status_code=status.HTTP_201_CREATED)
def registrar_usuario(datos: UsuarioCreate, db: Session = Depends(get_db)):
    existe = db.query(UsuarioBD).filter(UsuarioBD.usuario == datos.usuario).first()
    if existe:
        raise HTTPException(status_code=400, detail="El usuario ya existe")

    clave_hash = get_password_hash(datos.clave)
    nuevo = UsuarioBD(usuario=datos.usuario, clave=clave_hash)
    db.add(nuevo)
    db.commit()
    return {"mensaje": "Usuario creado correctamente"}

@routerusuarios.post("/forgot-password")
def recuperar_contraseña(datos: UsuarioSchema, db: Session = Depends(get_db)):
    usuario = db.query(UsuarioBD).filter(UsuarioBD.usuario == datos.usuario).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")

    nueva_clave = get_password_hash("Temporal123")
    usuario.clave = nueva_clave
    db.commit()
    return {"mensaje": "Contraseña restablecida a 'Temporal123'"}