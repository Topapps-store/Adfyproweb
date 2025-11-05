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
- **API de contacto**: Endpoint POST `/api/contact` que envía emails
- **Validación con Zod**: Schemas compartidos entre frontend y backend
- **Nodemailer**: Envío de emails SMTP (configurado para Gmail)

### Secciones del Sitio
1. **Hero**: Portada impactante con CTA
2. **Servicios**: 3 servicios principales (Intermediación, Publicidad, Tecnología)
3. **Nosotros**: Proceso de trabajo en 3 pasos
4. **Contacto**: Formulario funcional con validación
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

El proyecto requiere configurar SMTP para el formulario de contacto:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password
SESSION_SECRET=string-aleatorio-seguro
```

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

El sitio está **100% funcional** y listo para ser desplegado en www.adfypro.com.

### Próximos Pasos
1. Configurar credenciales SMTP en `.env` (ver INSTRUCCIONES_FINALES.md)
2. Subir código a GitHub
3. Conectar con Cloudflare Pages
4. Configurar dominio www.adfypro.com

Ver **INSTRUCCIONES_FINALES.md** para la guía completa paso a paso.
