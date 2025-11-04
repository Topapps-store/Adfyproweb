# ADFYPRO Design Guidelines

## Design Approach
**Hybrid Approach**: Drawing inspiration from modern B2B agency websites (similar to Idital) while maintaining elegant simplicity. Focus on clean professionalism with strategic visual impact that communicates expertise in commercial intermediation, advertising, and technology services.

## Core Design Principles
- **Professional Elegance**: Sophisticated without being corporate-heavy
- **Clear Hierarchy**: Guide users through services seamlessly
- **Breathing Space**: Generous whitespace to convey quality and focus
- **Trust Building**: Visual elements that establish credibility

## Typography System

**Font Families**: 
- Primary (Headings): Inter or Poppins (600-700 weight)
- Secondary (Body): Inter or Open Sans (400-500 weight)

**Hierarchy**:
- Hero Headline: text-5xl to text-7xl, font-bold
- Section Headlines: text-3xl to text-4xl, font-semibold
- Service Titles: text-xl to text-2xl, font-semibold
- Body Text: text-base to text-lg, leading-relaxed
- Small Text: text-sm for footer/metadata

## Layout & Spacing System

**Container Structure**:
- Maximum width: max-w-7xl for content sections
- Text content: max-w-4xl for readability
- Full-width sections with inner constraints

**Spacing Primitives**:
- Use Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section vertical padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 to gap-12
- Element margins: mb-6, mt-8, mx-4

**Responsive Breakpoints**:
- Mobile-first approach
- md: 768px (tablet)
- lg: 1024px (desktop)

## Page Structure & Sections

**1. Navigation Bar**:
- Fixed or sticky navigation
- Logo (ADFYPRO) on left
- Smooth scroll links to sections (Servicios, Nosotros, Contacto)
- Clean, minimal design with subtle shadow/border

**2. Hero Section**:
- Height: 85vh to 90vh
- Large hero image showing modern office/technology/collaboration
- Overlay gradient for text readability
- Headline emphasizing expertise in commercial intermediation and digital marketing
- Subheadline listing key services (3-4 bullet points)
- Primary CTA button with blur background (backdrop-blur-sm, bg-opacity-20)
- Scroll indicator at bottom

**3. Services Section**:
- Three-column grid on desktop (grid-cols-1 md:grid-cols-3)
- Service cards with:
  - Icon (Font Awesome business/marketing icons)
  - Service title
  - 2-3 sentence description
  - Subtle hover elevation effect
- Services: Intermediación Comercial | Publicidad & Marketing | Gestión Tecnológica

**4. Methodology/Process Section**:
- Two-column layout alternating image and text (zigzag pattern)
- 3-4 key process steps
- Icons or numbered indicators
- Clear, benefit-focused descriptions
- Images showing: team collaboration, strategy planning, technology solutions

**5. About Section**:
- Single column, centered content (max-w-4xl)
- Company mission and values
- What makes ADFYPRO different
- Optional: Small team photo or office image

**6. Contact Section**:
- Two-column layout (md:grid-cols-2)
- Left: Contact form (name, email, phone, message)
- Right: Contact information card
  - Email: admin@adfypro.com
  - Brief call-to-action text
  - Response time expectation
- Form styling: clean inputs with focus states, rounded corners

**7. Footer**:
- Three-column grid on desktop
- Column 1: ADFYPRO logo and tagline
- Column 2: Quick links (scroll to sections)
- Column 3: Contact info and social placeholder
- Copyright notice at bottom
- Subtle top border

## Component Library

**Buttons**:
- Primary: Rounded (rounded-lg), medium padding (px-8 py-3)
- With blur background when over images: backdrop-filter backdrop-blur-sm
- Hover states built-in to Button component
- Secondary: Outline style for less prominent actions

**Cards**:
- Service cards: Subtle shadow, rounded-xl, padding p-8
- Hover: transform translate-y-[-4px], increased shadow
- Background with slight transparency

**Form Inputs**:
- Rounded borders (rounded-md)
- Clear focus states with ring
- Adequate padding (px-4 py-3)
- Labels above inputs
- Validation states

**Icons**:
- Font Awesome via CDN
- Sizes: text-3xl for service cards, text-xl for smaller elements
- Consistent weight throughout

## Images

**Hero Image**:
- Large, high-quality image (1920x1080 minimum)
- Subject: Modern office space, professional team collaboration, or abstract tech/business imagery
- Overlay: Dark gradient (from-black/60 to-transparent)
- Placement: Full section background

**Section Images** (3-4 images total):
- Dimensions: 600x400 to 800x600
- Subjects: 
  - Team working on strategy
  - Technology/software interface
  - Client meeting/handshake
  - Marketing materials/creative work
- Treatment: High quality, professional photography style

**Image Placement**:
- Hero: Full-width background
- Process section: Alternating left/right with text
- Rounded corners (rounded-lg) for content images

## Visual Enhancements

**Subtle Animations**:
- Scroll-triggered fade-in for sections (Intersection Observer)
- Smooth scroll behavior for navigation
- Card hover effects (minimal, professional)
- NO distracting parallax or heavy animations

**Depth & Hierarchy**:
- Subtle shadows on cards: shadow-md to shadow-lg
- Section dividers: Subtle background alternation or thin borders
- Z-index layering for fixed navigation

**Accessibility**:
- High contrast ratios for all text
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images
- ARIA labels where appropriate

## Responsive Behavior

**Mobile (< 768px)**:
- Single column layouts
- Stack navigation items or hamburger menu
- Hero height: 70vh
- Touch-friendly button sizes (min 44px height)
- Reduced text sizes appropriately

**Tablet (768px - 1024px)**:
- Two-column service grid
- Maintain spacing proportions
- Adjust hero text sizing

**Desktop (> 1024px)**:
- Full three-column layouts
- Maximum impact for hero section
- Optimal reading widths maintained

This design creates a polished, professional presence for ADFYPRO that communicates expertise while remaining approachable and user-friendly.