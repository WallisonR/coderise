import { Globe, Rocket, Link2, Cog, TrendingUp, Cloud } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites",
      description:
        "Sites institucionais modernos, rápidos, responsivos e otimizados para mecanismos de busca.",
    },
    {
      icon: Rocket,
      title: "Landing Pages",
      description:
        "Páginas desenvolvidas para gerar mais conversões, vendas e captação de leads.",
    },
    {
      icon: Link2,
      title: "Integrações via API",
      description:
        "Integramos sistemas, ERPs, CRMs, plataformas de pagamento, WhatsApp, automações e muito mais.",
    },
    {
      icon: Cog,
      title: "Desenvolvimento de Sistemas",
      description:
        "Criamos soluções personalizadas para atender às necessidades específicas do seu negócio.",
    },
    {
      icon: TrendingUp,
      title: "Automação de Processos",
      description:
        "Reduza tarefas repetitivas através de integrações e automações inteligentes.",
    },
    {
      icon: Cloud,
      title: "Consultoria em Tecnologia",
      description:
        "Auxiliamos empresas na escolha das melhores tecnologias para seus projetos.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted font-body max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass p-8 flex flex-col gap-4 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/40 group-hover:to-blue-600/40 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-purple-400 group-hover:text-blue-400 transition-colors"
                  />
                </div>
                <h3 className="font-heading text-white text-lg">{service.title}</h3>
                <p className="text-muted font-body text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
