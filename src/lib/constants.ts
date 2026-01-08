import { ContentDictionary, Language } from './types';

export const CONTENT: Record<Language, ContentDictionary> = {
  en: {
    nav: [
      { id: 'home', label: 'Home', path: '#' },
      { id: 'services', label: 'Services', path: '#services' },
      { id: 'portfolio', label: 'Work', path: '#portfolio' },
      { id: 'contact', label: 'Contact', path: '#contact' },
    ],
    ui: {
      viewDetails: "View Details",
      systemModule: "System Module",
      backToServices: "Back to Services",
      backToJournal: "Back to Journal",
      readyToStart: "Ready to start?",
      share: "Share",
      readMore: "Read More",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
      initializing: "System Initializing...",
      systemLog: "system_log.txt",
      endOfBuffer: "-- END OF BUFFER --",
      readOnly: "READ-ONLY",
      notFound: "Service not found",
      goHome: "Go Home",
      articleNotFound: "Article not found",
    },
    hero: {
      title: "Interphase: New Digital Reality.",
      subtitle: "We are a full-cycle agency merging high-end aesthetics, hand-crafted code, and data intelligence to create stylish, high-converting products for the next generation of brands.",
      cta: "Explore Our Work",
    },
    about: {
      title: "Let's Get Acquainted",
      subtitle: "WHO WE ARE",
      description1: "Interphase is a full-cycle agency offering a complete spectrum of services in web design, custom development, and data analytics. From brand naming and logo development to creating imagery and advertising materials.",
      description2: "We strictly reject site builders. We don't just design; we create stylish, selling products using clean code. We guide you from concept development to deployment, building bespoke digital assets tailored to your business DNA.",
      cta: "View Our Services",
      whyChooseUs: {
        title: "Why Choose Us?",
        items: [
          { title: "Full-Cycle Agency", description: "Comprehensive coverage from brand naming to deployment and support." },
          { title: "Hand-Coded Solutions", description: "Zero site builders. We deliver pure performance and unlimited scalability." },
          { title: "Data-Driven Strategy", description: "Strategic decisions backed by neural forecasting and market analysis." },
          { title: "High-Converting Design", description: "Avant-garde aesthetics engineered to drive real business results." }
        ]
      }
    },
    process: {
      title: "How We Work",
      subtitle: "THE PROCESS",
      steps: [
        { number: "01", title: "Discovery", description: "We dive deep into your business model, goals, and audience to build a solid strategic foundation." },
        { number: "02", title: "Architecture", description: "Developing the structural logic, user flows, and technical specifications for the project." },
        { number: "03", title: "Design", description: "Crafting the visual language. High-fidelity UI, motion design, and interactive prototypes." },
        { number: "04", title: "Development", description: "Writing clean, scalable code from scratch. No templates, no builders. Integrating APIs and databases." },
        { number: "05", title: "Launch", description: "Final testing, deployment to production servers, and post-launch monitoring." }
      ],
      paymentTitle: "Payment & Terms",
      paymentDescription: "We operate on a transparent milestone basis. Typically, this involves a 50% deposit to initiate the neural engines and resources, with the remaining 50% due upon successful project deployment and acceptance. We accept Bank Transfer (SWIFT/SEPA) and major Cryptocurrencies.",
      testimonialsTitle: "Client Logs",
      testimonialsSubtitle: "FEEDBACK",
      testimonials: [
        { id: 't1', text: "Interphase understood the gaming aesthetic instantly. The tournament platform they built handles high traffic effortlessly and looks incredible.", author: "Alexey", role: "Founder", company: "ELEUSIS" },
        { id: 't2', text: "Our digital magazine required a unique visual language. Interphase delivered a masterpiece that serves as a canvas for our content.", author: "Elena", role: "Editor-in-Chief", company: "Monday Magazine" },
        { id: 't4', text: "We needed a site that conveys trust. The result exceeded our expectations, and our lead generation has doubled.", author: "Dmitry", role: "CEO", company: "StroyMaster Pro" }
      ],
      ctaTitle: "See the results of our methodology.",
      ctaButton: "View Case Studies"
    },
    services: {
      title: "Our Expertise",
      subtitle: "FULL-CYCLE SERVICES",
      items: [
        { 
          id: 'ui-ux',
          number: '01', 
          title: 'UI/UX Design', 
          shortDescription: 'Immersive, user-centric interfaces that blend aesthetics with functionality.', 
          longDescription: 'We design digital experiences that captivate and convert. Our process involves deep user research, wireframing, and high-fidelity prototyping to ensure every interaction is intuitive and visually stunning.',
          features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Interaction Design'],
          cta: 'Start Designing',
          faq: []
        },
        { 
          id: 'web-dev',
          number: '02', 
          title: 'Web Development', 
          shortDescription: 'From landing pages to multi-page platforms. 100% Hand-coded, no site builders.', 
          longDescription: 'We strictly avoid site builders like Wix or Tilda. We build scalable, high-performance web solutions tailored to your business needs using pure code.',
          features: ['Zero Site Builders (Pure Code)', 'Landing Pages & Promo Sites', 'Multi-page Corporate Sites', 'React & Next.js Architecture'],
          cta: 'Build Your Platform',
          faq: []
        },
        { 
          id: 'telegram-ecosystem',
          number: '03', 
          title: 'Telegram Ecosystem', 
          shortDescription: 'Full-fledged web apps and bots running directly inside Telegram.', 
          longDescription: 'Leverage the power of 800M+ users. We design and develop seamless Telegram Mini Apps (TMA) and advanced bots.',
          features: ['Telegram Mini Apps (TMA)', 'Seamless Login Integration', 'TON Wallet Connection', 'Interactive Bot Mechanics'],
          cta: 'Launch Mini App',
          faq: []
        },
        { 
          id: 'mobile-app',
          number: '04', 
          title: 'Mobile Applications', 
          shortDescription: 'Native and cross-platform mobile solutions for iOS and Android.', 
          longDescription: 'We create mobile applications that provide a native feel and high performance.',
          features: ['iOS & Android Development', 'React Native Solutions', 'App Store Optimization', 'Offline Functionality'],
          cta: 'Develop Mobile App',
          faq: []
        },
        { 
          id: 'brand-identity',
          number: '05', 
          title: 'Brand Identity', 
          shortDescription: 'Strategic branding that defines your voice in the market.', 
          longDescription: 'A brand is more than a logo. We build comprehensive visual identity systems.',
          features: ['Logo Design', 'Visual Identity Systems', 'Brand Guidelines', 'Marketing Collateral'],
          cta: 'Define Your Brand',
          faq: []
        },
        { 
          id: 'complex-integrations',
          number: '06', 
          title: 'Complex Integrations', 
          shortDescription: 'Connecting disparate systems into a unified workflow.', 
          longDescription: 'We specialize in API orchestration and connecting third-party services.',
          features: ['API Development', 'CRM/ERP Synchronization', 'Payment Gateway Setup', 'Cloud Infrastructure'],
          cta: 'Integrate Systems',
          faq: []
        },
        { 
          id: 'reputation-guard',
          number: '07', 
          title: 'Reputation Guard', 
          shortDescription: 'Digital footprint management and brand protection strategies.', 
          longDescription: 'Your reputation is your currency. We implement SEO strategies and content monitoring.',
          features: ['SERP Management', 'Review Monitoring', 'Crisis Management', 'Positive Content Seeding'],
          cta: 'Protect Brand',
          faq: []
        },
      ]
    },
    portfolio: {
      title: "Selected Works",
      subtitle: "Trusted by many! From small businesses to large agencies across various industries and niches.",
      outro: "Your business awaits design and code from our experts!",
      visitLink: "VISIT SITE",
      items: [
        { 
          id: '1', 
          title: 'ELEUSIS', 
          category: 'Gaming & Esports', 
          imageUrl: 'https://picsum.photos/800/600?random=1',
          liveUrl: 'https://eleusus.vercel.app/',
          description: 'The ultimate gaming sanctuary. CS2, Dota 2, Valorant tournaments and hardware arsenal.'
        },
        { 
          id: '2', 
          title: 'StroyMaster Pro', 
          category: 'Construction', 
          imageUrl: 'https://picsum.photos/800/600?random=2',
          liveUrl: 'https://building1-lilac.vercel.app/',
          description: 'Full-cycle construction and renovation services.'
        },
        { 
          id: '5', 
          title: 'Fourth International', 
          category: 'Education & EdTech', 
          imageUrl: 'https://picsum.photos/800/600?random=5',
          liveUrl: 'https://xd-ten-sable.vercel.app/',
          description: 'Language school and academic community focusing on Chinese, Arabic, and English.'
        },
        { 
          id: '6', 
          title: 'Monday Magazine', 
          category: 'Digital Media', 
          imageUrl: 'https://picsum.photos/800/600?random=6',
          liveUrl: 'https://ponedelnik-demo.vercel.app/',
          description: 'A digital cultural magazine focusing on visual aesthetics and modern culture.'
        },
      ]
    },
    faq: {
      title: "System Documentation",
      subtitle: "FAQ",
      items: [
        {
          question: "How long does a project typically take?",
          answer: "A standard landing page takes 1-2 weeks. Complex multi-page sites or Mini Apps typically require 4-8 weeks depending on the logic and integrations."
        },
        {
          question: "Why do you reject site builders?",
          answer: "Site builders limit performance, SEO potential, and scalability. Hand-coded solutions provide 100/100 PageSpeed scores and full control over every pixel and function."
        },
        {
          question: "What is your tech stack?",
          answer: "We primarily use React, Next.js, TypeScript, and Tailwind CSS for the frontend. For backend and Mini Apps, we leverage Node.js and the TON ecosystem."
        },
        {
          question: "How do we start a project?",
          answer: "We begin with a discovery call to understand your needs. Then we provide a detailed proposal and technical specification before starting the architecture phase."
        }
      ]
    },
    footer: {
      sitemapTitle: "Sitemap",
      contactTitle: "Connect",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      developedBy: "Developed by Interphase"
    }
  },
  ru: {
    nav: [
      { id: 'home', label: 'Главная', path: '#' },
      { id: 'services', label: 'Услуги', path: '#services' },
      { id: 'portfolio', label: 'Работы', path: '#portfolio' },
      { id: 'contact', label: 'Контакты', path: '#contact' },
    ],
    ui: {
      viewDetails: "Подробнее",
      systemModule: "Системный Модуль",
      backToServices: "Назад к услугам",
      backToJournal: "Назад к журналу",
      readyToStart: "Готовы начать?",
      share: "Поделиться",
      readMore: "Читать далее",
      lightMode: "Светлая тема",
      darkMode: "Темная тема",
      initializing: "Инициализация системы...",
      systemLog: "system_log.txt",
      endOfBuffer: "-- КОНЕЦ БУФЕРА --",
      readOnly: "ТОЛЬКО ЧТЕНИЕ",
      notFound: "Сервис не найден",
      goHome: "На главную",
      articleNotFound: "Статья не найдена",
    },
    hero: {
      title: "Interphase: Новая Цифровая Реальность.",
      subtitle: "Мы — агентство полного цикла, объединяющее премиальную эстетику, ручной код и интеллектуальный анализ данных для создания стильных и высококонверсионных продуктов.",
      cta: "Наши работы",
    },
    about: {
      title: "Давайте Знакомиться",
      subtitle: "КТО МЫ",
      description1: "Interphase — это агентство полного цикла, предлагающее весь спектр услуг: от веб-дизайна и разработки до аналитики данных и брендинга. От нейминга и разработки логотипа до создания имиджевых и рекламных материалов.",
      description2: "Мы принципиально не используем конструкторы. Мы создаем уникальные цифровые активы на чистом коде, адаптированные под ДНК вашего бизнеса. Мы сопровождаем вас от разработки концепции до развертывания.",
      cta: "Наши услуги",
      whyChooseUs: {
        title: "Почему мы?",
        items: [
          { title: "Полный цикл", description: "От нейминга и логотипа до деплоя и долгосрочной поддержки." },
          { title: "Ручной код", description: "Никаких конструкторов. Только производительность и безграничная масштабируемость." },
          { title: "Стратегия на данных", description: "Решения, основанные на анализе рынка и нейронном прогнозировании." },
          { title: "Дизайн для бизнеса", description: "Авангардная эстетика, спроектированная для достижения реальных бизнес-результатов." }
        ]
      }
    },
    process: {
      title: "Как мы работаем",
      subtitle: "ПРОЦЕСС",
      steps: [
        { number: "01", title: "Исследование", description: "Погружаемся в ваш бизнес, цели и аудиторию для создания стратегии." },
        { number: "02", title: "Архитектура", description: "Разработка логики, пользовательских путей и технического задания." },
        { number: "03", title: "Дизайн", description: "Создание визуального языка: UI, моушн-дизайн и интерактивные прототипы." },
        { number: "04", title: "Разработка", description: "Написание чистого кода с нуля. Интеграция API и баз данных." },
        { number: "05", title: "Запуск", description: "Тестирование, деплой на серверы и пост-релизный мониторинг." }
      ],
      paymentTitle: "Оплата и Условия",
      paymentDescription: "Мы работаем по прозрачной поэтапной системе. Обычно это 50% предоплата для запуска ресурсов и 50% после успешного деплоя. Принимаем банковские переводы (SWIFT/SEPA) и криптовалюту.",
      testimonialsTitle: "Логи Клиентов",
      testimonialsSubtitle: "ОТЗЫВЫ",
      testimonials: [
        { id: 't1', text: "Interphase мгновенно уловили эстетику гейминга. Платформа для турниров работает безупречно.", author: "Алексей", role: "Основатель", company: "ELEUSIS" },
        { id: 't2', text: "Нашему журналу нужен был уникальный визуальный язык. Мы получили шедевр.", author: "Елена", role: "Главный редактор", company: "Monday Magazine" },
        { id: 't4', text: "Нам нужен был сайт, вызывающий доверие. Результат превзошел ожидания.", author: "Дмитрий", role: "CEO", company: "СтройМастер Про" }
      ],
      ctaTitle: "Убедитесь в эффективности нашей методологии.",
      ctaButton: "Смотреть кейсы"
    },
    services: {
      title: "Наша Экспертиза",
      subtitle: "УСЛУГИ ПОЛНОГО ЦИКЛА",
      items: [
        { 
          id: 'ui-ux',
          number: '01', 
          title: 'UI/UX Дизайн', 
          shortDescription: 'Иммерсивные интерфейсы, сочетающие эстетику и функциональность.', 
          longDescription: 'Мы проектируем цифровой опыт, который завораживает и конвертирует.',
          features: ['Исследование пользователей', 'Прототипирование', 'Дизайн-системы', 'Interaction Design'],
          cta: 'Начать дизайн',
          faq: []
        },
        { 
          id: 'web-dev',
          number: '02', 
          title: 'Веб-разработка', 
          shortDescription: 'От лендингов до платформ. 100% ручной код, без конструкторов.', 
          longDescription: 'Мы принципиально не используем Tilda или Wix. Только чистый код для максимальной производительности.',
          features: ['Без конструкторов', 'Лендинги и Промо', 'Корпоративные сайты', 'Next.js архитектура'],
          cta: 'Заказать разработку',
          faq: []
        },
        { 
          id: 'telegram-ecosystem',
          number: '03', 
          title: 'Экосистема Telegram', 
          shortDescription: 'Веб-приложения и боты, работающие прямо внутри Telegram.', 
          longDescription: 'Используйте мощь 800млн+ пользователей. Разрабатываем Telegram Mini Apps (TMA) и ботов.',
          features: ['Telegram Mini Apps (TMA)', 'Интеграция авторизации', 'TON Wallet Connection', 'Механики ботов'],
          cta: 'Запустить Mini App',
          faq: []
        },
        { 
          id: 'mobile-app',
          number: '04', 
          title: 'Мобильные приложения', 
          shortDescription: 'Нативные и кроссплатформенные решения для iOS и Android.', 
          longDescription: 'Создаем приложения с нативным откликом и высокой производительностью.',
          features: ['iOS & Android', 'React Native', 'ASO оптимизация', 'Offline режим'],
          cta: 'Заказать приложение',
          faq: []
        },
        { 
          id: 'brand-identity',
          number: '05', 
          title: 'Брендинг', 
          shortDescription: 'Стратегический брендинг, определяющий ваш голос на рынке.', 
          longDescription: 'Бренд — это больше чем логотип. Мы строим комплексные системы визуальной идентификации.',
          features: ['Дизайн логотипа', 'Айдентика', 'Брендбук', 'Маркетинговые материалы'],
          cta: 'Создать бренд',
          faq: []
        },
        { 
          id: 'complex-integrations',
          number: '06', 
          title: 'Сложные интеграции', 
          shortDescription: 'Объединение разрозненных систем в единый рабочий процесс.', 
          longDescription: 'Специализируемся на оркестрации API и подключении сторонних сервисов.',
          features: ['Разработка API', 'Синхронизация CRM/ERP', 'Платежные шлюзы', 'Облачная инфраструктура'],
          cta: 'Настроить интеграцию',
          faq: []
        },
        { 
          id: 'reputation-guard',
          number: '07', 
          title: 'Защита репутации', 
          shortDescription: 'Управление цифровым следом и стратегии защиты бренда.', 
          longDescription: 'Ваша репутация — это ваша валюта. Мы внедряем стратегии SEO и мониторинг контента.',
          features: ['Управление SERP', 'Мониторинг отзывов', 'Кризис-менеджмент', 'Посев позитива'],
          cta: 'Защитить бренд',
          faq: []
        },
      ]
    },
    portfolio: {
      title: "Избранные Работы",
      subtitle: "Нам доверяют! От малого бизнеса до крупных агентств в различных нишах.",
      outro: "Ваш бизнес ждет дизайн и код от наших экспертов!",
      visitLink: "ПЕРЕЙТИ НА САЙТ",
      items: [
        { 
          id: '1', 
          title: 'ELEUSIS', 
          category: 'Gaming & Esports', 
          imageUrl: 'https://picsum.photos/800/600?random=1',
          liveUrl: 'https://eleusus.vercel.app/',
          description: 'Ультимативное игровое пространство. Турниры по CS2, Dota 2, Valorant.'
        },
        { 
          id: '2', 
          title: 'СтройМастер Про', 
          category: 'Строительство', 
          imageUrl: 'https://picsum.photos/800/600?random=2',
          liveUrl: 'https://building1-lilac.vercel.app/',
          description: 'Строительство и ремонт полного цикла.'
        },
        { 
          id: '5', 
          title: 'Fourth International', 
          category: 'Образование', 
          imageUrl: 'https://picsum.photos/800/600?random=5',
          liveUrl: 'https://xd-ten-sable.vercel.app/',
          description: 'Языковая школа и академическое сообщество.'
        },
        { 
          id: '6', 
          title: 'Monday Magazine', 
          category: 'Digital Media', 
          imageUrl: 'https://picsum.photos/800/600?random=6',
          liveUrl: 'https://ponedelnik-demo.vercel.app/',
          description: 'Цифровой культурный журнал об эстетике и современной культуре.'
        },
      ]
    },
    faq: {
      title: "Системная Документация",
      subtitle: "FAQ",
      items: [
        {
          question: "Сколько времени занимает разработка проекта?",
          answer: "Стандартный лендинг занимает 1-2 недели. Сложные многостраничные сайты или Mini Apps — от 4 до 8 недель."
        },
        {
          question: "Почему вы не используете конструкторы?",
          answer: "Конструкторы ограничивают производительность и SEO. Решения на чистом коде обеспечивают 100/100 в PageSpeed и полный контроль."
        },
        {
          question: "Какой у вас стек технологий?",
          answer: "Мы используем React, Next.js, TypeScript и Tailwind CSS. Для Mini Apps — Node.js и экосистему TON."
        },
        {
          question: "Как начать работу над проектом?",
          answer: "Мы начинаем с ознакомительного звонка, затем готовим детальное предложение и ТЗ перед этапом проектирования."
        }
      ]
    },
    footer: {
      sitemapTitle: "Карта сайта",
      contactTitle: "Связаться",
      rights: "Все права защищены.",
      privacy: "Политика конфиденциальности",
      developedBy: "Разработано Interphase"
    }
  }
};
