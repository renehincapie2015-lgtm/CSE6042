from fastapi import APIRouter, Depends, HTTPException, status
from auth import get_db, get_current_user
from sqlalchemy.orm import Session
from models import Producto
from schemas import ProductoCreate, ProductoUpdate, ProductoSchema
from typing import List

routerproductos = APIRouter()

# Listar todos los productos
@routerproductos.get("/productos", response_model=List[ProductoSchema])
def listar_productos(db: Session = Depends(get_db), usuario=Depends(get_current_user)):
    return db.query(Producto).all()

# Obtener un producto por ID
@routerproductos.get("/productos/{producto_id}", response_model=ProductoSchema)
def obtener_producto(producto_id: int, db: Session = Depends(get_db), usuario=Depends(get_current_user)):
    producto = db.query(Producto).filter(Producto.id == producto_id).first()
    if not producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    return producto

# Crear un nuevo producto
@routerproductos.post("/productos", response_model=ProductoSchema, status_code=status.HTTP_201_CREATED)
def crear_producto(producto: ProductoCreate, db: Session = Depends(get_db), usuario=Depends(get_current_user)):
    nuevo = Producto(**producto.dict(exclude_unset=True))
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return nuevo

# Actualizar un producto existente
@routerproductos.put("/productos/{producto_id}", response_model=ProductoSchema)
def actualizar_producto(producto_id: int, datos: ProductoUpdate, db: Session = Depends(get_db), usuario=Depends(get_current_user)):
    producto = db.query(Producto).filter(Producto.id == producto_id).first()
    if not producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    for campo, valor in datos.dict(exclude_unset=True).items():
        setattr(producto, campo, valor)
    db.commit()
    db.refresh(producto)
    return producto

# Eliminar un producto
@routerproductos.delete("/productos/{producto_id}", response_model=ProductoSchema)
def eliminar_producto(producto_id: int, db: Session = Depends(get_db), usuario=Depends(get_current_user)):
    producto = db.query(Producto).filter(Producto.id == producto_id).first()
    if not producto:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    db.delete(producto)
    db.commit()
    return producto