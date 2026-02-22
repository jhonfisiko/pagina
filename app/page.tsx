"use client";

import React, { useRef, useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Send, CheckCircle } from 'lucide-react';
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
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
        formRef.current?.reset();
        // El mensaje de éxito desaparece tras 5 segundos
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
              <Image src="/logo-neon.jpeg" alt="SmartDicom Logo" fill className="object-cover" />
            </div>
            <div className="text-xl font-black tracking-tighter uppercase">
              SMART<span className="text-lime-400">DICOM</span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-400 items-center">
            <a href="#services" className="hover:text-white transition-colors">Servicios</a>
            <a href="#contact" className="hover:text-fuchsia-500 transition-colors">Contacto</a>
            <a href="https://wa.me/573113462128" className="px-5 py-2 bg-white text-black rounded-full hover:bg-lime-400 transition-all">Cotizar</a>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <main className="relative flex flex-col items-center justify-center px-6 py-32 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[120px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="max-w-4xl text-5xl font-black md:text-8xl leading-none tracking-tight">
            Sitios Web de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">Alto Rendimiento</span>
          </h1>
          <p className="mt-8 text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto">
            Impulsamos negocios en Colombia con tecnología de punta. 
            Webs rápidas, seguras y diseñadas para convertir.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12">
          <a href="#contact" className="group bg-fuchsia-600 hover:bg-fuchsia-500 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg">
            Empezar Ahora <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </main>

