# CSE6042
PROGRAMMING THE INTERNET

# E-commerce para la empresa Ilumage

**React 19 Compatible** - Se usó la maqueta ArchitectUI React de DashboardPack. Construido con React 19, Bootstrap 5, y una comprehensiva biblioteca de componentes.

## Resumen

Este sitio de e-commerce contiene pantallas para consultar los Administradores, Clientes, las Formas de Pago, Categorías de Productos, y los Productos. Esta aplicación ofrece un diseño responsivo. Las pantallas permiten cambiar el orden de los registros consultados.

Para realizar esta tarea se copió la pantalla de consultas fijas de la plantilla. Se crearon las pantallas correspondientes a Administradores, Clientes, Formas de Pago, Categorías y Productos. Se crearon archivos json para usarlas de bases de datos. Se logra instalar json-server y evidenciar en navegador cualquiera de los archivos json. Pero no se logró hacer funcionar el fetch en las formas. Por lo que se dejó un json incrustado en cada pantalla. Se modificó la imagen de avatar, se modificó el logo, se modificó el menú vertical para mostrar las nuevas opciones.

## Características clave

### Tecnologías Clave
- **React 19.1.0**
- **Bootstrap 5.3.7**
- **Redux Toolkit**
- **React Router v7**
- **Sass/SCSS**

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
│   │   ├── Tables/        # Table examples
│   │   │   ├── Admins/    # Consulta de Administradores
│   │   │   ├── Clientes/  # Consulta de Clientes
│   │   │   ├── Categs/    # Consulta de Categorias
│   │   │   ├── FPago/     # Consulta de Formas de Pago
│   │   │   └── Productos/ # Consulta de Formas de Pago
│   │   └── Forms/         # Form examples
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

<img width="1299" height="397" alt="Evidencia01" src="https://github.com/user-attachments/assets/f3989d51-4160-4fe1-bc7c-03eb0b2e4591" />
<img width="738" height="324" alt="Evidencia02" src="https://github.com/user-attachments/assets/d0b725d0-ac0c-4b79-a2ef-c65980a20ad9" />
<img width="430" height="493" alt="Evidencia03" src="https://github.com/user-attachments/assets/aa7901fb-a908-493e-ac3e-09544a4ed407" />
<img width="879" height="467" alt="Evidencia04" src="https://github.com/user-attachments/assets/6ba9e544-1277-40b7-afa9-c3c123c542a7" />
<img width="1285" height="599" alt="Evidencia05" src="https://github.com/user-attachments/assets/d39d1745-0e3b-4743-b44c-6e7fb89a4dd6" />
<img width="923" height="506" alt="Evidencia06" src="https://github.com/user-attachments/assets/5a24f37f-e6d3-40e9-8b7b-1d44baea56cd" />
<img width="917" height="519" alt="Evidencia07" src="https://github.com/user-attachments/assets/8243041a-cf24-4c71-87d7-355aac3b8879" />
