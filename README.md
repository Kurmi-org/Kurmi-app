This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
    Manual Técnico

1.	Introducción:
El presente manual sirve para el correcto uso implementación y montaje de la aplicación web de la ONG KURMI , el cual cumple con la función de administrar las ventas , los productos y las transacciones de los productores.
Las manera de ejecutar , montar y revisar logs , serán descritas a continuación en el siguiente documento , se debe tomar en cuenta que para ejecutar la aplicación minimo necesitara un equipo.
2.	Descripción del proyecto: 
El sistema de ventas KURMI es un sitema orientado a la administración y 
venta de productos , el sistema cuenta con las siguientes secciones

Administrador: Este se encarga de poder asignar productos y pedidos a los productores , aparte puede consultar la disponibilidad de productos, solo los 
usuarios administradores pueden crear otros administradores 

Usuario común:  este podrá realizar pedidos y crearse una cuenta

Productor: El usuario productor tiene las siguientes características , puede aceptar pedidos , enviar reportes de problemas , tener un historial de sus pedidos
3.	Roles / integrantes

              JOSE CARLOS CARBALLO FERNANDEZ     team leader

              DAVID VALDIVIA ARANCIBIA                   developer

              SERGIO GAMARRA                                      git master/sqa


4.	Arquitectura del software: 
En el contexto de la aplicación de ventas KURMI que consume una API REST, el patrón Modelo-Vista-Controlador (MVC) se puede aplicar de la siguiente manera:
1.	Modelo: El modelo representa la estructura de datos y la lógica de la aplicación. En este caso, podría incluir clases o estructuras que representen los datos de productos, clientes, pedidos, etc. Además, podría manejar la lógica para interactuar con la API REST, enviar solicitudes y recibir datos.
2.	Vista: La vista es la capa de presentación que muestra la interfaz de usuario. Puede ser una página web, una pantalla en una aplicación móvil o cualquier otra interfaz que muestre información al usuario. En este contexto, la vista mostraría la información de productos, detalles de pedidos, formularios de compra, entre otros.
3.	Controlador: El controlador actúa como intermediario entre la vista y el modelo. Responde a las interacciones del usuario en la interfaz de usuario y actualiza el modelo en consecuencia. En este caso, el controlador podría recibir eventos del usuario, como hacer clic en un botón para realizar una compra, enviar esa solicitud al modelo para procesarla mediante la API REST y luego actualizar la vista con la respuesta recibida.
Por ejemplo, cuando un usuario hace clic en "Comprar" en la interfaz de usuario, el controlador correspondiente recibe ese evento. El controlador luego solicita al modelo que procese la compra, enviando la solicitud a través de la capa de acceso a datos para interactuar con la API REST. Una vez que se recibe la respuesta, el modelo actualiza los datos y el controlador indica a la vista que se actualice para reflejar los cambios en la interfaz.
Este enfoque de separación de responsabilidades permite una gestión más clara y modular del código. La vista se enfoca en la presentación, el modelo en los datos y la lógica, y el controlador en la coordinación entre ambos. Esto facilita la escalabilidad y el mantenimiento de la aplicación a medida que crece y se desarrolla.

5.	Requisitos del sistema:
•	Requerimientos de Hardware (mínimo): (cliente)
•	Procesador (CPU): Un procesador de doble núcleo o superior es adecuado para ejecutar una aplicación Next.js. Incluso procesadores básicos modernos son suficientes para pruebas y desarrollo.
•	Memoria RAM: Se recomienda al menos 4 GB de RAM para ejecutar una aplicación Next.js de manera fluida. Sin embargo, para aplicaciones más grandes o con mayores demandas de memoria, es preferible contar con 8 GB o más.
•	Almacenamiento: No hay un requisito específico de almacenamiento para Next.js en sí, pero se necesitará espacio suficiente para almacenar el código de la aplicación, las dependencias y los archivos estáticos. Un disco duro de 256 GB o más es adecuado.
•	Sistema Operativo: Next.js es compatible con varios sistemas operativos, incluyendo Windows, macOS y Linux. La elección del sistema operativo depende en gran medida de las preferencias del desarrollador.
•	Conectividad: Se necesita una conexión a Internet para descargar dependencias y bibliotecas durante el proceso de desarrollo, pero una vez que la aplicación está en producción, la conectividad se vuelve más dependiente del alojamiento y la configuración del servidor.


•	Requerimientos de Software: (cliente)

•  Navegador web: Utiliza un navegador actualizado para acceder a la web. Algunos de los navegadores más populares son Google Chrome, Mozilla Firefox, Microsoft Edge, Safari y Opera. Estos navegadores suelen ser compatibles con la mayoría de las páginas web y proporcionan una experiencia de navegación adecuada.
•  Conexión a Internet: Es esencial tener acceso a Internet para cargar y visualizar el contenido de la página web. Una conexión de banda ancha, ya sea a través de WiFi o una conexión por cable, suele ser preferible para una experiencia de navegación rápida y estable.
•  Sistema Operativo: Los navegadores modernos son compatibles con múltiples sistemas operativos, incluyendo Windows, macOS, Linux, Android e iOS. Asegúrate de utilizar un sistema operativo compatible con tu navegador preferido.

