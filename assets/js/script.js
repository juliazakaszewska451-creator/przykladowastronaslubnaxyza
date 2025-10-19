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
gallery_text: "Po ślubie zapraszamy do wspólnego folderu ze zdjęciami.",
gallery_button: "Zobacz / dodaj zdjęcia",
about_title: "🇵🇱🇺🇦 O nas",
about_text: "Nasz ślub to spotkanie dwóch kultur — polskiej i ukraińskiej. Dziękujemy, że jesteście z nami.",
fun_title: "✨ Ciekawostki",
fun_1: "Na stole będą i pierogi, i borszcz — połączenie smaków!",
fun_2: "Będzie dwujęzyczna wersja 'Sto lat' 🎶",
fun_3: "Pan młody spróbuje ukraińskich tańców — przygotujcie się!"
},
ua: {
details_title: "📅 Деталі урочистості",
date_label: "Дата:",
date_text: "12 липня 2025",
ceremony_label: "Церемонія:",
ceremony_text: "Костел св. Анни, Краків",
reception_label: "Святкування:",
reception_text: "Dworek Boho, вул. Квіткова 7",
rsvp_title: "💌 Підтвердження присутності",
rsvp_text: "Просимо підтвердити присутність до 15 червня 2025.",
rsvp_button: "Підтвердити присутність",
gallery_title: "📸 Галерея спогадів",
gallery_text: "Після весілля запрошуємо до спільної папки з фото.",
gallery_button: "Переглянути / додати фото",
about_title: "🇵🇱🇺🇦 Про нас",
about_text: "Наше весілля — це зустріч двох культур. Дякуємо, що ви з нами.",
fun_title: "✨ Цікавинки",
fun_1: "На столі будуть і піроги, і борщ — поєднання смаків!",
fun_2: "Буде двомовна версія 'Sto lat' 🎶",
fun_3: "Весільний танець може бути дуже веселим — готуйтеся!"
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
gallery_text: "После свадьбы приглашаем в общую папку с фото.",
gallery_button: "Посмотреть / добавить фото",
about_title: "🇵🇱🇺🇦 О нас",
about_text: "Наша свадьба — это встреча двух культур. Спасибо, что вы с нами.",
fun_title: "✨ Любопытные факты",
fun_1: "На столе будут и пироги, и борщ — сочетание вкусов!",
fun_2: "Будет двуязычная версия 'Sto lat' 🎶",
fun_3: "Ждем танцевальных экспериментов от молодых!"
}
};


function setLanguage(lang){
document.querySelectorAll('[data-key]').forEach(el=>{
const key=el.getAttribute('data-key');
if(translations[lang] && translations[lang][key]) el.textContent = translations[lang][key];
});
}


// ustaw język domyślny na polski
setLanguage('pl');