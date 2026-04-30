const btn = document.getElementById("backToTop");

window.addEventListener("scroll", function() {
    // كنشوفو واش هبطنا كتر من 400 بيكسل
    if (window.pageYOffset > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
