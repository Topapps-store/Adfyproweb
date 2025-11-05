# Guía de Deployment para Cloudflare Pages

Esta guía te ayudará a desplegar ADFYPRO en Cloudflare Pages.

## Prerequisitos

1. Cuenta de GitHub
2. Cuenta de Cloudflare
3. Configuración de SMTP para el formulario de contacto (Gmail recomendado)

## Paso 1: Preparar el Repositorio en GitHub

1. Crea un nuevo repositorio en GitHub llamado `adfypro-website`
2. Inicializa Git en tu proyecto local:

```bash
git init
git add .
git commit -m "Initial commit: ADFYPRO website"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/adfypro-website.git
git push -u origin main
```

## Paso 2: Configurar Cloudflare Pages

### Build Settings

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Selecciona "Workers & Pages" en el menú lateral
3. Click en "Create application" > "Pages" > "Connect to Git"
4. Autoriza GitHub y selecciona el repositorio `adfypro-website`
5. Configura los siguientes **Build Settings**:

   - **Production branch**: `main`
   - **Framework preset**: `None` (o Vite si está disponible)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

6. Click en "Save and Deploy"

## Paso 3: Configurar Variables de Entorno

En la configuración de tu proyecto en Cloudflare Pages:

1. Ve a "Settings" > "Environment variables"
2. Añade las siguientes variables para **Production**:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password-de-gmail
SESSION_SECRET=un-string-aleatorio-muy-seguro
```

**Importante**: Para Gmail, necesitas crear una "App Password":
- Ve a tu cuenta de Google > Seguridad
- Activa la verificación en dos pasos si no la tienes
- Busca "Contraseñas de aplicaciones"
- Genera una nueva contraseña para "Correo"
- Usa esa contraseña en `SMTP_PASS`

## Paso 4: Configurar el Dominio Personalizado

1. En Cloudflare Pages, ve a tu proyecto
2. Click en "Custom domains"
3. Click en "Set up a custom domain"
4. Ingresa `www.adfypro.com`
5. Sigue las instrucciones para actualizar los DNS records

### DNS Records necesarios:

Si gestionas el dominio `adfypro.com` en Cloudflare DNS:

- **CNAME** `www` apuntando a `tu-proyecto.pages.dev`
- **A** `@` (root domain) apuntando a los IPs de Cloudflare o redirección

## Paso 5: Build Script

El proyecto ya incluye el build script necesario en `package.json`:

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## Estructura del Proyecto para Deployment

```
adfypro-website/
├── client/           # Frontend React
├── server/           # Backend Express (API routes)
├── shared/           # Schemas compartidos
├── dist/            # Build output (generado)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Notas Importantes

### Sobre el Backend en Cloudflare Pages

Cloudflare Pages es principalmente para sitios estáticos, pero soporta **Cloudflare Functions** para lógica del servidor. Si necesitas el backend Express completo:

**Opción 1: Cloudflare Workers (Recomendado para este proyecto)**
- Convierte `/api/contact` a una Cloudflare Function
- Crea `functions/api/contact.ts` con la lógica del email

**Opción 2: Usar Cloudflare Workers por separado**
- Despliega el backend Express como un Worker
- Configura CORS para permitir requests desde Pages

**Opción 3: Full-stack en un Worker**
- Usa un template de Worker que sirve el frontend y maneja el backend

### Ejemplo de Cloudflare Function para Contact

Crea `functions/api/contact.ts`:

```typescript
export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const data = await request.json();
    
    // Validar datos aquí
    
    // Enviar email usando Cloudflare Email Workers o API externa
    // Por ejemplo, SendGrid, Mailgun, etc.
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

## Alternativa: Deployment Completo

Para un deployment full-stack completo con el backend Express:

### Opción: Railway / Render / Fly.io

1. Usa Cloudflare Pages solo para el frontend
2. Despliega el backend en Railway/Render/Fly.io
3. Actualiza las llamadas API en el frontend para apuntar al backend

## Testing Local

Antes de desplegar, prueba localmente:

```bash
npm install
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run preview  # Preview del build
```

## Contacto y Soporte

Para cualquier duda sobre el deployment:
- Email: admin@adfypro.com
- Documentación Cloudflare: https://developers.cloudflare.com/pages

## Actualizaciones Futuras

Para actualizar el sitio:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

Cloudflare Pages automáticamente detectará los cambios y redesplegará el sitio.
