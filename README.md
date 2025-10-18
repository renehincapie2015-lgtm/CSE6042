# CSE6042
PROGRAMMING THE INTERNET

# E-commerce para la empresa Ilumage

**React 19 Compatible** - Se usó la maqueta ArchitectUI React de DashboardPack. Construido con React 19, Bootstrap 5, y una comprehensiva biblioteca de componentes.

## Resumen

Este sitio de e-commerce contiene pantallas para consultar los Administradores, Clientes, las Formas de Pago, Categorías de Productos, y los Productos. Esta aplicación ofrece un diseño responsivo. Las pantallas permiten cambiar el orden de los registros consultados.

ccPara realizar esta tarea se copió la pantalla de consultas fijas de la plantilla. Se crearon las pantallas correspondientes a Administradores, Clientes, Formas de Pago, Categorías y Productos. Se crearon archivos json para usarlas de bases de datos. Se logra instalar json-server y evidenciar en navegador cualquiera de los archivos json. Pero no se logró hacer funcionar el fetch en las formas. Por lo que se dejó un json incrustado en cada clase React. Se modificó la imagen de avatar, se modificó el logo, se modificó el menú vertical para mostrar las nuevas opciones.

### Semana 3
Se creó una nueva pantalla para creación de nuevos usuarios. En dicha pantalla se incluyeron campos para ingresar nombres y apellidos, correo electrónico, contraseña, confirmación de contraseña, fecha de nacimiento y años de experiencia. Por cada campo se agregó código JavaScript para validar que sus valores sean correctos. Cada validación en los campos obligatorios alerta si no hay valor. Si lo hay, verifica que su valor sea adecuado: los nombres no pueden tener números, el email debe cumplir un formato, la contraseña debe ser fuerte, la confirmación debe ser igual a la contraseña, la fecha de nacimiento debe superar los 18 años de mayoría de edad, la experiencia no puede ser negativa y tampoco mayor a la edad. Para algunas de estas validaciones hubo necesidad de usar Expresiones Regulares.

### Semana 4
Se usó de base el código compartido por el profesor. Primero se instaló Axios. Luego se creó el archivo productosService.js con las rutas de los endpoints. Luego se copió el código correspondiente a ProductoModal.js y Basic.js (este es el que genera la pantalla de Producto). Al probar se recupera el listado de objetos y funciona la consulta por nombre. Pero no funcionó la ventana modal. Luego de investigar se aclara que la maqueta CoreUI usada por el docente, y la maqueta ArchitectureUI que yo escogí, tienen varias diferencias, como que diferentes módulos existen en uno y no en otro, usan diferentes parámetros, o simplemente devuelven código HTML diferente. De modo que cambié los parámetros e instrucciones de llamado e internas de la ventana modal y ahora sí funciona.

## Características clave

### Tecnologías Clave
- **React 19.1.0**
- **Bootstrap 5.3.7**
- **Redux Toolkit**
- **React Router v7**
- **Sass/SCSS**
- **Javascript**

### Prerrequisitos

- **Node.js**
- **npm**

### Instalación

1. **Clone** el repositorio
   ```bash
   git clone https://github.com/DashboardPack/architectui-react-theme-free.git
   cd architectui-react-theme-free
   ```

2. **Instale Dependencias**
   ```bash
   npm install

   Reemplace los archivo de este repositorio
   
   ```

3. **Arranque el Servidor de Desarrollo**
   ```bash
   npm start
   ```
   
   La aplicación abrirá en su navegador en `http://localhost:3001`

### Compile para Producción

1. **Cree el Compilado de Producción**
   ```bash
   npm run build
   ```

2. **Despliegue el Compilado de Producción localmente**
   ```bash
   npx serve -s build -l 4000
   ```
   
   Vea el Compilado de Producción en `http://localhost:4000`

## Estructura del proyecto

```
architectui-react-theme-free/
├── public/                 # Static files
├── src/
│   ├── assets/            # Styles, images, and static assets
│   ├── components/        # Reusable UI components
│   ├── DemoPages/         # Demo pages and examples
│   │   ├── Dashboards/    # Dashboard variations
│   │   ├── Components/    # UI component examples
│   │   ├── Tables/        # Pantallas de Consultas
│   │   │   ├── Admins/    # Consulta de Administradores
│   │   │   ├── Clientes/  # Consulta de Clientes
│   │   │   ├── Categs/    # Consulta de Categorias
│   │   │   ├── FPago/     # Consulta de Formas de Pago
│   │   │   └── Productos/ # Consulta de Formas de Pago
│   │   └── Forms/         # Pantallas de gestión
│   │   │   └── Usuarios/  # Gestión de Usuarios
│   ├── Layout/            # Layout components
│   │   ├── AppHeader/     # Header components
│   │   ├── AppSidebar/    # Sidebar components
│   │   └── AppFooter/     # Footer components
│   └── reducers/          # Redux store configuration
├── config-overrides.js   # Webpack configuration
└── package.json          # Dependencies and scripts
```

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Start development server (port 3001) |
| `npm run build` | Create production build |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (not recommended) |

