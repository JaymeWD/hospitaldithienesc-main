const Map = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Localização
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Como <span className="text-accent">chegar</span>
            </h2>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Rua+Jayme+da+Costa+Patr%C3%A3o,+30+-+S%C3%A3o+Caetano+do+Sul+-+SP,+09510-115"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors max-w-2xl mx-auto inline-block cursor-pointer"
            >
              Rua Jayme da Costa Patrão, 30 - São Caetano do Sul - SP, CEP: 09510-115
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0464688925543!2d-46.55741!3d-23.6224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5cf0b6c1e8bf%3A0x5e5e5e5e5e5e5e5e!2sRua%20Jayme%20da%20Costa%20Patr%C3%A3o%2C%2030%20-%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009510-115!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="500"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Hospital Di Thiene"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
