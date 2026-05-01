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
        images: ['photos/salade1.jpg'], 
        link: 'salades.html' 
    },
    'showcase-plats': { 
        images: ['photos/tajine.jpg'], 
        link: 'plats-marocains.html' 
    },
    'showcase-soupes': { 
        images: ['photos/harira.jpg'], 
        link: 'soupes.html' 
    },
    'showcase-desserts': { 
        images: ['photos/dessert1.jpg'], 
        link: 'desserts.html' 
    },
    'showcase-patisserie': { 
        images: ['photos/halwa1.jpg'], 
        link: 'patisserie.html' 
    }
};

function startShowcase() {
    for (let id in categoryData) {
        const container = document.querySelector(`#${id} .showcase-content`);
        if (!container) continue;

        const data = categoryData[id];
        
        // كود باش تولي الكارت كتحل المقال ملي تضغط عليها
        container.style.cursor = 'pointer';
        container.onclick = () => { 
            window.location.href = data.link; 
        };

        // وضع أول صورة (من الـ Array اللي وسط Object)
        const images = data.images;
        let index = 0;
        
        container.innerHTML = `<img src="${images[0]}" alt="Recipe" style="width:100%; height:100%; object-fit:cover;">`;

        // إلا كان عندك أكثر من تصويرة، السكريبت غيبدلهم أوتوماتيك
        if (images.length > 1) {
            setInterval(() => {
                index = (index + 1) % images.length;
                container.innerHTML = `<img src="${images[index]}" alt="Recipe" style="width:100%; height:100%; object-fit:cover; transition: opacity 0.5s;">`;
            }, 3000);
        }
    }
}

// تشغيل الـ Showcase ملي تتحمل الصفحة
document.addEventListener('DOMContentLoaded', startShowcase);
