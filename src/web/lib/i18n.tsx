import React from "react";

export type Lang = "ru" | "ua" | "en";

type Translations = {
  nav: {
    home: string;
    services: string;
    cases: string;
    about: string;
    contacts: string;
    cta: string;
  };
  footer: {
    tagline: string;
    pagesTitle: string;
    servicesTitle: string;
    contactTitle: string;
    copyright: string;
    madeWith: string;
  };
  home: {
    tag: string;
    h1_part1: string;
    h1_highlight: string;
    h1_part2: string;
    subtitle: string;
    cta_primary: string;
    cta_secondary: string;
    servicesTag: string;
    servicesH2: string;
    servicesSubtitle: string;
    learnMore: string;
    statsTag: string;
    statsH2: string;
    stats: { num: string; label: string }[];
    whyTag: string;
    whyH2: string;
    whyItems: { emoji: string; text: string }[];
    ctaCardH3: string;
    ctaCardP: string;
    ctaCardBtn: string;
    bottomH2: string;
    bottomP: string;
    bottomBtn: string;
    services: { icon: string; title: string; desc: string; color: string }[];
  };
  services: {
    tag: string;
    h1: string;
    subtitle: string;
    serviceLabel: string;
    ofLabel: string;
    totalLabel: string;
    included: string;
    forWhom: string;
    orderBtn: string;
    bottomH2: string;
    bottomP: string;
    bottomBtn: string;
    items: {
      icon: string;
      title: string;
      tagline: string;
      desc: string;
      audience: string;
      includes: string[];
      color: string;
      iconBg: string;
    }[];
  };
  about: {
    tag: string;
    h1: string;
    subtitle: string;
    storyTag: string;
    storyH2: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    facts: { emoji: string; text: string }[];
    valuesTag: string;
    valuesH2: string;
    values: { emoji: string; title: string; desc: string }[];
    teamTag: string;
    teamH2: string;
    teamSubtitle: string;
    team: { name: string; role: string; bio: string; emoji: string; color: string }[];
    whyTag: string;
    whyH2: string;
    reasons: { num: string; title: string; desc: string }[];
    ctaH2: string;
    ctaP: string;
    ctaBtn: string;
  };
  contacts: {
    tag: string;
    h1: string;
    subtitle: string;
    formH2: string;
    formSubtitle: string;
    labelName: string;
    placeholderName: string;
    labelContact: string;
    placeholderContact: string;
    labelService: string;
    labelComment: string;
    placeholderComment: string;
    commentOptional: string;
    submitBtn: string;
    submittingBtn: string;
    serviceOptions: { value: string; label: string }[];
    successTitle: string;
    successText: string;
    altContactsH3: string;
    contacts: { icon: string; label: string; value: string; href: string }[];
    promiseH3: string;
    promiseP: string;
    hoursH4: string;
    hours: { day: string; time: string }[];
    errorName: string;
    errorContact: string;
    errorContactInvalid: string;
    errorService: string;
  };
};

