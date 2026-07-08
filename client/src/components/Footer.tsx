import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-white/10 mt-20">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/manus-storage/coderise-logo_a091edce.png"
                alt="CodeRise"
                className="w-8 h-8"
              />
              <span className="font-display text-lg text-white">CodeRise</span>
            </div>
            <p className="text-muted text-sm font-body">
              Transformando ideias em soluções digitais modernas.
            </p>
          </div>

          {/* Menu */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-white text-sm">Menu</h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#hero"
                className="text-muted hover:text-white transition-colors text-sm font-body"
              >
                Início
              </a>
              <a
                href="#about"
                className="text-muted hover:text-white transition-colors text-sm font-body"
              >
                Sobre
              </a>
              <a
                href="#services"
                className="text-muted hover:text-white transition-colors text-sm font-body"
              >
                Serviços
              </a>
              <a
                href="#technologies"
                className="text-muted hover:text-white transition-colors text-sm font-body"
              >
                Tecnologias
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-white text-sm">Contato</h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:coderisetecnologia@gmail.com"
                className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm font-body"
              >
                <Mail size={16} />
                Email
              </a>
              <a
                href="https://wa.me/5511999999999"
                className="flex items-center gap-2 text-muted hover:text-white transition-colors text-sm font-body"
              >
                <Phone size={16} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-white text-sm">Redes Sociais</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/coderise"
                className="text-muted hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/coderise"
                className="text-muted hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-muted text-sm font-body">
            © {currentYear} CodeRise. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
