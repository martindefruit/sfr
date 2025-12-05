document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme === 'light') root.classList.add('light');

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggle.setAttribute('aria-pressed', String(isLight));
    });
  }

  // Services scroller (kept in case controls are re-enabled)
  const track = document.getElementById('servicesTrack');
  const prev = document.querySelector('.services-btn.prev');
  const next = document.querySelector('.services-btn.next');
  const scrollBy = () => (track?.firstElementChild?.getBoundingClientRect().width || 260) + 20;
  if (track && prev && next) {
    prev.addEventListener('click', () => track.scrollBy({ left: -scrollBy(), behavior: 'smooth' }));
    next.addEventListener('click', () => track.scrollBy({ left: scrollBy(), behavior: 'smooth' }));
  }

  // --- Simple i18n ---
const translations = {
  en: {
    // Navigation
    'nav.memberships': 'Memberships',
    'nav.schedule': 'Field & Schedule',
    'cta.joinToday': 'Join Today',
    'cta.joinProgram': 'become a member',
    'cta.visitField': 'Visit the Field',
    'cta.learnMore': 'Learn more',
    'cta.followInstagram': 'Follow on Instagram',

    // Hero
    'hero.kicker': 'Pro Paintball Training & Campus',
    'hero.title': 'Train with <span class="text-red">purpose,</span> compete with <span class="text-red">confidence.</span>',

    // Intro
    'intro.kicker': 'WELCOME TO SFR',
    'intro.title': 'The Only <span class="text-red">pro</span> paintball program in south florida',
    'intro.body': 'Our athletic program is designed to help you go pro by giving you access to the knowledge to make you better and the facilities to develop your skills. Get unlimited access to the field, private coaching, workout plans, and much more!',

    // Coach
    'coach.title': 'Want to move on the paintball field like Ceelos?',
    'coach.body': 'Sign up for the PRO program and access Ceelo\'s 90-day challenge—designed to push your limits and help you become the best version of yourself, on and off the field. You\'ll follow a structured meal plan and workout program that took him over 10 years to refine—backed by his journey to playing on the top professional teams in the sport.',
    'coach.subtitle': 'We are a field + we have this training system that is run by Ceelos.',
    'coach.cta': 'become a member',

    // Why We Train
    'why.title': 'Why we train',
    'why.description': 'The program is designed around one goal: <strong>growth through discipline, consistency, and community support.</strong>',
    'why.learnMore': 'become a member',
    'why.growth.title': 'Growth',
    'why.growth.description': 'Structured sessions that build skills progressively.',
    'why.community.title': 'Community',
    'why.community.description': 'Train alongside peers and mentors who raise the bar.',
    'why.performance.title': 'Performance',
    'why.performance.description': 'Compete better under pressure through repeatable habits.',

    // Program Wins
    'wins.title': 'TEAMS COACHED TO SUCCESS',
    'wins.description': 'Our member teams have won multiple championships and awards.',
    'wins.achievement1.team': 'SUPRA FILIUS',
    'wins.achievement1.division': 'MVPS 2025 - D5 XBALL',
    'wins.achievement2.team': 'SUPRA FILIUS',
    'wins.achievement2.division': 'D5 XBALL',
    'wins.achievement3.team': 'SUPRA FILIUS',
    'wins.achievement3.division': 'D5 XBALL',

    // Schedule
    'schedule.title': 'Training & field schedule',
    'schedule.lead': 'Available to everyone during Open Play. PRO members have exclusive access during designated training times.',
    'schedule.pricing': 'Entry $20 - Case $50',
    'schedule.mobile.monFri': 'Monday & Friday',
    'schedule.mobile.tueThu': 'Tuesday - Thursday',
    'schedule.mobile.weekend': 'Saturday & Sunday',
    'schedule.closed': 'Closed',
    'schedule.proMembersOnly': 'PRO MEMBERS ONLY <br>(8am–10am)',
    'schedule.proMembersOnlyAfternoon': 'PRO MEMBERS ONLY <br>(10am–4pm)',
    'schedule.proMembersOnlyWeekend': 'PRO MEMBERS ONLY <br>(8am–10am)',
    'schedule.proMembersOnlyShort': 'PRO MEMBERS ONLY',
    'schedule.openPlayWeekend': 'Open Play <br>(10am–4pm)',
    'schedule.openPlayShort': 'Open Play',
    'schedule.day.mon': 'Mon',
    'schedule.day.tue': 'Tue',
    'schedule.day.wed': 'Wed',
    'schedule.day.thu': 'Thu',
    'schedule.day.fri': 'Fri',
    'schedule.day.sat': 'Sat',
    'schedule.day.sun': 'Sun',
    'schedule.time.morning': '8am to<br>10am',
    'schedule.time.afternoon': '10am to<br>4pm',

    // Campus
    'campus.title': 'Supra Campus',
    'campus.description': 'Our home field is designed for competition and growth, with dedicated arenas, weekly and weekend access, and community-built focus.',
    'campus.learnMore': 'how to get there',

    // Memberships
    'memberships.tiers': 'Memberships Tiers',
    'memberships.title': 'Choose your path to progress',
    'memberships.description': 'Our memberships are designed to match your commitment level — from weekend warriors to full-time competitors. Each tier gives you access to structured training, community, and perks that fit your goals.',
    'memberships.perMonth': '/month',
    'memberships.join': 'become a member',
    'memberships.joinPro': 'become a member',
    'memberships.plan.club': 'Club',
    'memberships.plan.club.desc': 'Entry-level membership for consistent weekend training.',
    'memberships.plan.neo': 'Neo',
    'memberships.plan.neo.desc': 'For dedicated athletes competing regularly.',
    'memberships.plan.pro': 'Pro',
    'memberships.plan.pro.desc': 'Full-access membership for serious competitors.',
    'memberships.feature.fieldAccess': 'Field Access',
    'memberships.feature.basicPerks': 'Basic Perks',
    'memberships.feature.coaching': 'Coaching',
    'memberships.feature.privateCoaching': 'Private Coaching',
    'memberships.feature.premiumPerks': 'Premium Perks',
    'memberships.feature.proCoaching': 'PRO Coaching',
    'memberships.feature.proPerks': 'PRO Perks',
    'memberships.feature.club.fieldAccess': '4 weekend + 4 midweek sessions',
    'memberships.feature.club.basicPerks': 'Cold Water, Online Community',
    'memberships.feature.club.coaching': 'Positional Calls & Drills',
    'memberships.feature.neo.fieldAccess': '8 weekend + 8 midweek sessions',
    'memberships.feature.neo.privateCoaching': 'Monthly evaluations, 1:1 calls, drills',
    'memberships.feature.neo.premiumPerks': 'Premium drinks, Extended Hours',
    'memberships.feature.pro.fieldAccess': 'Unlimited',
    'memberships.feature.pro.proCoaching': 'Private coaching with Ceelos.',
    'memberships.feature.pro.proPerks': 'Same as NEO + much more',

    // Membership Comparison
    'memberships.compare.public': 'Public Players',
    'memberships.compare.pro': 'Pro Members',
    'memberships.compare.entryFee': 'Entry Fee',
    'memberships.compare.public.entryFee': 'Pay per visit',
    'memberships.compare.pro.entryFee': '$10 / Free Weekdays',
    'memberships.compare.fieldAccess': 'Field Access',
    'memberships.compare.public.fieldAccess': 'Open Play hours only',
    'memberships.compare.pro.fieldAccess': 'Unlimited',
    'memberships.compare.paint': 'Paint',
    'memberships.compare.public.paint': 'Standard pricing',
    'memberships.compare.pro.paint': '$45 Case',
    'memberships.compare.byop': 'BYOP',
    'memberships.compare.public.byop': 'Standard fee',
    'memberships.compare.pro.byop': 'BYOP $25',
    'memberships.compare.perks': 'Field + Store Perks',
    'memberships.compare.training': 'Private Training',
    'memberships.compare.none': 'None',
    'memberships.compare.club.fieldAccess': '4 Weekend / 4 Midweek',
    'memberships.compare.club.paint': '$55 Case',
    'memberships.compare.club.byop': 'BYOP $45',
    'memberships.compare.club.extendedHours': 'No',
    'memberships.compare.neo.fieldAccess': '8 Weekend / 8 Midweek',
    'memberships.compare.neo.paint': '$50 Case',
    'memberships.compare.neo.byop': 'BYOP $35',
    'memberships.compare.neo.extendedHours': 'Yes',
    'memberships.compare.neo.perks': 'Premium Perks',
    'memberships.compare.neo.parking': 'Priority Parking',
    'memberships.compare.neo.staging': 'Table Staging',
    'memberships.compare.neo.drinks': 'Free Premium Drinks',
    'memberships.compare.neo.hours': 'Extended Hours',
    'memberships.compare.neo.training': 'Private Coaching',
    'memberships.compare.neo.coreTraining': 'Warm-ups, team skills, communication, drills, situationals',
    'memberships.compare.neo.playerEvaluation': 'Quarterly player evaluation',
    'memberships.compare.neo.coachingCall': 'Weekly coaching call (1 hour)',
    'memberships.compare.neo.privateSession': '1x private training (30 min), 10% additional sessions.',
    'memberships.compare.club.parking': 'General Parking',
    'memberships.compare.club.staging': 'Lot Staging',
    'memberships.compare.club.drinks': 'Cold Water',
    'memberships.compare.pro.fieldAccess': 'Unlimited',
    'memberships.compare.pro.paint': '$45 Case',
    'memberships.compare.pro.byop': 'BYOP $25',
    'memberships.compare.pro.extendedHours': 'Yes',
    'memberships.compare.pro.perks': 'Pro Perks',
    'memberships.compare.pro.parking': 'VIP Parking',
    'memberships.compare.pro.staging': 'Prop Staging',
    'memberships.compare.pro.drinks': 'Free Premium Drink & Snacks',
    'memberships.compare.pro.hours': 'Extended Hours',
    'memberships.compare.pro.training': 'Pro Coaching',
    'memberships.compare.pro.coreTraining': 'Warm-ups, team skills, communication, drills, situationals',
    'memberships.compare.pro.playerEvaluation': 'Monthly player evaluation',
    'memberships.compare.pro.coachingCall': 'Weekly coaching call (1 hour)',
    'memberships.compare.pro.privateSession': '1x private training (1 hr), 20% off additional sessions.',
    'memberships.compare.pro.fitnessAssessment': 'Fitness assessment',
    'memberships.compare.pro.nutritionManagement': 'Nutrition management',
    'memberships.compare.pro.videoBreakdown': 'Video breakdown',
    'memberships.compare.pro.performanceDashboard': 'Performance dashboard',
    'memberships.compare.pro.sfrUnited': 'SFR United eligibility',

    // Tooltips
    'memberships.tooltip.entryFee': 'To be paid on top of the membership fee for access to the field',
    'memberships.tooltip.fieldAccess': 'Access to field per week for each membership tier',
    'memberships.tooltip.paint': 'Paintball prices for each membership tier',
    'memberships.tooltip.byop': 'Bring your own paintballs and pay a fee to use them',
    'memberships.tooltip.extendedHours': 'Access to the field before and after hours',
    'memberships.tooltip.perks': 'Extra perks in the field',
    'memberships.tooltip.training': 'Coaching and training services for each membership tier',

    // Community
    'community.title': 'A team beyond<br> the field',
    'community.description': 'The SFR community connects players year-round through our private Circle platform — with chat, training content, and live coaching sessions. It\'s where the game continues when the weekend ends.',
    'community.join': 'become a member',

    // Final CTA
    'finalCta.title': 'Find your level & start your journey',
    'finalCta.join': 'become a member',

    // PRO Highlight Section
    'proHighlight.title': 'JOIN OUR ATHLETIC PROGRAM',
    'proHighlight.subtitle': 'The ultimate paintball training program designed to take your game to the next level. Come find out if you\'re really cut to be PRO',
    'proHighlight.cardDescription': 'Full-access membership for serious competitors ready to go.',
    'proHighlight.challenge.title': '90-Day Challenge',
    'proHighlight.challenge.description': 'Enroll in Ceelo\'s 90-day challenge with structured meal and workout plans refined over 10 years of professional play.',
    'proHighlight.access.title': 'Extended Field Access',
    'proHighlight.access.description': 'Privileged access to Supra Campus on weekdays and weekend mornings for exclusive training sessions.',
    'proHighlight.coaching.title': 'Pro Coaching',
    'proHighlight.coaching.description': 'Weekly coaching calls, monthly evaluations, private training sessions, and comprehensive performance tracking.',
    'proHighlight.perks.title': 'VIP Perks',
    'proHighlight.perks.description': 'VIP parking, prop staging, free premium drinks & snacks, and extended hours access.',
    'proHighlight.development.title': 'Complete Development',
    'proHighlight.development.description': 'Fitness assessments, nutrition management, video breakdown, performance dashboard, and SFR United eligibility.',
    'proHighlight.ceelos.title': 'Train with Ceelos',
    'proHighlight.ceelos.description': 'Learn from a professional who plays on top teams in the sport. His structured program has been refined over 10 years and is backed by real professional experience.',
    'proHighlight.cta': 'become a member',

    // Services
    'services.title': 'Add on coaching services',
    'services.personalEval': 'Personal<br>Player<br>Evaluation',
    'services.ceelosEval': 'Ceelos<br>Player<br>Evaluation',
    'services.privateTraining': 'Private<br>Training',
    'services.ceelosPrivate': 'Ceelos<br>Private<br>Training',

    // Footer
    'footer.contact': 'Contact',
    'footer.copyright': 'SFR. All rights reserved.',
  },

  es: {
    // Navegación
    'nav.memberships': 'Membresías',
    'nav.schedule': 'Campo y Horarios',
    'cta.joinToday': 'Únete hoy',
    'cta.joinProgram': 'Unirse al programa',
    'cta.visitField': 'Visitar el Campo',
    'cta.learnMore': 'Ver más',
    'cta.followInstagram': 'Seguir en Instagram',

    // Hero
    'hero.kicker': 'Entrenamiento profesional de paintball',
    'hero.title': 'Entrena con <span class="text-red">propósito</span>, compite con <span class="text-red">confianza</span>',

    // Intro
    'intro.kicker': 'Bienvenido a sfr',
    'intro.title': 'El único programa de paintball <span class="text-red">pro</span> en el sur de florida',
    'intro.body': 'Nuestro programa atlético está diseñado para ayudarte a convertirte en pro dándote acceso al conocimiento para mejorarte y las instalaciones para desarrollar tus habilidades. Obtén acceso ilimitado al campo, entrenamiento privado, planes de entrenamiento, y mucho más!',

    // Coach
    'coach.title': '¿Quieres moverte en el campo de paintball como Ceelos?',
    'coach.body': 'Inscríbete en el programa PRO y accede al desafío de 90 días de Ceelo—diseñado para superar tus límites y ayudarte a convertirte en la mejor versión de ti mismo, dentro y fuera del campo. Seguirás un plan estructurado de comidas y programa de entrenamiento que le tomó más de 10 años perfeccionar—respaldado por su trayectoria jugando en los mejores equipos profesionales del deporte.',
    'coach.subtitle': 'Somos un campo + tenemos este sistema de entrenamiento que es dirigido por Ceelos.',
    'coach.cta': 'Unirse a Membresía PRO',

    // Por qué entrenamos
    'why.title': 'Por qué entrenamos',
    'why.description': 'El programa está diseñado con un solo objetivo: <strong>crecer a través de la disciplina, la constancia y el apoyo de la comunidad.</strong>',
    'why.learnMore': 'Ver más',
    'why.growth.title': 'Crecimiento',
    'why.growth.description': 'Sesiones estructuradas que desarrollan habilidades progresivamente.',
    'why.community.title': 'Comunidad',
    'why.community.description': 'Entrena junto a compañeros y mentores que elevan el nivel.',
    'why.performance.title': 'Rendimiento',
    'why.performance.description': 'Compite mejor bajo presión con hábitos repetibles.',

    // Victorias del Programa
    'wins.title': 'EQUIPOS ENTRENADOS AL ÉXITO',
    'wins.description': 'Nuestros equipos miembros han ganado múltiples campeonatos y premios.',
    'wins.achievement1.team': 'SUPRA FILIUS',
    'wins.achievement1.division': 'MVPS 2025 - D5 XBALL',
    'wins.achievement2.team': 'SUPRA FILIUS',
    'wins.achievement2.division': 'D5 XBALL',
    'wins.achievement3.team': 'SUPRA FILIUS',
    'wins.achievement3.division': 'D5 XBALL',

    // Horario
    'schedule.title': 'Horario de entrenamiento y campo',
    'schedule.lead': 'Disponible para todos durante Juego Abierto. Los miembros PRO tienen acceso exclusivo durante los horarios de entrenamiento designados.',
    'schedule.pricing': 'Entrada $20 - Caja $50',
    'schedule.mobile.monFri': 'Lunes y Viernes',
    'schedule.mobile.tueThu': 'Martes - Jueves',
    'schedule.mobile.weekend': 'Sábado y Domingo',
    'schedule.closed': 'Cerrado',
    'schedule.proMembersOnly': 'SOLO MIEMBROS PRO <br>(8am–10am)',
    'schedule.proMembersOnlyAfternoon': 'SOLO MIEMBROS PRO <br>(10am–4pm)',
    'schedule.proMembersOnlyWeekend': 'SOLO MIEMBROS PRO <br>(8am–10am)',
    'schedule.proMembersOnlyShort': 'SOLO MIEMBROS PRO',
    'schedule.openPlayWeekend': 'Juego Abierto <br>(10am–4pm)',
    'schedule.openPlayShort': 'Juego Abierto',
    'schedule.day.mon': 'Lun',
    'schedule.day.tue': 'Mar',
    'schedule.day.wed': 'Mié',
    'schedule.day.thu': 'Jue',
    'schedule.day.fri': 'Vie',
    'schedule.day.sat': 'Sáb',
    'schedule.day.sun': 'Dom',
    'schedule.time.morning': '8am a<br>10am',
    'schedule.time.afternoon': '10am a<br>4pm',

    // Campus
    'campus.title': 'Campus Supra',
    'campus.description': 'Nuestro campo está diseñado para la competencia y el crecimiento, con áreas dedicadas, acceso semanal y de fin de semana, y un enfoque construido por la comunidad.',
    'campus.learnMore': 'cómo llegar',

    // Membresías
    'memberships.tiers': 'Niveles de Membresía',
    'memberships.title': 'Elige tu camino al progreso',
    'memberships.description': 'Nuestras membresías están diseñadas para coincidir con tu nivel de compromiso — desde guerreros de fin de semana hasta competidores de tiempo completo. Cada nivel te da acceso a entrenamiento estructurado, comunidad y beneficios que se ajustan a tus objetivos.',
    'memberships.perMonth': '/mes',
    'memberships.join': 'Unirse',
    'memberships.joinPro': 'Unirse a Membresía PRO',
    'memberships.plan.club': 'Club',
    'memberships.plan.club.desc': 'Membresía de nivel básico para entrenamiento consistente los fines de semana.',
    'memberships.plan.neo': 'Neo',
    'memberships.plan.neo.desc': 'Para atletas dedicados que compiten regularmente.',
    'memberships.plan.pro': 'Pro',
    'memberships.plan.pro.desc': 'Membresía de acceso completo para competidores serios.',
    'memberships.feature.fieldAccess': 'Acceso al Campo',
    'memberships.feature.basicPerks': 'Beneficios Básicos',
    'memberships.feature.coaching': 'Entrenamiento',
    'memberships.feature.privateCoaching': 'Entrenamiento Privado',
    'memberships.feature.premiumPerks': 'Beneficios Premium',
    'memberships.feature.proCoaching': 'Entrenamiento PRO',
    'memberships.feature.proPerks': 'Beneficios PRO',
    'memberships.feature.club.fieldAccess': '4 sesiones de fin de semana + 4 entre semana',
    'memberships.feature.club.basicPerks': 'Agua Fría, Comunidad Online',
    'memberships.feature.club.coaching': 'Llamadas Posicionales y Ejercicios',
    'memberships.feature.neo.fieldAccess': '8 sesiones de fin de semana + 8 entre semana',
    'memberships.feature.neo.privateCoaching': 'Evaluaciones mensuales, llamadas 1:1, ejercicios',
    'memberships.feature.neo.premiumPerks': 'Bebidas Premium, Horarios Extendidos',
    'memberships.feature.pro.fieldAccess': 'Ilimitado',
    'memberships.feature.pro.proCoaching': 'Entrenamiento privado con Ceelos.',
    'memberships.feature.pro.proPerks': 'Igual que NEO + mucho más',

    // Comparación de Membresías
    'memberships.compare.public': 'Jugadores Públicos',
    'memberships.compare.pro': 'Miembros PRO',
    'memberships.compare.entryFee': 'Tarifa de Entrada',
    'memberships.compare.public.entryFee': 'Pago por visita',
    'memberships.compare.pro.entryFee': '$10 / Gratis entre Semana',
    'memberships.compare.fieldAccess': 'Acceso al Campo',
    'memberships.compare.public.fieldAccess': 'Solo horarios de juego abierto',
    'memberships.compare.pro.fieldAccess': 'Ilimitado',
    'memberships.compare.paint': 'Pintura',
    'memberships.compare.public.paint': 'Precio estándar',
    'memberships.compare.pro.paint': '$45 Caja',
    'memberships.compare.byop': 'BYOP',
    'memberships.compare.public.byop': 'Tarifa estándar',
    'memberships.compare.pro.byop': 'BYOP $25',
    'memberships.compare.perks': 'Beneficios de Campo y Tienda',
    'memberships.compare.training': 'Entrenamiento Privado',
    'memberships.compare.none': 'Ninguno',
    'memberships.compare.club.fieldAccess': '4 Fin de Semana / 4 Entre Semana',
    'memberships.compare.club.paint': '$55 Caja',
    'memberships.compare.club.byop': 'BYOP $45',
    'memberships.compare.club.extendedHours': 'No',
    'memberships.compare.neo.fieldAccess': '8 Fin de Semana / 8 Entre Semana',
    'memberships.compare.neo.paint': '$50 Caja',
    'memberships.compare.neo.byop': 'BYOP $35',
    'memberships.compare.neo.extendedHours': 'Sí',
    'memberships.compare.neo.perks': 'Beneficios Premium',
    'memberships.compare.neo.parking': 'Estacionamiento Prioritario',
    'memberships.compare.neo.staging': 'Mesa de Preparación',
    'memberships.compare.neo.drinks': 'Bebidas Premium Gratis',
    'memberships.compare.neo.hours': 'Horarios Extendidos',
    'memberships.compare.neo.training': 'Entrenamiento Privado',
    'memberships.compare.neo.coreTraining': 'Calentamientos, habilidades de equipo, comunicación, ejercicios, situaciones',
    'memberships.compare.neo.playerEvaluation': 'Evaluación trimestral del jugador',
    'memberships.compare.neo.coachingCall': 'Llamada de coaching semanal (1 hora)',
    'memberships.compare.neo.privateSession': '1x entrenamiento privado (30 min), 10% sesiones adicionales.',
    'memberships.compare.club.parking': 'Estacionamiento general',
    'memberships.compare.club.staging': 'Preparación en el lote',
    'memberships.compare.club.drinks': 'Agua fría',
    'memberships.compare.pro.fieldAccess': 'Ilimitado',
    'memberships.compare.pro.paint': '$45 Caja',
    'memberships.compare.pro.byop': 'BYOP $25',
    'memberships.compare.pro.extendedHours': 'Sí',
    'memberships.compare.pro.perks': 'Beneficios Pro',
    'memberships.compare.pro.parking': 'Estacionamiento VIP',
    'memberships.compare.pro.staging': 'Preparación de Props',
    'memberships.compare.pro.drinks': 'Bebida Premium y Snacks Gratis',
    'memberships.compare.pro.hours': 'Horarios Extendidos',
    'memberships.compare.pro.training': 'Entrenamiento Pro',
    'memberships.compare.pro.coreTraining': 'Calentamientos, habilidades de equipo, comunicación, ejercicios, situaciones',
    'memberships.compare.pro.playerEvaluation': 'Evaluación mensual del jugador',
    'memberships.compare.pro.coachingCall': 'Llamada de coaching semanal (1 hora)',
    'memberships.compare.pro.privateSession': '1x entrenamiento privado (1 hr), 20% descuento en sesiones adicionales.',
    'memberships.compare.pro.fitnessAssessment': 'Evaluación de condición física',
    'memberships.compare.pro.nutritionManagement': 'Gestión nutricional',
    'memberships.compare.pro.videoBreakdown': 'Análisis de video',
    'memberships.compare.pro.performanceDashboard': 'Panel de rendimiento',
    'memberships.compare.pro.sfrUnited': 'Elegibilidad SFR United',

    // Tooltips (Spanish)
    'memberships.tooltip.entryFee': 'A pagar además de la tarifa de membresía para acceso al campo',
    'memberships.tooltip.fieldAccess': 'Acceso al campo por semana para cada nivel de membresía',
    'memberships.tooltip.paint': 'Precios de paintball para cada nivel de membresía',
    'memberships.tooltip.byop': 'Trae tus propias paintballs y paga una tarifa para usarlas',
    'memberships.tooltip.extendedHours': 'Acceso al campo antes y después del horario regular',
    'memberships.tooltip.perks': 'Beneficios adicionales en el campo',
    'memberships.tooltip.training': 'Servicios de coaching y entrenamiento para cada nivel de membresía',

    // Comunidad
    'community.title': 'Un equipo más allá<br> del campo',
    'community.description': 'La comunidad SFR conecta a los jugadores durante todo el año a través de nuestra plataforma privada Circle, con chat, contenido de entrenamiento y sesiones en vivo. Es donde el juego continúa cuando termina el fin de semana.',
    'community.join': 'Únete a nuestra comunidad',

    // Llamado final
    'finalCta.title': 'Encuentra tu nivel y comienza tu camino',
    'finalCta.join': 'Unirse al programa',

    // Sección de Destacado PRO
    'proHighlight.title': 'Membresía PRO',
    'proHighlight.subtitle': 'El programa definitivo de entrenamiento de paintball diseñado para llevar tu juego al siguiente nivel.',
    'proHighlight.cardDescription': 'Membresía de acceso completo para competidores serios listos para convertirse en PRO.',
    'proHighlight.challenge.title': 'Desafío de 90 Días',
    'proHighlight.challenge.description': 'Inscríbete en el desafío de 90 días de Ceelo con planes estructurados de comidas y entrenamiento perfeccionados durante más de 10 años de juego profesional.',
    'proHighlight.access.title': 'Acceso Extendido al Campo',
    'proHighlight.access.description': 'Acceso privilegiado a Supra Campus entre semana y mañanas de fin de semana para sesiones de entrenamiento exclusivas.',
    'proHighlight.coaching.title': 'Entrenamiento Pro',
    'proHighlight.coaching.description': 'Llamadas de coaching semanales, evaluaciones mensuales, sesiones de entrenamiento privado y seguimiento completo del rendimiento.',
    'proHighlight.pricing.title': 'Mejores Precios',
    'proHighlight.pricing.description': 'Pintura a $45/caja y BYOP a $25—las mejores tarifas disponibles para miembros.',
    'proHighlight.perks.title': 'Beneficios VIP',
    'proHighlight.perks.description': 'Estacionamiento VIP, preparación de props, bebidas premium y snacks gratis, y acceso a horarios extendidos.',
    'proHighlight.development.title': 'Desarrollo Completo',
    'proHighlight.development.description': 'Evaluaciones de condición física, gestión nutricional, análisis de video, panel de rendimiento y elegibilidad para SFR United.',
    'proHighlight.ceelos.title': 'Entrena con Ceelos',
    'proHighlight.ceelos.description': 'Aprende de un profesional que juega en los mejores equipos del deporte. Su programa estructurado ha sido perfeccionado durante más de 10 años y está respaldado por experiencia profesional real.',
    'proHighlight.cta': 'Comienza Tu Camino PRO',

    // Servicios
    'services.title': 'Servicios de entrenamiento adicionales',
    'services.personalEval': 'Evaluación<br>Personal<br>del Jugador',
    'services.ceelosEval': 'Evaluación<br>Ceelos<br>del Jugador',
    'services.privateTraining': 'Entrenamiento<br>Privado',
    'services.ceelosPrivate': 'Entrenamiento<br>Privado<br>con Ceelos',

    // Pie de página
    'footer.contact': 'Contacto',
    'footer.copyright': 'SFR. Todos los derechos reservados.',
  }
};

  function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (typeof val === 'string') {
        el.innerHTML = val;
      }
    });
    localStorage.setItem('lang', lang);
    
    // Update language switcher button text
    const langText = document.getElementById('langText');
    if (langText) {
      langText.textContent = lang === 'en' ? 'English' : 'Español';
    }
  }

  // Initialize language
  const storedLang = localStorage.getItem('lang') || 'en';
  applyTranslations(storedLang);

  // Wire dropdown items
  document.querySelectorAll('.lang-option').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = item.getAttribute('data-lang');
      applyTranslations(lang);
      // Close dropdown
      const dropdown = bootstrap.Dropdown.getInstance(document.getElementById('langSwitcher'));
      if (dropdown) dropdown.hide();
    });
  });

  // Handle comparison table collapse icons
  document.querySelectorAll('.comparison-header[data-bs-toggle="collapse"]').forEach(header => {
    const target = header.getAttribute('data-bs-target');
    const collapse = document.querySelector(target);
    if (collapse) {
      collapse.addEventListener('show.bs.collapse', () => {
        header.setAttribute('aria-expanded', 'true');
      });
      collapse.addEventListener('hide.bs.collapse', () => {
        header.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Handle mobile accordion collapse icons
  document.querySelectorAll('.mobile-accordion-header[data-bs-toggle="collapse"]').forEach(header => {
    const target = header.getAttribute('data-bs-target');
    const collapse = document.querySelector(target);
    if (collapse) {
      collapse.addEventListener('show.bs.collapse', () => {
        header.setAttribute('aria-expanded', 'true');
      });
      collapse.addEventListener('hide.bs.collapse', () => {
        header.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Initialize tooltips and handle translations
  function initializeTooltips() {
    document.querySelectorAll('[data-i18n-tooltip]').forEach(element => {
      const tooltipKey = element.getAttribute('data-i18n-tooltip');
      const currentLang = document.documentElement.getAttribute('lang') || 'en';
      const tooltipText = translations[currentLang][tooltipKey] || '';
      
      // Dispose existing tooltip if any
      const existingTooltip = bootstrap.Tooltip.getInstance(element);
      if (existingTooltip) {
        existingTooltip.dispose();
      }
      
      // Create new tooltip with translated text
      if (tooltipText) {
        new bootstrap.Tooltip(element, {
          title: tooltipText,
          placement: element.getAttribute('data-bs-placement') || 'top',
          trigger: 'hover focus'
        });
      }
    });
  }

  // Initialize tooltips on page load
  initializeTooltips();

  // Update tooltips when language changes
  const originalApplyTranslations = applyTranslations;
  applyTranslations = function(lang) {
    originalApplyTranslations(lang);
    // Reinitialize tooltips with new language
    setTimeout(() => {
      initializeTooltips();
    }, 100);
  };
});


