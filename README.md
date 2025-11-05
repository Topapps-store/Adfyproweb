# ADFYPRO - Agencia de Publicidad, Marketing y Tecnología

Web corporativa para ADFYPRO, agencia especializada en intermediación comercial, publicidad, marketing digital y gestión tecnológica.

## 🌐 Dominio

**www.adfypro.com**

## 🚀 Características

- **Diseño Responsive**: Perfecto en todos los dispositivos
- **Single Page Application**: Navegación suave entre secciones
- **Formulario de Contacto**: Envío de emails directo a admin@adfypro.com
- **SEO Optimizado**: Meta tags y estructura semántica
- **Dark Mode Ready**: Soporte para modo oscuro

## 📋 Servicios

1. **Intermediación Comercial** - Conexión estratégica de negocios
2. **Publicidad y Marketing** - Campañas digitales 360°
3. **Gestión Tecnológica** - Desarrollo web, apps y soluciones IT

## 🛠️ Stack Tecnológico

- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: Express.js + Node.js
- **Email**: Nodemailer
- **Build**: Vite
- **UI Components**: Shadcn/ui
- **Forms**: React Hook Form + Zod

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Configurar SMTP en .env
# SMTP_USER=tu-email@gmail.com
# SMTP_PASS=tu-app-password
```

## 🚀 Desarrollo

```bash
# Modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📧 Configuración de Email

Para que funcione el formulario de contacto, necesitas configurar las credenciales SMTP en `.env`:

### Gmail (Recomendado)

1. Activa la verificación en dos pasos en tu cuenta Google
2. Ve a [App Passwords](https://myaccount.google.com/apppasswords)
3. Genera una contraseña para "Correo"
4. Añade las credenciales en `.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password-generada
```

## 🌍 Deployment en Cloudflare Pages

Ver la guía completa en [DEPLOYMENT.md](./DEPLOYMENT.md)

### ⚠️ Importante: Evitar Error 404

El proyecto incluye `client/public/_redirects` que es **esencial** para que funcione en Cloudflare Pages. Este archivo se copia automáticamente durante el build y soluciona errores 404.

**Si ves un error 404 después del deployment**, lee [SOLUCION_ERROR_404.md](./SOLUCION_ERROR_404.md) para aplicar la solución.

### Quick Start

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "Initial commit"

# 2. Crear repositorio en GitHub
# Crea el repo en github.com/tu-usuario/adfypro-website

# 3. Push a GitHub
git remote add origin https://github.com/tu-usuario/adfypro-website.git
git push -u origin main

# 4. Conectar Cloudflare Pages
# - Ve a Cloudflare Dashboard > Workers & Pages
# - Create > Connect to Git
# - Selecciona el repositorio
# - Build command: npm run build
# - Build output: dist
```

## 📁 Estructura del Proyecto

```
adfypro-website/
├── client/               # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes UI
│   │   ├── pages/       # Páginas
│   │   └── lib/         # Utilidades
│   └── index.html
├── server/              # Backend Express
│   └── routes.ts        # API endpoints
├── shared/              # Código compartido
│   └── schema.ts        # Schemas Zod
├── attached_assets/     # Imágenes generadas
├── .env.example         # Ejemplo de variables
├── DEPLOYMENT.md        # Guía de deployment
└── package.json
```

## 📝 Secciones de la Web

- **Hero**: Portada con llamada a la acción
- **Servicios**: Los 3 servicios principales
- **Nosotros**: Proceso y metodología
- **Contacto**: Formulario funcional
- **Footer**: Enlaces y contacto

## 🎨 Personalización

Los colores y estilos están definidos en:
- `client/src/index.css`: Variables CSS
- `tailwind.config.ts`: Configuración Tailwind
- `design_guidelines.md`: Guía de diseño

## 📧 Contacto

**Email**: admin@adfypro.com  
**Web**: www.adfypro.com

## 📄 Licencia

© 2025 ADFYPRO. Todos los derechos reservados.
