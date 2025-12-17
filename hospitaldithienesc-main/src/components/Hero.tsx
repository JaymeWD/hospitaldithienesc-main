import { ArrowRight, Heart, Shield, Clock, Hospital } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const messages = [
    { text: "Cuidando da sua saúde há mais de 30 anos", color: "bg-accent" },
    { text: "Atendimento humanizado 24 horas", color: "bg-blue-500" },
    { text: "Profissionais qualificados e experientes", color: "bg-green-500" },
    { text: "Infraestrutura moderna e completa", color: "bg-purple-500" },
    { text: "18 convênios para melhor te atender", color: "bg-orange-500" }
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary-foreground/5 rounded-full animate-float" />
      <div className="absolute bottom-1/4 right-20 w-32 h-32 bg-primary-foreground/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-primary-foreground/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="container-max mx-auto px-4 md:px-8 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className={`w-2 h-2 ${messages[currentMessageIndex].color} rounded-full animate-pulse-slow transition-all duration-1000`} />
            <span className="text-primary-foreground/90 text-sm font-medium transition-all duration-1000">
              {messages[currentMessageIndex].text}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Sua saúde em{" "}
            <span className="relative">
              boas mãos
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path d="M2 6C50 2 150 2 198 6" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            O Hospital Di Thiene São Caetano oferece atendimento humanizado e de excelência, 
            com profissionais qualificados e infraestrutura moderna para cuidar de você e sua família.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <a href="#servicos">
              <Button variant="heroOutline" size="xl">
                Conheça Nossos Serviços
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <div className="flex flex-col items-center gap-2 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl">
              <Heart className="h-8 w-8 text-accent" />
              <span className="text-3xl font-bold text-primary-foreground">30+</span>
              <span className="text-sm text-primary-foreground/70">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl">
              <Hospital className="h-8 w-8 text-accent" />
              <span className="text-3xl font-bold text-primary-foreground">18</span>
              <span className="text-sm text-primary-foreground/70">Melhores Convênios</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-6 bg-primary-foreground/5 backdrop-blur-sm rounded-xl">
              <Clock className="h-8 w-8 text-accent" />
              <span className="text-3xl font-bold text-primary-foreground">24h</span>
              <span className="text-sm text-primary-foreground/70">Pronto Atendimento</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
