import { CheckCircle } from "lucide-react";

export default function About() {
  const highlights = [
    "Desenvolvimento personalizado",
    "Código limpo e escalável",
    "Performance otimizada",
    "SEO",
    "Responsividade",
    "Segurança",
    "Integrações inteligentes",
    "Suporte pós-entrega",
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-4xl lg:text-5xl text-white">
                Tecnologia que gera
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                  resultados
                </span>
              </h2>
              <p className="text-lg text-muted font-body leading-relaxed">
                Na CodeRise, acreditamos que tecnologia deve resolver problemas
                e gerar oportunidades. Criamos soluções personalizadas para
                empresas que desejam fortalecer sua presença digital, automatizar
                processos e integrar sistemas de forma eficiente.
              </p>
              <p className="text-lg text-muted font-body leading-relaxed">
                Nosso compromisso é entregar projetos modernos, rápidos, seguros
                e desenvolvidos pensando na experiência do usuário e nos
                objetivos do cliente.
              </p>
            </div>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="glass p-4 flex items-center gap-3 hover:bg-white/15 transition-all duration-300 group"
              >
                <CheckCircle
                  size={20}
                  className="text-purple-400 flex-shrink-0 group-hover:text-blue-400 transition-colors"
                />
                <span className="text-sm font-body text-white">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
