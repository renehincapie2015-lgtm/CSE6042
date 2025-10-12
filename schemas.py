from pydantic import BaseModel, Field
from typing import Optional

# Esquema para crear productos (POST)
class ProductoCreate(BaseModel):
    nombre: str = Field(..., min_length=3, max_length=100, description="Nombre del producto entre 3 y 100 caracteres")
    valor: float = Field(..., gt=0, description="El valor debe ser mayor que cero")
    categoria: int = Field(..., gt=0, description="La categoría debe ser mayor que cero")
    stock: int = Field(..., gt=0, description="El stock debe ser mayor que cero")

# Esquema para actualizar productos (PUT)
class ProductoUpdate(BaseModel):
    nombre: Optional[str] = Field(None, min_length=3, max_length=100)
    valor: Optional[float] = Field(None, gt=0)
    categoria: Optional[int] = Field(None, gt=0)
    stock: Optional[int] = Field(None, gt=0)

# Esquema para respuestas (GET)
class ProductoSchema(ProductoCreate):
    id: int

    class Config:
        orm_mode = True

# Esquema para crear usuarios (POST)
class UsuarioCreate(BaseModel):
    usuario: str = Field(..., min_length=4, max_length=20)
    clave: str = Field(..., max_length=72, regex="^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).+$")

    class Config:
        orm_mode = True

# Esquema para clave temporal (POST)
class UsuarioSchema(BaseModel):
    usuario: str = Field(..., min_length=4, max_length=20)

    class Config:
        orm_mode = True