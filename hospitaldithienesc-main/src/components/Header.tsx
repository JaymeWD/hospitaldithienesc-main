import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#convenios", label: "Convênios" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isMobileMenuOpen
          ? "bg-white py-3 shadow-md"
          : isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <a href="#inicio" className="cursor-pointer md:ml-8" aria-label="Voltar ao início">
            <img 
              src={isMobileMenuOpen || isScrolled ? "/logos/Logotipo hospital di thiene 2.svg" : "/logos/Logotipo hospital di thiene 1.svg"}
              alt="Hospital Di Thiene" 
              className="h-24 md:h-28 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-80",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+551140001234"
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}
            >
              <Phone className="h-4 w-4" />
              (11) 4223-4600
            </a>
            
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors",
              isMobileMenuOpen
                ? "text-navy"
                : isScrolled
                ? "text-foreground hover:bg-muted"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-up bg-white rounded-md shadow-sm">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    isMobileMenuOpen || isScrolled
                      ? "text-foreground hover:bg-muted"
                      : "text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/20">
                <a
                  href="tel:+551142234600"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium",
                    isMobileMenuOpen || isScrolled ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  <Phone className="h-4 w-4" />
                  (11) 4223-4600
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
