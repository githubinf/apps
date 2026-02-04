
import React, { useState, useEffect } from 'react';

/**
 * Componente principal de la página de ventas.
 * Diseño: Tipografía editorial, paleta de azules y verdes, sin imágenes.
 * Objetivo: Persuasión de alto nivel y cumplimiento de requisitos lingüísticos.
 */
const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-200 selection:text-emerald-900">
      {/* Barra de Advertencia Superior */}
      <div className="bg-emerald-900 text-emerald-50 py-3 px-4 text-center text-sm font-semibold tracking-wide uppercase border-b border-emerald-800">
        Advertencia: Solo para personas que buscan un sistema real, no una fórmula mágica.
      </div>

      <main className="max-w-4xl mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        {/* Encabezado Principal */}
        <header className="text-center mb-20">
          <p className="text-emerald-700 font-semibold tracking-[0.2em] uppercase text-sm mb-6">
            La Verdad que Nadie se Atreve a Contar
          </p>
          <h1 className="text-4xl md:text-6xl text-slate-900 font-bold leading-tight mb-8">
            Dinero con Clickbank: El Único Libro Que Te Dirá La Verdad Incómoda Que Necesitas Escuchar
          </h1>
          <div className="h-1 w-24 bg-emerald-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-slate-600 italic font-light max-w-2xl mx-auto leading-relaxed">
            "La fórmula comprobada para obtener ingresos constantes creando un sistema efectivo y rentable"
          </p>
        </header>

        {/* Sección de Introducción: El Gancho */}
        <section className="prose-custom text-slate-800 space-y-8 mb-24">
          <p className="font-bold text-slate-900 text-lg uppercase tracking-widest text-center border-y border-slate-200 py-4 mb-12">
            ADVERTENCIA: Si Buscas Una Fórmula Mágica Para Hacerte Rico En 30 Días, Cierra Esta Página Ahora Mismo
          </p>
          
          <p>Esto no es para ti.</p>
          
          <p>
            Este no es otro de esos libros electrónicos brillantes con promesas vacías y testimonios falsos de personas que aparecen con coches deportivos que no son suyos, rentados por un fin de semana solo para filmar un anuncio fraudulento.
          </p>
          
          <p className="text-2xl font-semibold text-slate-900 leading-snug">
            Esto es diferente.
          </p>
          
          <p>
            Y si continúas leyendo, entenderás por qué el 96,00% de las personas que intentan ganar dinero con esta plataforma de afiliación fracasan estrepitosamente... y cómo tú podrías pertenecer al 4,00% restante que logra construir un patrimonio digital sólido.
          </p>
          
          <hr className="border-slate-200 my-16" />

          <h2 className="text-3xl font-bold text-emerald-900 mt-16">La Verdad Que Duele: Tu Primer Día Es Un Espejismo</h2>
          
          <p>
            ¿Recuerdas la primera vez que abriste el panel de control de esta plataforma? Esa sensación de posibilidad infinita. Miles de productos a tu alcance. Comisiones del 50,00%, 70,00%, hasta el 90,00% en algunos casos excepcionales.
          </p>
          
          <p>
            Tu mente empezó a hacer cálculos rápidos, casi febriles: <span className="italic">"Si vendo solo 10 unidades al día a $47 con un 70,00% de comisión..."</span>
          </p>
          
          <p>Te emocionaste. Sentiste que el código de la libertad financiera estaba a un par de pulsaciones de distancia.</p>
          
          <p>Y entonces hiciste la acción definitiva: presionaste el botón del "Mercado".</p>
          
          <p>
            Y en ese preciso instante, el mundo se desmoronó. Te encontraste frente a una muralla de términos que no entendías del todo: "Gravedad", "Promedio por venta", "Venta inicial". Viste productos con nombres extravagantes, páginas de ventas que parecen sacadas de una feria medieval de finales de los años noventa y estadísticas que simplemente no sabías cómo interpretar.
          </p>
          
          <p className="bg-slate-100 p-8 border-l-4 border-emerald-600 italic">
            "Y en ese preciso momento, cometiste el primer error fatal: Pensaste que el problema era puramente técnico. Que necesitabas 'aprender a leer las métricas'."
          </p>
          
          <p>
            Pero no. El problema era mucho más profundo, mucho más estructural, y absolutamente nadie en toda la red te lo había dicho con la crudeza necesaria.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mt-16">El Secreto Sucio De La Industria Que Nadie Quiere Que Sepas</h2>
          
          <p>
            Permíteme presentarme. Soy Francisco González, y durante los últimos años he hecho algo que muy pocos se atreven a hacer en este negocio: he sido completamente transparente, incluso cuando esa transparencia perjudicaba mis propias ventas.
          </p>
          
          <p>
            He visto cómo funciona esta industria desde sus entrañas más oscuras. He comprado cursos de $497, $997, incluso uno de $1.997 que prometía "acceso exclusivo a un método secreto de algoritmos avanzados".
          </p>
          
          <p className="text-xl font-semibold">¿Sabes lo que descubrí tras invertir miles de dólares?</p>
          
          <p>
            Todos dicen exactamente lo mismo, simplemente lo envuelven en palabras diferentes para que parezca una novedad revolucionaria. Todos te bombardean con los mismos pilares desgastados:
          </p>
          
          <ul className="list-disc pl-6 space-y-4">
            <li>"Encuentra un buen nicho de mercado"</li>
            <li>"Selecciona productos con una gravedad superior a 50"</li>
            <li>"Crea contenido que aporte valor"</li>
            <li>"Construye una lista de correos electrónicos"</li>
          </ul>
          
          <p>
            Y luego, con una sonrisa ensayada, te venden la idea de que su "ángulo particular", su "perspectiva única" o su "herramienta automática", es lo que realmente marcará la diferencia entre la pobreza y la riqueza.
          </p>
          
          <p className="text-emerald-800 font-bold text-lg">Es una mentira piadosa en el mejor de los casos, y una estafa en el peor.</p>
          
          <p>
            Lo que realmente separa a los que generan ingresos constantes de los que solo ven ceros en su pantalla no es un "secreto técnico". No es una "fórmula matemática oculta en el panel de control". Es algo mucho más simple y, paradójicamente, mucho más difícil de aceptar para el ego humano.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mt-16">El Error Conceptual Que Arruina Al 96,00% De Los Principiantes</h2>
          
          <p>
            Durante muchos meses, yo fui ese principiante desesperado que no dormía. Gasté exactamente $2.300 en formaciones que no me llevaron a ninguna parte. Pasé 8 horas diarias en foros de discusión, analizando cada palabra de supuestos expertos. Probé 37 productos diferentes, saltando de uno a otro como un náufrago buscando una tabla de salvación.
          </p>
          
          <p>
            Mis resultados después de medio año de esfuerzo agotador: $417 en comisiones brutas. Una pérdida neta de casi $2.000 si sumamos la inversión en cursos y los anuncios pagados que nunca convirtieron.
          </p>
          
          <p>
            Me sentí estafado. Engañado por un sistema que parecía diseñado para enriquecer a los dueños de los productos y a los gurús, pero nunca al afiliado honesto. Pensé seriamente en rendirme y volver a mi empleo convencional.
          </p>
          
          <p>
            Hasta que una noche, sumido en la frustración absoluta, hice algo radical: dejé de buscar desesperadamente "qué hacer" y empecé a preguntarme con sinceridad "por qué nada de lo que hacía funcionaba".
          </p>
          
          <p>
            Y ahí, en medio de ese silencio reflexivo, encontré el patrón. El hilo conductor del fracaso.
          </p>
          
          <p className="text-xl font-medium text-slate-900">
            Todos los que fracasan en este modelo de negocio cometen el mismo error conceptual fundamental: Creen que esta es una plataforma para "vender productos".
          </p>
          
          <p>
            Y ese error de concepto es tan profundo, tan arraigado en nuestra psique consumista, que arruina irremediablemente todo lo que viene después. Porque si tú crees que tu trabajo es solo vender productos, entonces:
          </p>
          
          <ul className="list-decimal pl-6 space-y-4">
            <li>Tu única obsesión será encontrar "productos calientes" que estén de moda.</li>
            <li>Tu única habilidad será la de "promocionar agresivamente" hasta cansar a tu audiencia.</li>
            <li>Tu éxito dependerá enteramente de "encontrar el truco de mercadotecnia del momento" antes de que se sature.</li>
          </ul>
          
          <p>Y así es exactamente como opera el 96,00% que termina abandonando con las manos vacías y el ánimo por los suelos.</p>

          <h2 className="text-3xl font-bold text-emerald-900 mt-16">La Reconfiguración Mental: Lo Que Esto Realmente Es</h2>
          
          <p>
            Entiende esto de una vez por todas: Clickbank no es una plataforma para vender productos físicos o digitales.
          </p>
          
          <p className="text-2xl font-bold text-emerald-700 text-center py-6 border-y-2 border-emerald-100">
            Clickbank es una plataforma de resolución de problemas emocionales profundos.
          </p>
          
          <p>Piénsalo detenidamente con un ejemplo cotidiano:</p>
          
          <p>
            ¿Alguien adquiere un curso de "cómo perder 10 kg en 30 días" simplemente porque desea acumular "información técnica sobre dietas y macronutrientes"? La respuesta es un rotundo no.
          </p>
          
          <p>
            Esa persona compra el curso porque se siente profundamente insegura cuando se mira al espejo cada mañana. Lo compra porque teme, con un nudo en el estómago, el juicio silencioso de los demás. Lo compra porque ha fracasado en innumerables intentos anteriores y necesita, desesperadamente, una brizna de esperanza real.
          </p>
          
          <p>
            ¿Alguien compra un programa de "cómo generar $5.000 al mes desde la comodidad de su hogar" porque quiere "conocimiento financiero académico"? Por supuesto que no.
          </p>
          
          <p>
            Esa persona compra porque el miedo al futuro le impide dormir. Porque se siente asfixiada en un trabajo que drena su energía vital. Porque quiere proveer una vida digna para su familia y siente que el tiempo se le escapa entre las manos.
          </p>
          
          <p>
            Cada producto exitoso en esta plataforma no vende "características técnicas" ni "módulos de vídeo". Venden una transformación emocional completa. Venden el paso del dolor al alivio.
          </p>
          
          <p>
            Y cuando mi cerebro finalmente procesó esta realidad, todo mi sistema de trabajo cambió radicalmente. De repente, mi enfoque ya no era "¿qué producto tiene la comisión más jugosa?", sino "¿qué problema emocional resuelve este producto de forma tan efectiva que las personas estarán agradecidas de pagar por él?".
          </p>
          
          <p>
            Pasé de preguntarme "¿cómo puedo promocionar esto a miles de personas?" a cuestionarme "¿cómo puedo comunicar esta transformación de manera que resuene auténticamente con el dolor real de mi audiencia?".
          </p>
          
          <p className="font-semibold italic">
            Este cambio de mentalidad no me llegó a través de una formación de $997. No me lo reveló un gurú en una conferencia ostentosa. Me costó $2.300 en fracasos y 8 meses de angustia descubrirlo por mi cuenta.
          </p>

          <h2 className="text-3xl font-bold text-emerald-900 mt-16">La Paradoja Del Afiliado Exitoso: Menos Es Más</h2>
          
          <p>
            Con esta nueva estructura mental, decidí borrar todo lo anterior y empezar desde el absoluto cero. Reinicié cada proceso, cada creencia y cada método. Y los resultados iniciales fueron, como mínimo, contradictorios con la sabiduría popular de Internet.
          </p>
          
          <div className="bg-emerald-50 p-10 rounded-xl space-y-6 border border-emerald-100 shadow-sm">
            <div>
              <p className="font-bold text-emerald-800 uppercase tracking-wide">Mes 1</p>
              <p>
                En lugar de dispersar mi energía probando 10 productos diferentes simultáneamente, elegí solo UNO. Era un programa sobre superación de la ansiedad social. No lo elegí por su comisión (que era de un modesto 45,00%), sino porque comprendía íntimamente el abismo emocional que resolvía.
              </p>
            </div>
            <div>
              <p className="font-bold text-emerald-800 uppercase tracking-wide">Mes 2</p>
              <p>
                En lugar de inundar la red con 20 piezas de contenido superficial y ruidoso, redacté únicamente TRES artículos profundos y humanos. No hablaban del producto ni de sus "maravillosas funciones". Hablaban del DOLOR real: "Cómo sobrevivir a una reunión de trabajo cuando sientes que cada mirada te juzga", "La gran mentira sobre la autoconfianza".
              </p>
            </div>
            <div>
              <p className="font-bold text-emerald-800 uppercase tracking-wide">Mes 3</p>
              <p>
                Recibí mi primera comisión real. $32,40 líquidos. No era una cifra impresionante para el mundo exterior, pero para mí era REVOLUCIONARIA. Por primera vez en mi vida, no había "intentado vender" nada. Había conectado un problema punzante con una solución genuina.
              </p>
            </div>
            <div>
              <p className="font-bold text-emerald-800 uppercase tracking-wide">Mes 6</p>
              <p>
                Ya contaba con ventas consistentes y predecibles de ese mismo producto único. Generaba entre $200,00 y $400,00 mensuales. Con un solo producto. Con solo tres piezas de contenido bien diseñadas.
              </p>
            </div>
            <div>
              <p className="font-bold text-emerald-800 uppercase tracking-wide">Mes 12</p>
              <p>
                Había replicado este sistema ético en otros tres nichos de mercado. Mis ingresos mensuales superaban ya los $2.000,00 constantes. Y lo más increíble: todo esto sin haber gastado ni un solo dólar en anuncios invasivos. Todo se basaba en el pilar maestro: resolver problemas, no empujar productos.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-emerald-900 mt-16">El Problema Central: ¿Por Qué Nadie Enseña Esto Con Claridad?</h2>
          
          <p>Aquí llegamos a la parte más incómoda de nuestra conversación:</p>
          
          <p>
            La inmensa mayoría de los supuestos expertos no enseñan este enfoque humano y psicológico por cuatro razones fundamentales que prefieren ocultar:
          </p>
          
          <ol className="list-decimal pl-6 space-y-6">
            <li>
              <span className="font-bold">No es atractivo comercialmente:</span> Es muy difícil estructurar una charla de ventas seductora con titulares como "Entiende el dolor ajeno para prosperar". La gente prefiere escuchar "¡Gana $10.000 en una semana con este truco secreto!".
            </li>
            <li>
              <span className="font-bold">Requiere un esfuerzo intelectual real:</span> Comprender la psicología de los problemas emocionales exige empatía, investigación seria y conexión humana. Es mucho más fácil vender una plantilla que se puede "copiar y pegar" sin pensar.
            </li>
            <li>
              <span className="font-bold">No fomenta la compra impulsiva de herramientas:</span> Cuando entiendes que la clave es la conexión, dejas de comprar programas de automatización innecesarios de $200 al mes. Los gurús ganan mucho dinero recomendando esas herramientas.
            </li>
            <li>
              <span className="font-bold">Ellos mismos no lo comprenden:</span> Muchos "especialistas" son simples repetidores de lo que escucharon en otros cursos de habla inglesa, sin haber bajado nunca al terreno real de la psicología del consumidor hispano.
            </li>
          </ol>
          
          <p>
            Por todo esto decidí escribir "Dinero con Clickbank". No porque tuviera el capricho de añadir un título más a la estantería digital de Amazon o de las librerías electrónicas.
          </p>
          
          <p>
            Lo escribí porque estaba profundamente agotado de ver a personas con sueños nobles y familias que mantener perder su tiempo y sus ahorros siguiendo consejos vacíos. Agotado de ver cómo el talento se desperdiciaba por culpa de una base conceptual errónea.
          </p>

          <hr className="border-slate-200 my-16" />

          {/* Sección de Contenido del Libro */}
          <div className="bg-slate-900 text-slate-100 p-12 rounded-2xl shadow-2xl space-y-12">
            <h2 className="text-4xl font-bold text-emerald-400 text-center">Lo Que Realmente Encontrarás En Este Libro</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-emerald-500 pb-2">Capítulos 1 y 2: El Espejismo Roto</h3>
                <p className="text-slate-300">
                  Desmontaremos pieza por pieza por qué tu intuición inicial sobre este negocio es, con casi total seguridad, el ancla que te mantiene hundido. Analizaremos el mito de la "gravedad" y por qué obsesionarse con ella es una receta segura para el desastre financiero. Te revelaré la única métrica que realmente importa y que, curiosamente, no aparece en tu panel de control principal.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-emerald-500 pb-2">Capítulo 3: La Anatomía Del Dolor</h3>
                <p className="text-slate-300">
                  Te enseñaré mi método personal de 4 pasos para identificar problemas emocionales REALES, no esos que los vendedores se inventan en sus anuncios. Aprenderás a distinguir entre un producto que simplemente "vende humo" y uno que ofrece una "transformación real". Te mostraré cómo realizar una entrevista imaginaria para entender a tu cliente mejor de lo que él mismo se entiende.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-emerald-500 pb-2">Capítulos 4 y 5: El Arte De La Conexión</h3>
                <p className="text-slate-300">
                  Aprenderás a redactar contenido que no parezca publicidad pero que CONVIERTA tres veces más que cualquier anuncio agresivo. Te daré las 3 preguntas críticas que debes hacerte antes de escribir una sola palabra. Exploraremos el principio de "servicio primero" y cómo ayudar desinteresadamente es, irónicamente, la forma más rápida de generar ingresos.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl font-bold border-b border-emerald-500 pb-2">Capítulos 6 y 7: El Sistema Sostenible</h3>
                <p className="text-slate-300">
                  Explicaremos por qué pensar en "campañas aisladas" te condena a una montaña rusa emocional y económica. Construiremos juntos un embudo de ventas natural que funcione con integridad mientras tú te dedicas a otras facetas de tu vida. Diseñaremos tu rutina diaria de 60 minutos para obtener resultados constantes sin quemarte en el proceso.
                </p>
              </div>
            </div>

            <div className="bg-emerald-900/30 p-8 rounded-lg border border-emerald-700/50 mt-12">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 uppercase tracking-widest">Lo Que No Vas A Encontrar (Garantizado):</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-emerald-100/80">
                <li>• "Trucos" para engañar a los algoritmos de búsqueda.</li>
                <li>• Fórmulas mágicas de "hazte rico en una semana".</li>
                <li>• Plantillas para copiar y pegar sin ética ni criterio.</li>
                <li>• Promesas de resultados extraordinarios sin esfuerzo alguno.</li>
                <li>• Estrategias de manipulación psicológica agresiva.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-emerald-900 mt-24">¿Por Qué El Precio De $9,99? La Matemática Incómoda</h2>
          
          <p>
            Te voy a ser brutalmente honesto sobre este punto: vender este conocimiento por $9,99 es, en términos estrictamente comerciales, un error por mi parte. Es casi un regalo.
          </p>
          
          <p>
            Este libro sintetiza una experiencia que me costó exactamente:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>$2.300,00 invertidos en cursos que no sirvieron de nada.</li>
            <li>8 meses de ingresos potenciales perdidos por seguir el camino equivocado.</li>
            <li>Innumerables noches de insomnio, dudas y frustración familiar.</li>
            <li>La vergüenza social de haber fallado públicamente una y otra vez.</li>
          </ul>
          
          <p>
            Si yo valorara este libro por su "valor real de mercado" basado en el ahorro de tiempo y dinero que supone para ti, el precio de etiqueta debería ser de, al menos, $197,00. Quizás incluso $297,00 si incluyera sesiones de consulta.
          </p>
          
          <p>Sin embargo, he decidido mantenerlo en $9,99 por tres razones de peso:</p>
          
          <p>
            <span className="font-bold">1. Eliminación de la barrera de decisión:</span> A este precio, es menos de lo que gastas en un almuerzo rápido o un par de cafés. No necesitas consultarlo con tu almohada ni hacer cábalas financieras. El riesgo económico para ti es, sencillamente, inexistente.
          </p>
          
          <p>
            <span className="font-bold">2. El efecto multiplicador social:</span> Creo firmemente en que si este libro ayuda a solo 1.000 personas a establecer un negocio ético, y cada una de ellas genera aunque sea $500,00 adicionales al mes, habremos inyectado medio millón de dólares mensuales de valor real en las economías de nuestras familias hispanas. Eso es un legado que vale mucho más que unos pocos miles de dólares en mi cuenta.
          </p>
          
          <p>
            <span className="font-bold">3. Un filtro de mentalidad:</span> Las personas que buscan "soluciones mágicas por $997,00" no son mi público objetivo. Mi audiencia es la persona realista, quizás algo escéptica debido a malas experiencias previas, que busca la verdad desnuda y está dispuesta a construir su futuro con humildad y honestidad.
          </p>

          <hr className="border-slate-200 my-16" />

          {/* Sección de Garantía */}
          <section className="bg-white border-2 border-emerald-600 p-12 rounded-3xl text-center shadow-xl mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tu Riesgo Es Cero (Real, No Retórico)</h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Estoy tan convencido de la potencia transformadora de este enfoque que te ofrezco una garantía de devolución total de tu dinero durante <span className="font-bold text-emerald-700">30 días completos</span>.
            </p>
            <div className="space-y-4 text-left max-w-md mx-auto inline-block text-slate-700">
              <p>✓ Lee el libro completo tranquilamente.</p>
              <p>✓ Empieza a aplicar los principios psicológicos.</p>
              <p>✓ Observa cómo cambia radicalmente tu visión del mercado.</p>
              <p>✓ Evalúa si tus resultados empiezan a ser diferentes.</p>
            </div>
            <p className="mt-8 text-slate-600 italic">
              Y si en cualquier momento decides que esto no es para ti, por el motivo que sea, simplemente solicita el reembolso y te devolveremos el 100,00% de tu inversión. Sin preguntas incómodas, sin letras pequeñas, sin esperas.
            </p>
          </section>

          <h2 className="text-3xl font-bold text-emerald-900">Preguntas Que Debes Hacerte Ahora Mismo</h2>
          
          <p>Antes de tomar una decisión, te invito a una breve reflexión interna:</p>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="text-emerald-600 font-bold text-2xl">1.</span>
              <p>¿Estás cansado de la superficialidad de los "consejos" que encuentras en redes sociales y que parecen nunca concretarse en ingresos reales?</p>
            </li>
            <li className="flex gap-4">
              <span className="text-emerald-600 font-bold text-2xl">2.</span>
              <p>¿Prefieres conocer la verdad aunque sea incómoda y te obligue a admitir que has estado siguiendo el camino equivocado hasta ahora?</p>
            </li>
            <li className="flex gap-4">
              <span className="text-emerald-600 font-bold text-2xl">3.</span>
              <p>¿Estás dispuesto a realizar el trabajo REAL de entender a las personas y sus necesidades profundas, en lugar de solo copiar anuncios?</p>
            </li>
          </ul>

          <p className="mt-12">
            Si has respondido afirmativamente a estas preguntas, entonces no tengo ninguna duda: este libro es la pieza del rompecabezas que te ha faltado durante todo este tiempo.
          </p>

          {/* Llamada a la Acción Final */}
          <div className="mt-24 bg-emerald-950 text-white p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">Comienza Tu Transformación Hoy</h2>
              <p className="text-emerald-200 text-xl mb-12 max-w-xl mx-auto">
                Accede ahora a "Dinero con Clickbank" y descubre el sistema que el 96,00% de los afiliados nunca llegará a conocer.
              </p>
              
              <div className="mb-12">
                <span className="text-slate-400 line-through text-2xl mr-4">$197,00</span>
                <span className="text-5xl font-bold text-white">$9,99</span>
              </div>

              <button 
                onClick={() => window.open('https://www.clickbank.com', '_blank')}
                className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold py-6 px-12 rounded-full text-2xl transition-all transform hover:scale-105 shadow-lg active:scale-95"
              >
                ACCEDER A LA VERDAD INCÓMODA
              </button>
              
              <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-emerald-300/70 border-t border-emerald-900/50 pt-8">
                <div>Pago 100,00% Seguro</div>
                <div>Acceso Digital Inmediato</div>
                <div>Garantía de 30 Días</div>
              </div>
            </div>
            
            {/* Decoración sutil de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </div>
        </section>

        {/* Pie de Página */}
        <footer className="text-center text-slate-500 text-sm mt-16 space-y-4 border-t border-slate-200 pt-12">
          <p>© {new Date().getFullYear()} Francisco González. Todos los derechos reservados.</p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Descargo de responsabilidad: Los resultados mencionados son experiencias personales. No garantizamos que obtendrás los mismos resultados, ya que estos dependen enteramente de tu ética de trabajo, disciplina y aplicación correcta de los principios. Este sitio no forma parte de Facebook ni de Google.
          </p>
        </footer>
      </main>

      {/* Widget Flotante de Precio (Para Conversión) */}
      <div className="fixed bottom-6 right-6 hidden md:block">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-200 flex flex-col items-center">
          <p className="text-xs font-bold text-slate-400 uppercase mb-1">Oferta por Tiempo Limitado</p>
          <p className="text-2xl font-bold text-emerald-700">$9,99</p>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="mt-3 bg-emerald-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors"
          >
            Obtener Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
