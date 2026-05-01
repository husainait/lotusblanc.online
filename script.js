// 1. التحكم في زر العودة للأعلى
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// 2. كود الـ Dark Mode
const toggleBtn = document.querySelector('.toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });
}

// 3. كود تبديل اللغات (L'effet "Cool" dyal Julian's Editor)
function updateLanguage(lang) {
    // كاع العناصر اللي فيها data-attributes
    const elements = document.querySelectorAll('[data-' + lang + ']');
    
    elements.forEach(el => {
        const translation = el.getAttribute('data-' + lang);
        if (translation) {
            // إلا كان العنصر هو input (placeholder)
            if (el.tagName === 'INPUT') {
                el.placeholder = translation;
            } else {
                el.innerText = translation;
            }
        }
    });

    // تغيير اتجاه الصفحة (RTL للعربية و LTR للفرنسية/الإنجليزية)
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// 4. كود الـ Showcase (الصور اللي كيدوزو أوتوماتيك)
const categoryData = {
    'showcase-salades': ['salade1.jpg', 'salade2.jpg'], // حط سميات التصاور ديالك هنا
    'showcase-plats': ['tajine.jpg', 'couscous.jpg'],
    'showcase-soupes': ['harira.jpg', 'soupe1.jpg'],
    'showcase-desserts': ['dessert1.jpg', 'dessert2.jpg'],
    'showcase-patisserie': ['halwa1.jpg', 'halwa2.jpg']
};

function startShowcase() {
    for (let id in categoryData) {
        const container = document.querySelector(`#${id} .showcase-content`);
        if (!container) continue;

        const images = categoryData[id];
        let index = 0;

        // وضع أول صورة عند التحميل
        container.innerHTML = `<img src="${images[0]}" alt="Recipe" style="width:100%; height:100%; object-fit:cover;">`;

        // تغيير الصور كل 3 ثواني
        setInterval(() => {
            index = (index + 1) % images.length;
            container.innerHTML = `<img src="${images[index]}" alt="Recipe" style="width:100%; height:100%; object-fit:cover; transition: opacity 0.5s;">`;
        }, 3000);
    }
}

// تشغيل الـ Showcase ملي تتحمل الصفحة
document.addEventListener('DOMContentLoaded', startShowcase);
