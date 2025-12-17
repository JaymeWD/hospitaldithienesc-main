import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container-max mx-auto section-padding pb-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex justify-center">
              <a href="#inicio" className="cursor-pointer" aria-label="Voltar ao início">
                <img 
                  src="/logos/Logotipo hospital di thiene 1.svg" 
                  alt="Hospital Di Thiene" 
                  className="h-28 md:h-32 w-auto mb-4 md:mb-6"
                />
              </a>
            </div>
            <p className="text-primary-foreground/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 text-left w-full">
              Há mais de 30 anos cuidando da saúde da comunidade de São Caetano do Sul 
              e região com excelência, humanização e respeito.
            </p>
            <div className="flex gap-2 md:gap-4 justify-center">
                  <a
                    href="https://www.instagram.com/hcsc_hospital_central/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-[#183558] hover:text-white transition-colors"
                  >
                    <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                  </a>
                  {/*<a
                    href="#"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-[#183558] hover:text-white transition-colors"
                  >
                    <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                  </a>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6">Links Rápidos</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#sobre"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-xs md:text-sm"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-xs md:text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#convenios"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-xs md:text-sm"
                >
                  Convênios
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-primary-foreground/70 hover:text-accent transition-colors text-xs md:text-sm"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6">Especialidades</h4>
            <ul className="space-y-2 md:space-y-3">
              {[
                "Pronto Socorro",
                "Clínica Geral",
                "Laboratório",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-xs md:text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-6">Contato</h4>
            <ul className="space-y-2 md:space-y-3 text-primary-foreground/70 text-xs md:text-sm">
              <li>Rua Jayme da Costa Patrão, 30</li>
              <li>São Caetano do Sul - SP</li>
              <li>CEP: 09510-115</li>
              <li className="pt-1 md:pt-2">(11) 4223-4600</li>
              <li>ouvidoria@hospitaldithienesc.com.br</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 md:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
            <p className="text-primary-foreground/50 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Hospital Di Thiene São Caetano. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-accent text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
