import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_office_collaboration_dcd783c8.webp";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("servicios");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/75 to-blue-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display font-bold text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          ADFYPRO
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-semibold">
          Agencia de Publicidad, Marketing y Comunicación
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
            Especialistas en intermediación comercial, publicidad digital y gestión tecnológica.
            Creamos soluciones innovadoras para impulsar tu negocio.
          </p>

          <div className="flex flex-wrap gap-3 justify-center text-sm sm:text-base text-white/70">
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
              Intermediación Comercial
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
              Marketing Digital
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md">
              Gestión Tecnológica
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base sm:text-lg font-semibold"
            data-testid="button-contact-hero"
          >
            Contáctanos
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToServices}
            className="backdrop-blur-sm bg-white/10 text-white border-white/30 hover:bg-white/20 px-8 py-6 text-base sm:text-lg font-semibold"
            data-testid="button-services-hero"
          >
            Ver Servicios
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/80 hover:text-white transition-colors"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
