const showResponsiveMenuBtn = document.querySelector('.nav__content .bar__icon'),
       responsiveMenu = document.querySelector('.responsive__menu'),
       overlay = document.querySelector('.overlay'),
       allLinks = document.querySelectorAll('.nav__content .nav__links a')


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