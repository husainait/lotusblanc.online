// 1. التحكم في زر العودة للأعلى
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    // ملي يهبط المستخدم كتر من 300px كيبان الزر
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// ملي يكليكي المستخدم على الزر يرجع لفوق بشوية
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// 2. كود الـ Dark Mode (باش يبقى خدام من ملف واحد)
const toggleBtn = document.querySelector('.toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });
}
