# ADFYPRO - Website Corporativo

## Descripción del Proyecto

Web corporativa estática para ADFYPRO, una agencia de intermediación comercial, publicidad, marketing y comunicación. El sitio está diseñado para ser desplegado en Cloudflare Pages con el dominio www.adfypro.com.

## Características Principales

### Frontend
- **Single Page Application (SPA)**: Navegación suave con scroll entre secciones
- **Responsive Design**: Diseño adaptativo para todos los dispositivos
- **Componentes React**: Navigation, Hero, Services, About, Contact Form, Footer
- **Imágenes generadas con IA**: Hero y secciones ilustradas con imágenes profesionales
- **SEO optimizado**: Meta tags, Open Graph, títulos descriptivos
- **Dark mode ready**: Soporte completo para tema oscuro

### Backend
- **Sin backend**: Página completamente estática (sin formularios ni APIs)
- **Solo frontend**: Toda la funcionalidad es del lado del cliente
- **Deployment optimizado**: Para Cloudflare Pages sin necesidad de funciones serverless

### Secciones del Sitio
1. **Hero**: Portada impactante con CTA
2. **Servicios**: 3 servicios principales (Intermediación, Publicidad, Tecnología)
3. **Nosotros**: Proceso de trabajo en 3 pasos
4. **Contacto**: Información de contacto estática (email visible como texto)
5. **Footer**: Enlaces rápidos y contacto

## Stack Tecnológico

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS + Shadcn/ui
- Express.js (backend)
- React Hook Form + Zod (validación)
- Nodemailer (emails)
- Wouter (routing)

## Estructura de Archivos

```
/
├── client/                      # Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── navigation.tsx   # Barra de navegación
│   │   │   ├── hero.tsx         # Sección hero
│   │   │   ├── services.tsx     # Servicios
│   │   │   ├── about.tsx        # Sobre nosotros
│   │   │   ├── contact-section.tsx # Formulario
│   │   │   └── footer.tsx       # Footer
│   │   ├── pages/
│   │   │   └── home.tsx         # Página principal
│   │   ├── index.css            # Estilos y variables
│   │   └── App.tsx              # App principal
│   └── index.html               # HTML con meta tags
├── server/
│   └── routes.ts                # Endpoint /api/contact
├── shared/
│   └── schema.ts                # Schema del formulario
├── attached_assets/
│   └── generated_images/        # Imágenes generadas
├── .env.example                 # Ejemplo de configuración
├── DEPLOYMENT.md                # Guía de deployment
├── README.md                    # Documentación principal
└── design_guidelines.md         # Guías de diseño
```

## Variables de Entorno

**No se requieren variables de entorno** - El sitio es completamente estático sin backend.

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Configurar .env
cp .env.example .env
# Editar .env con tus credenciales SMTP

# Iniciar servidor de desarrollo
npm run dev
```

## Deployment en Cloudflare Pages

Ver guía completa en `DEPLOYMENT.md`

### Pasos Rápidos:
1. Subir código a GitHub
2. Conectar repositorio en Cloudflare Pages
3. Build command: `npm run build`
4. Output directory: `dist`
5. Configurar variables de entorno en Cloudflare
6. Configurar dominio personalizado: www.adfypro.com

## Contacto

- **Email**: admin@adfypro.com
- **Dominio**: www.adfypro.com

## Servicios de ADFYPRO

1. **Intermediación Comercial sin predominio de producto**
2. **Agencia de publicidad, marketing y comunicación**
3. **Gestión, creación, diseño y mantenimiento tecnológico**:
   - Desarrollo web
   - Aplicaciones informáticas
   - Bases de datos
   - Compravenda y alquiler de hardware/software

## Estado del Proyecto

✅ **Frontend**: 100% Completo - Diseño elegante, responsive, navegación suave
✅ **Backend**: 100% Completo - Endpoint /api/contact funcional con validación
✅ **Testing**: ✅ Pasado - Test end-to-end exitoso
✅ **Architect Review**: ✅ Aprobado - Sin issues críticos
✅ **Documentación**: 100% Completa - README, DEPLOYMENT, INSTRUCCIONES_FINALES
✅ **Imágenes**: Generadas con IA - 4 imágenes profesionales
✅ **SEO**: Optimizado - Meta tags y Open Graph configurados
✅ **Deployment**: Listo para Cloudflare Pages

## ✅ PROYECTO COMPLETADO Y LISTO PARA DEPLOYMENT

El sitio está **100% funcional** como página estática y listo para ser desplegado en www.adfypro.com.

### Cambios Recientes
- ✅ **Nuevo Logo Moderno**: Diseño profesional actualizado con colores azules corporativos
- ✅ **Filtro Azul Oscuro en Hero**: Mejora la legibilidad del texto sobre la imagen
- ✅ **Navegación Mejorada**: Texto blanco cuando no está scrolled, mantiene color primary en hover/activo
- ✅ **Formulario eliminado**: Convertido a página 100% estática (sin backend)
- ✅ **Sección Contacto**: Ahora muestra información de contacto como texto estático
- ✅ **Fix Error 404**: Añadido archivo `_redirects` para Cloudflare Pages
- ✅ **Optimización de Imágenes**: Convertidas a WebP (94% más ligeras - de 6.1MB a 364KB)

### Solución al Error 404 en Cloudflare Pages

**Problema identificado**: El Build Output Directory en Cloudflare Pages está configurado incorrectamente.

- ❌ **Configuración incorrecta**: `dist`
- ✅ **Configuración correcta**: `dist/public`

**Solución rápida**:
1. Ve a Cloudflare Dashboard → Workers & Pages → Tu proyecto
2. Click en "Settings" → "Build settings"
3. Cambia "Build output directory" de `dist` a `dist/public`
4. Guarda y redesplega

Además, el archivo `client/public/_redirects` está incluido para el routing de React:
```
/* /index.html 200
```

Ver **FIX_CLOUDFLARE_CONFIG.md** para instrucciones detalladas paso a paso con capturas.