export const t: Record<Lang, Translations> = {
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      cases: "Кейсы",
      about: "О нас",
      contacts: "Контакты",
      cta: "Оставить заявку",
    },
    footer: {
      tagline: "Создаём сайты, интернет-магазины и мобильные приложения с душой.",
      pagesTitle: "Страницы",
      servicesTitle: "Услуги",
      contactTitle: "Связь",
      copyright: "© 2024 Warmsides. Все права защищены.",
      madeWith: "Сделано с теплом ☀",
    },
    home: {
      tag: "Студия цифровых продуктов",
      h1_part1: "Делаем",
      h1_highlight: "тёплые",
      h1_part2: "digital-продукты",
      subtitle: "Разрабатываем сайты, интернет-магазины и мобильные приложения. Работаем честно, держим сроки и не пропадаем после запуска.",
      cta_primary: "Оставить заявку",
      cta_secondary: "Наши услуги",
      servicesTag: "Что мы делаем",
      servicesH2: "Три направления — одна команда",
      servicesSubtitle: "Полный цикл: от идеи до готового продукта в браузере или в App Store.",
      learnMore: "Подробнее →",
      statsTag: "Немного цифр",
      statsH2: "Доверяют результату",
      stats: [
        { num: "7+", label: "лет на рынке" },
        { num: "120+", label: "проектов сдано" },
        { num: "95%", label: "клиентов возвращаются" },
        { num: "3", label: "направления" },
      ],
      whyTag: "Почему мы",
      whyH2: "Работаем как партнёры, а не подрядчики",
      whyItems: [
        { emoji: "🤝", text: "Понимаем бизнес-задачи, а не только ТЗ" },
        { emoji: "⏱", text: "Сроки — это свято. Не переносим без весомой причины" },
        { emoji: "💬", text: "На связи во время и после проекта" },
        { emoji: "🔍", text: "Прозрачная смета без скрытых платежей" },
      ],
      ctaCardH3: "Готовы обсудить проект?",
      ctaCardP: "Расскажите нам о своей идее — мы ответим честно, сколько это займёт и будет стоить.",
      ctaCardBtn: "Написать нам",
      bottomH2: "Давайте сделаем что-то крутое вместе",
      bottomP: "Оставьте заявку — ответим в течение рабочего дня и предложим решение под ваш бюджет.",
      bottomBtn: "Оставить заявку →",
      services: [
        { icon: "🌐", title: "Сайты", desc: "Лендинги, корпоративные сайты, блоги — делаем так, чтобы ваш бизнес выглядел достойно в интернете.", color: "#FDE8DE" },
        { icon: "🛒", title: "Интернет-магазины", desc: "Удобный каталог, интеграция с оплатой, CRM и службой доставки. Продавайте больше.", color: "#F0E6D3" },
        { icon: "📱", title: "Мобильные приложения", desc: "iOS и Android. От MVP до полноценного продукта с нуля — под ключ.", color: "#FDE8DE" },
      ],
    },
    services: {
      tag: "Услуги",
      h1: "Три услуги — один принцип",
      subtitle: "Делаем хорошо с первого раза. Объясняем каждый шаг. Не исчезаем после сдачи.",
      serviceLabel: "Услуга",
      ofLabel: "из",
      totalLabel: "3",
      included: "Что входит в работу",
      forWhom: "Для кого",
      orderBtn: "Заказать →",
      bottomH2: "Не нашли нужную услугу?",
      bottomP: "Напишите — обсудим нестандартные задачи и найдём подходящее решение.",
      bottomBtn: "Написать нам →",
      items: [
        {
          icon: "🌐",
          title: "Разработка сайтов",
          tagline: "Ваш сайт — первое впечатление о бизнесе. Сделаем его незабываемым.",
          desc: "Создаём лендинги, корпоративные сайты, портфолио и блоги. Каждый проект — это уникальный дизайн под вашу аудиторию, а не шаблон из конструктора.",
          audience: "Малый и средний бизнес, стартапы, специалисты и фрилансеры, которым нужен профессиональный онлайн-облик.",
          includes: [
            "UX/UI дизайн с нуля",
            "Адаптивная вёрстка (mobile-first)",
            "CMS или headless-архитектура",
            "SEO-оптимизация и PageSpeed",
            "Интеграция с аналитикой",
            "Поддержка после запуска",
          ],
          color: "#FDE8DE",
          iconBg: "#FBCDB5",
        },
        {
          icon: "🛒",
          title: "Интернет-магазины",
          tagline: "Продавайте онлайн — удобно для вас и для покупателей.",
          desc: "Разрабатываем e-commerce решения под ключ: от небольшого магазина до крупного каталога с тысячами позиций. Фокус — на конверсии и удобстве пользователя.",
          audience: "Розничные магазины, производители, дистрибьюторы — все, кто хочет продавать онлайн без лишней головной боли.",
          includes: [
            "Дизайн каталога и карточек товаров",
            "Корзина и процесс оформления заказа",
            "Интеграция платёжных систем",
            "Личный кабинет и история заказов",
            "Подключение CRM и складского учёта",
            "Интеграция со службами доставки",
          ],
          color: "#F0E6D3",
          iconBg: "#E2CEA8",
        },
        {
          icon: "📱",
          title: "Мобильные приложения",
          tagline: "Ваш продукт всегда под рукой у пользователя.",
          desc: "Создаём мобильные приложения для iOS и Android — от концепции и MVP до полноценного релиза в App Store и Google Play. Работаем с React Native и нативными технологиями.",
          audience: "Стартапы, компании с лояльной аудиторией, сервисы, которым нужен прямой канал к пользователю.",
          includes: [
            "Прототип и UX-проектирование",
            "Дизайн интерфейса по платформенным гайдлайнам",
            "Разработка iOS и Android (или кроссплатформа)",
            "Backend и API",
            "Push-уведомления, аналитика, A/B тесты",
            "Публикация в App Store и Google Play",
          ],
          color: "#FDE8DE",
          iconBg: "#FBCDB5",
        },
      ],
    },
    about: {
      tag: "О нас",
      h1: "Мы — Warmsides",
      subtitle: "Небольшая студия, которая верит: хороший продукт — это не только код, но и отношение.",
      storyTag: "История",
      storyH2: "Как всё начиналось",
      storyP1: "Warmsides появился в 2017 году, когда Артём и Марина решили, что хотят делать проекты иначе — без бесконечных итераций, недопонимания и формального подхода. Просто честная работа с живыми людьми.",
      storyP2: "Первый клиент пришёл по рекомендации. Второй — тоже. Мы никогда не вкладывали деньги в рекламу — только в качество работы. Это сработало.",
      storyP3: "Сегодня нас четверо. Мы сделали больше 120 проектов для клиентов из России, Украины, Германии и США. И всё ещё отвечаем на сообщения в выходные.",
      facts: [
        { emoji: "📍", text: "Работаем удалённо со всем миром" },
        { emoji: "🗓", text: "В деле с 2017 года" },
        { emoji: "🌍", text: "Клиенты из 5 стран" },
        { emoji: "💬", text: "Общаемся на русском, английском и украинском" },
      ],
      valuesTag: "Ценности",
      valuesH2: "На чём держится Warmsides",
      values: [
        { emoji: "❤️", title: "Честность", desc: "Говорим правду о сроках, бюджете и технических ограничениях. Даже когда это неудобно." },
        { emoji: "🎯", title: "Результат", desc: "Нас интересует не «сдать задачу», а «помочь бизнесу вырасти»." },
        { emoji: "📐", title: "Качество", desc: "Каждый пиксель и каждая строка кода — на своём месте. Не сокращаем на деталях." },
        { emoji: "🌱", title: "Долгосрочность", desc: "Большинство наших клиентов возвращаются. Потому что мы думаем на перспективу." },
      ],
      teamTag: "Команда",
      teamH2: "Люди, которые делают проект",
      teamSubtitle: "Небольшая команда — но каждый делает своё дело лучше некуда.",
      team: [
        { name: "Артём Куликов", role: "Основатель & Full-stack разработчик", emoji: "👨‍💻", bio: "7 лет в разработке. Любит архитектуру, чистый код и кофе с корицей.", color: "#FDE8DE" },
        { name: "Марина Соколова", role: "UX/UI дизайнер", emoji: "🎨", bio: "Делает интерфейсы, которыми хочется пользоваться. Влюблена в типографику.", color: "#F0E6D3" },
        { name: "Дмитрий Орлов", role: "Mobile-разработчик", emoji: "📱", bio: "React Native и Swift. Делает приложения быстрыми, плавными и живыми.", color: "#FDE8DE" },
        { name: "Анна Белова", role: "Менеджер проектов", emoji: "🗂", bio: "Держит дедлайны, переводит с клиентского на технический и обратно.", color: "#F0E6D3" },
      ],
      whyTag: "Почему Warmsides",
      whyH2: "Чем мы отличаемся",
      reasons: [
        { num: "01", title: "Прозрачный процесс", desc: "Вы видите каждый этап работы. Никаких сюрпризов на финале." },
        { num: "02", title: "Фиксированные сроки", desc: "Договариваемся на берегу — и держим слово. Проектов-долгостроев у нас нет." },
        { num: "03", title: "Живая поддержка", desc: "После запуска мы не исчезаем. Любой вопрос — и мы на связи." },
        { num: "04", title: "Технологии с умом", desc: "Используем то, что решает задачу, а не то, что модно." },
      ],
      ctaH2: "Хотите работать с нами?",
      ctaP: "Расскажите о своём проекте — познакомимся и предложим план.",
      ctaBtn: "Написать нам →",
    },
    contacts: {
      tag: "Контакты",
      h1: "Давайте познакомимся",
      subtitle: "Расскажите о своём проекте — ответим в течение рабочего дня и предложим конкретный план.",
      formH2: "Оставить заявку",
      formSubtitle: "Все поля обязательны, кроме комментария",
      labelName: "Ваше имя *",
      placeholderName: "Иван Иванов",
      labelContact: "Телефон или email *",
      placeholderContact: "+7 900 123-45-67 или hello@example.com",
      labelService: "Тип услуги *",
      labelComment: "Комментарий",
      placeholderComment: "Расскажите о проекте: что нужно сделать, какие сроки, особые пожелания...",
      commentOptional: "(необязательно)",
      submitBtn: "Отправить заявку →",
      submittingBtn: "Отправляем...",
      serviceOptions: [
        { value: "", label: "Выберите услугу" },
        { value: "website", label: "Разработка сайта" },
        { value: "ecommerce", label: "Интернет-магазин" },
        { value: "mobile", label: "Мобильное приложение" },
        { value: "other", label: "Другое" },
      ],
      successTitle: "Заявка отправлена!",
      successText: "Мы получили вашу заявку и свяжемся в течение рабочего дня. Спасибо, что выбрали Warmsides!",
      altContactsH3: "Другие способы связи",
      contacts: [
        { icon: "✉️", label: "Email", value: "hello@warmsides.com", href: "mailto:hello@warmsides.com" },
        { icon: "✈️", label: "Telegram", value: "@NS940828", href: "https://t.me/NS940828" },
        { icon: "💬", label: "WhatsApp", value: "+380 67 531 19 52", href: "https://wa.me/380675311952" },
      ],
      promiseH3: "Отвечаем быстро",
      promiseP: "Ваша заявка попадёт к нам сразу. Мы не передаём дела на аутсорс — вы общаетесь напрямую с командой. Ответим в течение рабочего дня.",
      hoursH4: "Время работы",
      hours: [
        { day: "Пн – Пт", time: "09:00 – 20:00 МСК" },
        { day: "Сб – Вс", time: "10:00 – 16:00 МСК" },
      ],
      errorName: "Укажите ваше имя",
      errorContact: "Укажите телефон или email",
      errorContactInvalid: "Введите корректный email или номер телефона",
      errorService: "Выберите услугу",
    },
  },

  // ─── UKRAINIAN ────────────────────────────────────────────────────────────
  ua: {
    nav: {
      home: "Головна",
      services: "Послуги",
      cases: "Кейси",
      about: "Про нас",
      contacts: "Контакти",
      cta: "Залишити заявку",
    },
    footer: {
      tagline: "Створюємо сайти, інтернет-магазини та мобільні застосунки з душею.",
      pagesTitle: "Сторінки",
      servicesTitle: "Послуги",
      contactTitle: "Зв'язок",
      copyright: "© 2024 Warmsides. Всі права захищені.",
      madeWith: "Зроблено з теплом ☀",
    },
    home: {
      tag: "Студія цифрових продуктів",
      h1_part1: "Робимо",
      h1_highlight: "теплі",
      h1_part2: "digital-продукти",
      subtitle: "Розробляємо сайти, інтернет-магазини та мобільні застосунки. Працюємо чесно, тримаємо терміни і не зникаємо після запуску.",
      cta_primary: "Залишити заявку",
      cta_secondary: "Наші послуги",
      servicesTag: "Що ми робимо",
      servicesH2: "Три напрямки — одна команда",
      servicesSubtitle: "Повний цикл: від ідеї до готового продукту в браузері або в App Store.",
      learnMore: "Детальніше →",
      statsTag: "Трохи цифр",
      statsH2: "Довіряють результату",
      stats: [
        { num: "7+", label: "років на ринку" },
        { num: "120+", label: "проєктів здано" },
        { num: "95%", label: "клієнтів повертаються" },
        { num: "3", label: "напрямки" },
      ],
      whyTag: "Чому ми",
      whyH2: "Працюємо як партнери, а не підрядники",
      whyItems: [
        { emoji: "🤝", text: "Розуміємо бізнес-задачі, а не лише ТЗ" },
        { emoji: "⏱", text: "Терміни — це святе. Не переносимо без вагомої причини" },
        { emoji: "💬", text: "На зв'язку під час і після проєкту" },
        { emoji: "🔍", text: "Прозорий кошторис без прихованих платежів" },
      ],
      ctaCardH3: "Готові обговорити проєкт?",
      ctaCardP: "Розкажіть нам про свою ідею — ми відповімо чесно, скільки це займе і коштуватиме.",
      ctaCardBtn: "Написати нам",
      bottomH2: "Давайте зробимо щось круте разом",
      bottomP: "Залиште заявку — відповімо протягом робочого дня і запропонуємо рішення під ваш бюджет.",
      bottomBtn: "Залишити заявку →",
      services: [
        { icon: "🌐", title: "Сайти", desc: "Лендінги, корпоративні сайти, блоги — робимо так, щоб ваш бізнес виглядав гідно в інтернеті.", color: "#FDE8DE" },
        { icon: "🛒", title: "Інтернет-магазини", desc: "Зручний каталог, інтеграція з оплатою, CRM та службою доставки. Продавайте більше.", color: "#F0E6D3" },
        { icon: "📱", title: "Мобільні застосунки", desc: "iOS та Android. Від MVP до повноцінного продукту з нуля — під ключ.", color: "#FDE8DE" },
      ],
    },
    services: {
      tag: "Послуги",
      h1: "Три послуги — один принцип",
      subtitle: "Робимо добре з першого разу. Пояснюємо кожен крок. Не зникаємо після здачі.",
      serviceLabel: "Послуга",
      ofLabel: "з",
      totalLabel: "3",
      included: "Що входить у роботу",
      forWhom: "Для кого",
      orderBtn: "Замовити →",
      bottomH2: "Не знайшли потрібну послугу?",
      bottomP: "Напишіть — обговоримо нестандартні задачі та знайдемо підходяще рішення.",
      bottomBtn: "Написати нам →",
      items: [
        {
          icon: "🌐",
          title: "Розробка сайтів",
          tagline: "Ваш сайт — перше враження про бізнес. Зробимо його незабутнім.",
          desc: "Створюємо лендінги, корпоративні сайти, портфоліо та блоги. Кожен проєкт — унікальний дизайн під вашу аудиторію, а не шаблон з конструктора.",
          audience: "Малий та середній бізнес, стартапи, спеціалісти та фрилансери, яким потрібен професійний онлайн-вигляд.",
          includes: [
            "UX/UI дизайн з нуля",
            "Адаптивна верстка (mobile-first)",
            "CMS або headless-архітектура",
            "SEO-оптимізація та PageSpeed",
            "Інтеграція з аналітикою",
            "Підтримка після запуску",
          ],
          color: "#FDE8DE",
          iconBg: "#FBCDB5",
        },
        {
          icon: "🛒",
          title: "Інтернет-магазини",
          tagline: "Продавайте онлайн — зручно для вас і для покупців.",
          desc: "Розробляємо e-commerce рішення під ключ: від невеликого магазину до великого каталогу з тисячами позицій. Фокус — на конверсії та зручності користувача.",
          audience: "Роздрібні магазини, виробники, дистриб'ютори — всі, хто хоче продавати онлайн без зайвого клопоту.",
          includes: [
            "Дизайн каталогу та карток товарів",
            "Кошик та процес оформлення замовлення",
            "Інтеграція платіжних систем",
            "Особистий кабінет та історія замовлень",
            "Підключення CRM та складського обліку",
            "Інтеграція зі службами доставки",
          ],
          color: "#F0E6D3",
          iconBg: "#E2CEA8",
        },
        {
          icon: "📱",
          title: "Мобільні застосунки",
          tagline: "Ваш продукт завжди під рукою у користувача.",
          desc: "Створюємо мобільні застосунки для iOS та Android — від концепції та MVP до повноцінного релізу в App Store та Google Play. Працюємо з React Native та нативними технологіями.",
          audience: "Стартапи, компанії з лояльною аудиторією, сервіси, яким потрібен прямий канал до користувача.",
          includes: [
            "Прототип та UX-проєктування",
            "Дизайн інтерфейсу за платформенними гайдлайнами",
            "Розробка iOS та Android (або кросплатформа)",
            "Backend та API",
            "Push-сповіщення, аналітика, A/B тести",
            "Публікація в App Store та Google Play",
          ],
          color: "#FDE8DE",
          iconBg: "#FBCDB5",
        },
      ],
    },
    about: {
      tag: "Про нас",
      h1: "Ми — Warmsides",
      subtitle: "Невелика студія, яка вірить: хороший продукт — це не лише код, а й ставлення.",
      storyTag: "Історія",
      storyH2: "Як усе починалося",
      storyP1: "Warmsides з'явився у 2017 році, коли Артем і Марина вирішили, що хочуть робити проєкти інакше — без нескінченних ітерацій, непорозумінь та формального підходу. Просто чесна робота з живими людьми.",
      storyP2: "Перший клієнт прийшов за рекомендацією. Другий — теж. Ми ніколи не вкладали гроші в рекламу — лише в якість роботи. Це спрацювало.",
      storyP3: "Сьогодні нас четверо. Ми зробили понад 120 проєктів для клієнтів з Росії, України, Німеччини та США. І досі відповідаємо на повідомлення у вихідні.",
      facts: [
        { emoji: "📍", text: "Працюємо віддалено з усім світом" },
        { emoji: "🗓", text: "У справі з 2017 року" },
        { emoji: "🌍", text: "Клієнти з 5 країн" },
        { emoji: "💬", text: "Спілкуємося українською, російською та англійською" },
      ],
      valuesTag: "Цінності",
      valuesH2: "На чому тримається Warmsides",
      values: [
        { emoji: "❤️", title: "Чесність", desc: "Говоримо правду про терміни, бюджет та технічні обмеження. Навіть коли це незручно." },
        { emoji: "🎯", title: "Результат", desc: "Нас цікавить не «здати задачу», а «допомогти бізнесу зрости»." },
        { emoji: "📐", title: "Якість", desc: "Кожен піксель і кожен рядок коду — на своєму місці. Не скорочуємо на деталях." },
        { emoji: "🌱", title: "Довгостроковість", desc: "Більшість наших клієнтів повертаються. Бо ми думаємо на перспективу." },
      ],
      teamTag: "Команда",
      teamH2: "Люди, які роблять проєкт",
      teamSubtitle: "Невелика команда — але кожен робить свою справу якнайкраще.",
      team: [
        { name: "Артем Куликов", role: "Засновник & Full-stack розробник", emoji: "👨‍💻", bio: "7 років у розробці. Любить архітектуру, чистий код і каву з корицею.", color: "#FDE8DE" },
        { name: "Марина Соколова", role: "UX/UI дизайнер", emoji: "🎨", bio: "Робить інтерфейси, якими хочеться користуватися. Закохана в типографіку.", color: "#F0E6D3" },
        { name: "Дмитро Орлов", role: "Mobile-розробник", emoji: "📱", bio: "React Native та Swift. Робить застосунки швидкими, плавними і живими.", color: "#FDE8DE" },
        { name: "Анна Білова", role: "Менеджер проєктів", emoji: "🗂", bio: "Тримає дедлайни, перекладає з клієнтської на технічну й навпаки.", color: "#F0E6D3" },
      ],
      whyTag: "Чому Warmsides",
      whyH2: "Чим ми відрізняємося",
      reasons: [
        { num: "01", title: "Прозорий процес", desc: "Ви бачите кожен етап роботи. Жодних сюрпризів наприкінці." },
        { num: "02", title: "Фіксовані терміни", desc: "Домовляємося на березі — і тримаємо слово. Довгобудів у нас немає." },
        { num: "03", title: "Жива підтримка", desc: "Після запуску ми не зникаємо. Будь-яке питання — і ми на зв'язку." },
        { num: "04", title: "Технології з розумом", desc: "Використовуємо те, що вирішує задачу, а не те, що модно." },
      ],
      ctaH2: "Хочете працювати з нами?",
      ctaP: "Розкажіть про свій проєкт — познайомимося і запропонуємо план.",
      ctaBtn: "Написати нам →",
    },
    contacts: {
      tag: "Контакти",
      h1: "Давайте познайомимося",
      subtitle: "Розкажіть про свій проєкт — відповімо протягом робочого дня і запропонуємо конкретний план.",
      formH2: "Залишити заявку",
      formSubtitle: "Всі поля обов'язкові, крім коментаря",
      labelName: "Ваше ім'я *",
      placeholderName: "Іван Іваненко",
      labelContact: "Телефон або email *",
      placeholderContact: "+380 50 123-45-67 або hello@example.com",
      labelService: "Тип послуги *",
      labelComment: "Коментар",
      placeholderComment: "Розкажіть про проєкт: що потрібно зробити, які терміни, особливі побажання...",
      commentOptional: "(необов'язково)",
      submitBtn: "Надіслати заявку →",
      submittingBtn: "Надсилаємо...",
      serviceOptions: [
        { value: "", label: "Оберіть послугу" },
        { value: "website", label: "Розробка сайту" },
        { value: "ecommerce", label: "Інтернет-магазин" },
        { value: "mobile", label: "Мобільний застосунок" },
        { value: "other", label: "Інше" },
      ],
      successTitle: "Заявку надіслано!",
      successText: "Ми отримали вашу заявку і зв'яжемося протягом робочого дня. Дякуємо, що обрали Warmsides!",
      altContactsH3: "Інші способи зв'язку",
      contacts: [
        { icon: "✉️", label: "Email", value: "hello@warmsides.com", href: "mailto:hello@warmsides.com" },
        { icon: "✈️", label: "Telegram", value: "@NS940828", href: "https://t.me/NS940828" },
        { icon: "💬", label: "WhatsApp", value: "+380 67 531 19 52", href: "https://wa.me/380675311952" },
      ],
      promiseH3: "Відповідаємо швидко",
      promiseP: "Ваша заявка потрапить до нас одразу. Ми не передаємо справи на аутсорс — ви спілкуєтеся напряму з командою. Відповімо протягом робочого дня.",
      hoursH4: "Години роботи",
      hours: [
        { day: "Пн – Пт", time: "09:00 – 20:00 КТЧ" },
        { day: "Сб – Нд", time: "10:00 – 16:00 КТЧ" },
      ],
      errorName: "Вкажіть ваше ім'я",
      errorContact: "Вкажіть телефон або email",
      errorContactInvalid: "Введіть коректний email або номер телефону",
      errorService: "Оберіть послугу",
    },
  },

  // ─── ENGLISH ──────────────────────────────────────────────────────────────
  en: {
    nav: {
      home: "Home",
      services: "Services",
      cases: "Cases",
      about: "About",
      contacts: "Contacts",
      cta: "Get in Touch",
    },
    footer: {
      tagline: "We build websites, e-commerce stores, and mobile apps with heart.",
      pagesTitle: "Pages",
      servicesTitle: "Services",
      contactTitle: "Contact",
      copyright: "© 2024 Warmsides. All rights reserved.",
      madeWith: "Made with warmth ☀",
    },
    home: {
      tag: "Digital Product Studio",
      h1_part1: "We build",
      h1_highlight: "digital products",
      h1_part2: "with heart",
      subtitle: "We develop websites, e-commerce stores, and mobile apps. We work honestly, hit deadlines, and stay by your side after launch.",
      cta_primary: "Get in Touch",
      cta_secondary: "Our Services",
      servicesTag: "What we do",
      servicesH2: "Three services, one team",
      servicesSubtitle: "Full cycle: from idea to a live product in the browser or the App Store.",
      learnMore: "Learn more →",
      statsTag: "By the numbers",
      statsH2: "Results they trust",
      stats: [
        { num: "7+", label: "years in market" },
        { num: "120+", label: "projects delivered" },
        { num: "95%", label: "client return rate" },
        { num: "3", label: "service areas" },
      ],
      whyTag: "Why us",
      whyH2: "We work as partners, not vendors",
      whyItems: [
        { emoji: "🤝", text: "We understand your business goals, not just the spec" },
        { emoji: "⏱", text: "Deadlines are sacred. We don't move them without good reason" },
        { emoji: "💬", text: "Reachable during the project and after it" },
        { emoji: "🔍", text: "Transparent pricing — no hidden fees" },
      ],
      ctaCardH3: "Ready to talk about your project?",
      ctaCardP: "Tell us your idea — we'll give you an honest answer on timelines and cost.",
      ctaCardBtn: "Write to us",
      bottomH2: "Let's build something great together",
      bottomP: "Drop us a message — we'll reply within a business day and suggest a plan that fits your budget.",
      bottomBtn: "Get in Touch →",
      services: [
        { icon: "🌐", title: "Websites", desc: "Landing pages, corporate sites, blogs — we make your business look great online.", color: "#FDE8DE" },
        { icon: "🛒", title: "E-commerce", desc: "Clean catalog, payment integration, CRM, and delivery. Sell more with less hassle.", color: "#F0E6D3" },
        { icon: "📱", title: "Mobile Apps", desc: "iOS and Android. From MVP to a full product, built from scratch — end to end.", color: "#FDE8DE" },
      ],
    },
    services: {
      tag: "Services",
      h1: "Three services, one principle",
      subtitle: "We get it right the first time. We explain every step. We don't disappear after delivery.",
      serviceLabel: "Service",
      ofLabel: "of",
      totalLabel: "3",
      included: "What's included",
      forWhom: "Who it's for",
      orderBtn: "Order →",
      bottomH2: "Don't see what you need?",
      bottomP: "Reach out — we'll discuss custom tasks and find the right approach.",
      bottomBtn: "Write to us →",
      items: [
        {
          icon: "🌐",
          title: "Website Development",
          tagline: "Your website is your first impression. Let's make it count.",
          desc: "We build landing pages, corporate sites, portfolios, and blogs. Every project gets a custom design for your audience — not a drag-and-drop template.",
          audience: "Small and medium businesses, startups, specialists and freelancers who need a professional online presence.",
          includes: [
            "UX/UI design from scratch",
            "Responsive layout (mobile-first)",
            "CMS or headless architecture",
            "SEO & PageSpeed optimization",
            "Analytics integration",
            "Post-launch support",
          ],
          color: "#FDE8DE",
          iconBg: "#FBCDB5",
        },
        {
          icon: "🛒",
          title: "E-commerce Development",
          tagline: "Sell online — comfortably for you and your customers.",
          desc: "We build e-commerce solutions end to end: from small shops to large catalogs with thousands of products. The focus is on conversion and user experience.",
          audience: "Retail stores, manufacturers, distributors — anyone who wants to sell online without the headache.",
          includes: [
            "Catalog and product page design",
            "Cart and checkout flow",
            "Payment system integration",
            "User accounts and order history",
            "CRM and inventory integrations",
            "Delivery service integrations",
          ],
          color: "#F0E6D3",
          iconBg: "#E2CEA8",
        },
        {
          icon: "📱",
          title: "Mobile App Development",
          tagline: "Your product — always in your user's pocket.",
          desc: "We build mobile apps for iOS and Android — from concept and MVP to a full release on the App Store and Google Play. We work with React Native and native technologies.",
          audience: "Startups, companies with a loyal audience, services that need a direct channel to their users.",
          includes: [
            "Prototype and UX design",
            "UI design following platform guidelines",
            "iOS and Android development (or cross-platform)",
            "Backend and API",
            "Push notifications, analytics, A/B testing",
            "App Store and Google Play publishing",
          ],
          color: "#FDE8DE",
          iconBg: "#FBCDB5",
        },
      ],
    },
    about: {
      tag: "About",
      h1: "We are Warmsides",
      subtitle: "A small studio that believes a great product is about more than code — it's about care.",
      storyTag: "Our story",
      storyH2: "How it all started",
      storyP1: "Warmsides was founded in 2017, when Artem and Marina decided they wanted to do projects differently — no endless revisions, no miscommunication, no going through the motions. Just honest work with real people.",
      storyP2: "Our first client came through a referral. So did the second. We've never spent money on ads — only on quality. It worked.",
      storyP3: "Today we're a team of four. We've delivered over 120 projects for clients in Russia, Ukraine, Germany, and the US. And we still reply to messages on weekends.",
      facts: [
        { emoji: "📍", text: "Remote-first, working with clients worldwide" },
        { emoji: "🗓", text: "In business since 2017" },
        { emoji: "🌍", text: "Clients from 5 countries" },
        { emoji: "💬", text: "We communicate in Russian, Ukrainian, and English" },
      ],
      valuesTag: "Values",
      valuesH2: "What Warmsides stands for",
      values: [
        { emoji: "❤️", title: "Honesty", desc: "We tell the truth about timelines, budgets, and technical limitations — even when it's uncomfortable." },
        { emoji: "🎯", title: "Results", desc: "We're not here to close a ticket. We're here to help your business grow." },
        { emoji: "📐", title: "Quality", desc: "Every pixel and every line of code is in the right place. We don't cut corners." },
        { emoji: "🌱", title: "Long-term thinking", desc: "Most of our clients come back. Because we think beyond the project." },
      ],
      teamTag: "Team",
      teamH2: "The people behind the work",
      teamSubtitle: "A small team — but everyone here is exceptional at what they do.",
      team: [
        { name: "Artem Kulikov", role: "Founder & Full-stack Developer", emoji: "👨‍💻", bio: "7 years in development. Loves architecture, clean code, and coffee with cinnamon.", color: "#FDE8DE" },
        { name: "Marina Sokolova", role: "UX/UI Designer", emoji: "🎨", bio: "Designs interfaces people actually enjoy using. Passionate about typography.", color: "#F0E6D3" },
        { name: "Dmitry Orlov", role: "Mobile Developer", emoji: "📱", bio: "React Native and Swift. Makes apps fast, smooth, and alive.", color: "#FDE8DE" },
        { name: "Anna Belova", role: "Project Manager", emoji: "🗂", bio: "Keeps deadlines, translates between client-speak and tech-speak, in both directions.", color: "#F0E6D3" },
      ],
      whyTag: "Why Warmsides",
      whyH2: "What sets us apart",
      reasons: [
        { num: "01", title: "Full transparency", desc: "You see every stage of the work. No surprises at the finish line." },
        { num: "02", title: "Fixed deadlines", desc: "We agree upfront and keep our word. No endless delays." },
        { num: "03", title: "Real support", desc: "We don't vanish after launch. Any question — we're here." },
        { num: "04", title: "Smart tech choices", desc: "We use what solves the problem, not what's trending." },
      ],
      ctaH2: "Want to work with us?",
      ctaP: "Tell us about your project — we'll get to know each other and put together a plan.",
      ctaBtn: "Write to us →",
    },
    contacts: {
      tag: "Contact",
      h1: "Let's talk",
      subtitle: "Tell us about your project — we'll reply within a business day with a concrete plan.",
      formH2: "Send a request",
      formSubtitle: "All fields are required except the comment",
      labelName: "Your name *",
      placeholderName: "John Smith",
      labelContact: "Phone or email *",
      placeholderContact: "+1 234 567-89-00 or hello@example.com",
      labelService: "Service type *",
      labelComment: "Comment",
      placeholderComment: "Tell us about the project: what you need, your timeline, any special requirements...",
      commentOptional: "(optional)",
      submitBtn: "Send request →",
      submittingBtn: "Sending...",
      serviceOptions: [
        { value: "", label: "Select a service" },
        { value: "website", label: "Website Development" },
        { value: "ecommerce", label: "E-commerce Store" },
        { value: "mobile", label: "Mobile App" },
        { value: "other", label: "Other" },
      ],
      successTitle: "Request sent!",
      successText: "We received your message and will get back to you within a business day. Thanks for choosing Warmsides!",
      altContactsH3: "Other ways to reach us",
      contacts: [
        { icon: "✉️", label: "Email", value: "hello@warmsides.com", href: "mailto:hello@warmsides.com" },
        { icon: "✈️", label: "Telegram", value: "@NS940828", href: "https://t.me/NS940828" },
        { icon: "💬", label: "WhatsApp", value: "+380 67 531 19 52", href: "https://wa.me/380675311952" },
      ],
      promiseH3: "We respond fast",
      promiseP: "Your request reaches us directly. We don't outsource — you talk to the team. We'll reply within a business day.",
      hoursH4: "Working hours",
      hours: [
        { day: "Mon – Fri", time: "09:00 – 20:00 MSK" },
        { day: "Sat – Sun", time: "10:00 – 16:00 MSK" },
      ],
      errorName: "Please enter your name",
      errorContact: "Please enter your phone or email",
      errorContactInvalid: "Please enter a valid email or phone number",
      errorService: "Please select a service",
    },
  },
};

export const LangContext = React.createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "ru", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>(() => {
    const saved = localStorage.getItem("ws-lang") as Lang | null;
    return saved && ["ru", "ua", "en"].includes(saved) ? saved : "ua";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("ws-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => React.useContext(LangContext);
