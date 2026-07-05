import { ChevronDown } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Entendimento da necessidade",
      description: "Analisamos seus objetivos e desafios para criar a melhor solução.",
    },
    {
      number: "2",
      title: "Planejamento",
      description: "Definimos estratégia, arquitetura e cronograma do projeto.",
    },
    {
      number: "3",
      title: "Desenvolvimento",
      description: "Criamos sua solução com código limpo e práticas modernas.",
    },
    {
      number: "4",
      title: "Testes",
      description: "Garantimos qualidade através de testes rigorosos.",
    },
    {
      number: "5",
      title: "Entrega",
      description: "Lançamos seu projeto pronto para o mercado.",
    },
    {
      number: "6",
      title: "Suporte",
      description: "Acompanhamos e otimizamos sua solução continuamente.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted font-body max-w-2xl mx-auto">
            Nosso processo estruturado garante resultados de qualidade
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-display font-bold shadow-lg shadow-purple-500/50">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-16 bg-gradient-to-b from-purple-600/50 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-2 pb-8">
                <h3 className="font-heading text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-muted font-body text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