{/* SECCIÓN DE PORTAFOLIO */}
<section id="services" className="py-24 px-6 bg-black/20">
  <div className="max-w-7xl mx-auto">
    <motion.h2 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-3xl font-black mb-12 text-center uppercase tracking-tighter"
    >
      Proyectos <span className="text-lime-400">Destacados</span>
    </motion.h2>

    {/* Cambié md:grid-cols-2 a md:grid-cols-3 para que los 3 se vean bien en una fila */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
       
      {/* Proyecto 1: Erika Muñoz (Sitio Real) */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50"
      >
        <div className="relative h-64 w-full">
          <Image src="/abogada.png" alt="Erika Muñoz Abogada" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-bold mb-2 uppercase italic text-white group-hover:text-lime-400 transition-colors">Erika Muñoz — Legal</h3>
          <p className="text-zinc-400 text-sm mb-4">Sitio profesional con embudo de conversión y optimización de marca personal.</p>
          <a href="https://erikamunoz.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black uppercase tracking-widest text-fuchsia-500 hover:text-white transition-colors">Ver Sitio En Vivo →</a>
        </div>
      </motion.div>

      {/* Proyecto 2: Azure Bay */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50"
      >
        <div className="relative h-64 w-full">
          <Image src="/azure-bay.jpg" alt="Azure Bay" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-bold mb-2 uppercase italic text-white group-hover:text-lime-400 transition-colors">Azure Bay Complex</h3>
          <p className="text-zinc-400 text-sm mb-4">Plataforma de reservaciones de lujo con optimización de carga ultra rápida.</p>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 italic">Concept Design</span>
        </div>
      </motion.div>

      {/* Proyecto 3: Nova Gear */}
      <motion.div 
        whileHover={{ y: -10 }}
        className="group relative overflow-hidden rounded-3xl border border-white/5 bg-zinc-900/50"
      >
        <div className="relative h-64 w-full">
          <Image src="/nova-gear.jpg" alt="Nova Gear" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
        </div>
        <div className="p-8">
          <h3 className="text-xl font-bold mb-2 uppercase italic text-white group-hover:text-lime-400 transition-colors">Tecnología Nova Gear</h3>
          <p className="text-zinc-400 text-sm mb-4">E-commerce de alta fidelidad con interfaz inmersiva y estética neón.</p>
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600 italic">E-commerce Design</span>
        </div>
      </motion.div>

    </div>
  </div>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
  <div>
    <h2 className="text-4xl font-black uppercase italic leading-none mb-6">
      No es solo una web,<br/> es tu <span className="text-lime-400">Motor de Ventas</span>
    </h2>
    <p className="text-zinc-500 mb-8 font-medium">
      Combinamos ingeniería de software y diseño de experiencia de usuario (UX) para 
      garantizar que cada clic se convierta en una oportunidad de negocio.
    </p>
  </div>
  
  <div className="space-y-4">
    {[
      { t: 'Autoridad Digital', d: 'Destaca con una imagen de élite frente a tu competencia.' },
      { t: 'Expansión Global', d: 'Lleva tu negocio a nuevas ciudades y mercados internacionales.' },
      { t: 'Operación 24/7', d: 'Tu vitrina comercial disponible y vendiendo cada segundo del día.' },
      { t: 'Conversión de Leads', d: 'Sistemas diseñados específicamente para aumentar tu base de clientes.' }
    ].map((item, i) => (
      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors">
        <div className="text-lime-400 font-black italic">/0{i+1}</div>
        <div>
          <h4 className="text-sm font-black uppercase tracking-widest">{item.t}</h4>
          <p className="text-xs text-zinc-500 mt-1">{item.d}</p>
        </div>
      </div>
    ))}
  </div>
</div>


{/* SECCIÓN DE PROCESO */}
<section className="py-24 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-black italic uppercase mb-16 tracking-tighter text-center">
      Metodología de <span className="text-lime-400">Alto Impacto</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {[
        { step: '01', title: 'Estrategia', desc: 'Definición de objetivos comerciales.' },
        { step: '02', title: 'Diseño', desc: 'Interfaces intuitivas y modernas.' },
        { step: '03', title: 'Dev', desc: 'Código limpio y escalable.' },
        { step: '04', title: 'Go Live', desc: 'Despliegue y optimización final.' }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-zinc-900/30 rounded-3xl border border-white/5">
          <span className="text-fuchsia-500 font-black text-4xl italic opacity-50">{item.step}</span>
          <h3 className="text-xl font-bold uppercase mt-4 mb-2">{item.title}</h3>
          <p className="text-zinc-500 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* SECCIÓN DE FAQ SIMPLE */}
<section className="py-24 px-6 bg-white/[0.01]">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-center text-2xl font-black uppercase italic mb-12">Preguntas <span className="text-fuchsia-500">Frecuentes</span></h2>
    <div className="space-y-4">
      <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
        <h4 className="font-bold text-sm uppercase mb-2">¿Trabajas con clientes fuera de Colombia?</h4>
        <p className="text-zinc-500 text-sm">Sí, desarrollamos proyectos a nivel global con facturación internacional.</p>
      </div>
      <div className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
        <h4 className="font-bold text-sm uppercase mb-2">¿Las webs son administrables?</h4>
        <p className="text-zinc-500 text-sm">Absolutamente. Integramos CMS modernos para que gestiones tu contenido sin tocar código.</p>
      </div>
    </div>
  </div>
</section>



      {/* FORMULARIO DE CONTACTO (FORMSPREE) */}
      <section id="contact" className="py-24 px-6"  >
        <motion.div 
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-zinc-900/50 p-8 md:p-16 rounded-[3rem] border border-white/5 backdrop-blur-sm"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-2 uppercase italic text-lime-400">Solicitar Propuesta</h2>
            <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Recibe una respuesta personalizada en ceo@smartdicom.com</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold text-zinc-600 ml-4">Nombre del Cliente / Empresa</label>
                <input 
                  name="Cliente" 
                  type="text" 
                  required 
                  placeholder="Ej: Juan Pérez" 
                  className="w-full px-8 py-5 rounded-2xl bg-black/50 border border-white/10 focus:border-lime-400 outline-none transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold text-zinc-600 ml-4">Correo Electrónico</label>
                <input 
                  name="Email" 
                  type="email" 
                  required 
                  placeholder="juan@empresa.com" 
                  className="w-full px-8 py-5 rounded-2xl bg-black/50 border border-white/10 focus:border-fuchsia-500 outline-none transition-all"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase font-bold text-zinc-600 ml-4">Detalles del Proyecto</label>
              <textarea 
                name="Mensaje" 
                required 
                rows={4} 
                placeholder="¿Qué tipo de sitio web necesitas y cuáles son tus objetivos?" 
                className="w-full px-8 py-5 rounded-3xl bg-black/50 border border-white/10 focus:border-lime-400 outline-none transition-all"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={loading || submitted}
              className="w-full relative overflow-hidden bg-white text-black font-black uppercase py-6 rounded-2xl transition-all disabled:opacity-70"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                    className="flex items-center justify-center gap-2 text-emerald-600"
                  >
                    <CheckCircle size={20} /> PROPUESTA ENVIADA
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
          © 2026 SMARTDICOM — COLOMBIA
        </p>
      </footer>
    </div>
  );
}