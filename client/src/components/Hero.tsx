import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-background via-background to-purple-950/20 pt-32 pb-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <h1 className="font-display text-5xl lg:text-6xl text-white leading-tight">
                Transformamos ideias em{" "}
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  soluções digitais
                </span>
              </h1>
              <p className="text-lg text-muted font-body leading-relaxed">
                Desenvolvemos sites, landing pages, integrações via API e
                soluções tecnológicas sob medida para impulsionar o seu
                negócio.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/558588741795" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-display text-purple-400">50+</p>
                <p className="text-sm text-muted font-body">Projetos Entregues</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-display text-blue-400">30+</p>
                <p className="text-sm text-muted font-body">Clientes Satisfeitos</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-2xl font-display text-purple-400">5+</p>
                <p className="text-sm text-muted font-body">Anos de Experiência</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
            <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <img
                src="/manus-storage/hero-illustration_1ea8eec1.png"
                alt="Tech Illustration"
                className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-muted font-body">Explore</p>
          <svg
            className="w-5 h-5 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
