window.addEventListener('load', function() {
    let selectCards = document.querySelectorAll('.info-select__card');
    let content = document.querySelectorAll('.info');
    let headerBtns = document.querySelectorAll('.header__navigation-btn')
    let docsBtns = document.querySelectorAll('.main-docs-btns__btn')
    let accordeons = document.querySelectorAll('.accordeon')
    
    selectCards.forEach(item => item.addEventListener('click', e => {
        let selectCardsTarget = e.target.getAttribute('data-card');
        selectCards.forEach(el => el.classList.remove('is-active'));
        content.forEach(el => el.classList.remove('is-active'));
        item.classList.add('is-active');
        document.getElementById(selectCardsTarget).classList.add('is-active');
    }));

    headerBtns.forEach(item => item.addEventListener('click', e => {

        // Prevent default behaviour - reload
        e.preventDefault()

        let targetClass = 'main-' + e.target.getAttribute('for')

        let arr = Array.from(document.querySelector("main").children)

        arr.forEach(item => {
            item.classList.remove('is-active')

            if (item.classList.contains(targetClass)) {
                item.classList.add('is-active')
            }
        })

        headerBtns.forEach(item => item.classList.remove('is-active'))
        e.target.classList.add('is-active')
    }))

    docsBtns.forEach(item => item.addEventListener('click', e => {
        docsBtns.forEach(item => item.classList.remove('is-active'))
        e.target.classList.add('is-active')
    }))

    document.querySelectorAll('.info-rules__title').forEach((el) => {
        el.addEventListener('click', () => {
            const parent = el.parentNode;
            if (parent.classList.contains('info-rules__main_active')) {
                parent.classList.remove('info-rules__main_active');
            } else {
                document.querySelectorAll('.info-rules__main').forEach((child) => child.classList.remove('info-rules__main_active'))
                parent.classList.add('info-rules__main_active');
            }
            // parent.classList.toggle('information-rules__main_active');
        })
    });

    accordeons.forEach(item => {
        let icons = item.querySelectorAll(".accordeon-header__icon")
        
        icons.forEach(el => {
            el.addEventListener("click", e => {
                if (e.target.classList.contains("accordeon-header__icon_close")) {
                    item.querySelector(".accordeon-block").classList.add("hidden")
                }
                else {
                    item.querySelector(".accordeon-block").classList.remove("hidden")
                }

                icons.forEach(el => {el.classList.remove("hidden")})
                e.target.classList.add("hidden")
            });
        }) 
    })
});