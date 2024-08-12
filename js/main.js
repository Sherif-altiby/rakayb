const showResponsiveMenuBtn = document.querySelector('.nav__content .bar__icon'),
       responsiveMenu = document.querySelector('.responsive__menu'),
       overlay = document.querySelector('.overlay'),
       allLinks = document.querySelectorAll('.nav__content .nav__links a'),
       allLinksInResponsiveMenu = document.querySelectorAll('.responsive__menu .nav__links a'),
       languageMenu = document.querySelector('nav .app__language__menu'),
       languageBtn = document.querySelector('nav .app__language'),
       languageMenuInResponsive = document.querySelector(".responsive__menu .app__language__menu"),
       languageBtnResponsive = document.querySelector(".responsive__menu .app__language")


    //    show responsive menu

    showResponsiveMenuBtn.addEventListener("click", (e) => {
        responsiveMenu.classList.add("show")
        overlay.classList.add('show')
    })

    // close responsive menu

    overlay.addEventListener('click', (e) => {
        responsiveMenu.classList.remove("show")
        overlay.classList.remove('show')
    })


    // active link

    allLinks.forEach((link) => {
        link.addEventListener('click', () => {
            allLinks.forEach((a) => {
                a.classList.remove("active")
            })

            link.classList.add('active')
        })
    })

    // active link in responsive menu

    allLinksInResponsiveMenu.forEach((link) => {
        link.addEventListener("click", () => {
            allLinksInResponsiveMenu.forEach((a) => {
                a.classList.remove("active")
            })

            link.classList.add('active');
            overlay.classList.remove("show");
            responsiveMenu.classList.remove("show");
        })
    })

    // shwo langauge menu

    languageBtn.addEventListener('click', () => {
        languageMenu.classList.toggle("show")
    })


    languageBtnResponsive.addEventListener('click', () => {
        languageMenuInResponsive.classList.toggle("show")
    })