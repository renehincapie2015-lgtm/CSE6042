# CSE6042
PROGRAMMING THE INTERNET

# E-commerce para la empresa Ilumage

**React 19 Compatible** - Se usó la maqueta ArchitectUI React de DashboardPack. Construido con React 19, Bootstrap 5, y una comprehensiva biblioteca de componentes.

## Resumen

Este sitio de e-commerce contiene pantallas para consultar los Administradores, Clientes, las Formas de Pago, Categorías de Productos, y los Productos. Esta aplicación ofrece un diseño responsivo. Las pantallas permiten cambiar el orden de los registros consultados.

Para realizar esta tarea se copió la pantalla de consultas fijas de la plantilla. Se crearon las pantallas correspondientes a Administradores, Clientes, Formas de Pago, Categorías y Productos. Se crearon archivos json para usarlas de bases de datos. Se logra instalar json-server y evidenciar en navegador cualquiera de los archivos json. Pero no se logró hacer funcionar el fetch en las formas. Por lo que se dejó un json incrustado en cada clase React. Se modificó la imagen de avatar, se modificó el logo, se modificó el menú vertical para mostrar las nuevas opciones.

Se creó una nueva pantalla para creación de nuevos usuarios. En dicha pantalla se incluyeron campos para ingresar nombres y apellidos, correo electrónico, contraseña, confirmación de contraseña, fecha de nacimiento y años de experiencia. Por cada campo se agregó código JavaScript para validar que sus valores sean correctos. Cada validación en los campos obligatorios alerta si no hay valor. Si lo hay, verifica que su valor sea adecuado: los nombres no pueden tener números, el email debe cumplir un formato, la contraseña debe ser fuerte, la confirmación debe ser igual a la contraseña, la fecha de nacimiento debe superar los 18 años de mayoría de edad, la experiencia no puede ser negativa y tampoco mayor a la edad. Para algunas de estas validaciones hubo necesidad de usar Expresiones Regulares.

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

El principal desafío fue el de determinar el evento correcto para la validación. En la web muchos sitios sugieren usar OnBlur, pero no deja navegar al siguiente campo. Por lo que la validación se dejó en OnChange, y las alertas en OnKeyPress, aunque los ejemplos siempre sugieren usar OnBlur.<img width="680" height="587" alt="Evidencia06" src="https://github.com/user-attachments/assets/c8f619ac-0d28-43a1-93a8-c754d25f72a6" />
<img width="736" height="563" alt="Evidencia07" src="https://github.com/user-attachments/assets/28081fdf-e028-4189-8c6a-585167c9f5f0" />
<img width="602" height="500" alt="Evidencia08" src="https://github.com/user-attachments/assets/7cdfef69-12ff-4132-9901-80133cee8fa8" />
<img width="448" height="402" alt="Evidencia09" src="https://github.com/user-attachments/assets/f46692a8-dd74-4f72-9422-20b6cbb567e1" />
<img width="1069" height="495" alt="Evidencia10" src="https://github.com/user-attachments/assets/81ba617f-d84b-4ddd-8fb1-737d92464d19" />
<img width="597" height="495" alt="Evidencia11" src="https://github.com/user-attachments/assets/27a3d81f-8768-424a-84f3-b2a445b08062" />
<img width="617" height="505" alt="Evidencia12" src="https://github.com/user-attachments/assets/41ec79ca-47f1-40df-9cbf-9fa3d749f2ef" />
<img width="682" height="500" alt="Evidencia13" src="https://github.com/user-attachments/assets/fc1c7a33-9098-4e52-a744-85a2b5152e63" />
<img width="1017" height="552" alt="Evidencia14" src="https://github.com/user-attachments/assets/ff89546a-7bde-4f61-80ce-29893da2d692" />
<img width="948" height="245" alt="Evidencia15" src="https://github.com/user-attachments/assets/26a95cee-1358-4ec2-8a55-005c885be3aa" />
<img width="518" height="448" alt="Evidencia16" src="https://github.com/user-attachments/assets/30ad8251-1c08-4050-a61b-5df571445667" />
<img width="602" height="296" alt="Evidencia17" src="https://github.com/user-attachments/assets/4d805b74-ecb0-4b59-a968-ebd7119aa730" />
<img width="501" height="337" alt="Evidencia18" src="https://github.com/user-attachments/assets/df47344b-bd32-4e70-919a-02f02913bf34" />
<img width="510" height="298" alt="Evidencia19" src="https://github.com/user-attachments/assets/5c792f41-24ea-4ee9-a3ba-b8f74730ca11" />


<img width="1299" height="397" alt="Evidencia01" src="https://github.com/user-attachments/assets/f3989d51-4160-4fe1-bc7c-03eb0b2e4591" />
<img width="738" height="324" alt="Evidencia02" src="https://github.com/user-attachments/assets/d0b725d0-ac0c-4b79-a2ef-c65980a20ad9" />
<img width="430" height="493" alt="Evidencia03" src="https://github.com/user-attachments/assets/aa7901fb-a908-493e-ac3e-09544a4ed407" />
<img width="879" height="467" alt="Evidencia04" src="https://github.com/user-attachments/assets/6ba9e544-1277-40b7-afa9-c3c123c542a7" />
<img width="1285" height="599" alt="Evidencia05" src="https://github.com/user-attachments/assets/d39d1745-0e3b-4743-b44c-6e7fb89a4dd6" />
<img width="923" height="506" alt="Evidencia06" src="https://github.com/user-attachments/assets/5a24f37f-e6d3-40e9-8b7b-1d44baea56cd" />
<img width="917" height="519" alt="Evidencia07" src="https://github.com/user-attachments/assets/8243041a-cf24-4c71-87d7-355aac3b8879" />