•	Requerimientos de Hardware (server/ hosting/BD)
•	•  Procesador (CPU): Para aplicaciones de tamaño mediano a grande con tráfico moderado, un procesador con varios núcleos y una frecuencia de reloj decente será beneficioso para manejar las solicitudes entrantes y el procesamiento de la aplicación de manera eficiente.
•	•  Memoria RAM: La cantidad de RAM necesaria dependerá en gran medida del tamaño y la complejidad de tu aplicación. Para aplicaciones más pequeñas y con tráfico ligero, 2-4 GB de RAM pueden ser suficientes. Sin embargo, para aplicaciones más grandes con tráfico significativo, se recomienda tener al menos 8-16 GB de RAM para un rendimiento óptimo.
•	•  Almacenamiento: El espacio de almacenamiento necesario dependerá de los archivos estáticos, las bases de datos y otros recursos asociados a tu aplicación. Un disco duro de estado sólido (SSD) suele ser preferible sobre un disco duro tradicional (HDD) debido a su mayor velocidad de lectura/escritura, lo que puede mejorar la velocidad de carga de la aplicación.
•	•  Conectividad: Una conexión a Internet estable y de alta velocidad es esencial para asegurar que tu aplicación sea accesible y responda con rapidez a las solicitudes de los usuarios.


•	Requerimientos de Software (server/ hosting/BD)
•	Servidor Node.js: Es necesario tener Node.js instalado en el servidor para ejecutar una aplicación Next.js. Asegúrate de que el servidor tenga la misma versión de Node.js que utilizaste durante el desarrollo de la aplicación.
•	MongoDB: Para alojar una base de datos MongoDB, necesitarás acceso a un servidor o servicio de base de datos MongoDB. Puedes optar por instalar MongoDB directamente en tu servidor o utilizar servicios de base de datos en la nube como MongoDB Atlas u otros proveedores.
•	Acceso a MongoDB desde la API: Tu API desarrollada en Node.js (usando Express u otro framework) se conectará a la base de datos MongoDB para realizar operaciones de lectura y escritura. Asegúrate de tener las bibliotecas de MongoDB instaladas en tu servidor Node.js para interactuar con la base de datos.
•	Gestión de dependencias: Utiliza gestores de paquetes como NPM o Yarn para instalar y gestionar las dependencias de tu aplicación Next.js y de tu API Node.js.
•	Entorno de ejecución de la API: Tu API Node.js necesita ejecutarse en el servidor. Puedes usar herramientas como PM2 o screen para asegurarte de que la API se ejecute de manera continua y se reinicie automáticamente en caso de errores.
•	Configuración de red y seguridad: Configura las reglas de firewall y permisos necesarios para que la API pueda conectarse a la base de datos MongoDB. Implementa medidas de seguridad como autenticación y control de acceso a la base de datos para proteger los datos sensibles.
•	Entorno de alojamiento para Next.js: Alojar tu aplicación Next.js puede ser en servicios como Vercel, Netlify, AWS, DigitalOcean, entre otros, que admiten aplicaciones Node.js y ofrecen facilidades para desplegar y ejecutar aplicaciones Next.js.


6.	Instalación y configuración: 

Paso 1: Preparación de la aplicación
1.	Preparación del código: descargue el repositorio y ponga en ejecución el frontend con la instrucción npm run start luego con la misma inicie la api
Paso 2: Configuración de la cuenta en Azure
1.	Creación de una cuenta en Azure: Regístrate en Azure y crea una suscripción si aún no tienes una.
2.	Creación de recursos: Accede al panel de Azure y crea los recursos necesarios, como un servidor web (por ejemplo, Azure App Service) y una base de datos (Azure Cosmos DB para MongoDB).
Paso 3: Despliegue de la aplicación
1.	Configuración del entorno: Configura las variables de entorno necesarias para tu aplicación, como las credenciales de la base de datos.
2.	Despliegue de la API: Despliega tu API en Azure utilizando el servicio de servidor web (App Service) y asegúrate de que esté conectada correctamente a la base de datos MongoDB en Azure.
3.	Despliegue de la aplicación Next.js: Sube tu aplicación Next.js a Azure utilizando App Service u otro servicio apropiado según las necesidades de tu aplicación.

