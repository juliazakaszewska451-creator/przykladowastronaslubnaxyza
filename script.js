const translations = {
  pl: {
    details_title: "📅 Szczegóły uroczystości",
    date_label: "Data:",
    date_text: "12 lipca 2025",
    ceremony_label: "Ceremonia:",
    ceremony_text: "Kościół św. Anny, Kraków",
    reception_label: "Przyjęcie:",
    reception_text: "Dworek Boho, ul. Kwiatowa 7",
    rsvp_title: "💌 Potwierdzenie przybycia",
    rsvp_text: "Prosimy o potwierdzenie obecności do 15 czerwca 2025.",
    rsvp_button: "Potwierdź obecność",
    gallery_title: "📸 Galeria wspomnień",
    gallery_text: "Po ślubie zapraszamy do wspólnej galerii zdjęć:",
    gallery_button: "Zobacz / dodaj zdjęcia",
    about_title: "🇵🇱🇺🇦 O nas",
    about_text: "Nasz ślub to spotkanie dwóch kultur — polskiej i ukraińskiej. Chcemy podzielić się z Wami radością, muzyką i smakiem obu tradycji. Dziękujemy, że jesteście częścią naszego dnia ❤️"
  },
  ua: {
    details_title: "📅 Деталі урочистості",
    date_label: "Дата:",
    date_text: "12 липня 2025",
    ceremony_label: "Церемонія:",
    ceremony_text: "Костел св. Анни, Краків",
    reception_label: "Святкування:",
    reception_text: "Boho Dworek, вул. Квіткова 7",
    rsvp_title: "💌 Підтвердження присутності",
    rsvp_text: "Просимо підтвердити присутність до 15 червня 2025.",
    rsvp_button: "Підтвердити присутність",
    gallery_title: "📸 Галерея спогадів",
    gallery_text: "Після весілля запрошуємо до спільної галереї фото:",
    gallery_button: "Переглянути / додати фото",
    about_title: "🇵🇱🇺🇦 Про нас",
    about_text: "Наше весілля — це зустріч двох культур, польської та української. Ми хочемо поділитися з вами радістю, музикою і смаками обох традицій. Дякуємо, що ви частина нашого дня ❤️"
  },
  ru: {
    details_title: "📅 Подробности церемонии",
    date_label: "Дата:",
    date_text: "12 июля 2025",
    ceremony_label: "Церемония:",
    ceremony_text: "Костёл св. Анны, Краков",
    reception_label: "Празднование:",
    reception_text: "Dworek Boho, ул. Цветочная 7",
    rsvp_title: "💌 Подтверждение участия",
    rsvp_text: "Просим подтвердить участие до 15 июня 2025.",
    rsvp_button: "Подтвердить участие",
    gallery_title: "📸 Галерея воспоминаний",
    gallery_text: "После свадьбы приглашаем в общую галерею фото:",
    gallery_button: "Посмотреть / добавить фото",
    about_title: "🇵🇱🇺🇦 О нас",
    about_text: "Наша свадьба — это встреча двух культур: польской и украинской. Мы хотим поделиться радостью, музыкой и вкусом обеих традиций. Спасибо, что вы с нами ❤️"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}