## Navegadores Soportes

ArchitectUI React soporta todos los navegadores modernos:

- **Chrome** (recien)
- **Firefox** (recien)
- **Safari** (recien)
- **Edge** (recien)
- **Opera** (recien)

## Ingreso a la pantalla de validación de usuario

En el menú de Navegación, debe entrar al submenú Gestión (su icono es un par de herramientas), y luego dar clic en la opción Nuevo Usuario. Para mostrar la alerta solicitada en la tarea, debe dar Enter. Pero la navegación entre los campos se hace con Tabulador.

## Desafíos

### Semana 2
El principal desafío fue lograr que los módulos leyeran de archivos json externos, y no de texto json incrustado en el código.

<img width="1299" height="397" alt="Maqueta01" src="https://github.com/user-attachments/assets/fd199da8-d55c-47aa-af29-678174c4af4c" />
<img width="738" height="324" alt="Maqueta02" src="https://github.com/user-attachments/assets/308728ce-540b-4038-ab06-5139d75d45e7" />
<img width="430" height="493" alt="Maqueta03" src="https://github.com/user-attachments/assets/c0e71e05-0c80-451e-8ade-ac69904d8cbc" />
<img width="879" height="467" alt="Maqueta04" src="https://github.com/user-attachments/assets/aff4f7df-3e9f-4434-b739-64820e88cb51" />
<img width="1285" height="599" alt="Maqueta05" src="https://github.com/user-attachments/assets/f15b609e-67e9-4d35-ae0b-e51f61795f0d" />
<img width="923" height="506" alt="Maqueta06" src="https://github.com/user-attachments/assets/0502d6b7-813e-4529-980a-6b73e6769071" />
<img width="917" height="519" alt="Maqueta07" src="https://github.com/user-attachments/assets/16435c52-67bd-48d5-aa52-eb2e12969cc9" />

### Semana 3
El principal desafío fue el de determinar el evento correcto para la validación. En la web muchos sitios sugieren usar OnBlur, pero no deja navegar al siguiente campo. Por lo que la validación se dejó en OnChange, y las alertas en OnKeyPress, aunque los ejemplos siempre sugieren usar OnBlur.

<img width="680" height="587" alt="Validador01" src="https://github.com/user-attachments/assets/ea3de738-7bc7-4b6d-aa8b-cb75c2215386" />
<img width="736" height="563" alt="Validador02" src="https://github.com/user-attachments/assets/31285290-bcdd-4c11-b38d-bb8870a29e65" />
<img width="602" height="500" alt="Validador03" src="https://github.com/user-attachments/assets/2aad5d78-75a8-461f-a03a-bd7d67ab7cb6" />
<img width="448" height="402" alt="Validador04" src="https://github.com/user-attachments/assets/48192bf6-8446-49e2-ad47-fd9cd661aac6" />
<img width="1069" height="495" alt="Validador05" src="https://github.com/user-attachments/assets/57d2dcde-e701-4544-b9fa-78252575a493" />
<img width="597" height="495" alt="Validador06" src="https://github.com/user-attachments/assets/1814b4b6-95c4-48e3-8093-dc6e9a312abd" />
<img width="617" height="505" alt="Validador07" src="https://github.com/user-attachments/assets/205c2884-4c10-4412-8ca0-cf76cd850e71" />
<img width="682" height="500" alt="Validador08" src="https://github.com/user-attachments/assets/7cbb4502-9ac6-4e55-ae35-3b33d297f498" />
<img width="1017" height="552" alt="Validador09" src="https://github.com/user-attachments/assets/ff442fb8-f59d-4e7a-8cfb-879a91d85335" />
<img width="948" height="245" alt="Validador10" src="https://github.com/user-attachments/assets/f3ee7718-4f66-41af-b84a-f7556c0551fb" />
<img width="518" height="448" alt="Validador11" src="https://github.com/user-attachments/assets/704e5ef7-574a-40ba-9254-4c2b65c45dc7" />
<img width="602" height="296" alt="Validador12" src="https://github.com/user-attachments/assets/26e81390-9a25-4df8-b939-d226aa9c054f" />
<img width="501" height="337" alt="Validador13" src="https://github.com/user-attachments/assets/b3075da7-5018-4f9c-9e60-22167a7f3b17" />
<img width="510" height="298" alt="Validador14" src="https://github.com/user-attachments/assets/1efcdce8-521e-4e85-a9bd-322c9b72350d" />

