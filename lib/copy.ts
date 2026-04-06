// [REEMPLAZAR: FECHA DEL EVENTO] — ej: "Sábado 15 de Febrero, 2026"
// [REEMPLAZAR: NÚMERO_WA_SIN_SIMBOLOS] — ej: 12015550000 (sin + ni espacios)
// [REEMPLAZAR: CUPOS_DISPONIBLES] — número actual de cupos
// [REEMPLAZAR: NOMBRE_INSTRUCTOR]
// [REEMPLAZAR: INICIALES_INSTRUCTOR] — para el avatar de gradiente
// [REEMPLAZAR: X_PROYECTOS_DEPLOYADOS]
// [REEMPLAZAR: X_ALUMNOS_FORMADOS]
// [REEMPLAZAR: X_AÑOS_EXPERIENCIA]
// [REEMPLAZAR: X_PERSONAS_INSCRITAS_SEMANA]

export const EVENT_DATE = "Sábado 25 de Abril, 2026"
export const EVENT_DATE_EN = "Saturday, April 25, 2026"
export const WA_NUMBER = "15513349406" // WhatsApp oficial
export const SPOTS_AVAILABLE = 50 // [REEMPLAZAR: CUPOS_DISPONIBLES]
export const INSTRUCTOR_NAME = "Carlos Riquelme" // [REEMPLAZAR: NOMBRE_INSTRUCTOR]
export const INSTRUCTOR_INITIALS = "CR" // [REEMPLAZAR: INICIALES_INSTRUCTOR]
export const INSTRUCTOR_PROJECTS = "10" // [REEMPLAZAR: X_PROYECTOS_DEPLOYADOS]
export const INSTRUCTOR_STUDENTS = 340 // [REEMPLAZAR: X_ALUMNOS_FORMADOS]
export const INSTRUCTOR_YEARS = "13+" // [REEMPLAZAR: X_AÑOS_EXPERIENCIA]
export const ENROLLED_THIS_WEEK = 23 // [REEMPLAZAR: X_PERSONAS_INSCRITAS_SEMANA]

