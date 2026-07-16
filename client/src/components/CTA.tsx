import ctaBackground from "@/assets/cta-background.webp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${ctaBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="text-lg text-muted font-body mb-8 leading-relaxed">
            Desenvolvemos soluções modernas para empresas que desejam crescer
            através da tecnologia.
          </p>

          <a href="https://wa.me/558588741795" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
