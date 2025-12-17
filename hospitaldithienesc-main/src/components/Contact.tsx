import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';

// Inicializa o EmailJS uma única vez
emailjs.init("M7JL5Il2g3xHh-EhC");

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    details: ["(11) 4223-4600",],
    action: "tel:+551142234600",
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["ouvidoria@hospitaldithienesc.com.br",],
    action: "mailto:ouvidoria@hospitaldithienesc.com.br",
  },
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Rua Jayme da Costa Patrão, 30", "São Caetano do Sul - SP", "CEP: 09510-115"],
    action: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    details: ["Pronto Socorro: 24 horas",],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Envia o email
      const result = await emailjs.send(
        "service_d61eqr6", // Service ID
        "template_jxoqi9s", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message,
        }
      );

      console.log("Email enviado com sucesso:", result);
      setSubmitMessage("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      
      // Limpa o formulário
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      // Remove a mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setSubmitMessage("Erro ao enviar mensagem. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Se for o campo de telefone, permite apenas números
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        [name]: numbersOnly
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <section id="contato" className="section-padding" style={{ background: "var(--gradient-hero)" }}>
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Informações de Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 leading-tight">
              Estamos aqui para{" "}
              <span className="text-accent">ajudar você</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Info - Aparece primeiro no mobile */}
            <div className="flex flex-col gap-6 lg:order-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-5 rounded-xl bg-primary-foreground/5 backdrop-blur-sm text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-primary-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-primary-foreground/70 text-sm break-words break-all">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="p-6 md:p-8 rounded-xl lg:order-1 bg-white shadow-lg">
              <h3 className="text-2xl font-bold text-navy mb-6">Entre em Contato</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-navy">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 bg-white/90"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-navy">Telefone *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 bg-white/90"
                    placeholder="(11) 99999-9999"
                    maxLength={11}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-navy">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 bg-white/90"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 bg-white/90 min-h-[120px]"
                    placeholder="Como podemos ajudar você?"
                  />
                </div>

                {submitMessage && (
                  <div className={`p-4 rounded-lg text-center ${
                    submitMessage.includes("sucesso") 
                      ? "bg-green-100 text-green-800 border border-green-300" 
                      : "bg-red-100 text-red-800 border border-red-300"
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
