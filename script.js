import { newsItems } from './news-data.js';
import { projectItems } from './projects-data.js';

const translations = {
  ru: {
    legalShort: 'LLC',
    company: 'Кыргызполиметалл',
    navHome: 'Главная',
    navAbout: 'О компании',
    navProjects: 'Проекты',
    navNews: 'Новости',
    navContacts: 'Контакты',
    heroTitle: 'Общество с ограниченной ответственностью «Кыргызполиметалл»',
    heroText: 'Официальный сайт компании с новостями, проектами и основной информацией о деятельности.',
    heroButton: 'Смотреть новости',
    aboutLabel: 'О компании',
    aboutHeading: 'О компании',
    aboutLead:
      'ОсОО «Кыргызполиметалл» — компания, 100% доля которой принадлежит государству. Основным направлением деятельности является освоение рудных месторождений на территории Кыргызской Республики.',
    aboutPoint1: '100% доля участия в уставном капитале принадлежит государству;',
    aboutPoint2: 'основное направление деятельности — освоение рудных месторождений в Кыргызской Республике;',
    aboutPoint3: 'компания реализует проекты, связанные с развитием минерально-сырьевой базы;',
    aboutPoint4: 'деятельность осуществляется с учетом производственной безопасности и государственных интересов.',
    projectsLabel: 'Проекты',
    projectsHeading: 'Проекты',
    projectsLead: 'Здесь можно представить ключевые объекты компании и производственные площадки.',
    projectsEmpty: 'Проекты будут добавлены по мере поступления официальных материалов.',
    newsHeading: 'Новости',
    newsEmpty: 'Новости будут добавлены по мере поступления официальных материалов.',
    contactsLabel: 'Контакты',
    contactsHeading: 'Связаться с нами',
    contactsLead: 'В данный блок можно добавить официальные контактные данные, адрес, телефоны и электронную почту.',
    contactAddressLabel: 'Адрес',
    contactAddressValue: 'г. Бишкек, проспект Чуй',
    contactPhoneLabel: 'Телефон',
    contactEmailLabel: 'Электронная почта',
    contactHoursLabel: 'График работы',
    contactHoursValue: 'Пн–Пт, 09:00–18:00',
    footerText: 'Официальный корпоративный сайт компании.',
    footerNavTitle: 'Навигация',
    footerContactTitle: 'Контакты',
    footerLocation: 'г. Бишкек, проспект Чуй',
    footerCopy: '© 2026 ОсОО «Кыргызполиметалл». Все права защищены.'
  },
  kg: {
    legalShort: 'LLC',
    company: 'Кыргызполиметалл',
    navHome: 'Башкы бет',
    navAbout: 'Компания жөнүндө',
    navProjects: 'Долбоорлор',
    navNews: 'Жаңылыктар',
    navContacts: 'Байланыш',
    heroTitle: '«Кыргызполиметалл» жоопкерчилиги чектелген коому',
    heroText: 'Компаниянын расмий сайты: жаңылыктар, долбоорлор жана ишмердик боюнча негизги маалымат.',
    heroButton: 'Жаңылыктарды көрүү',
    aboutLabel: 'Компания жөнүндө',
    aboutHeading: 'Компания жөнүндө',
    aboutLead:
      '«Кыргызполиметалл» ЖЧКсы — үлүшүнүн 100% мамлекетке таандык болгон компания. Анын негизги иш багыты Кыргыз Республикасынын аймагындагы рудалык кендерди өздөштүрүү болуп саналат.',
    aboutPoint1: 'уставдык капиталдагы үлүштүн 100% мамлекетке таандык;',
    aboutPoint2: 'негизги иш багыты — Кыргыз Республикасындагы рудалык кендерди өздөштүрүү;',
    aboutPoint3: 'компания минералдык-чийки зат базасын өнүктүрүүгө байланышкан долбоорлорду ишке ашырат;',
    aboutPoint4: 'ишмердик өндүрүштүк коопсуздукту жана мамлекеттик кызыкчылыктарды эске алуу менен жүргүзүлөт.',
    projectsLabel: 'Долбоорлор',
    projectsHeading: 'Долбоорлор',
    projectsLead: 'Бул жерде компаниянын негизги объекттерин жана өндүрүш аянтчаларын көрсөтүүгө болот.',
    projectsEmpty: 'Долбоорлор расмий материалдар даяр болгондо кошулат.',
    newsHeading: 'Жаңылыктар',
    newsEmpty: 'Жаңылыктар расмий материалдар даяр болгондо кошулат.',
    contactsLabel: 'Байланыш',
    contactsHeading: 'Биз менен байланыш',
    contactsLead: 'Бул блокко расмий дарек, телефон номерлери жана электрондук почта кошулушу мүмкүн.',
    contactAddressLabel: 'Дарек',
    contactAddressValue: 'Бишкек ш., Чүй проспектиси',
    contactPhoneLabel: 'Телефон',
    contactEmailLabel: 'Электрондук почта',
    contactHoursLabel: 'Иштөө убактысы',
    contactHoursValue: 'Дш–Жм, 09:00–18:00',
    footerText: 'Компаниянын расмий корпоративдик сайты.',
    footerNavTitle: 'Навигация',
    footerContactTitle: 'Байланыш',
    footerLocation: 'Бишкек ш., Чүй проспектиси',
    footerCopy: '© 2026 «Кыргызполиметалл» ЖЧК. Бардык укуктар корголгон.'
  },
  en: {
    legalShort: 'LLC',
    company: 'Kyrgyzpolymetall',
    navHome: 'Home',
    navAbout: 'About',
    navProjects: 'Projects',
    navNews: 'News',
    navContacts: 'Contacts',
    heroTitle: 'Kyrgyzpolymetall Limited Liability Company',
    heroText: 'Official company website with news, projects and key information about operations.',
    heroButton: 'View news',
    aboutLabel: 'About',
    aboutHeading: 'About',
    aboutLead:
      'Kyrgyzpolymetall LLC is a company that is 100% state-owned. Its core activity is the development of ore deposits in the Kyrgyz Republic.',
    aboutPoint1: '100% of the ownership interest belongs to the state;',
    aboutPoint2: 'the core area of activity is the development of ore deposits in the Kyrgyz Republic;',
    aboutPoint3: 'the company implements projects related to the development of the mineral resource base;',
    aboutPoint4: 'operations are carried out with due regard to industrial safety and state interests.',
    projectsLabel: 'Projects',
    projectsHeading: 'Projects',
    projectsLead: 'This section can present the company’s key assets and production sites.',
    projectsEmpty: 'Projects will be added as official materials become available.',
    newsHeading: 'News',
    newsEmpty: 'News will be added as official materials become available.',
    contactsLabel: 'Contacts',
    contactsHeading: 'Get in touch',
    contactsLead: 'This block can include the official address, phone numbers and email.',
    contactAddressLabel: 'Address',
    contactAddressValue: 'Bishkek city, Chuy Ave',
    contactPhoneLabel: 'Phone',
    contactEmailLabel: 'Email',
    contactHoursLabel: 'Business hours',
    contactHoursValue: 'Mon–Fri, 09:00–18:00',
    footerText: 'Official corporate website of the company.',
    footerNavTitle: 'Navigation',
    footerContactTitle: 'Contact',
    footerLocation: 'Bishkek city, Chuy Ave',
    footerCopy: '© 2026 LLC “Kyrgyzpolymetall”. All rights reserved.'
  }
};

