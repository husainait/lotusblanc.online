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
// 1. حط هاد الجزء هنا في الأول (Top of the file)
const categoryData = {
    'showcase-salades': { 
        images: ['photos/salata.webp','photos/tiramisuu.webp'], 
        link: 'salades.html' 
    },
    'showcase-plats': { 
        images: ['photos/tajine-poulet.webp'], 
        link: 'plats-marocains.html' 
    },
    'showcase-soupes': { 
        images: ['photos/harira.webp'], 
        link: 'soupes.html' 
    },
    'showcase-desserts': { 
        images: ['photos/tiramisu.webp'], 
        link: 'desserts.html' 
    },
    'showcase-patisserie': { 
        images: ['photos/foretnoir.webp'], 
        link: 'patisserie.html' 
    }
};
function startShowcase() {
    for (let id in categoryData) {
        const card = document.getElementById(id);
        if (!card) continue;

        const data = categoryData[id];
        const images = data.images;
        let index = 0;

        // وضع الصورة الأولى كخلفية
        card.style.backgroundImage = `url('${images[0]}')`;
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.style.cursor = 'pointer';

        // الانتقال لصفحة القسم عند الضغط
        card.onclick = () => { window.location.href = data.link; };

        // تبديل الصور أوتوماتيكياً
        if (images.length > 1) {
            setInterval(() => {
                index = (index + 1) % images.length;
                card.style.backgroundImage = `url('${images[index]}')`;
            }, 3000);
        }
    }
}

// تشغيل الدالة فور تحميل الصفحة
window.onload = startShowcase;
