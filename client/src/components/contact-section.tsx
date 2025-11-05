import { Card } from "@/components/ui/card";
import { Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos aquí para ayudarte
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12" data-testid="card-contact-info">
            <div className="text-center mb-10">
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-foreground mb-4">
                Hablemos de tu proyecto
              </h3>
              <p className="text-muted-foreground">
                Ponte en contacto con nosotros y te responderemos lo antes posible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="contact-email">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Email</h4>
                <a
                  href="mailto:admin@adfypro.com"
                  className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                  data-testid="link-email"
                >
                  admin@adfypro.com
                </a>
              </div>

              <div className="text-center" data-testid="contact-hours">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Horario de Atención</h4>
                <p className="text-muted-foreground">Lunes a Viernes</p>
                <p className="text-muted-foreground font-medium">9:00 - 18:00h</p>
              </div>

              <div className="text-center" data-testid="contact-response">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Tiempo de Respuesta</h4>
                <p className="text-muted-foreground">Te responderemos en</p>
                <p className="text-muted-foreground font-medium">menos de 24h laborables</p>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-border text-center">
              <p className="text-muted-foreground">
                Escríbenos a <a href="mailto:admin@adfypro.com" className="text-primary hover:text-primary/80 transition-colors font-medium" data-testid="link-email-footer">admin@adfypro.com</a> y cuéntanos tu proyecto.
                Estaremos encantados de ayudarte.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