### Semana 4
El principal desafío fue el de ajustar el código de CoreUI a lo que permite ArchbitectureUI. Por ejemplo, CoreUI tiene módulos para crear Tables, TableHeaders, TableRows. Architecture no, por lo que tocó escribir las etiquetas HTML normales para mostrar la tabla. El mismo problema se presentó con la ventana modal.

![SPA01](https://github.com/user-attachments/assets/5c3bf7b1-3d82-4f71-a058-0e9d2f2e5146)
![SPA02](https://github.com/user-attachments/assets/0285305e-3fd3-4328-afb0-5c5a9d302893)
![SPA03](https://github.com/user-attachments/assets/ab141410-ed71-4d76-9176-37f5d4d3135c)
![SPA04](https://github.com/user-attachments/assets/6b956976-f604-4a0d-8bad-8336334c0437)
![SPA05](https://github.com/user-attachments/assets/049091c7-4ceb-46b7-8ca3-e26aeb051dcf)
![SPA06](https://github.com/user-attachments/assets/53b3402b-ebc1-4a35-b788-9eed678eab6e)
![SPA07](https://github.com/user-attachments/assets/dc98531d-562f-47c9-aceb-7900be8ca7bc)
![SPA08](https://github.com/user-attachments/assets/3a00977c-52a0-40a9-b933-9e4451046cec)
![SPA09](https://github.com/user-attachments/assets/dc7f34c1-c03e-4dcd-866f-9f6124d7ef91)
![SPA10](https://github.com/user-attachments/assets/3242cdad-6959-43e6-99ed-adf6b3c4d9a6)
![SPA11](https://github.com/user-attachments/assets/aed8e55f-d21c-43cf-af4d-431a4ab0af22)
![SPA12](https://github.com/user-attachments/assets/4dbce5d7-eb25-432e-b926-80175ee6960d)
![SPA13](https://github.com/user-attachments/assets/05b12718-9ead-4d37-904e-4211db3c3806)
![SPA14](https://github.com/user-attachments/assets/f04f7941-984a-49b5-8e67-0e17d52784d2)
![SPA15](https://github.com/user-attachments/assets/643f608e-80b3-4f18-8731-29745fb6a52c)
![SPA16](https://github.com/user-attachments/assets/b90fa6f0-fde7-4cad-aa8e-75d417a38349)
![SPA17](https://github.com/user-attachments/assets/bfc4838c-4771-4d8e-9dc6-15cac7db19a0)
![SPA18](https://github.com/user-attachments/assets/425091a6-c34e-44bb-b549-439421e40844)
![SPA19](https://github.com/user-attachments/assets/cb926d67-d88f-44d5-92e9-afded569f2e0)
![SPA20](https://github.com/user-attachments/assets/a6898650-6134-413c-879d-c5f9d7f61e36)
![SPA21](https://github.com/user-attachments/assets/f7b2353e-47d0-492e-b88d-5cceb3ce9930)
![SPA22](https://github.com/user-attachments/assets/95efeca0-d70f-4350-9a26-234ac3f5fbb7)
![SPA23](https://github.com/user-attachments/assets/e825ee38-9be8-4bdd-8ded-bffbefbbc62f)
![SPA24](https://github.com/user-attachments/assets/1f3030fc-4be7-47c1-8c95-03482dbb5359)
![SPA25](https://github.com/user-attachments/assets/ac500bbc-7b2e-442c-a30c-1530a4f08154)
![SPA26](https://github.com/user-attachments/assets/9ec6ed16-5e7b-4cc6-a77d-582f1f2c2da8)
![SPA27](https://github.com/user-attachments/assets/a23311e6-d81d-43a1-b3dd-ab1749b28946)

### Semana 5

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

### Semana 6 Integración y Seguridad
A partir del desarrollo de la semana 5 de base de datos y de endpoints, se procede con la tarea actual.

Primero que todo se crea en el backend FastAPI el módulo auth.py para incluir los procedimientos de ofuscación del password, autenticación de usuario a través de la validación de su password, y generación de token a partir de una clave secreta. Esto implicó la mejora del módulo schemas.py, separando las vistas de Usuario, una para crear usuario nuevo, y otra para cambiar la clave cuando la pierde. Como mejora del programa, los endpoints de autenticación y los de Producto van por separados routers, y estos son llamados en el main.py. Como último punto, se integra el uso de CORS para que el puerto 8000 de FastAPI sea llamado desde el puerto 3001 de React ArchitecturUI.

Respecto al backend React, en el index.js principal se hace un llamado a un nuevo AppRouter.js, donde se indican las rutas de todas las pantallas, incluyendo y ubicando en primer lugar las pantallas Login, Register y ForgotPassword. Estas pantallas son modificadas para consumir los endpoints de autenticación. Adicionalmente, dentro de AppRouter.js se agrega una condición en los llamados a las pantallas principal y el resto de conceptos, como el CRUD de Productos, para que verifique si el usuario está autenticado antes de abrir las pantallas.

A continuación las evidencias del desarrollo de los endpoints:
![Endpoints01](https://github.com/user-attachments/assets/55a9b002-532e-4938-a785-525710f762c4)
![Endpoints02](https://github.com/user-attachments/assets/a6e30a3b-730b-44cb-8c35-c5552c439797)
![Endpoints03](https://github.com/user-attachments/assets/da3a48b9-6ede-43ef-855e-903843ab87a2)
![Endpoints04](https://github.com/user-attachments/assets/c2aca21e-dd07-437b-9fb7-ad062c9e017a)
![Endpoints05](https://github.com/user-attachments/assets/0cb0567b-2689-41cc-bcba-8502f4cf478e)
![Endpoints06](https://github.com/user-attachments/assets/9a08ae9b-88a9-48d1-abf2-6a899ee6f83f)

A continuación ejemplos de login, creación de usuario nuevo y recuperación de contraseña perdida:
![Acceso01](https://github.com/user-attachments/assets/07e5f139-965e-4dc3-bb96-bf44b573b7e7)
![Acceso02](https://github.com/user-attachments/assets/ef1dbb9e-019c-466a-999f-6e6003e716d1)
![Acceso03](https://github.com/user-attachments/assets/eb41b8da-77ba-482a-9f87-f8fc935caeb0)
![Acceso04](https://github.com/user-attachments/assets/b83d3f09-b5c0-4f06-b60d-5567e6cfd0ce)

A continuación las evidencias del funcionamiento del CRUD de Productos:
![CRUDProductos01](https://github.com/user-attachments/assets/2da242da-edeb-4519-b29c-a56b08dea9d8)
![CRUDProductos02](https://github.com/user-attachments/assets/7b8c5d00-8c02-4b1e-8b71-593432ddd333)
![CRUDProductos03](https://github.com/user-attachments/assets/c8c6d06e-177e-41c3-818f-01dcfbd7d079)
![CRUDProductos04](https://github.com/user-attachments/assets/955fef4d-88f0-4bf3-b2e6-e0fe886cf30c)
![CRUDProductos05](https://github.com/user-attachments/assets/25b2d14b-1fc2-4eb1-9b11-a4182d88b9e4)
![CRUDProductos06](https://github.com/user-attachments/assets/dd41c795-9d32-4b52-8785-338405eb33aa)
![CRUDProductos07](https://github.com/user-attachments/assets/39bd1115-2b30-40e6-b2ff-14c986ba6bdc)
![CRUDProductos08](https://github.com/user-attachments/assets/3124a5f4-5154-4450-8b18-243234cfadf7)
![CRUDProductos09](https://github.com/user-attachments/assets/b5d86eb6-b290-4f01-873d-0763240acaed)
![CRUDProductos10](https://github.com/user-attachments/assets/2607d429-12a2-44b1-8e45-14f0816eada0)
![CRUDProductos11](https://github.com/user-attachments/assets/3a871d8f-0dbe-4488-aa1e-ca93b891b0cb)

A continuación las evidencias de las medidas de seguridad en FastAPI y en React:
![Seguridad01](https://github.com/user-attachments/assets/0da31f57-fae2-4873-876c-77cf624f48ed)
![Seguridad02](https://github.com/user-attachments/assets/63be66a3-8f5c-4bb3-9295-7b0861cc9fcb)
![Seguridad03](https://github.com/user-attachments/assets/61ef9afd-a14b-46f1-9ed4-894e155a91db)

Por último, las evidencias de los modelos, vistas, autenticación y seguridad en FastAPI:
![FastAPI01](https://github.com/user-attachments/assets/bcbd0236-fd33-41f8-9b6e-221688a08bc2)
![FastAPI02](https://github.com/user-attachments/assets/b02eacc2-e7df-4176-8268-dc1220d59ce8)
![FastAPI03](https://github.com/user-attachments/assets/3e211607-6ccf-462a-a141-fc35750e9b98)
![FastAPI04](https://github.com/user-attachments/assets/1eb498ce-441c-4e36-8407-027a8c015e88)
![FastAPI05](https://github.com/user-attachments/assets/b3c1d996-09f3-486f-807a-d9fd5e2d0299)
![FastAPI06](https://github.com/user-attachments/assets/1ed52172-6b49-4615-88ba-9103df7eee54)
![FastAPI07](https://github.com/user-attachments/assets/1c259d75-b693-4ebc-9170-b07b51bca913)
![FastAPI08](https://github.com/user-attachments/assets/19423244-561c-41a4-acef-0f0c78ea4933)
![FastAPI09](https://github.com/user-attachments/assets/90969de8-c6cd-4313-aeed-0645d8bd2b75)
![FastAPI10](https://github.com/user-attachments/assets/070cfc1b-44db-45c4-ab09-a31dffdcfdb8)

### Semana 7 Creación e Integración de Chatbot
Vamos a aplicar el concepto de intermediario MCP entre nuestro aplicativo y un chatbot.

Primero creamos un archivo Python que funciona como Servidor MCP que publicará unos endpoints para consultar los Productos:
![Evidencia01](https://github.com/user-attachments/assets/b81485bc-916f-4400-8844-381a99616d62)
![Evidencia02](https://github.com/user-attachments/assets/9e8d655c-bc64-441f-b8c0-a69c1175d2ce)

Probamos que dichos endpoints están activos:
![Evidencia04](https://github.com/user-attachments/assets/c10226f4-aeae-488c-bccc-2e253f7e052d)
![Evidencia05](https://github.com/user-attachments/assets/4323336b-f013-46b1-84f3-743b65c82334)

Creamos una cuenta en la página FastMCP, la asociamos con Github, de modo que cada commit nos actualice el servidor desplegado. Parametrizamos su conexión a la base de datos MySQL local, probamos los tools desplegados, y conectamos un chat para comprobar las respuestas:
![Evidencia06](https://github.com/user-attachments/assets/a42e817a-734d-4b1a-8a67-d811ea120f7f)
![Evidencia07](https://github.com/user-attachments/assets/a40f275a-e75d-44eb-984b-0003925f46ee)
![Evidencia08](https://github.com/user-attachments/assets/81b593f4-3bed-4bcb-ad55-34ac0120fa51)
![Evidencia09](https://github.com/user-attachments/assets/ab945d00-90d6-4365-b8e7-e7c654b22043)
![Evidencia10](https://github.com/user-attachments/assets/82181d55-b227-436c-adb1-16eead524686)
![Evidencia11](https://github.com/user-attachments/assets/8649f87e-8cdd-4a29-9b74-871cd6610012)
![Evidencia13](https://github.com/user-attachments/assets/3b7c7ec3-1829-490f-a352-2562852f030d)
![Evidencia14](https://github.com/user-attachments/assets/47a6c3fd-5fd8-4192-8b91-df6a983d012c)
![Evidencia15](https://github.com/user-attachments/assets/5a294bef-53e5-4100-ac69-cb39e418c560)
![Evidencia16](https://github.com/user-attachments/assets/368d806b-8b77-4f54-a799-63979487dd37)
![Evidencia17](https://github.com/user-attachments/assets/3e51616d-200b-41e7-8059-ecf870deae6e)

Probamos que desde el Postman local sí podemos acceder al servidor en FastMCP
![Evidencia12](https://github.com/user-attachments/assets/53d29efc-aa7d-42d4-b737-994891d9c360)

Con base en esto creamos un archivo Python que nos dará un endpoint para conectar la aplicación React con el servidor en FastMCP, y probamos con Postman que estamos recibiendo respuesta:
![Evidencia18](https://github.com/user-attachments/assets/a2ef3033-e62f-4d64-b647-504ce5d7b252)
![Evidencia19](https://github.com/user-attachments/assets/7c712019-a827-409c-a375-60ea24f2f80b)

Dentro del aplicativo modificamos el componente Chat para comunicarlo con el endpoint de Python. Luego lo agregamos al AppRouter.js para indicar su acceso, y agregarle la validación de autenticación en el sistema. En la pantalla que nos da información de usuario, corregimos el enlace que redirige al chat:
![Evidencia20](https://github.com/user-attachments/assets/37502303-0818-4924-a1cb-6f1bc4da21f3)
![Evidencia21](https://github.com/user-attachments/assets/47377da4-cf3c-4361-a33f-6f8cf26f681f)
![Evidencia22](https://github.com/user-attachments/assets/ac06bcb1-e3d6-42a9-a78f-51c74ee7804e)

Procedemos a probar:
![Evidencia23](https://github.com/user-attachments/assets/80eb72a2-ec76-49c0-937a-db9f6487de52)
