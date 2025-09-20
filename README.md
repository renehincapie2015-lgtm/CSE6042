# CSE6042
PROGRAMMING THE INTERNET

# Backend para el E-commerce para la empresa Ilumage

**FastAPI 0.116.2, XAMPP 3.3.0, Python 3.1.3 **

# backendProductos

Entrega de la tarea de la semana 5, Desarrollo del backend de la Plataforma con FastAPI y Python.  

## Arquitectura de FastAPI

Esta herramienta utiliza unos archivos Python de parametrización, una subcarpeta en la que en primera instancia guarda un archivo de variables de entorno. Dichas variables son fuente de información para los archivos Python.
En segundo lugar, dentro hay otras subcarpetas con ejecutables y librerías, entre las cuales se encuentran Pydantic, Uvicorn y SQLAlchemy.

## Integración con la base de datos SQL.

Para obtener el servicio de una base de datos MySQL, se instaló XAMPP. Dentro de esta aplicación se debió parametrizar el password de root, ya que no es obligatorio.
Para realizar la tarea de administración de la base de datos, en XAMPP también se debe subir el servidor Apache, ya que se necesita usar phpMyAdmin, herramienta desarrollada en PHP.
La base de datos atiende por defecto el puerto 3306, y así se parametrizó en los Python de FastAPI.

## 🚀 Instalación y uso

### 1. Clona el repositorio
```bash
git clone https://github.com/cristianzambrano/backendFastAPI
cd backendFastAPI
```

### 2. Crea un entorno virtual (opcional pero recomendado)
```bash
python -m venv venv
# Activa el entorno virtual:
# En Windows:
venv\Scripts\activate
# En Linux/Mac:
source venv/bin/activate
```

### 3. Configura las variables de entorno
Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido (ajusta a tu configuración local de MySQL):

```ini
DB_USER=root
DB_PASSWORD=......
DB_HOST=localhost
DB_PORT=3306
DB_NAME=tienda
```

### 4. Instala las dependencias
```bash
pip install -r requirements.txt
```

📌 Dependencias principales:
- **fastapi** → Framework de la API.
- **uvicorn** → Servidor ASGI para FastAPI.
- **sqlalchemy** → ORM para interactuar con MySQL.
- **pymysql** → Driver de MySQL para Python.
- **python-dotenv** → Para leer el archivo `.env`.
- **fastapi-crudrouter** → Generación automática de rutas CRUD.

### 5. Ejecuta el servidor
```bash
uvicorn main:app --reload
```

La API quedará disponible en:
- Swagger UI → [http://localhost:8000/docs](http://localhost:8000/docs)  
- ReDoc → [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 📌 Endpoints disponibles

Los endpoints generados automáticamente son:

| Método | Ruta             | Descripción                  |
|--------|------------------|------------------------------|
| GET    | `/productos`     | Listar todos los productos   |
| GET    | `/productos/{id}`| Obtener un producto por ID   |
| POST   | `/productos`     | Crear un nuevo producto      |
| PUT    | `/productos/{id}`| Actualizar un producto       |
| DELETE | `/productos/{id}`| Eliminar un producto         |

---

## 🛠 Notas
- La tabla `productos` en MySQL se define con `id INT AUTO_INCREMENT PRIMARY KEY`.
- Se crea el archivo `.gitignore` para excluir `venv/`, `.env` y archivos innecesarios.  
- Se usa un servicio MySQL local (XAMPP) para pruebas.  

---
Se adjuntan imágenes para validar el funcionamiento:
![Backend01](https://github.com/user-attachments/assets/239d9d48-f449-45db-ba2a-33487017d8e5)
![Backend02](https://github.com/user-attachments/assets/a6ef0718-b810-4557-88b8-fd79da834d9c)
![Backend03](https://github.com/user-attachments/assets/96f17a7b-28ae-4400-a54d-8bf64201dd7a)
![Backend04](https://github.com/user-attachments/assets/9bbe4fe2-71bb-4d67-8f7c-7f0c128c4e42)
![Backend05](https://github.com/user-attachments/assets/5c5a561b-4ae0-4683-b60c-c43e0f1b8be9)
![Backend06](https://github.com/user-attachments/assets/e773c984-4868-4784-b875-a31a66258803)

