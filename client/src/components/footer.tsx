export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-2xl mb-4" data-testid="text-footer-brand">
              ADFYPRO
            </h3>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Agencia especializada en intermediación comercial, publicidad, marketing y
              gestión tecnológica.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-link-inicio"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-link-servicios"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("nosotros")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-link-nosotros"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors text-sm"
                  data-testid="footer-link-contacto"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:admin@adfypro.com"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                  data-testid="footer-link-email"
                >
                  admin@adfypro.com
                </a>
              </li>
              <li className="text-secondary-foreground/80">www.adfypro.com</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10">
          <p className="text-center text-sm text-secondary-foreground/70" data-testid="text-copyright">
            © {currentYear} ADFYPRO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
