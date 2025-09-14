# CSE6042
PROGRAMMING THE INTERNET

# E-commerce para la empresa Ilumage

**React 19 Compatible** - Se usó la maqueta ArchitectUI React de DashboardPack. Construido con React 19, Bootstrap 5, y una comprehensiva biblioteca de componentes.

## Resumen

Este sitio de e-commerce contiene pantallas para consultar los Administradores, Clientes, las Formas de Pago, Categorías de Productos, y los Productos. Esta aplicación ofrece un diseño responsivo. Las pantallas permiten cambiar el orden de los registros consultados.

### Semana 2
Para realizar esta tarea se copió la pantalla de consultas fijas de la plantilla. Se crearon las pantallas correspondientes a Administradores, Clientes, Formas de Pago, Categorías y Productos. Se crearon archivos json para usarlas de bases de datos. Se logra instalar json-server y evidenciar en navegador cualquiera de los archivos json. Pero no se logró hacer funcionar el fetch en las formas. Por lo que se dejó un json incrustado en cada clase React. Se modificó la imagen de avatar, se modificó el logo, se modificó el menú vertical para mostrar las nuevas opciones.

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

