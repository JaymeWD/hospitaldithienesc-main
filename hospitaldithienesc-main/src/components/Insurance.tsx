import { Check, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { insurances } from "./insurances";

const Insurance = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api?.off("select", onSelect);
      api?.off("reInit", onSelect);
    };
  }, [api]);

  // Reset search when dialog closes
  useEffect(() => {
    if (openDialogIndex === null) {
      setSearchTerm("");
    }
  }, [openDialogIndex]);

  return (
    <section id="convenios" className="section-padding bg-background">
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Convênios</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Aceitamos os principais <span className="text-primary">planos de saúde</span></h2>
        </div>

        {/* Carousel of cards */}
        <div className="relative">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselPrevious className="hidden sm:flex hover:bg-navy hover:text-white transition-colors" />
            <CarouselContent className="items-stretch">
              {insurances.map((insurance, index) => (
                <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                  <div className="px-4">
                    <Dialog open={openDialogIndex === index} onOpenChange={(open) => setOpenDialogIndex(open ? index : null)}>
                      <div>
                        <button
                          onClick={() => {
                            if (index !== selected) {
                              api?.scrollTo(index);
                            } else {
                              setOpenDialogIndex(index);
                            }
                          }}
                          className={`group rounded-xl p-6 card-hover border border-border/50 flex flex-col items-center text-center w-full transform transition-all duration-300 ${index === selected ? "scale-[1.02] z-20 bg-primary-foreground/5 font-semibold" : "scale-90 opacity-60 bg-card"}`}
                        >
                          {insurance.logoUrl ? (
                            <img src={insurance.logoUrl} alt={`${insurance.name} logo`} className="w-16 h-16 object-contain mb-4 rounded-xl" />
                          ) : (
                            <div className={`w-16 h-16 rounded-xl ${insurance.color} flex items-center justify-center mb-4 text-white font-bold text-xl`}>{insurance.logo}</div>
                          )}
                          <h3 className={`${index === selected ? "text-primary" : "text-foreground"} text-sm leading-tight`}>{insurance.name}</h3>
                        </button>
                      </div>

                      <DialogContent className="max-h-[90vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle>{insurance.name}</DialogTitle>
                          <DialogDescription>Planos atendidos pelo convênio {insurance.name}.</DialogDescription>
                        </DialogHeader>

                        {/* Search Input */}
                        <div className="relative mt-4">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="text"
                            placeholder="Buscar plano..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                          />
                        </div>

                        <div className="mt-4 overflow-y-auto flex-1 pr-2" style={{ maxHeight: 'calc(90vh - 280px)' }}>
                          <ul className="space-y-2">
                            {(insurance.plans || []).length === 0 ? (
                              <li className="text-muted-foreground">Nenhum plano listado.</li>
                            ) : (
                              (insurance.plans || [])
                                .filter(plan => plan.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((plan, i) => (
                                  <li key={i} className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-1" /> <span className="text-foreground">{plan}</span></li>
                                ))
                            )}
                            {searchTerm && (insurance.plans || []).filter(plan => plan.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                              <li className="text-muted-foreground">Nenhum plano encontrado.</li>
                            )}
                          </ul>
                        </div>

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="navyOutline">Fechar</Button>
                          </DialogClose>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="hidden sm:flex hover:bg-navy hover:text-white transition-colors" />
          </Carousel>
        </div>

        {/* Indicators centered - responsive */}
        <div className="flex justify-center mt-6 px-2 md:px-0">
          <div className="flex items-center gap-1 md:gap-2 flex-wrap justify-center">
            {insurances.map((_, i) => (
              <button key={i} onClick={() => api?.scrollTo(i)} className={`h-2 w-4 md:w-6 lg:w-8 rounded-full transition-colors duration-200 shrink-0 ${i === selected ? "bg-primary" : "bg-border/60"}`} aria-label={`Ir para convênio ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 p-4 md:p-8 rounded-2xl bg-ice border border-border/50 mx-4 md:mx-0">
          <div className="flex flex-col items-center text-center gap-4 md:gap-6">
            <div>
              <h3 className="text-base md:text-lg lg:text-xl font-semibold text-foreground mb-2">Quer saber se atendemos o seu plano?</h3>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground">Clique no seu convênio para ver os planos atendidos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
