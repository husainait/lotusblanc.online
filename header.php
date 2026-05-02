/* HEADER */
header {
    background: var(--header-bg);
    border-bottom: 1px solid var(--border);
    padding: 0 1rem; /* نقصنا شوية من الجناب */
    position: sticky;
    top: 0;
    z-index: 200;
    transition: background .3s;
    width: 100%; /* ضروري باش يعرف قياس الشاشة */
    box-sizing: border-box; /* باش الـ padding ما يخرجش الهيدر لبرة */
}

nav {
    max-width: 100%; /* بدلي 1400px لـ 100% في الموبايل */
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 62px;
    justify-content: space-between;
}.logo-wrap{display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0;margin-right:.5rem}
.logo-img{width:38px;height:38px;border-radius:50%;object-fit:cover;flex-shrink:0}
.logo-text{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:600;background:linear-gradient(90deg,#A0446F,#4A7FB5);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;white-space:nowrap}

.nav-links{display:flex;gap:0;list-style:none;flex:1;justify-content:center;flex-wrap:nowrap}
.nav-links li a{font-size:.68rem;font-weight:400;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);text-decoration:none;padding:.32rem .55rem;border-radius:6px;white-space:nowrap;display:block;transition:color .2s,background .2s}
.nav-links li a:hover,.nav-links li a.active-nav{color:var(--sage-dark);background:var(--sage-light)}

.header-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin-left: auto;
}

.lang-switcher{display:flex;align-items:center;gap:2px;background:var(--toggle-bg);border-radius:50px;padding:3px;flex-shrink:0}
.lang-btn{font-size:.66rem;font-weight:500;padding:.22rem .55rem;border-radius:50px;border:none;background:transparent;color:var(--muted);cursor:pointer;font-family:'Jost',sans-serif;transition:background .2s,color .2s}
.lang-btn.active{background:var(--card-bg);color:var(--charcoal);box-shadow:0 1px 3px rgba(0,0,0,.08)}

.dark-btn{background:none;border:none;cursor:pointer;font-size:.85rem;line-height:1;padding:.2rem;flex-shrink:0}
.toggle{width:36px;height:20px;background:var(--toggle-bg);border-radius:50px;border:1px solid var(--border);cursor:pointer;position:relative;transition:background .3s;flex-shrink:0}
.toggle::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:var(--sage);transition:transform .3s}
[data-theme="dark"] .toggle::after{transform:translateX(16px)}

/* الـ Hamburger كيكون مخفي في الشاشة الكبيرة */
.hamburger{display:none;flex-direction:column;gap:4px;cursor:pointer;background:none;border:none;padding:5px;border-radius:6px;flex-shrink:0}
.hamburger span{display:block;width:20px;height:2px;background:var(--charcoal);border-radius:2px;transition:all .25s}
.hamburger.open span:nth-child(1){transform:rotate(45deg) translate(4px,4px)}
.hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(4px,-4px)}

.mobile-menu{display:none;flex-direction:column;background:var(--header-bg);border-top:1px solid var(--border);padding:.4rem 1.2rem .8rem;transition:background .3s}
.mobile-menu.open{display:flex}
.mobile-menu a {
    font-size: .8rem;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--muted);
    text-decoration: none;
    padding: .65rem 0;
    border-bottom: 1px solid var(--border);
    transition: color .2s;
    text-align: right; 
}
.mobile-menu a:last-child{border-bottom:none}
.mobile-menu a:hover{color:var(--charcoal)}

/* الترتيب ديال الموبايل */
@media(max-width:960px) {
    /* 1. تصغير اللوغو باش نخليو البلاصة */
    .logo-text {
        font-size: 1rem !important; /* نقصناه من 1.25 لـ 1.0 */
    }
    .logo-img {
        width: 30px !important; /* صغرنا الصورة شوية */
        height: 30px !important;
    }

    /* 2. إخفاء الروابط القديمة */
    .nav-links { display: none !important; }

    /* 3. جمع اللغات والمنيو في اليمين بلا زحام */
    .header-right {
        display: flex !important;
        align-items: center;
        gap: 5px; /* مسافة صغيرة بزاف */
        margin-left: auto;
        padding-right: 10px; /* باش ما يخرجش المنيو لبرة */
    }

    /* 4. إظهار اللغات والمنيو */
    .lang-switcher { 
        display: flex !important; 
        transform: scale(0.8); /* تصغير أزرار اللغات */
    }

    .hamburger { 
        display: flex !important; 
        margin-left: 2px;
    }
}