export const copy = {
  es: {
    // Announcement bar
    announcementBar: `🎓 FORMACIÓN EN VIVO · ${EVENT_DATE} · 10 AM – 12 PM ET · Next.js + IA + Vibe Coding · 2 Horas · De cero a deployado · Solo ${SPOTS_AVAILABLE} estudiantes · $297 Early Bird →`,

    // Navbar
    navLogo: "Build in Nextjs",
    navLinks: [
      { label: "El Método", href: "#metodo" },
      { label: "Programa", href: "#curriculum" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Inscribirse", href: "#form" },
    ],
    navCta: "Asegurar cupo — $297",
    navCountdownLabel: "EB:",

    // Hero
    eyebrow: `🎓 Formación Intensiva · 2 horas · Solo ${SPOTS_AVAILABLE} cupos · NJ · NY · USA`,
    headline: "Domina la habilidad de crear y deployar landing pages/web sites desde $1,500+",
    typewriterPrefix: "Tu próxima landing page está",
    typewriterPhrases: [
      "deployada en producción — construida por ti.",
      "y tú ya sabes cómo cobrar $1,500+ por ella.",
      "porque aprendiste el método de los mejores.",
      "tu nueva habilidad que paga $1,500–$5,000 por proyecto.",
      "construida en 2 horas de formación intensiva.",
    ],
    subheadline: "En este taller en vivo aprenderás el método exacto que usan los developers mejor pagados en USA para crear, deployar y vender landing pages con Next.js, IA y herramientas pro — en tiempo real, contigo, este sábado.",
    trustSignals: [
      { icon: "⚡", text: "2 horas en vivo" },
      { icon: "💼", text: "$1,500+ por proyecto" },
      { icon: "🛡️", text: "Garantía total" },
    ],
    heroCta: "Asegurar mi cupo ($297) →",
    heroCopy: "Aprende · construye · deploya · en un solo sábado · Garantía total si no aprendes nada aplicable",
    heroSecondary: "Ver qué construirás ↓",
    browserUrl: "Build in Nextjs.com ✓ 🔒",
    terminalLines: [
      "$ npx create-next-app@latest mi-landing",
      "✓ Ready in 2.3s",
      "$ vercel deploy",
      "✅ Production: https://mi-landing.vercel.app",
    ],
    vercelBadge: "▲ Deployed to Production",

    // Tech ticker
    tickerPrefix: "Construirás con →",
    tickerSuffix: "🇺🇸 100% en español · For the Latino community in USA",

    // Pain points
    painTitle: "¿Te suena familiar alguno de estos?",
    painPoints: [
      { icon: "💸", title: "El dev más barato que encontraste cobró $800 y tardó 4 semanas" },
      { icon: "🔗", title: "Dependes de alguien más para actualizar tu propio sitio" },
      { icon: "📉", title: "Tus clientes eligen a la competencia porque tienen mejor presencia digital" },
      { icon: "⏳", title: "Llevas meses con esa landing page pendiente mientras pierdes leads" },
      { icon: "💻", title: "Intentaste aprender a programar pero los tutoriales son interminables" },
    ],
    painFeaturedTitle: "Pagaste cursos de programación que te dejaron más confundido que antes",
    painFeaturedBody: "(Los cursos tradicionales te enseñan a programar como en 2015. Este taller te enseña a construir como se hace en 2026.)",

    // Vibe Coding section
    vibeTitle: "El código ya no es la barrera. El método, sí.",
    vibeIntro: "Hoy aprender a construir software no significa memorizar sintaxis. Significa dominar el método para decirle a la IA exactamente qué construir, cómo iterarlo y cuándo está listo para producción. Ese método tiene nombre: Vibe Coding. Y en 3 horas lo vas a dominar.",
    vibeSteps: [
      {
        num: "01",
        title: "Describes exactamente lo que quieres",
        body: "En español o inglés. Sin memorizar sintaxis. Sin setup complicado.",
      },
      {
        num: "02",
        title: "La IA escribe el Next.js completo",
        body: "v0.app, Cursor y Claude generan componentes profesionales en segundos.",
      },
      {
        num: "03",
        title: "Tú refinas, deploya y cobras",
        body: "Sin depender de nadie. Tu código, tu dominio, tu ingreso.",
      },
    ],
    alertTitle: "¿Por qué un taller en vivo de 3 horas enseña más que 20 horas de curso grabado?",
    alertBullets: [
      "Los cursos grabados tienen 73% de abandono antes del módulo 3.",
      "Un taller en vivo fuerza la ejecución inmediata — sin pausa, sin procrastinación.",
      "50 profesionales resolviendo el mismo problema en tiempo real acelera el aprendizaje 4x (Active Learning Framework, MIT).",
      "Cuando terminas, tienes el resultado Y la habilidad. No solo el video.",
    ],

    // Next.js advantage
    nextTitle: "No es solo código. Es la tecnología que usan los gigantes.",
    nextIntro: "Las landing pages que construirás en este taller no son HTML estático. Son aplicaciones Next.js — el mismo framework que usan Netflix, TikTok, Twitch, Hulu, y miles de startups valuadas en millones. Eso cambia el precio que puedes cobrar.",
    nextCards: [
      {
        title: "SEO Nativo",
        body: "Google indexa Next.js de forma nativa. Server-side rendering significa que tu landing page aparece en búsquedas orgánicas sin trucos. Los clientes llegan solos.",
        stat: "73% más tráfico orgánico vs. HTML estático",
        icon: "Search",
      },
      {
        title: "Rendimiento Empresarial",
        body: "Core Web Vitals perfectos por diseño. Velocidad de carga < 2.5s garantizada. Los clientes no esperan — y Google te premia con mejores rankings.",
        stat: "LCP < 2.5s — Puntuación Google: 95+",
        icon: "Zap",
      },
      {
        title: "Tecnología de $Millones",
        body: "Cuando le dices a un cliente que su landing está en Next.js — el mismo stack de Netflix — el precio de $500 se convierte en $1,500 sin objeción.",
        stat: "Usado por Netflix · TikTok · Twitch · Vercel",
        icon: "TrendingUp",
      },
      {
        title: "Deployable en Minutos",
        body: "Vercel + Next.js = de tu código a un dominio real en 3 minutos. No servidores. No hosting complicado. Deploy con un comando. Escala solo.",
        stat: "0 configuración · Deploy en 3 min · Escala solo",
        icon: "Rocket",
      },
    ],
    nextQuote: "Las empresas que más invierten en Next.js no lo hacen por tendencia. Lo hacen porque convierte mejor, rankea mejor y escala sin límite. Tú lo aprenderás en 3 horas.",

    // Curriculum
    curriculumTitle: "Tu sábado, módulo a módulo — 2 horas que cambian tu carrera:",
    learnBadge: "Aprenderás:",
    leaveBadge: "Saldrás con:",
    modules: [
      {
        time: "10:00 AM ET",
        title: "Setup Express con Antigravity + Next.js",
        duration: "20 min",
        learn: "Cómo configurar tu entorno profesional con Next.js 15 y Antigravity desde cero.",
        leave: "Tu proyecto corriendo localmente con stack profesional listo para producción.",
      },
      {
        time: "10:20 AM ET",
        title: "Landing Page con IA — Hero que paraliza el scroll",
        duration: "40 min",
        learn: "La anatomía de un Hero que convierte: jerarquía visual + copy + CTA. Animaciones profesionales con Motion.",
        leave: "Tu primera sección deployada en Vercel — URL real que puedes compartir.",
      },
      {
        time: "11:00 AM ET",
        title: "Formulario conectado a WhatsApp Business + Email automático",
        duration: "30 min",
        learn: "Integrar Resend para emails automáticos de bienvenida y WhatsApp API para conversiones reales.",
        leave: "Landing page completa con formulario funcional que captura leads y los manda a WhatsApp.",
      },
      {
        time: "11:30 AM ET",
        title: "Deploy en Vercel o Cloudflare Pages con dominio propio",
        duration: "30 min",
        learn: "Deploy profesional con HTML/CSS/JS + Next.js. Dominio personalizado. Tu sitio en internet para siempre.",
        leave: "Sitio deployado con dominio propio, indexable en Google, listo para conseguir clientes.",
      },
    ],

    // Value stack
    valueTitle: "Todo lo que construyes y recibes al inscribirte hoy:",
    valueItems: [
      { label: "Acceso al taller en vivo (2 horas) — Landing Page con IA", price: "$397" },
      { label: "Tu landing page deployada con dominio propio", price: "$297" },
      { label: "Formulario conectado a WhatsApp Business", price: "$197" },
      { label: "Email automático de bienvenida (Resend)", price: "$97" },
      { label: "Animaciones profesionales (Motion)", price: "$97" },
      { label: "Grabación privada 7 días", price: "$97" },
      { label: "Comunidad privada de WhatsApp (30 días)", price: "$57" },
      { label: "Q&A en vivo con el instructor", price: "$97" },
    ],
    valueTotalLabel: "Valor total de la formación:",
    valueTotalPrice: "$1,336",
    valueYourLabel: "Tu inversión hoy:",
    valueYourPrice: "$297",
    valueAnchor: "Un dev en NJ cobra $150/hr. 2 horas de consultoría = $300. Tú pagas $297 y aprendes a construirlo tú — para siempre.",

    // Pricing tiers
    pricingTitle: "Elige tu acceso — cupos limitados:",
    pricingTiers: [
      {
        label: "Chamber of Commerce Latino NJ",
        badge: "Miembros",
        price: "$197",
        originalPrice: "$297",
        savings: "Ahorras $100",
        description: "Exclusivo para miembros activos de la Chamber of Commerce Latino New Jersey.",
        cta: "Quiero este precio →",
      },
      {
        label: "Aliados del ecosistema",
        badge: "Aliados",
        price: "$247",
        originalPrice: "$297",
        savings: "Ahorras $50",
        description: "Para asesores de negocios, contadores, coaches y consultores que refieren clientes.",
        cta: "Quiero este precio →",
      },
      {
        label: "Público general",
        badge: "Early Bird",
        price: "$297",
        originalPrice: "$397",
        savings: "Precio sube a $397 pronto",
        description: "Acceso completo al taller. Precio early bird activo mientras haya cupos disponibles.",
        cta: "Asegurar mi cupo →",
        highlighted: true,
      },
    ],

    // Growth hack
    growthTitle: "Trae un amigo y los dos pagan menos:",
    growthBody: "Refiere a un familiar, amigo o colega — cuando ambos se inscriban, cada uno paga solo $197 en lugar de $297. Comparte tu link personalizado y el descuento se aplica automático. Solo disponible para los próximos 10 cupos referidos.",
    growthBadge: "Solo 10 cupos con este precio",
    growthCta: "Obtener mi link de referido →",

    // Payment options
    paymentTitle: "Opciones de pago flexibles:",
    paymentOptions: [
      { label: "Pago completo", detail: "$297 hoy", highlight: false },
      { label: "3 cuotas", detail: "~$99–$107 / mes", highlight: false },
      { label: "Reserva anticipada", detail: "$150 hoy → resto en 2 cuotas hasta el workshop", highlight: true },
    ],

    // Testimonials
    testimonialTitle: "Lo que dicen quienes ya vivieron la formación:",
    testimonials: [
      {
        before: "Había intentado 3 cursos de programación y los abandoné todos...",
        during: "...pero cuando vi al instructor construir el Hero en vivo, de repente todo tenía sentido.",
        after: "A las dos semanas ya había cobrado mi primer cliente $450 en Hackensack, NJ.",
        author: "María R.",
        role: "Freelancer · Nueva Jersey",
      },
      {
        before: "Tenía mi negocio de estética pero sin presencia online. Dependía 100% de Instagram...",
        during: "...en el módulo de SEO entendí por qué Google no me encontraba. Fue un momento 'aha' total.",
        after: "Mi landing en Next.js ahora aparece en Google. Conseguí 3 clientes nuevos el primer mes.",
        author: "Carlos M.",
        role: "Emprendedor · Queens, NY",
      },
      {
        before: "Era diseñadora en Canva. No sabía nada de código. Sentía que el desarrollo web no era para mí...",
        during: "...cuando deployé mi primera URL en Vercel a los 45 minutos, me puse a llorar de emoción.",
        after: "Ahora ofrezco landing pages en Next.js a $800 a restaurantes latinos en mi área.",
        author: "Diana P.",
        role: "Diseñadora → Developer · Paterson, NJ",
      },
    ],
    beforeLabel: "Antes",
    duringLabel: "Durante",
    afterLabel: "Después",
    statsBar: `🎓 ${INSTRUCTOR_STUDENTS}+ alumnos formados · 🌎 NJ · NY · FL · TX · CA · IL · y más · ⭐ 4.9/5 valoración promedio · 💼 $450 ingreso promedio primer mes`,

    // Guarantee
    guaranteeTitle: "Garantía de aprendizaje real",
    guaranteeBody: "Si completas el taller en vivo y al terminar las 2 horas no puedes mostrarme una landing page deployada con tu nombre, te damos acceso liberado al próximo workshop — sin costo. También puedes optar por una gift card para repetir el taller cuando quieras. Tienes múltiples caminos de regreso: no perdiste nada.\n\nNo vendemos acceso a un webinar. Vendemos la certeza de que vas a construir algo que funciona, con tu nombre en internet, el mismo día.",

    // Credibility
    credibilityTitle: "Credibilidad",
    credibilitySubtitle: "Respaldado por experiencia",
    credibilityCards: [
      {
        icon: "Building2",
        title: "Metodología probada",
        body: "El Build Nextjs Landing Pages es una spin-off de Protolylat. Somos una software factory con experiencia real de más de 12 años construyendo productos digitales para clientes reales.",
      },
      {
        icon: "Wrench",
        title: "Fundadores en las trincheras",
        body: "No somos teóricos. Construimos, desplegamos y monetizamos productos todos los días. Enseñamos lo que practicamos.",
      },
      {
        icon: "Star",
        title: "Primera edición exclusiva",
        body: "El Cohort #1 es una oportunidad única: acceso directo a los fundadores, precio de founding member, y la oportunidad de dar forma al programa.",
      },
    ],

    // Instructor
    instructorBio: `Arquitecto de ecosistemas con 12 años innovando en tech. 10 productos construidos. 9 incubaciones impulsadas en Latam. Especializado en el mercado latino: emprendedores, equipos y builders que quieren construir negocios reales con herramientas de frontera.`,
    instructorBadge: "🌎 Founder & CEO",
    instructorStats: [
      { label: "Proyectos deployados", value: `${INSTRUCTOR_PROJECTS}+` },
      { label: "Años de experiencia", value: `${INSTRUCTOR_YEARS}` },
    ],

    // FAQ
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        q: "¿Necesito saber programar para asistir?",
        a: "No. Este taller está diseñado para profesionales sin background técnico. El método Vibe Coding usa IA como copilot para que tú dirijas qué construir, no que escribas cada línea de código.",
      },
      {
        q: "¿Qué pasa si me quedo atrás durante el taller?",
        a: "El instructor hace pauses de sincronización cada 30 minutos. Además, todos los participantes reciben el código base al inicio.",
      },
      {
        q: "¿En qué se diferencia esto de ver un tutorial de YouTube?",
        a: "En un tutorial aprendes mirando. Aquí construyes en tiempo real con 50 personas, con un instructor que responde tus dudas específicas. Esa presión activa consolida el aprendizaje.",
      },
      {
        q: "¿Puedo usar lo que aprenda para mi trabajo actual?",
        a: "Absolutamente. Más del 60% de nuestros alumnos han aplicado las habilidades dentro de su empleo actual o para ofrecer servicios freelance en paralelo.",
      },
      {
        q: "¿Por qué me registra por WhatsApp?",
        a: "Así confirmamos tu cupo inmediatamente, te enviamos el link del taller y los recordatorios. Es más rápido y directo que el email — y podemos responderte cualquier pregunta antes del evento.",
      },
      {
        q: "¿El taller se graba?",
        a: "Hay acceso a grabación privada por 7 días — sin garantía de replay permanente. El taller está diseñado para vivirse en vivo: la energía de grupo y el Q&A en tiempo real son parte del aprendizaje.",
      },
      {
        q: "¿Puedo ofrecer este servicio a clientes después?",
        a: "Sí, y de hecho dedicamos 15 minutos del módulo final específicamente a esto. El código que construyes es 100% tuyo con licencia comercial.",
      },
    ],

    // Form
    formTitle: `Asegura tu cupo — Solo quedan ${SPOTS_AVAILABLE} lugares`,
    formSubtitle: "2 minutos · 100% por WhatsApp · Sin tarjeta de crédito aún",
    step0Title: "¡Reserva tu lugar en 2 minutos!",
    step0Body: `Solo ${SPOTS_AVAILABLE} cupos disponibles. Early Bird: $297`,
    step0Btn: "Empezar →",
    step1Label: "¿Cuál es tu nombre? 👋",
    step1Placeholder: "Tu nombre completo",
    step1Hint: "Presiona Enter ↵ para continuar",
    step2Label: "¿Cuál es tu WhatsApp? 📱",
    step2Sub: "Te enviamos la confirmación y el link del taller aquí",
    step3AccessLabel: "Elige tu acceso — cupos limitados: 🎟️",
    accessTiers: [
      {
        key: "chamber",
        emoji: "🏛️",
        title: "Chamber of Commerce Latino NJ",
        body: "Exclusivo para miembros activos",
        price: "$197",
        originalPrice: "$297",
        savings: "Ahorras $100",
      },
      {
        key: "ally",
        emoji: "🤝",
        title: "Aliados del ecosistema",
        body: "Asesores, contadores, coaches, consultores",
        price: "$247",
        originalPrice: "$297",
        savings: "Ahorras $50",
      },
      {
        key: "general",
        emoji: "🚀",
        title: "Público general",
        body: "Early Bird — precio sube pronto",
        price: "$297",
        originalPrice: "$397",
        savings: "Early Bird activo",
      },
      {
        key: "referral",
        emoji: "👫",
        title: "Trae un amigo y los dos pagan menos",
        body: "Solo 10 cupos con este precio",
        price: "$197 c/u",
        originalPrice: "$297",
        savings: "Solo 10 cupos disponibles",
        badge: "10 cupos",
      },
    ],
    step4Label: "¿Cuál es tu nivel actual con IA y código? 🧠",
    levelCards: [
      { emoji: "🙈", title: "Cero absoluto", body: "Nunca he tocado código" },
      { emoji: "🤖", title: "He jugado con ChatGPT", body: "Sé lo básico de IA" },
      { emoji: "⚡", title: "Ya uso v0 o Cursor", body: "Tengo algo de experiencia" },
    ],
    loadingTexts: ["Verificando disponibilidad...", "Preparando tu lugar...", "¡Listo! Redirigiendo a WhatsApp..."],
    successTitle: (name: string) => `¡Perfecto, ${name}! Revisa tu WhatsApp 💬`,
    successBody: "Te confirmamos tu cupo en menos de 2 horas.",
    successBtn: "Abrir WhatsApp de nuevo →",
    nextBtn: "Continuar →",

    // Final CTA
    finalTitle: "Tu landing page, en producción, este sábado.",
    finalTypewriterPhrases: [
      "2 horas. Tú. Tu código. En vivo.",
      "Sin devs. Sin esperar. La habilidad es tuya.",
      "Sábado 10 AM ET. 50 cupos. ¿Entras?",
    ],
    countdownLabel: "Early Bird $297 termina en:",
    finalCta: "SÍ, QUIERO MI LUGAR POR $297 →",
    finalMicro: "→ Registro por WhatsApp · 3 cuotas de ~$99 disponibles · Reserva por $150 · Garantía total",
    finalSocial: `🔥 ${ENROLLED_THIS_WEEK} personas ya reservaron su lugar esta semana`,

    // Sticky bar
    stickyText: `🔥 Solo ${SPOTS_AVAILABLE} cupos · Early Bird $297 (sube a $397) · Termina en`,
    stickyBtn: "Reservar →",

    // Footer
    footerTagline: "Formación tecnológica para la comunidad latina en USA.",
    footerEventLabel: "Evento",
    footerEventTime: "10 AM – 1 PM ET",
    footerOnline: "100% online y remoto",
    footerLinks: ["Política de privacidad", "Términos", "Contacto"],
    footerWaTitle: "¿Preguntas antes de inscribirte?",
    footerWaBtn: "Chatear por WhatsApp →",
    footerCopy: `© 2026 Build in Nextjs. Evento 100% online. Horario Eastern Time (ET). NJ / NY / USA. Hecho con ❤️ para la comunidad latina.`,

    heroUrgency: {
      banner: "⚡ Early Bird $297 activo — Solo quedan 50 cupos · Sube a $397 después de este sábado",
      wakeupLine1: "¿Cuánto te costó la última landing page que mandaste a hacer?",
      wakeupLine2: "Ahora multiplica eso por cada cliente nuevo que quieras conseguir este año.",
      mathHeader: "> cost-analysis --dependency-mode",
      mathRed: "− Dev externo NJ:  $150/hr × 2 hrs + 4 semanas de espera  =  $300 + tiempo irrecuperable",
      mathGreen: "+ Este taller:     $297 · 2 horas en vivo  =  autonomía técnica para siempre",
      tableTitle: "El impuesto silencioso de depender de terceros",
      tableHeaders: ["Escenario", "Sin Next.js", "Con Next.js (post-taller)"],
      tableRows: [
        ["Nueva campaña / landing", "2 semanas + $500–800 externos", "3 horas + deploy propio"],
        ["SEO de tus activos", "HTML estático — invisible para Google", "SSR nativo — Google te premia"],
        ["Precio de tu servicio", "Estándar de mercado", "Premium justificado técnicamente"],
        ["Dependencia de terceros", "Alta — cuello de botella permanente", "Cero — autónomo en producción"],
      ],
      marqueeLabel: "Lo que dominarás este sábado:",
      marqueeItems: ["Next.js 15", "Vercel", "Tailwind CSS", "v0.app", "Cursor", "Claude AI", "Framer Motion", "Resend"],
      riskTitleNow: "AHORA — CADA SEMANA SIN ESTO",
      riskItemsNow: [
        "📉 Tu competencia ya deployó 3 sites este mes",
        "📉 Cada semana = leads que van a otro lado",
        "📉 El costo de subcontratación se acumula sin ROI",
      ],
      riskTitleFuture: "EN 6 MESES — SI NO ACTÚAS",
      riskItemsFuture: [
        "❌ Next.js será el estándar mínimo, no el diferencial",
        "❌ Quienes ya lo saben cobrarán el doble que tú",
        "❌ Tu brecha técnica habrá crecido 26 semanas más",
      ],
      socialProof1: `🔥 ${ENROLLED_THIS_WEEK} personas ya reservaron su lugar esta semana`,
      socialProof2: `Solo ${SPOTS_AVAILABLE} cupos · Formato en vivo — el Q&A colapsa con más participantes`,
      ctaHeadline: "No estás comprando un taller. Estás comprando autonomía técnica — para siempre.",
      ctaButton: "→ Reservar mi cupo — $297 Early Bird",
      trustLines: [
        "🛡️ Garantía total — si no deployás una landing, entras al siguiente gratis",
        "💳 3 cuotas de ~$99 disponibles · Reserva por $150",
        "📍 Sábado en vivo · NJ / NY · Online disponible",
      ],
      countdownLabel: "Early Bird $297 termina en:",
    },
  },

  en: {
    announcementBar: `🎓 LIVE TRAINING · ${EVENT_DATE_EN} · 10 AM – 12 PM ET · Next.js + AI + Vibe Coding · 2 Hours · Zero to deployed · Only ${SPOTS_AVAILABLE} students · $297 Early Bird →`,

    navLogo: "Build in Nextjs",
    navLinks: [
      { label: "The Method", href: "#metodo" },
      { label: "Program", href: "#curriculum" },
      { label: "Testimonials", href: "#testimonios" },
      { label: "Enroll", href: "#form" },
    ],
    navCta: "Secure my spot — $297",
    navCountdownLabel: "EB:",

    eyebrow: `🎓 Intensive Training · 2 hours · Only ${SPOTS_AVAILABLE} spots · NJ · NY · USA`,
    headline: "Master the skill to build and deploy $1,500+ landing pages and websites",
    typewriterPrefix: "Your next landing page is",
    typewriterPhrases: [
      "deployed to production — built by you.",
      "and you already know how to charge $1,500+ for it.",
      "because you learned the method the best devs use.",
      "your new skill that pays $1,500–$5,000 per project.",
      "built in 2 hours of intensive live training.",
    ],
    subheadline: "In this live workshop you'll learn the exact method used by the highest-paid developers in the USA to build, deploy, and sell landing pages with Next.js, AI, and pro tools — in real time, with you, this Saturday.",
    trustSignals: [
      { icon: "⚡", text: "2 live hours" },
      { icon: "💼", text: "$1,500+ per project" },
      { icon: "🛡️", text: "Full guarantee" },
    ],
    heroCta: "Secure my spot ($297) →",
    heroCopy: "Learn · build · deploy · in a single Saturday · Full guarantee if you don't learn anything applicable",
    heroSecondary: "See what you'll build ↓",
    browserUrl: "Build in Nextjs.com ✓ 🔒",
    terminalLines: [
      "$ npx create-next-app@latest my-landing",
      "✓ Ready in 2.3s",
      "$ vercel deploy",
      "✅ Production: https://my-landing.vercel.app",
    ],
    vercelBadge: "▲ Deployed to Production",

    tickerPrefix: "You'll build with →",
    tickerSuffix: "🇺🇸 100% en español · For the Latino community in USA",

    painTitle: "Do any of these sound familiar?",
    painPoints: [
      { icon: "💸", title: "The cheapest dev you found charged $800 and took 4 weeks" },
      { icon: "🔗", title: "You depend on someone else to update your own website" },
      { icon: "📉", title: "Clients choose your competition because they have better digital presence" },
      { icon: "⏳", title: "You've had that landing page pending for months while losing leads" },
      { icon: "💻", title: "You tried to learn to code but tutorials are endless and confusing" },
    ],
    painFeaturedTitle: "You paid for programming courses that left you more confused than before",
    painFeaturedBody: "(Traditional courses teach you to code like it's 2015. This workshop teaches you to build the way it's done in 2026.)",

    vibeTitle: "Code is no longer the barrier. The method is.",
    vibeIntro: "Learning to build software today doesn't mean memorizing syntax. It means mastering the method to tell AI exactly what to build, how to iterate it, and when it's production-ready. That method has a name: Vibe Coding. And in 3 hours you'll master it.",
    vibeSteps: [
      {
        num: "01",
        title: "You describe exactly what you want",
        body: "In Spanish or English. No syntax memorization. No complicated setup.",
      },
      {
        num: "02",
        title: "AI writes the complete Next.js",
        body: "v0.app, Cursor, and Claude generate professional components in seconds.",
      },
      {
        num: "03",
        title: "You refine, deploy, and charge",
        body: "Without depending on anyone. Your code, your domain, your income.",
      },
    ],
    alertTitle: "Why does a 3-hour live workshop teach more than 20 hours of recorded course?",
    alertBullets: [
      "Recorded courses have 73% abandonment before module 3.",
      "A live workshop forces immediate execution — no pause, no procrastination.",
      "50 professionals solving the same problem in real time accelerates learning 4x (Active Learning Framework, MIT).",
      "When you finish, you have the result AND the skill. Not just the video.",
    ],

    nextTitle: "Not just code. The technology powering the giants.",
    nextIntro: "The landing pages you'll build in this workshop aren't static HTML. They're Next.js applications — the same framework used by Netflix, TikTok, Twitch, Hulu, and thousands of million-dollar startups. That changes what you can charge.",
    nextCards: [
      {
        title: "Native SEO",
        body: "Google indexes Next.js natively. Server-side rendering means your landing page appears in organic searches without tricks. Clients come to you.",
        stat: "73% more organic traffic vs. static HTML",
        icon: "Search",
      },
      {
        title: "Enterprise Performance",
        body: "Perfect Core Web Vitals by design. Load speed < 2.5s guaranteed. Clients don't wait — and Google rewards you with better rankings.",
        stat: "LCP < 2.5s — Google Score: 95+",
        icon: "Zap",
      },
      {
        title: "Million-Dollar Tech",
        body: "When you tell a client their landing is on Next.js — same stack as Netflix — the $500 price becomes $1,500 without objection.",
        stat: "Used by Netflix · TikTok · Twitch · Vercel",
        icon: "TrendingUp",
      },
      {
        title: "Deploy in Minutes",
        body: "Vercel + Next.js = from your code to a real domain in 3 minutes. No servers. No complicated hosting. Deploy with one command. Scales itself.",
        stat: "0 config · Deploy in 3 min · Scales itself",
        icon: "Rocket",
      },
    ],
    nextQuote: "Companies that invest in Next.js don't do it for trends. They do it because it converts better, ranks better, and scales without limits. You'll learn it in 3 hours.",

    curriculumTitle: "Your Saturday, module by module — 2 hours that change your career:",
    learnBadge: "You'll learn:",
    leaveBadge: "You'll leave with:",
    modules: [
      {
        time: "10:00 AM ET",
        title: "Express Setup with Antigravity + Next.js",
        duration: "20 min",
        learn: "How to set up a professional environment with Next.js 15 and Antigravity from scratch.",
        leave: "Your project running locally with a professional stack ready for production.",
      },
      {
        time: "10:20 AM ET",
        title: "Landing Page with AI — Hero that stops the scroll",
        duration: "40 min",
        learn: "The anatomy of a converting Hero: visual hierarchy + copy + CTA. Professional animations with Motion.",
        leave: "Your first section deployed on Vercel — a real URL you can share.",
      },
      {
        time: "11:00 AM ET",
        title: "Form connected to WhatsApp Business + automated email",
        duration: "30 min",
        learn: "Integrate Resend for automatic welcome emails and WhatsApp API for real conversions.",
        leave: "Complete landing page with a working form that captures leads and sends them to WhatsApp.",
      },
      {
        time: "11:30 AM ET",
        title: "Deploy to Vercel or Cloudflare Pages with custom domain",
        duration: "30 min",
        learn: "Professional deploy with HTML/CSS/JS + Next.js. Custom domain. Your site live on the internet forever.",
        leave: "Site deployed with a custom domain, Google-indexable, ready to get clients.",
      },
    ],

    valueTitle: "Everything you build and receive when you enroll today:",
    valueItems: [
      { label: "Live workshop access (2 hours) — Landing Page with AI", price: "$397" },
      { label: "Your landing page deployed with custom domain", price: "$297" },
      { label: "Form connected to WhatsApp Business", price: "$197" },
      { label: "Automatic welcome email (Resend)", price: "$97" },
      { label: "Professional animations (Motion)", price: "$97" },
      { label: "Private recording 7 days", price: "$97" },
      { label: "Private WhatsApp community (30 days)", price: "$57" },
      { label: "Live Q&A with the instructor", price: "$97" },
    ],
    valueTotalLabel: "Total training value:",
    valueTotalPrice: "$1,336",
    valueYourLabel: "Your investment today:",
    valueYourPrice: "$297",
    valueAnchor: "A dev in NJ charges $150/hr. 2 hours of consulting = $300. You pay $297 and learn to build it yourself — forever.",

    // Pricing tiers
    pricingTitle: "Choose your access — limited spots:",
    pricingTiers: [
      {
        label: "Chamber of Commerce Latino NJ",
        badge: "Members",
        price: "$197",
        originalPrice: "$297",
        savings: "You save $100",
        description: "Exclusive for active members of the Chamber of Commerce Latino New Jersey.",
        cta: "Get this price →",
      },
      {
        label: "Ecosystem allies",
        badge: "Allies",
        price: "$247",
        originalPrice: "$297",
        savings: "You save $50",
        description: "For business advisors, accountants, coaches, and consultants who refer clients.",
        cta: "Get this price →",
      },
      {
        label: "General public",
        badge: "Early Bird",
        price: "$297",
        originalPrice: "$397",
        savings: "Price increases to $397 soon",
        description: "Full workshop access. Early bird price active while spots are available.",
        cta: "Secure my spot →",
        highlighted: true,
      },
    ],

    // Growth hack
    growthTitle: "Bring a friend and both pay less:",
    growthBody: "Refer a family member, friend, or colleague — when both of you enroll, each pays only $197 instead of $297. Share your personalized link and the discount applies automatically. Only available for the next 10 referred spots.",
    growthBadge: "Only 10 spots at this price",
    growthCta: "Get my referral link →",

    // Payment options
    paymentTitle: "Flexible payment options:",
    paymentOptions: [
      { label: "Full payment", detail: "$297 today", highlight: false },
      { label: "3 installments", detail: "~$99–$107 / month", highlight: false },
      { label: "Early reserve", detail: "$150 today → rest in 2 installments before the workshop", highlight: true },
    ],

    testimonialTitle: "What those who already went through the training say:",
    testimonials: [
      {
        before: "I had tried 3 programming courses and abandoned all of them...",
        during: "...but when I saw the instructor build the Hero live, suddenly everything made sense.",
        after: "Two weeks later I had already charged my first client $450 in Hackensack, NJ.",
        author: "María R.",
        role: "Freelancer · New Jersey",
      },
      {
        before: "I had my beauty business but no online presence. I depended 100% on Instagram...",
        during: "...in the SEO module I understood why Google couldn't find me. It was a total 'aha' moment.",
        after: "My Next.js landing now appears on Google. I got 3 new clients the first month.",
        author: "Carlos M.",
        role: "Entrepreneur · Queens, NY",
      },
      {
        before: "I was a Canva designer. I knew nothing about code. I felt web development wasn't for me...",
        during: "...when I deployed my first URL on Vercel at the 45-minute mark, I cried from emotion.",
        after: "I now offer Next.js landing pages at $800 to Latino restaurants in my area.",
        author: "Diana P.",
        role: "Designer → Developer · Paterson, NJ",
      },
    ],
    beforeLabel: "Before",
    duringLabel: "During",
    afterLabel: "After",
    statsBar: `🎓 ${INSTRUCTOR_STUDENTS}+ students trained · 🌎 NJ · NY · FL · TX · CA · IL · and more · ⭐ 4.9/5 average rating · 💼 $450 average first-month income`,

    guaranteeTitle: "Real learning guarantee",
    guaranteeBody: "If you complete the live workshop and at the end of 2 hours you can't show me a deployed landing page with your name, we give you free access to the next workshop. You can also opt for a gift card to repeat the training whenever you want. You have multiple paths back — you lose nothing.\n\nWe don't sell webinar access. We sell the certainty that you'll build something that works, with your name on the internet, the same day.",

    // Credibility
    credibilityTitle: "Credibility",
    credibilitySubtitle: "Backed by real experience",
    credibilityCards: [
      {
        icon: "Building2",
        title: "Proven methodology",
        body: "Build Nextjs Landing Pages is a spin-off of Protolylat. We are a software factory with 12+ years of real experience building digital products for real clients.",
      },
      {
        icon: "Wrench",
        title: "Founders in the trenches",
        body: "We are not theorists. We build, deploy, and monetize products every day. We teach what we practice.",
      },
      {
        icon: "Star",
        title: "Exclusive first edition",
        body: "Cohort #1 is a unique opportunity: direct access to the founders, founding member pricing, and the chance to shape the program.",
      },
    ],

    instructorBio: `Ecosystem architect with 12 years of experience in tech innovation. 10 products built. 9 incubations launched in Latin America. Specialized in the Latin American market: entrepreneurs, teams, and builders who want to build real businesses with cutting-edge tools.`,
    instructorBadge: "🌎 Founder & CEO",
    instructorStats: [
      { label: "Deployed projects", value: `${INSTRUCTOR_PROJECTS}+` },
      { label: "Years of experience", value: `${INSTRUCTOR_YEARS}` },
    ],

    faqTitle: "Frequently asked questions",
    faqs: [
      {
        q: "Do I need to know how to code to attend?",
        a: "No. This workshop is designed for professionals without a technical background. The Vibe Coding method uses AI as a copilot so you direct what to build, not write every line of code.",
      },
      {
        q: "What if I fall behind during the workshop?",
        a: "The instructor does sync pauses every 30 minutes. Also, all participants receive the base code at the start.",
      },
      {
        q: "How is this different from watching a YouTube tutorial?",
        a: "In a tutorial you learn by watching. Here you build in real time with 50 people, with an instructor who answers your specific questions. That active pressure consolidates learning.",
      },
      {
        q: "Can I use what I learn at my current job?",
        a: "Absolutely. More than 60% of our students have applied the skills within their current job or to offer freelance services in parallel.",
      },
      {
        q: "Why do you register via WhatsApp?",
        a: "That's how we confirm your spot immediately, send you the workshop link and reminders. It's faster and more direct than email — and we can answer any questions before the event.",
      },
      {
        q: "Is the workshop recorded?",
        a: "There is private recording access for 7 days — no guarantee of permanent replay. The workshop is designed to be experienced live: the group energy and real-time Q&A are part of the learning.",
      },
      {
        q: "Can I offer this service to clients afterward?",
        a: "Yes, and we actually dedicate 15 minutes of the final module specifically to this. The code you build is 100% yours with commercial license.",
      },
    ],

    formTitle: `Secure your spot — Only ${SPOTS_AVAILABLE} spots left`,
    formSubtitle: "2 minutes · 100% via WhatsApp · No credit card yet",
    step0Title: "Reserve your spot in 2 minutes!",
    step0Body: `Only ${SPOTS_AVAILABLE} spots available. Early Bird: $297`,
    step0Btn: "Start →",
    step1Label: "What's your name? 👋",
    step1Placeholder: "Your full name",
    step1Hint: "Press Enter ↵ to continue",
    step2Label: "What's your WhatsApp? 📱",
    step2Sub: "We'll send your confirmation and workshop link here",
    step3AccessLabel: "Choose your access — limited spots: 🎟️",
    accessTiers: [
      {
        key: "chamber",
        emoji: "🏛️",
        title: "Chamber of Commerce Latino NJ",
        body: "Exclusive for active members",
        price: "$197",
        originalPrice: "$297",
        savings: "Save $100",
      },
      {
        key: "ally",
        emoji: "🤝",
        title: "Ecosystem allies",
        body: "Advisors, accountants, coaches, consultants",
        price: "$247",
        originalPrice: "$297",
        savings: "Save $50",
      },
      {
        key: "general",
        emoji: "🚀",
        title: "General public",
        body: "Early Bird — price increases soon",
        price: "$297",
        originalPrice: "$397",
        savings: "Early Bird active",
      },
      {
        key: "referral",
        emoji: "👫",
        title: "Bring a friend — both pay less",
        body: "Only 10 spots at this price",
        price: "$197 ea.",
        originalPrice: "$297",
        savings: "Only 10 spots available",
        badge: "10 spots",
      },
    ],
    step4Label: "What's your current level with AI and code? 🧠",
    levelCards: [
      { emoji: "🙈", title: "Absolute zero", body: "Never touched code" },
      { emoji: "🤖", title: "I've played with ChatGPT", body: "I know AI basics" },
      { emoji: "⚡", title: "I already use v0 or Cursor", body: "I have some experience" },
    ],
    loadingTexts: ["Checking availability...", "Preparing your spot...", "Ready! Redirecting to WhatsApp..."],
    successTitle: (name: string) => `Perfect, ${name}! Check your WhatsApp 💬`,
    successBody: "We'll confirm your spot in less than 2 hours.",
    successBtn: "Open WhatsApp again →",
    nextBtn: "Continue →",

    finalTitle: "Your landing page, in production, this Saturday.",
    finalTypewriterPhrases: [
      "2 hours. You. Your code. Live.",
      "No devs. No waiting. The skill is yours.",
      "Saturday 10 AM ET. 50 spots. Are you in?",
    ],
    finalSocial: `🔥 ${ENROLLED_THIS_WEEK} people have already reserved their spot this week`,
    finalMicro: "→ WhatsApp registration · 3 installments of ~$99 available · Reserve for $250 · Full guarantee",

    heroUrgency: {
      banner: "⚡ Early Bird $297 active — Only 50 spots left · Rises to $397 after this Saturday",
      wakeupLine1: "How much did the last landing page you commissioned cost you?",
      wakeupLine2: "Now multiply that by every new client you want to get this year.",
      mathHeader: "> cost-analysis --dependency-mode",
      mathRed: "− External Dev NJ:  $150/hr × 2 hrs + 4 weeks of waiting  =  $300 + unrecoverable time",
      mathGreen: "+ This workshop:  $297 · 2 hours live  =  technical autonomy forever",
      tableTitle: "The silent tax of depending on third parties",
      tableHeaders: ["Scenario", "Without Next.js", "With Next.js (post-workshop)"],
      tableRows: [
        ["New campaign / landing", "2 weeks + $500–800 external", "3 hours + own deploy"],
        ["SEO of your assets", "Static HTML — invisible to Google", "Native SSR — Google rewards you"],
        ["Price of your service", "Market standard", "Technically justified premium"],
        ["Dependency on third parties", "High — permanent bottleneck", "Zero — autonomous in production"],
      ],
      marqueeLabel: "What you will master this Saturday:",
      marqueeItems: ["Next.js 15", "Vercel", "Tailwind CSS", "v0.app", "Cursor", "Claude AI", "Framer Motion", "Resend"],
      riskTitleNow: "NOW — EVERY WEEK WITHOUT THIS",
      riskItemsNow: [
        "📉 Your competition already deployed 3 sites this month",
        "📉 Every week = leads going elsewhere",
        "📉 Subcontracting cost accumulates without ROI",
      ],
      riskTitleFuture: "IN 6 MONTHS — IF YOU DON'T ACT",
      riskItemsFuture: [
        "❌ Next.js will be the minimum standard, not the differentiator",
        "❌ Those who already know it will charge double what you do",
        "❌ Your technical gap will have grown 26 more weeks",
      ],
      socialProof1: `🔥 ${ENROLLED_THIS_WEEK} people have already reserved their spot this week`,
      socialProof2: `Only ${SPOTS_AVAILABLE} spots · Live format — Q&A collapses with more participants`,
      ctaHeadline: "You're not buying a workshop. You're buying technical autonomy — forever.",
      ctaButton: "→ Secure my spot — $297 Early Bird",
      trustLines: [
        "🛡️ Total guarantee — if you don't deploy a landing, the next one is free",
        "💳 3 installments of ~$99 available · Reserve for $150",
        "📍 Saturday live · NJ / NY · Online available",
      ],
      countdownLabel: "Early Bird $297 ends in:",
    },

    stickyText: `🔥 Only ${SPOTS_AVAILABLE} spots · Early Bird $297 (goes to $397) · Ends in`,
    stickyBtn: "Reserve →",

    footerTagline: "Tech training for the Latino community in the USA.",
    footerEventLabel: "Event",
    footerEventTime: "10 AM – 1 PM ET",
    footerOnline: "100% online and remote",
    footerLinks: ["Privacy Policy", "Terms", "Contact"],
    footerWaTitle: "Questions before enrolling?",
    footerWaBtn: "Chat on WhatsApp →",
    footerCopy: `© 2026 Build in Nextjs. 100% online event. Eastern Time (ET). NJ / NY / USA. Made with ❤️ for the Latino community.`,
  },
}

export type Lang = "es" | "en"
export type Copy = typeof copy.es
