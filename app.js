const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    // button click active class option one
    sectBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            let currentBtn = document.querySelectorAll('.active-btn');
            sectBtn.forEach((currentBtn) => {
                currentBtn.classList.remove('active-btn');
            });
            btn.classList.add('active-btn')
        });
    })
    //Sections Active Class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // Dark & Light Theme Toggle
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-theme');
    })

}

PageTransitions();

    //button click option one
    
    //for (let i = 0; i < sectBtn.length; i++) {
    //     sectBtn[i].addEventListener('click', function () {
    //         let currentBtn = document.querySelectorAll('.active-btn');
    //         currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
    //         this.className += ' active-btn ';
    //     })
    // }


    // //button click option two

    // sectBtn.forEach((btn) => {
    //     btn.addEventListener('click', () => {
    //         let currentBtn = document.querySelectorAll('.active-btn');
    //         sectBtn.forEach((currentBtn) => {
    //             currentBtn.classList.remove('active-btn');
    //         });
    //         btn.classList.add('active-btn')
    //     });
    // })
    //

    
    