import React, { useState, useEffect } from 'react';

/**
 * App: Sales Page Profesional de Largo Formato
 * Texto íntegro de Francisco González con formato numérico español (Puntos para miles, comas para decimales).
 */
const App: React.FC = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const paymentLink = 'https://fcofrancis.pay.clickbank.net/?cbitems=4';
  const bookImageUrl = "https://i.ibb.co/spzGwZBx/dinero-con-clickbank.png";

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar el botón flotante después de que el usuario haya bajado 600px
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const element = document.getElementById('cta-final');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900 bg-white overflow-x-hidden sans-font">
      
      {/* Botón Flotante (Popup de conversión) */}
      <div className={`fixed bottom-6 right-6 z-[100] transition-all duration-500 transform ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <button 
          onClick={scrollToCTA}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-2xl shadow-[0_10px_40px_rgba(5,150,105,0.4)] flex flex-col items-center transition-all border border-emerald-500/20 active:scale-95 group"
        >
          <span className="text-[10px] uppercase tracking-tighter opacity-90 group-hover:opacity-100 transition-opacity">Acceder ahora por solo</span>
          <span className="text-xl leading-none">$9,99</span>
        </button>
      </div>

      {/* Barra de Urgencia */}
      <div className="bg-blue-900 text-white py-2.5 px-4 text-center text-xs md:text-sm font-bold tracking-widest uppercase sticky top-0 z-50 shadow-md">
        ¡ATENCIÓN! ESTA OFERTA ES POR TIEMPO LIMITADO
      </div>

      <main className="max-w-4xl mx-auto px-6 lg:px-4 py-12 md:py-24">
        
        {/* Headline Principal */}
        <header className="text-center mb-16">
          <p className="text-emerald-700 font-bold tracking-[0.2em] uppercase text-xs mb-6">
            La Verdad que Nadie se Atreve a Contar
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-slate-900 font-black leading-tight mb-8 serif-font">
            Dinero con Clickbank: <br/>
            <span className="text-emerald-900 italic font-normal">El Único Libro Que Te Dirá La Verdad Incómoda Que Necesitas Escuchar</span>
          </h1>
          
          <div className="bg-blue-50 border-2 border-blue-800 p-6 rounded-xl inline-block mb-12">
            <p className="text-blue-900 font-bold text-sm md:text-base uppercase tracking-tighter">
              ADVERTENCIA: Si Buscas Una Fórmula Mágica Para Hacerte Rico En 30 Días, Cierra Esta Página Ahora Mismo
            </p>
          </div>
        </header>

        {/* Hero Image Section */}
        <div className="flex flex-col items-center mb-24">
          <div className="relative group">
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[95%] h-12 bg-black/10 blur-3xl rounded-[100%]"></div>
            <img 
              src={bookImageUrl} 
              alt="Dinero con Clickbank" 
              className="relative z-10 w-[280px] md:w-[400px] h-auto drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2"
            />
          </div>
        </div>

        {/* CARTA DE VENTAS - TEXTO ÍNTEGRO */}
        <article className="prose-editorial text-slate-800 space-y-8 text-lg md:text-xl leading-[1.8] sans-font">
          
          <p className="text-2xl font-bold text-slate-900">Esto no es para ti.</p>
          
          <p>
            Este no es otro de esos ebooks brillantes con promesas vacías y testimonios falsos de personas que aparecen con coches deportivos que no son suyos.
          </p>
          
          <p className="text-3xl font-bold serif-font text-emerald-900 italic">
            Esto es diferente.
          </p>
          
          <p>
            Y si continúas leyendo, entenderás por qué el <span className="bg-yellow-100 px-1 font-bold">96% de las personas</span> que intentan ganar dinero con Clickbank fracasan estrepitosamente... y cómo tú podrías pertenecer al 4% restante.
          </p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8 border-t border-slate-100">
            La Verdad Que Duele: Tu Primer Día En Clickbank Es Un Espejismo
          </h2>
          
          <p>¿Recuerdas la primera vez que abriste Clickbank?</p>
          
          <p>
            Esa sensación de posibilidad infinita. Miles de productos. Comisiones del 50%, 70%, hasta el 90% en algunos casos. Tu mente empezó a hacer cálculos: <span className="italic font-medium">"Si vendo solo 10 unidades al día a $47 con un 70% de comisión..."</span>
          </p>
          
          <p>Te emocionaste.</p>
          
          <p>Y entonces hiciste clic en "Marketplace".</p>
          
          <p className="text-2xl font-bold text-blue-900">Y el mundo se desmoronó.</p>
          
          <p>
            Términos que no entendías: "Gravedad", "Avg $/sale", "Initial $/sale". Productos con nombres extravagantes. Páginas de ventas que parecen sacadas de una feria medieval. Estadísticas que no sabes interpretar.
          </p>
          
          <p className="bg-slate-900 text-white p-8 rounded-2xl text-xl font-bold italic">
            Y en ese preciso momento, cometiste el primer error fatal: Pensaste que el problema era técnico. Que necesitabas "aprender a leer las métricas".
          </p>
          
          <p className="text-xl">Pero no.</p>
          
          <p className="text-xl font-bold">El problema era mucho más profundo, y nadie te lo había dicho.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            El Secreto Sucio De La Industria Que Nadie Quiere Que Sepas
          </h2>
          
          <p>
            Permíteme presentarme. Soy <span className="font-bold border-b-2 border-emerald-500">Francisco González</span>, y durante los últimos años he hecho algo que muy pocos se atreven a hacer en este negocio: he sido completamente transparente.
          </p>
          
          <p>
            He visto cómo funciona esta industria desde dentro. He comprado cursos de $497, $997, incluso uno de $1.997 que prometía "acceso a un método secreto".
          </p>
          
          <p className="text-2xl font-bold text-emerald-900">¿Sabes lo que descubrí?</p>
          
          <p className="italic">Todos dicen lo mismo, con palabras diferentes.</p>
          
          <p>Todos te hablan de:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>"Encuentra un buen nicho"</li>
            <li>"Selecciona productos con alta gravedad"</li>
            <li>"Crea contenido de valor"</li>
            <li>"Construye una lista de email"</li>
          </ul>
          
          <p>Y luego te venden la idea de que su "ángulo" particular, su "perspectiva única", es lo que hará la diferencia.</p>
          
          <p className="text-2xl font-black uppercase text-blue-800">Es mentira.</p>
          
          <p>
            Lo que realmente separa a los que ganan dinero de los que no, no es un "secreto técnico". No es una "fórmula matemática oculta en el panel de Clickbank".
          </p>
          
          <p className="text-xl font-bold">Es algo mucho más simple, y al mismo tiempo, mucho más difícil de aceptar.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            El Error Conceptual Que Arruina El 96% De Los Principiantes (Incluyéndome A Mí Al Principio)
          </h2>
          
          <p>Durante meses, yo fui ese principiante desesperado.</p>
          
          <p>
            Gasté $2.300 en cursos. Pasé 8 horas al día en foros. Probé 37 productos diferentes de Clickbank.
          </p>
          
          <p className="bg-blue-50 p-6 border-l-4 border-blue-800">
            Mis resultados después de 6 meses: $417 en comisiones. Una pérdida neta de casi $2.000 si cuentas lo que invertí en cursos y anuncios.
          </p>
          
          <p>Me sentí estafado. Engañado. Pensé en rendirme.</p>
          
          <p>Hasta que una noche, frustrado, hice algo radical: dejé de buscar "qué hacer" y empecé a preguntarme "por qué nada funcionaba".</p>
          
          <p>Y ahí, en medio de mi frustración, encontré el patrón.</p>
          
          <p>Todos los que fracasan en Clickbank (incluyéndome en ese momento) cometen el mismo error conceptual:</p>
          
          <p className="text-3xl font-bold text-center py-10 serif-font text-slate-900">
            Creen que Clickbank es una plataforma para <span className="underline decoration-blue-800">"vender productos"</span>.
          </p>
          
          <p>Y ese error de concepto es tan profundo, tan fundamental, que arruina todo lo que viene después.</p>
          
          <p>Porque si Clickbank fuera solo una plataforma para vender productos, entonces:</p>
          <ul className="list-disc pl-6 space-y-2 opacity-80">
            <li>Tu trabajo sería encontrar "productos calientes"</li>
            <li>Tu habilidad sería "promocionar agresivamente"</li>
            <li>Tu éxito dependería de "encontrar el truco de marketing correcto"</li>
          </ul>
          
          <p className="font-bold">Y así es exactamente como opera el 96% que fracasa.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            La Reconfiguración Mental: Lo Que Clickbank Realmente Es (Y Por Qué Esto Cambia Todo)
          </h2>
          
          <p className="text-2xl font-bold text-emerald-900">Clickbank no es una plataforma para vender productos.</p>
          
          <p className="text-2xl font-bold italic">Clickbank es una plataforma de resolución de problemas emocionales.</p>
          
          <p>Piénsalo:</p>
          
          <p>¿Alguien compra un curso de "cómo perder 10kg en 30 días" porque quiere "información sobre dietas"?</p>
          
          <p className="font-bold">No.</p>
          
          <p>Compra porque se siente inseguro/a cuando se mira al espejo. Porque teme el juicio de los demás. Porque ha fracasado en intentos anteriores y necesita esperanza.</p>
          
          <p>¿Alguien compra un curso de "cómo ganar $5.000 al mes desde casa" porque quiere "conocimiento financiero"?</p>
          
          <p className="font-bold">No.</p>
          
          <p>Compra porque tiene miedo al futuro. Porque se siente atrapado en un trabajo que odia. Porque quiere proveer mejor para su familia y no sabe cómo.</p>
          
          <p className="bg-emerald-50 p-8 rounded-xl border-emerald-200 border text-emerald-900 font-medium">
            Cada producto en Clickbank - los buenos, los reales, los que realmente funcionan - no vende "características". Venden transformación emocional.
          </p>
          
          <p>Y cuando entendí esto, todo cambió.</p>
          
          <p>De repente, mi enfoque ya no era "¿qué producto tiene la mejor comisión?" sino "¿qué problema emocional resuelve este producto tan bien que la gente pagará por él?"</p>
          
          <p>De "¿cómo promociono esto?" a "¿cómo comunico esta transformación de manera que resuene con el dolor de mi audiencia?"</p>
          
          <p>Este cambio de mentalidad no me llegó en un curso de $997. No me lo reveló un gurú en un webinar. Me costó $2.300 en cursos fallidos y 8 meses de frustración descubrirlo.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            La Paradoja Del Afiliado Exitoso: Menos Es Más
          </h2>
          
          <p>Con esta nueva mentalidad, empecé de cero. O más bien, reinicié todo lo que creía saber.</p>
          
          <p>Y los resultados fueron... contradictorios al principio.</p>
          
          <p><span className="font-bold">Mes 1:</span> En lugar de probar 10 productos como solía hacer, elegí solo UNO. Un curso sobre ansiedad social. No porque tuviera la comisión más alta (45%, bastante promedio), sino porque entendí profundamente el problema emocional que resolvía.</p>
          
          <p><span className="font-bold">Mes 2:</span> En lugar de crear 20 piezas de contenido superficial, creé TRES artículos profundos. No hablaban del producto. Hablaban del DOLOR: "Cómo sobrevivir a una reunión social cuando sientes que todos te juzgan", "La mentira que te han contado sobre la confianza social", "Por qué decir 'solo sé tú mismo' es el peor consejo para alguien con ansiedad social".</p>
          
          <p><span className="font-bold text-emerald-700 underline">Mes 3: Recibí mi primera venta. $32,40 en comisión.</span></p>
          
          <p>No era mucho, pero era DIFERENTE. Por primera vez, no había "promocionado" un producto. Había conectado un problema real con una solución real.</p>
          
          <p><span className="font-bold">Mes 6:</span> Tenía ventas consistentes de ese mismo producto. Entre $200 y $400 mensuales. De UN solo producto. Con TRES piezas de contenido.</p>
          
          <p><span className="font-bold">Mes 12:</span> Había escalado el método a otros tres nichos. Mis ingresos mensuales superaban los $2.000. Todo sin haber gastado un dólar en anuncios. Todo basado en ese principio fundamental: Clickbank es una plataforma de resolución de problemas emocionales, no de venta de productos.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            El Problema: ¿Por Qué Nadie Enseña Esto?
          </h2>
          
          <p>Aquí está la parte incómoda: La mayoría de los "gurús" no enseñan este enfoque porque:</p>
          
          <ol className="list-decimal pl-6 space-y-4">
            <li><span className="font-bold">No es sexi:</span> No puedes hacer un webinar llamativo con titulares como "¡Gana $10.000 en una semana con este TRUCO!"</li>
            <li><span className="font-bold">Requiere trabajo real:</span> Entender problemas emocionales requiere empatía, investigación, conexión humana. No es solo "copia este funnel".</li>
            <li><span className="font-bold">No genera tantas ventas inmediatas:</span> Vender cursos caros es más fácil con promesas de "resultados rápidos".</li>
            <li><span className="font-bold">La mayoría ni siquiera lo comprende:</span> Muchos "expertos" simplemente repiten lo que han escuchado, sin entender la psicología profunda.</li>
          </ol>
          
          <p>Por eso escribí "Dinero con Clickbank".</p>
          
          <p>No porque quisiera crear "otro ebook más". Sino porque estaba cansado de ver a personas con sueños genuinos perder su dinero y su tiempo siguiendo consejos superficiales. Cansado de ver a gente buena fracasar porque nadie les había dicho la verdad fundamental.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 serif-font leading-tight pt-8 text-center bg-emerald-50 p-10 rounded-3xl">
            Lo Que Realmente Encontrarás En "Dinero con Clickbank" (Y Lo Que No)
          </h2>

          <div className="space-y-6 pt-10">
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-emerald-800">CAPÍTULO 1-2: LOS FUNDAMENTOS QUE NADIE TE EXPLICA</h4>
                <ul className="list-disc pl-6 text-slate-600 mt-2">
                  <li>Por qué la mayoría subestima la curva de aprendizaje de Clickbank - La plataforma parece simple, pero tiene complejidades que frustran a principiantes</li>
                  <li>Gravedad: Cómo interpretarla CORRECTAMENTE sin caer en obsesiones - No es la única métrica, pero tampoco es un mito; te enseño a usarla con criterio</li>
                  <li>Las métricas OCULTAS que sí predicen éxito - Combinación de tasa de reembolso, tendencia y calidad de la página de ventas</li>
                  <li>Configuración profesional desde el día 1 - No solo registro, sino seguridad, perfil y herramientas que usarás siempre</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-emerald-800">CAPÍTULO 3: SELECCIÓN ESTRATÉGICA, NO ALEATORIA</h4>
                <ul className="list-disc pl-6 text-slate-600 mt-2">
                  <li>Navegación estratégica del marketplace - Cómo encontrar oportunidades reales entre miles de productos</li>
                  <li>Interpretación INTEGRAL de métricas - Gravedad, tendencia, reembolsos y su relación real</li>
                  <li>Evaluación profesional de páginas de ventas - Lo que funciona vs. lo que solo es bonito</li>
                  <li>Investigación del vendedor y calidad del producto - Tu "due diligence" como afiliado serio</li>
                  <li>Herramientas externas para validar decisiones - Cómo usar datos externos para confirmar oportunidades</li>
                  <li>Análisis de competencia inteligente - Identificar saturación real vs. oportunidades genuinas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-emerald-800">CAPÍTULO 4-5: CONTENIDO QUE CONVIERTE, NO SOLO INFORMAR</h4>
                <ul className="list-disc pl-6 text-slate-600 mt-2">
                  <li>Cómo crear contenido relevante que genere confianza y ventas - Equilibrio entre valor educativo y persuasión</li>
                  <li>Las 3 verificaciones antes de publicar - Relevancia, claridad y llamado a la acción efectivo</li>
                  <li>El principio del valor primero - Por qué educar a tu audiencia te posiciona como referencia</li>
                  <li>Cómo desarrollar un estilo comunicativo auténtico - Encontrar tu tono sin sonar como vendedor genérico</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-emerald-800">CAPÍTULO 6-7: SISTEMATIZACIÓN DEL MARKETING</h4>
                <ul className="list-disc pl-6 text-slate-600 mt-2">
                  <li>Por qué las campañas aisladas tienen vida corta - La importancia de la consistencia sobre la viralidad</li>
                  <li>Cómo construir flujos de trabajo que generen resultados recurrentes - Integración de email, redes y contenido</li>
                  <li>La rutina eficiente de gestión diaria - Métodos para optimizar tu tiempo sin sacrificar calidad</li>
                  <li>Automatización inteligente vs contacto personal - Qué debe automatizarse y qué debe mantenerse humano</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-emerald-800">CAPÍTULO 8-9: OPTIMIZACIÓN Y CRECIMIENTO</h4>
                <ul className="list-disc pl-6 text-slate-600 mt-2">
                  <li>Cómo escalar resultados sin perder calidad en la comunicación - Mantener autenticidad mientras aumentas alcance</li>
                  <li>Consideraciones éticas reales en marketing de afiliados - Transparencia con audiencia y compliance legal</li>
                  <li>Cuándo priorizar calidad sobre comisión - Casos donde un producto inferior con alta comisión daña tu credibilidad</li>
                  <li>Sostenibilidad operativa - Cómo organizarte para evitar el agotamiento</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-emerald-800">CAPÍTULO 10: ESCALANDO CON PERSPECTIVA REAL</h4>
                <ul className="list-disc pl-6 text-slate-600 mt-2">
                  <li>Por qué los primeros ingresos consistentes son más valiosos que spikes ocasionales - Construcción de base sólida</li>
                  <li>Cómo gestionar el trabajo solitario del afiliado digital - Estrategias para mantener motivación y enfoque</li>
                  <li>El balance entre inversión de tiempo y retorno financiero - Análisis real de esfuerzo vs resultados</li>
                  <li>Mi aprendizaje personal: Lo que funciona y lo que no - Lecciones aplicables de mi experiencia</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border-slate-200 border mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-4">LO QUE NO VAS A ENCONTRAR:</h3>
            <ul className="space-y-2 text-slate-600 italic">
              <li>• "Trucos" para engañar algoritmos</li>
              <li>• Fórmulas mágicas de "haz esto y gana X en Y días"</li>
              <li>• Plantillas copia-y-pega para "éxito rápido"</li>
              <li>• Promesas de resultados sin esfuerzo</li>
              <li>• Secreto milagroso alguno</li>
            </ul>
          </div>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            ¿Por Qué $9,99? La Matemática Incómoda
          </h2>
          
          <p>Te voy a ser brutalmente honesto sobre el precio:</p>
          <p className="text-2xl font-bold italic">$9,99 no es un precio. Es una disculpa.</p>
          
          <p>Este libro contiene conocimientos que me costaron:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600">
            <li>$2.300 en cursos inútiles</li>
            <li>8 meses de ingresos perdidos</li>
            <li>Innumerables horas de frustración y duda</li>
            <li>La vergüenza de haber fallado una y otra vez</li>
          </ul>
          
          <p>Si vendiera este libro a su "valor real" basado en lo que me costó aprender estas lecciones, estaría pidiendo al menos $197. Quizás $297.</p>
          
          <p>Pero hay tres razones por las que lo vendo a $9,99:</p>
          <ol className="list-decimal pl-6 space-y-4">
            <li><span className="font-bold">Quiero que sea una decisión sin dolor:</span> A $9,99, es menos de lo que gastas en café esta semana. No necesitas "pensarlo mucho". El riesgo es casi cero.</li>
            <li><span className="font-bold">Creo en el efecto multiplicador:</span> Si esto ayuda a 1.000 personas a empezar correctamente, y cada una gana, aunque sea $500 al mes, eso es medio millón de dólares creados en la economía. Eso vale más para mí que vender 100 copias a $197.</li>
            <li><span className="font-bold">Es un filtro:</span> La gente que busca "soluciones rápidas por $997" no es mi audiencia. Mi audiencia es la persona realista, quizás escéptica, que quiere la verdad, aunque duela, y está dispuesta a empezar con humildad.</li>
          </ol>

          <hr className="my-12 border-slate-100" />

          <div className="bg-emerald-900 text-white p-10 rounded-[40px] shadow-2xl overflow-hidden relative">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 serif-font">El Riesgo Cero (Real, No Retórico)</h2>
              <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed">
                Desde Clickbank te ofrezco una garantía de <span className="text-emerald-400 font-bold underline decoration-wavy">30 días completos</span>.
              </p>
              
              <div className="text-left space-y-4 mb-10 max-w-xl mx-auto text-emerald-50 text-base md:text-lg opacity-90">
                <p>1. Leer el libro completo</p>
                <p>2. Aplicar los principios durante 4 semanas</p>
                <p>3. Ver si tu perspectiva sobre Clickbank cambia</p>
                <p>4. Ver si empiezas a obtener resultados DIFERENTES a lo que has intentado antes</p>
              </div>

              <p className="mb-10 text-emerald-100 italic">
                "Si en cualquier momento dentro de esos 30 días piensas: 'Esto no es lo que esperaba', 'Esto no funciona para mí', o simplemente 'No es mi estilo'... Recibes el 100% de tu dinero de vuelta. Sin preguntas. Sin condiciones. Sin letra pequeña."
              </p>
              
              <button 
                onClick={scrollToCTA}
                className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-black py-6 px-12 rounded-full text-xl md:text-2xl transition-all transform hover:scale-105 shadow-xl animate-pulse-custom"
              >
                OBTENER MI COPIA POR $9,99
              </button>
            </div>
          </div>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            Las Preguntas Incómodas Que Debes Hacerte Ahora Mismo
          </h2>
          
          <div className="space-y-6 text-slate-700 italic border-l-4 border-slate-200 pl-8">
            <p>1. ¿Estás cansado de la superficialidad? De los "consejos" que son obvios, de los "trucos" que no funcionan, de la sensación de estar corriendo en una rueda de hámster.</p>
            <p>2. ¿Prefieres la verdad aunque duela? Aunque signifique admitir que has estado equivocado, que has seguido consejos incorrectos, que has perdido tiempo y dinero.</p>
            <p>3. ¿Estás dispuesto a hacer el trabajo REAL? No el trabajo "ficticio" de copiar y pegar, sino el trabajo profundo de entender personas, problemas, emociones.</p>
            <p>4. ¿Crees que hay una manera mejor? Una manera más humana, más sostenible, más ética de hacer esto.</p>
          </div>
          
          <p className="font-bold pt-4 text-center text-xl">
            Si al menos dos de estas preguntas resonaron contigo, entonces este libro ES para ti.
          </p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            Cómo Funciona Esto (El Proceso Más Sencillo Que Verás Hoy)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-base">
            {[
              "Haz clic en el botón verde (sí, ese que ves abajo)",
              "Serás llevado a la página de pago segura de Clickbank",
              "Introduce tu información de pago - $9,99, menos que una pizza",
              "Acceso inmediato - El libro en PDF, listo para descargar",
              "Comienza con el Capítulo 1 - Especialmente la parte sobre 'resetear tu mentalidad'",
              "Aplica - No leas pasivamente. Toma notas. Haz los ejercicios.",
              "Dentro de 30 días - Evalúa honestamente si cambió tu perspectiva",
              "O... Solicita tu reembolso - Clickbank te devuelve el 100% de tu dinero."
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="flex-shrink-0 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">{idx + 1}</span>
                <p className="m-0 font-medium leading-tight">{step}</p>
              </div>
            ))}
          </div>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8 text-center">
            La Elección Más Extraña De Tu Vida Digital
          </h2>
          
          <p className="text-center max-w-2xl mx-auto text-xl italic">
            Normalmente, las decisiones son: "Compro esto y gano X" o "No lo compro y me ahorro Y". Esta es diferente.
          </p>
          
          <p className="text-center max-w-2xl mx-auto text-xl">
            Esta es: "Invierto $9,99 con riesgo cero para descubrir si todo lo que creía saber sobre Clickbank estaba equivocado" versus "Sigo haciendo lo mismo que el 96% que fracasa, pero al menos no gasté $9,99".
          </p>
          
          <p className="text-center font-bold text-2xl pt-4">¿Qué es más valioso para ti?</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            Mi Promesa Incómoda (La Última Que Haré)
          </h2>
          
          <p>No te prometo que ganarás $10.000 al mes. No te prometo que será fácil. No te prometo que no habrá frustración, duda o momentos de querer rendirte.</p>
          
          <p className="text-2xl font-bold italic border-y-2 border-slate-900 py-10 my-10 text-center leading-relaxed">
            "Te prometo esto: Si lees este libro con mente abierta, si aplicas sus principios fundamentales, nunca más verás Clickbank de la misma manera."
          </p>
          
          <p>Verás oportunidades donde otros ven productos. Verás personas donde otros ven "tráfico". Verás problemas emocionales donde otros ven "nichos de mercado".</p>
          
          <p>Y eso, aunque no lo creas ahora, vale mucho más que $9,99. Vale tu tiempo, tu energía, tu paz mental.</p>

          <hr className="my-12 border-slate-100" />

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif-font leading-tight pt-8">
            El Último Filtro (Y El Más Importante)
          </h2>
          
          <p>Si has llegado hasta aquí, ya has hecho más que el 80% de las personas. El 80% habría cerrado esta página en el primer párrafo cuando dije "esto no es para ti". Tú continuaste.</p>
          
          <p className="text-xl font-bold">Eso me dice algo sobre ti. Que eres diferente. Que estás buscando algo real. Que estás dispuesto a escuchar verdades incómodas.</p>
          
          <p className="text-2xl font-black text-center py-10">
            ¿$9,99 es un precio muy alto para descubrir si has estado equivocado todo este tiempo?
          </p>

          {/* Botón de Cierre Gigante */}
          <div id="cta-final" className="flex flex-col items-center pt-10 pb-20">
            <button 
              onClick={() => window.open(paymentLink, '_blank')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black py-8 px-16 rounded-full text-2xl md:text-4xl transition-all transform hover:scale-105 shadow-[0_25px_60px_rgba(5,150,105,0.4)] mb-8 uppercase tracking-tight"
            >
              ACCEDER A LA VERDAD INCOMODA - $9,99
            </button>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-sm text-center">
              GARANTÍA DE 30 DÍAS • PAGO SEGURO PROCESADO POR CLICKBANK • ACCESO INMEDIATO
            </p>
            
            <div className="mt-12 flex gap-4 grayscale opacity-40">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-8" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6" alt="Paypal" />
            </div>
          </div>
        </article>

        {/* Footer Editorial */}
        <footer className="mt-20 border-t border-slate-200 pt-16 text-center text-slate-500 text-xs md:text-sm sans-font pb-20">
          <div id="cbtb" className="mb-10"></div>
          
          <p className="mb-8 font-bold text-slate-900 text-base">© 2026 Francisco González. Todos los derechos reservados.</p>

          <p className="max-w-3xl mx-auto leading-relaxed opacity-70 px-4 mb-4">
            ClickBank es un comerciante minorista de este producto. CLICKBANK® es una marca registrada de Click Sales, Inc., una corporación de Delaware, situada en 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA. La función de ClickBank como comerciante minorista no constituye respaldo o revisión de este producto.
          </p>
          <p className="max-w-2xl mx-auto opacity-60">
            Este sitio no es parte del sitio web de Facebook or Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
          </p>
        </footer>
      </main>

      {/* Estilos dinámicos */}
      <style>{`
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 0 40px 10px rgba(52, 211, 153, 0.2); }
        }
        .animate-pulse-custom {
          animation: pulse-custom 3s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        .prose-editorial p {
          margin-bottom: 2rem;
        }
        .prose-editorial ul, .prose-editorial ol {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default App;