"use client";

import { useState } from "react";
import { Mail, Phone, Instagram, MapPin, Menu } from "lucide-react";

export default function CortelloDrinksLanding() {
  const images = [
    "/eventos/bebida2.JPG",
    "/eventos/bebida1.JPG",
    "/eventos/bebida3.JPG",
    "/eventos/bebida5.JPG",
    "/eventos/bebida6.JPG",
    "/eventos/bebida9.JPG",
    "/eventos/bebida8.JPG",
    "/eventos/bebida7.JPG",
    "/eventos/bebida10.JPG",
  ];

  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState(null);


  return (
    <div className="min-h-screen bg-neutral-50 text-slate-900">
      {/* Brand variables */}
      <style>{`
        :root { --brand: #1f3a57; --brand-2: #2a4d73; }
      `}</style>

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="#top" className="group flex items-center gap-3">
            <img
              src="logo-cortello.png"
              alt="Cortello Drinks"
              className="h-20 w-20 rounded-full border border-slate-200 object-contain"
            />
            <span
              className="text-lg font-semibold tracking-wide"
              style={{ color: "var(--brand)" }}
            >
              Cortello Drinks
            </span>
          </a>
          <nav className="hidden gap-8 md:flex">
            <a href="#portfolio" className="nav-link">Portfólio</a>
            {/* <a href="#orcamentos" className="nav-link">Orçamentos</a> */}
            <a href="#contato" className="nav-link">Contato</a>
          </nav>
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl space-y-1 px-4 pb-4">
              {[
                { href: "#portfolio", label: "Portfólio" },
                // { href: "#orcamentos", label: "Orçamentos" },
                { href: "#contato", label: "Contato" },
              ].map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100"
                >
                  {i.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(90rem_60rem_at_50%_-10%,rgba(31,58,87,0.08),transparent)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1
              className="text-4xl font-extrabold leading-tight md:text-5xl"
              style={{ color: "var(--brand)" }}
            >
              Realize seu evento conosco
            </h1>
            <p className="mt-4 max-w-prose text-lg text-slate-600">
              Experiências em drinks para eventos que pedem sofisticação,
              sabor e atendimento impecável.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="rounded-2xl px-6 py-3 font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--brand)",
                  boxShadow: "0 10px 20px rgba(31,58,87,0.15)",
                }}
              >
                Solicitar orçamento
              </a>
              <a
                href="#portfolio"
                className="rounded-2xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-white"
              >
                Ver portfólio
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>Drinks clássicos</div>
              <div className="hidden md:block">•</div>
              <div>Caipirinhas</div>
              <div className="hidden md:block">•</div>
              <div>Gin tônica</div>
              <div className="hidden md:block">•</div>
              <div>Ingredientes selecionados</div>
              <div className="hidden md:block">•</div>
              <div>Equipe de bartenders</div>

            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="grid h-full grid-cols-2 gap-2 p-2">
                <img
                  src="/eventos/bebida1.JPG"
                  alt="Drink especial"
                  className="rounded-2xl object-cover w-full h-full"
                />
                <img
                  src="/eventos/bebida7.JPG"
                  alt="Drink personalizado"
                  className="rounded-2xl object-cover w-full h-full"
                />
                <img
                  src="eventos/bebida3.JPG"
                  alt="Montagem Cortello Drinks"
                  className="col-span-2 rounded-2xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold" style={{ color: "var(--brand)" }}>
            Portfólio
          </h2>
          <p className="mt-2 text-slate-600">
            Alguns registros dos nossos serviços.
          </p>
          <br></br>
          {/* Galeria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt=""
                className="h-48 w-full object-cover rounded-xl shadow-md cursor-pointer"
                onClick={() => setSelectedImageIndex(idx)}
              />
            ))}
          </div>

          {/* Modal */}
          {selectedImageIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">

              {/* Botão fechar */}
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="absolute top-5 right-5 z-50 text-white text-2xl font-bold hover:text-gray-300"
              >
                ×
              </button>

              {/* Botão esquerda */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
                }}
                className="absolute left-5 z-50 text-white text-3xl font-bold hover:text-gray-300"
              >
                ‹
              </button>

              {/* Botão direita */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex((selectedImageIndex + 1) % images.length);
                }}
                className="absolute right-5 z-50 text-white text-3xl font-bold hover:text-gray-300"
              >
                ›
              </button>

              {/* Imagem ampliada */}
              <img
                src={images[selectedImageIndex]}
                alt=""
                className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
              />
            </div>
          )}



        </div>
      </section>


      {/* Contact */}
      <section id="contato" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold" style={{ color: "var(--brand)" }}>
            Solicite seu orçamento
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-neutral-50 p-6 shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-4">Entre em contato</h3>
              <p className="mb-6 text-slate-600">
                Fale com a Cortello Drinks pelo WhatsApp ou siga nossas redes sociais.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/5511<numeroaqui>?text=Olá,%20gostaria%20de%20um%20orçamento, por favor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl px-6 py-3 font-medium text-white text-center"
                  style={{ backgroundColor: "var(--brand)" }}
                >
                  WhatsApp
                </a>

                <a
                  href="https://www.instagram.com/<conta_aqui>/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl px-6 py-3 font-medium text-white text-center"
                  style={{ backgroundColor: "var(--brand)" }}
                >
                  Instagram
                </a>
              </div>
            </div>


            <div className="space-y-4">
              <p className="text-slate-600">
                Estamos disponíveis para tirar dúvidas e preparar um orçamento sob medida para seu evento.
              </p>
              <div className="space-y- text-slate-700">
                <Phone className="h-5 w-5" /> (11) Seu numero aqui
                <br/>
                <MapPin className="h-5 w-5" /> São Paulo, SP
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-neutral-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Cortello Drinks. Todos os direitos
            reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#portfolio" className="hover:underline">
              Portfólio
            </a>
            {/* <a href="#orcamentos" className="hover:underline">
              Orçamentos
            </a> */}
            <a href="#contato" className="hover:underline">
              Contato
            </a>
          </div>
        </div>
      </footer>

      {/* Utilities */}
      <style>{`
        .nav-link{ @apply text-slate-700 hover:text-slate-900; }
        .input{ @apply w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm shadow-sm outline-none placeholder:text-slate-400 focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/15; }
        .contact{ @apply flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm; }
      `}</style>
    </div>
  );
}



