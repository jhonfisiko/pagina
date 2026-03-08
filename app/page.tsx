"use client";

import React, { useRef, useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Send, CheckCircle, Globe, Code, Search, ShoppingCart, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/xgolnnra", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
        formRef.current?.reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      setLoading(false);
      alert("¡Ups! Algo salió mal. Por favor, escríbeme directamente por WhatsApp.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#0a0b10] font-sans text-white selection:bg-lime-500/30">
      
      {/* BOTÓN WHATSAPP FLOTANTE */}
      <motion.a 
        href="https://wa.me/573113462128"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center group"
      >
        <MessageCircle size={30} fill="white" className="text-white" />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Hablamos por WhatsApp?
        </span>
      </motion.a>

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-40 bg-[#0a0b10]/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-lime-400/30">
              <Image src="/logo-neon.jpeg" alt="SMARTDICOM - Agencia de Desarrollo Web en Colombia" fill className="object-cover" />
            </div>
            <div className="text-xl font-black tracking-tighter uppercase">
              SMART<span className="text-lime-400">DICOM</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400 items-center">
            <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#contact" className="hover:text-fuchsia-500 transition-colors">Contacto</a>
            <a href="https://wa.me/573113462128" className="px-5 py-2 bg-white text-black rounded-full hover:bg-lime-400 transition-all">Cotizar Proyecto</a>
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <main className="relative flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="max-w-5xl text-5xl font-black md:text-8xl leading-none tracking-tight">
            Diseño de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Sitios Web en Colombia</span>
          </h1>
          <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            En SMARTDICOM impulsamos negocios con tecnología de punta. 
            Creamos experiencias digitales rápidas, seguras y optimizadas para Google.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12">
          <a href="#contact" className="group bg-fuchsia-600 hover:bg-fuchsia-500 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg">
            Solicitar Auditoría Web <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </main>

      {/* NUEVA SECCIÓN: SERVICIOS OPTIMIZADOS SEO */}
      <section id="servicios" className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase italic mb-4">
              Expertos en Desarrollo de <span className="text-lime-400">Páginas Web</span>
            </h2>
            <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
              Soluciones digitales de alto rendimiento en Colombia para que tu negocio destaque y convierta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Diseño Web Profesional', desc: 'Sitios visualmente impactantes enfocados en la experiencia del usuario (UX/UI).', icon: <Globe className="text-lime-400" /> },
              { title: 'Desarrollo Next.js', desc: 'Aplicaciones web ultra rápidas con la tecnología líder del mercado.', icon: <Code className="text-fuchsia-500" /> },
              { title: 'Posicionamiento SEO', desc: 'Aparece en los primeros resultados de búsqueda en Colombia.', icon: <Search className="text-lime-400" /> },
              { title: 'Tiendas Virtuales', desc: 'E-commerce con pasarelas de pago y gestión automatizada.', icon: <ShoppingCart className="text-fuchsia-500" /> },
              { title: 'Mantenimiento Web', desc: 'Soporte constante para que tu página siempre esté activa y segura.', icon: <Settings className="text-lime-400" /> },
              { title: 'Alta Conversión', desc: 'Estrategias digitales diseñadas para vender más cada día.', icon: <CheckCircle className="text-fuchsia-500" /> }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-lime-400/50 transition-all group">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold uppercase mb-3 group-hover:text-lime-400 transition-colors">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="proyectos" className="py-24 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-black mb-12 text-center uppercase tracking-tighter"
          >
            Nuestros <span className="text-lime-400">Proyectos Destacados</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/abogada.png" alt="Diseño web para Erika Muñoz Abogada" fill className="object-cover transition-all duration-500 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 uppercase italic text-white group-hover:text-lime-400 transition-colors">Erika Muñoz — Legal</h3>
                <p className="text-zinc-400 text-sm mb-4">Sitio profesional con embudo de conversión para abogados en Colombia.</p>
                <a href="https://erikamunoz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-fuchsia-500 hover:text-white transition-colors">Ver Caso de Estudio →</a>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/azure-bay.jpg" alt="Azure Bay Complex" fill className="object-cover transition-all duration-500 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 uppercase italic text-white group-hover:text-lime-400 transition-colors">Azure Bay Complex</h3>
                <p className="text-zinc-400 text-sm mb-4">Plataforma de reservaciones de lujo con carga ultra rápida.</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 italic">Concept Design</span>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50">
              <div className="relative h-64 w-full overflow-hidden">
                <Image src="/nova-gear.jpg" alt="E-commerce Nova Gear" fill className="object-cover transition-all duration-500 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 uppercase italic text-white group-hover:text-lime-400 transition-colors">Tecnología Nova Gear</h3>
                <p className="text-zinc-400 text-sm mb-4">E-commerce inmersivo para la industria tecnológica.</p>
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 italic">E-commerce Design</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-2xl font-black uppercase italic mb-12">Consultas sobre <span className="text-fuchsia-500">Desarrollo Web</span></h2>
          <div className="space-y-4">
            <article className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h4 className="font-bold text-sm uppercase mb-2">¿Cómo ayudan al SEO de mi empresa en Colombia?</h4>
              <p className="text-zinc-500 text-sm">Optimizamos cada línea de código y estructura para que Google indexe tu contenido rápidamente en el mercado local.</p>
            </article>
            <article className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h4 className="font-bold text-sm uppercase mb-2">¿Por qué usar Next.js para mi página web?</h4>
              <p className="text-zinc-500 text-sm">Es la tecnología más rápida del mercado, lo que garantiza que tus clientes no abandonen el sitio por lentitud.</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 px-6">
        <motion.div 
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-zinc-900/50 p-8 md:p-16 rounded-[3rem] border border-white/5 backdrop-blur-sm"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-2 uppercase italic text-lime-400">Solicitar Propuesta</h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Agencia SmartDicom — ceo@smartdicom.com</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="cliente" className="text-[10px] uppercase font-bold text-zinc-600 ml-4">Nombre o Empresa</label>
                <input id="cliente" name="Cliente" type="text" required className="w-full px-8 py-5 rounded-2xl bg-black/50 border border-white/10 focus:border-lime-400 outline-none transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] uppercase font-bold text-zinc-600 ml-4">Correo</label>
                <input id="email" name="Email" type="email" required className="w-full px-8 py-5 rounded-2xl bg-black/50 border border-white/10 focus:border-fuchsia-500 outline-none transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="text-[10px] uppercase font-bold text-zinc-600 ml-4">Detalles del Proyecto</label>
              <textarea id="mensaje" name="Mensaje" required rows={4} className="w-full px-8 py-5 rounded-3xl bg-black/50 border border-white/10 focus:border-lime-400 outline-none transition-all" />
            </div>
            
            <button type="submit" disabled={loading || submitted} className="w-full relative overflow-hidden bg-white text-black font-black uppercase py-6 rounded-2xl transition-all disabled:opacity-70">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="success" initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="flex items-center justify-center gap-2 text-emerald-600">
                    <CheckCircle size={20} /> ENVIADO CON ÉXITO
                  </motion.div>
                ) : (
                  <motion.div key="idle" className="flex items-center justify-center gap-2">
                    {loading ? "ENVIANDO..." : "ENVIAR AHORA"} <Send size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 opacity-50">
        <p className="text-[10px] font-black uppercase tracking-[0.4em]">
          © 2026 SMARTDICOM — DESARROLLO WEB DE ALTO RENDIMIENTO EN COLOMBIA
        </p>
      </footer>
    </div>
  );
}