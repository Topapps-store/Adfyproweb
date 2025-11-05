import { Card } from "@/components/ui/card";
import { Briefcase, Megaphone, Cpu } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Intermediación Comercial",
    description:
      "Conectamos negocios y oportunidades. Facilitamos relaciones comerciales estratégicas sin predominio de producto, enfocándonos en generar valor para todas las partes.",
  },
  {
    icon: Megaphone,
    title: "Publicidad y Marketing",
    description:
      "Estrategias de comunicación 360°. Diseñamos campañas creativas y efectivas que conectan tu marca con tu audiencia objetivo de forma memorable y medible.",
  },
  {
    icon: Cpu,
    title: "Gestión Tecnológica",
    description:
      "Soluciones digitales completas: diseño y desarrollo web, aplicaciones, bases de datos, software personalizado, compravenda y alquiler de equipamiento tecnológico.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para impulsar tu negocio en el mercado digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300 hover:shadow-lg"
                data-testid={`card-service-${index}`}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <h3 className="font-display font-semibold text-xl md:text-2xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
