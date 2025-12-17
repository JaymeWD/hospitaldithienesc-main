import {
  Stethoscope,
  HeartPulse,
  Brain,
  Bone,
  Eye,
  Baby,
  Microscope,
  Syringe,
  Activity,
  Pill,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Atendimento médico completo para diagnóstico e tratamento de diversas condições.",
  },
  {
    icon: Activity,
    title: "Pronto Socorro",
    description: "Atendimento de emergência 24 horas com equipe preparada.",
  },
  {
    icon: Microscope,
    title: "Laboratório",
    description: "Exames laboratoriais com tecnologia de ponta e resultados rápidos.",
  },
  
  
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container-max mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cuidado completo para sua{" "}
            <span className="text-primary">saúde</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma ampla gama de especialidades médicas e serviços de saúde, 
            com profissionais qualificados e infraestrutura moderna.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full max-w-5xl mx-auto justify-center justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 card-hover border border-border/50 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-ice-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
