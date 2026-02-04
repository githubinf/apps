
import React from 'react';

/**
 * Componente principal de la página de ventas.
 * Diseño: Tipografía editorial premium.
 * Objetivo: Conversión y claridad visual.
 */
const App: React.FC = () => {
  const paymentLink = 'https://fcofrancis.pay.clickbank.net/?cbitems=4';
  
  // URL DIRECTA de la imagen del libro (extraída del enlace ibb.co/nqtvcFWd)
  const bookImageUrl = "https://i.ibb.co/SXCZ8tN/dinero-con-clickbank.png";

  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900 bg-slate-50 overflow-x-hidden font-sans">
      {/* Barra de Advertencia Superior */}
      <div className="bg-emerald-900 text-emerald-50 py-3 px-4 text-center text-sm font-semibold tracking-wide uppercase border-b border-emerald-800">
        Advertencia: Solo para personas que buscan un sistema real, no una fórmula mágica.
      </div>

      <main className="max-w-6xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        {/* Encabezado Principal (Hero Section) */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          
          {/* Bloque de Texto (Izquierda) */}
          <div className="flex-[1.2] text-center lg:text-left">
            <p className="text-emerald-700 font-semibold tracking-[0.2em] uppercase text-sm mb-6 font-sans">
              La Verdad que Nadie se Atreve a Contar
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 font-bold leading-[1.1] mb-8 serif">
              Dinero con Clickbank: <br/>
              <span className="text-emerald-900 italic">El Único Libro Que Te Dirá La Verdad Incómoda</span>
            </h1>
            <div className="h-1.5 w-24 bg-emerald-600 mx-auto lg:mx-0 mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-slate-600 italic font-light leading-relaxed max-w-2xl font-sans">
              "La fórmula comprobada para obtener ingresos constantes creando un sistema efectivo y rentable"
            </p>
            
            <div className="mt-10 hidden lg:block">
               <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="bg-emerald-600 text-white px-10 py-5 rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-200 hover:-translate-y-1 font-sans"
              >
                OBTENER MI COPIA AHORA
              </button>
            </div>
          </div>
          
          {/* Bloque de Imagen con Reflejo Premium (Derecha) */}
          <div className="flex-1 flex flex-col items-center lg:items-end relative">
            <div className="relative group">
              {/* Sombra de apoyo en el "suelo" para realismo */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-6 bg-black/20 blur-2xl rounded-[100%] z-0"></div>

              {/* Imagen Principal del Libro */}
              <img 
                src={bookImageUrl} 
                alt="Libro Dinero con Clickbank Mockup 3D" 
                className="relative z-10 w-[280px] md:w-[360px] lg:w-[440px] h-auto drop-shadow-[0_25px_45px_rgba(0,0,0,0.35)] transform transition-all duration-700 group-hover:-translate-y-3 group-hover:rotate-1"
                loading="eager"
                onError={(e) => {
                  // Fallback por si hay problemas de hotlinking
                  (e.target as HTMLImageElement).src = "https://i.ibb.co/v386mG3/67c0062a45d06-image.png";
                }}
              />
              
              {/* Reflejo Decorativo Premium */}
              <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-40 z-0 pointer-events-none overflow-hidden opacity-25 select-none hidden md:block">
                <img 
                  src={bookImageUrl} 
                  className="w-full h-auto scale-y-[-1] blur-[3px] origin-top" 
                  style={{ 
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)' 
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>

        {/* Sección de Introducción: El Gancho */}
        <section className="max-w-4xl mx-auto prose-custom text-slate-800 space-y-8 mb-24">
          <p className="font-bold text-slate-900 text-lg uppercase tracking-widest text-center border-y border-slate-200 py-6 mb-12 font-sans">
            ADVERTENCIA: Si Buscas Una Fórmula Mágica Para Hacerte Rico En 30 Días, Cierra Esta Página Ahora Mismo
          </p>
          
          <p className="font-sans">Esto no es para ti.</p>
          
          <p className="font-sans">
            Este no es otro de esos libros electrónicos brillantes con promesas vacías y testimonios falsos de personas que aparecen con coches deportivos que no son suyos, rentados por un fin de semana solo para filmar un anuncio fraudulento.
          </p>
          
          <p className="text-2xl font-semibold text-slate-900 leading-snug serif italic">
            Esto es diferente.
          </p>
          
          <p className="font-sans">
            Y si continúas leyendo, entenderás por qué el 96,00% de las personas que intentan ganar dinero con esta plataforma de afiliación fracasan estrepitosamente... y cómo tú podrías pertenecer al 4,00% restante que logra construir un patrimonio digital sólido.
          </p>
          
          <hr className="border-slate-200 my-16" />

          <h2 className="text-3xl font-bold text-emerald-900 mt-16 serif">La Verdad Que Duele: Tu Primer Día Es Un Espejismo</h2>
          
          <p className="font-sans">
            ¿Recuerdas la primera vez que abriste el panel de control de esta plataforma? Esa sensación de posibilidad infinita. Miles de productos a tu alcance. Comisiones del 50,00%, 70,00%, hasta el 90,00% en algunos casos excepcionales.
          </p>
          
          <p className="font-sans bg-slate-100 p-8 border-l-4 border-emerald-600 italic">
            "Y en ese preciso momento, cometiste el primer error fatal: Pensaste que el problema era puramente técnico. Que necesitabas 'aprender a leer las métricas'."
          </p>
          
          <p className="font-sans">
            Pero no. El problema era mucho más profundo, mucho más estructural, y absolutamente nadie en toda la red te lo había dicho con la crudeza necesaria.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mt-16 serif">El Secreto Sucio De La Industria Que Nadie Quiere Que Sepas</h2>
          
          <p className="font-sans">
            Permíteme presentarme. Soy Francisco González, y durante los últimos años he hecho algo que muy pocos se atreven a hacer en este negocio: he sido completamente transparente.
          </p>
          
          <p className="text-xl font-semibold italic font-sans">¿Sabes lo que descubrí tras invertir miles de dólares?</p>
          
          <p className="font-sans">
            Todos dicen exactamente lo mismo, simplemente lo envuelven en palabras diferentes para que parezca una novedad revolucionaria.
          </p>

          <hr className="border-slate-200 my-16" />

          {/* Sección de Garantía */}
          <section className="bg-white border-2 border-emerald-600 p-12 rounded-3xl text-center shadow-xl mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 serif">Tu Riesgo Es Cero (Real, No Retórico)</h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto font-sans">
              Estoy tan convencido de la potencia transformadora de este enfoque que te ofrezco una garantía de devolución total de tu dinero durante <span className="font-bold text-emerald-700">30 días completos</span>.
            </p>
            <div className="space-y-4 text-left max-w-md mx-auto inline-block text-slate-700 font-sans">
              <p>✓ Lee el libro completo tranquilamente.</p>
              <p>✓ Empieza a aplicar los principios psicológicos.</p>
              <p>✓ Observa cómo cambia radicalmente tu visión del mercado.</p>
            </div>
            <p className="mt-8 text-slate-600 italic font-sans">
              Si por cualquier motivo decides que esto no es para ti, simplemente solicita el reembolso a ClickBank.
            </p>
          </section>

          {/* Llamada a la Acción Final */}
          <div className="mt-24 bg-emerald-950 text-white p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 serif">Comienza Tu Transformación Hoy</h2>
              <p className="text-emerald-200 text-xl mb-12 max-w-xl mx-auto font-sans">
                Accede ahora a "Dinero con Clickbank" y descubre el sistema que el 96,00% de los afiliados nunca llegará a conocer.
              </p>
              
              <div className="mb-12 font-sans">
                <span className="text-slate-400 line-through text-2xl mr-4">$197,00</span>
                <span className="text-5xl font-bold text-white">$9,99</span>
              </div>

              <button 
                onClick={() => window.open(paymentLink, '_blank')}
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-6 px-12 rounded-full text-2xl transition-all transform hover:scale-105 shadow-lg active:scale-95 font-sans"
              >
                DESCARGAR AHORA
              </button>
              
              <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-emerald-300/70 border-t border-emerald-900/50 pt-8 font-sans">
                <div>Pago 100% Seguro vía ClickBank</div>
                <div>Acceso Digital Inmediato</div>
                <div>Garantía de 30 Días</div>
              </div>
            </div>
          </div>
        </section>

        {/* Pie de Página con Códigos de Confianza */}
        <footer className="text-center text-slate-500 text-sm mt-16 space-y-6 border-t border-slate-200 pt-12 font-sans">
          
          {/* Contenedor para el Trust Badge de ClickBank */}
          <div id="cbtb" className="mb-4"></div>

          <p>© {new Date().getFullYear()} Francisco González. Todos los derechos reservados.</p>
          <p className="max-w-3xl mx-auto leading-relaxed text-xs opacity-70">
            ClickBank es un comerciante minorista de este producto. CLICKBANK® es una marca registrada de Click Sales, Inc., una corporación de Delaware, situada en 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA. La función de ClickBank como comerciante minorista no constituye respaldo, aval o revisión de este producto.
          </p>
        </footer>
      </main>

      {/* Widget Flotante de Precio */}
      <div className="fixed bottom-6 right-6 hidden md:block z-50">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 flex flex-col items-center">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-tighter font-sans">OFERTA LIMITADA</p>
          <p className="text-2xl font-bold text-emerald-700 font-sans">$9,99</p>
          <button 
            onClick={() => window.open(paymentLink, '_blank')}
            className="mt-3 bg-emerald-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors shadow-md font-sans"
          >
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
