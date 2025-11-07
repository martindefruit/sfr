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
    'cta.joinProgram': 'Join the Program',
    'cta.learnMore': 'Learn more',
    'cta.followInstagram': 'Follow on Instagram',

    // Hero
    'hero.kicker': 'Pro Paintball Training',
    'hero.title': 'Train with <span class="text-red">purpose,</span> compete with <span class="text-red">confidence.</span>',

    // Intro
    'intro.title': 'Built to help<br> players <span class="text-red">rise</span>',
    'intro.body': 'SFR is more than a paintball club. It’s a structured, community-driven system where players grow through training, mentorship, and accountability.',

    // Coach
    'coach.prefix': 'Led by professionals who',
    'coach.emphasis': 'live the game',
    'coach.body': 'Ceelos Cortes (X-Factor) leads the SFR program with years of experience in competitive paintball and player development. His approach blends discipline, creativity, and mentorship — helping athletes unlock their full potential both on and off the field.',

    // Why We Train
    'why.title': 'Why we train',
    'why.description': 'The program is designed around one goal: <strong>growth through discipline, consistency, and community support.</strong>',
    'why.learnMore': 'Learn more',
    'why.growth.title': 'Growth',
    'why.growth.description': 'Structured sessions that build skills progressively.',
    'why.community.title': 'Community',
    'why.community.description': 'Train alongside peers and mentors who raise the bar.',
    'why.performance.title': 'Performance',
    'why.performance.description': 'Compete better under pressure through repeatable habits.',

    // Schedule
    'schedule.title': 'Training & field schedule',
    'schedule.lead': 'The field is open for both members and guest. Members access structured training sessions as part of their plan. gues can purchase a 1-time guest pass during open access hours for individual or team practice.',
    'schedule.mobile.monFri': 'Monday & Friday',
    'schedule.mobile.tueSun': 'Tue-Thu & Sat-Sun',
    'schedule.closed': 'Closed',
    'schedule.drills': 'NEO & PRO ONLY <br>(8–10am)',
    'schedule.drillsShort': 'NEO & PRO ONLY',
    'schedule.openPlay': 'Open Play <br>(10am–4pm)',
    'schedule.openPlayShort': 'Open Play',
    'schedule.day.mon': 'Mon',
    'schedule.day.tue': 'Tue',
    'schedule.day.wed': 'Wed',
    'schedule.day.thu': 'Thu',
    'schedule.day.fri': 'Fri',
    'schedule.day.sat': 'Sat',
    'schedule.day.sun': 'Sun',
    'schedule.time.morning': '8am to<br>10am',
    'schedule.time.midday': '10am to<br>4pm',
    'schedule.time.evening': '4pm to<br>6pm',

    // Campus
    'campus.title': 'Supra Campus',
    'campus.description': 'Our home field is designed for competition and growth, with dedicated arenas, weekly and weekend access, and community-built focus.',
    'campus.learnMore': 'Learn more',

    // Memberships
    'memberships.tiers': 'Memberships Tiers',
    'memberships.title': 'Choose your path to progress',
    'memberships.description': 'Our memberships are designed to match your commitment level — from weekend warriors to full-time competitors. Each tier gives you access to structured training, community, and perks that fit your goals.',
    'memberships.perMonth': '/month',
    'memberships.join': 'Join',
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
    'memberships.compare.entryFee': 'Entry Fee',
    'memberships.compare.club.entryFee': '$20',
    'memberships.compare.neo.entryFee': '$15',
    'memberships.compare.pro.entryFee': '$0',
    'memberships.compare.fieldAccess': 'Field Access',
    'memberships.compare.paint': 'Paint',
    'memberships.compare.extendedHours': 'Extended Hours',
    'memberships.compare.byop': 'BYOP',
    'memberships.compare.perks': 'Field + Store Perks',
    'memberships.compare.training': 'Private Training',
    'memberships.compare.none': 'None',
    'memberships.compare.club.fieldAccess': '4 Weekend / 4 Midweek',
    'memberships.compare.club.paint': '$55 Case',
    'memberships.compare.club.byop': '$45 Fee/Case',
    'memberships.compare.club.extendedHours': 'No',
    'memberships.compare.neo.fieldAccess': '8 Weekend / 8 Midweek',
    'memberships.compare.neo.paint': '$50 Case',
    'memberships.compare.neo.byop': '$35 Fee/Case',
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
    'memberships.compare.neo.privateSession': '1x private training (30 min), 10% off',
    'memberships.compare.pro.fieldAccess': 'Unlimited',
    'memberships.compare.pro.paint': '$45 Case',
    'memberships.compare.pro.byop': '$25 Fee/Case',
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
    'memberships.compare.pro.privateSession': '1x private training (1 hr), 20% off',
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
    'community.title': 'A team beyond,<br> the field',
    'community.description': 'The SFR community connects players year-round through our private Circle platform — with chat, training content, and live coaching sessions. It\'s where the game continues when the weekend ends.',
    'community.join': 'Join Our Community',

    // Final CTA
    'finalCta.title': 'Find your level & start your journey',
    'finalCta.join': 'Join the program',

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
    'cta.learnMore': 'Ver más',
    'cta.followInstagram': 'Seguir en Instagram',

    // Hero
    'hero.kicker': 'Entrenamiento profesional de paintball',
    'hero.title': 'Entrena con <span class="text-red">propósito</span>, compite con <span class="text-red">confianza</span>',

    // Intro
    'intro.title': 'Hecho para ayudar a los<br> jugadores a <span class="text-red">crecer</span>',
    'intro.body': 'SFR es más que un club de paintball. Es un sistema estructurado y comunitario donde los jugadores crecen con entrenamiento, mentoría y responsabilidad.',

    // Coach
    'coach.prefix': 'Liderado por profesionales que',
    'coach.emphasis': 'viven el juego',
    'coach.body': 'Ceelos Cortes (X-Factor) lidera el programa SFR con años de experiencia en paintball competitivo y desarrollo de jugadores. Su enfoque mezcla disciplina, creatividad y mentoría para desbloquear el máximo potencial dentro y fuera del campo.',

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

    // Horario
    'schedule.title': 'Horario de entrenamiento y campo',
    'schedule.lead': 'El campo está abierto para miembros e invitados. Los miembros acceden a sesiones estructuradas según su plan. Los invitados pueden adquirir un pase de un día durante los horarios de acceso abierto.',
    'schedule.mobile.monFri': 'Lunes y Viernes',
    'schedule.mobile.tueSun': 'Mar-Jue y Sáb-Dom',
    'schedule.closed': 'Cerrado',
    'schedule.drills': 'SOLO NEO & PRO <br>(8–10am)',
    'schedule.drillsShort': 'SOLO NEO & PRO',
    'schedule.openPlay': 'Juego Abierto <br>(10am–4pm)',
    'schedule.openPlayShort': 'Juego Abierto',
    'schedule.day.mon': 'Lun',
    'schedule.day.tue': 'Mar',
    'schedule.day.wed': 'Mié',
    'schedule.day.thu': 'Jue',
    'schedule.day.fri': 'Vie',
    'schedule.day.sat': 'Sáb',
    'schedule.day.sun': 'Dom',
    'schedule.time.morning': '8am a<br>10am',
    'schedule.time.midday': '10am a<br>4pm',
    'schedule.time.evening': '4pm a<br>6pm',

    // Campus
    'campus.title': 'Campus Supra',
    'campus.description': 'Nuestro campo está diseñado para la competencia y el crecimiento, con áreas dedicadas, acceso semanal y de fin de semana, y un enfoque construido por la comunidad.',
    'campus.learnMore': 'Ver más',

    // Membresías
    'memberships.tiers': 'Niveles de Membresía',
    'memberships.title': 'Elige tu camino al progreso',
    'memberships.description': 'Nuestras membresías se adaptan a tu nivel de compromiso, desde jugadores de fin de semana hasta competidores a tiempo completo. Cada nivel ofrece acceso a entrenamientos estructurados, comunidad y beneficios que se ajustan a tus objetivos.',
    'memberships.perMonth': '/mes',
    'memberships.join': 'Unirse',
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
    'memberships.compare.entryFee': 'Tarifa de Entrada',
    'memberships.compare.club.entryFee': '$20',
    'memberships.compare.neo.entryFee': '$15',
    'memberships.compare.pro.entryFee': '$0',
    'memberships.compare.fieldAccess': 'Acceso al Campo',
    'memberships.compare.paint': 'Pintura',
    'memberships.compare.extendedHours': 'Horarios Extendidos',
    'memberships.compare.byop': 'BYOP',
    'memberships.compare.perks': 'Beneficios de Campo y Tienda',
    'memberships.compare.training': 'Entrenamiento Privado',
    'memberships.compare.none': 'Ninguno',
    'memberships.compare.club.fieldAccess': '4 Fin de Semana / 4 Entre Semana',
    'memberships.compare.club.paint': '$55 Caja',
    'memberships.compare.club.byop': '$45 Tarifa/Caja',
    'memberships.compare.club.extendedHours': 'No',
    'memberships.compare.neo.fieldAccess': '8 Fin de Semana / 8 Entre Semana',
    'memberships.compare.neo.paint': '$50 Caja',
    'memberships.compare.neo.byop': '$35 Tarifa/Caja',
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
    'memberships.compare.neo.privateSession': '1x entrenamiento privado (30 min), 10% descuento',
    'memberships.compare.pro.fieldAccess': 'Ilimitado',
    'memberships.compare.pro.paint': '$45 Caja',
    'memberships.compare.pro.byop': '$25 Tarifa/Caja',
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
    'memberships.compare.pro.privateSession': '1x entrenamiento privado (1 hr), 20% descuento',
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


