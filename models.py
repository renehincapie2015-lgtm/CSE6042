from sqlalchemy import Column, String, Float, Integer
from database import Base

class Producto(Base):
    __tablename__ = "productos"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    nombre = Column(String(255), nullable=False)
    valor = Column(Float, nullable=False)
    categoria = Column(Integer, nullable=False)
    stock = Column(Integer, nullable=False)

class UsuarioBD(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    usuario = Column(String(20), unique=True, index=True, nullable=False)
    clave = Column(String(72), nullable=False)