let currentLang = 'ru';

const langButtons = document.querySelectorAll('.lang-btn');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const projectsGrid = document.getElementById('projectsGrid');
const newsGrid = document.getElementById('newsGrid');
const projectsEmpty = document.getElementById('projectsEmpty');
const newsEmpty = document.getElementById('newsEmpty');

function t(key) {
  return translations[currentLang][key] || '';
}

function getLocalizedNewsItem(item) {
  return {
    title: item[`title${currentLang.charAt(0).toUpperCase()}${currentLang.slice(1)}`],
    excerpt: item[`excerpt${currentLang.charAt(0).toUpperCase()}${currentLang.slice(1)}`],
    image: item.image || ''
  };
}

function getLocalizedProjectItem(item) {
  return {
    title: item[`title${currentLang.charAt(0).toUpperCase()}${currentLang.slice(1)}`],
    subtitle: item[`subtitle${currentLang.charAt(0).toUpperCase()}${currentLang.slice(1)}`],
    text: item[`text${currentLang.charAt(0).toUpperCase()}${currentLang.slice(1)}`]
  };
}

function renderProjects() {
  projectsGrid.innerHTML = '';

  if (!projectItems.length) {
    projectsEmpty.classList.remove('hidden');
    projectsGrid.classList.add('hidden');
    projectsEmpty.textContent = t('projectsEmpty');
    return;
  }

  projectsEmpty.classList.add('hidden');
  projectsGrid.classList.remove('hidden');

  projectItems.forEach((item, index) => {
    const localized = getLocalizedProjectItem(item);
    const article = document.createElement('article');
    article.className = 'project-card';
    article.innerHTML = `
      <div class="project-card-top">
        <div class="project-index">0${index + 1}</div>
        <h3>${localized.title || ''}</h3>
        <div class="project-subtitle">${localized.subtitle || ''}</div>
      </div>
      <div class="project-card-body">
        <p>${localized.text || ''}</p>
      </div>
    `;
    projectsGrid.appendChild(article);
  });
}

function renderNews() {
  newsGrid.innerHTML = '';

  if (!newsItems.length) {
    newsEmpty.classList.remove('hidden');
    newsGrid.classList.add('hidden');
    newsEmpty.textContent = t('newsEmpty');
    return;
  }

  newsEmpty.classList.add('hidden');
  newsGrid.classList.remove('hidden');

  newsItems.forEach((item) => {
    const localized = getLocalizedNewsItem(item);
    const article = document.createElement('article');
    article.className = 'news-card';
    article.innerHTML = `
      <div class="news-card-visual">
        <img class="news-card-image" src="${localized.image || ''}" alt="${localized.title || ''}">
      </div>
      <div class="news-card-body">
        <div class="news-footer">
          <div class="news-badge">KPM</div>
          <div>${t('company')}</div>
        </div>
        <h3 class="news-card-title">${localized.title || ''}</h3>
        <p class="news-excerpt">${localized.excerpt || ''}</p>
        <div class="news-meta">
          <span>${item.date || ''}</span>
        </div>
      </div>
    `;
    newsGrid.appendChild(article);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const dict = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));
  renderProjects();
  renderNews();
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

applyLanguage('ru');