7.	PROCEDIMIENTO DE HOSTEADO / HOSTING (configuración)
Paso 1: Preparación del sistema de ventas KURMI
1.	Configuración local: Asegúrate de que tu sistema de ventas KURMI esté completo y funcione localmente. Verifica que la API esté conectada correctamente a MongoDB y que la lógica del sistema funcione como se espera.
Paso 2: Configuración de la cuenta en Azure
1.	Creación de una cuenta en Azure: Regístrate en Azure y crea una suscripción si aún no tienes una.
2.	Creación de recursos: Accede al panel de Azure y crea los recursos necesarios, como un servidor web (por ejemplo, Azure App Service) y una base de datos (Azure Cosmos DB para MongoDB).
Paso 3: Despliegue del sistema de ventas KURMI
1.	Configuración del entorno: Configura las variables de entorno necesarias para tu sistema de ventas KURMI, como las credenciales de la base de datos.
2.	Despliegue de la API: Despliega tu API en Azure utilizando el servicio de servidor web (App Service) y asegúrate de que esté conectada correctamente a la base de datos MongoDB en Azure.
3.	Despliegue del sistema de ventas KURMI: Sube tu sistema de ventas KURMI a Azure utilizando App Service u otro servicio apropiado según las necesidades de tu aplicación.
Paso 4: Configuración y pruebas
1.	Configuración del dominio (si es necesario): Configura un dominio personalizado para tu aplicación en Azure.
2.	Pruebas: Realiza pruebas exhaustivas para asegurarte de que el sistema de ventas KURMI funcione correctamente en Azure, incluyendo la interacción entre la API y MongoDB.
Recuerda que los nombres exactos de los servicios y pasos pueden variar según la interfaz y los términos utilizados en Azure. Es importante seguir la documentación específica de Azure para obtener instrucciones detalladas sobre cómo configurar y desplegar tu sistema de ventas KURMI en su plataforma.

8.	GIT : 
La versión final del proyecto la encontrara en el link

https://github.com/Kurmi-org/


9.	Seguridad: 
1. Protección de datos del cliente:
•	Cifrado de datos: Usa cifrado (por ejemplo, SSL/TLS) para proteger la comunicación entre el navegador y el servidor. Esto evita que los datos sensibles sean interceptados durante la transferencia.
•	Manejo de información personal: Cumple con las regulaciones de privacidad de datos (como GDPR, CCPA) y minimiza la recopilación y almacenamiento de datos personales. Almacena solo lo necesario y garantiza su protección.
2. Autenticación y control de acceso:
•	Autenticación robusta: Implementa métodos de autenticación seguros, como contraseñas fuertes, autenticación de dos factores (2FA) o autenticación biométrica, para proteger las cuentas de usuario.
•	Control de acceso: Establece roles y privilegios de usuario para limitar el acceso a datos y funcionalidades sensibles solo a usuarios autorizados.
3. Seguridad de la aplicación:
•	Actualizaciones y parches: Mantén la aplicación y todas las bibliotecas/frameworks actualizadas para corregir vulnerabilidades conocidas.
•	Validación de entrada: Realiza una validación estricta de los datos de entrada para prevenir inyecciones de código (SQL, XSS) que puedan comprometer la seguridad.
4. Protección contra amenazas:
•	Prevención de ataques: Implementa medidas de seguridad contra ataques comunes como ataques de denegación de servicio (DDoS), intentos de acceso no autorizado, y filtrado de entradas sospechosas.
•	Seguridad en capas: Utiliza un enfoque de seguridad en capas con firewalls, sistemas de detección de intrusiones (IDS), y monitoreo continuo para detectar y responder a amenazas.
5. Auditoría y seguimiento:
•	Registros de actividad: Implementa registros de actividad detallados para rastrear y supervisar las acciones de los usuarios y detectar actividades sospechosas.
•	Auditorías regulares: Realiza auditorías de seguridad periódicas para identificar y corregir posibles vulnerabilidades antes de que se conviertan en problemas.
Estas consideraciones de seguridad ayudarán a mantener una aplicación de ventas optimizada y protegida contra posibles amenazas y brechas de seguridad, asegurando la confianza de los usuarios y la integridad de los datos.


10.	Depuración y solución de problemas: 
En caso de tener un problema con la api el problema mas frecuente esta en la restricción de la conexión , en caso de no reconocerse una dependencia de la app solamente use el comando npm i seguido de la dependencia faltante


11.	Referencias y recursos adicionales: 

https://www.npmjs.com/

https://www.mongodb.com/docs/manual/reference/log-messages/

https://www.w3schools.com/jsref/met_console_log.asp

12.	Herramientas de Implementación:
Node.js  18.16.0
Next.js 14
Mongo db

13.	Bibliografía


https://www.npmjs.com/

https://www.mongodb.com/docs/manual/reference/log-messages/

https://www.w3schools.com/jsref/met_console_log.asp
•  Clean Code: A Handbook of Agile Software Craftsmanship" por Robert C. Martin: Este libro ofrece consejos prácticos sobre cómo escribir un código limpio y legible, esencial para el mantenimiento y la calidad del software.
•  "Design Patterns: Elements of Reusable Object-Oriented Software" por Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides: Explora patrones de diseño comunes y cómo aplicarlos para crear un software más flexible y reutilizable.


