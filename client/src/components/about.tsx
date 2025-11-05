import partnershipImage from "@assets/generated_images/Business_partnership_handshake_8fc9224c.png";
import marketingImage from "@assets/generated_images/Digital_marketing_technology_3413e7e3.png";
import strategyImage from "@assets/generated_images/Strategy_planning_session_8a0d4faf.png";

export default function About() {
  const processes = [
    {
      title: "Análisis y Estrategia",
      description:
        "Estudiamos tu negocio, mercado y competencia para desarrollar una estrategia personalizada que maximice resultados.",
      image: strategyImage,
    },
    {
      title: "Implementación Digital",
      description:
        "Diseñamos y desarrollamos soluciones tecnológicas, campañas de marketing y herramientas digitales adaptadas a tus necesidades.",
      image: marketingImage,
    },
    {
      title: "Crecimiento Sostenible",
      description:
        "Acompañamos tu negocio a largo plazo, optimizando procesos y buscando nuevas oportunidades comerciales constantemente.",
      image: partnershipImage,
    },
  ];

  return (
    <section id="nosotros" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Sobre Nosotros
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              En ADFYPRO somos especialistas en crear puentes entre empresas y oportunidades.
              Nuestra experiencia en intermediación comercial, publicidad y tecnología nos permite
              ofrecer soluciones completas y efectivas.
            </p>
            <p className="text-base text-muted-foreground">
              Trabajamos con pasión y compromiso para que tu negocio destaque en el mercado digital,
              combinando creatividad, estrategia y tecnología de vanguardia.
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24 mt-20">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-center`}
              data-testid={`section-process-${index}`}
            >
              <div className="flex-1">
                <img
                  src={process.image}
                  alt={process.title}
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                  data-testid={`img-process-${index}`}
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground">
                    {process.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
