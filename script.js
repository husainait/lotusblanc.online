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

