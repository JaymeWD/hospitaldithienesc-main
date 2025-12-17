import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Tradição e Confiança",
    description: "Mais de três décadas dedicadas ao cuidado com a saúde da comunidade."
  },
  {
    title: "Excelência Médica",
    description: "Corpo clínico altamente qualificado e em constante atualização."
  },
  {
    title: "Valores Sólidos",
    description: "Ética, respeito e compromisso com o bem-estar de cada paciente."
  },
  {
    title: "Inovação Tecnológica",
    description: "Equipamentos de última geração para diagnósticos precisos."
  }
];

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Sobre o Hospital
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Compromisso com a{" "}
              <span className="text-primary">excelência</span> em saúde
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              O Hospital Di Thiene São Caetano nasceu do sonho de oferecer atendimento médico 
              de alta qualidade com o calor humano que todo paciente merece. Nossa missão é 
              proporcionar cuidados de saúde integrados, respeitando os valores tradicionais 
              e a individualidade de cada pessoa que nos procura.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium bg-ice">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&h=500&fit=crop"
                    alt="Equipe médica do Hospital Di Thiene"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft bg-ice">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=300&fit=crop"
                    alt="Tecnologia médica moderna"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft bg-ice">
                  <img
                    src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=300&h=300&fit=crop"
                    alt="Atendimento humanizado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium bg-ice">
                  <img
                    src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&h=500&fit=crop"
                    alt="Instalações modernas"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
