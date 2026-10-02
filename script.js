const openMenu = document.querySelector('#open-menu');
const menu = document.querySelector('.nav-links');
const closeMenu = document.querySelector('#close-menu');

let open = element => {
    element.style.transition = '0.8s';
    element.style.top = '0';
};

let close = element => {
    element.style.transition = '0.8s';
    element.style.top = '-1000px'
};

let disappear = element => {
    element.style.transition = '0.8s';
    element.style.opacity = '0';
    setTimeout(() => {
       element.style.display = 'none'; 
    }, 500);
}

let appear = element => {
    element.style.display = 'inline-block';
    element.style.opacity = '0'
    element.style.transition = '0.8s';
    element.style.opacity = '1';
}

let numClick = 0;
openMenu.addEventListener('click', () => {
    if (numClick === 0) {
        open(menu);
        disappear(openMenu);
        appear(closeMenu);
        numClick += 1;
    }
});

closeMenu.addEventListener('click', () => {
        close(menu);
        disappear(closeMenu);
        appear(openMenu);
        numClick = 0;
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 940) {
        openMenu.style.display = 'none';
        closeMenu.style.display = 'none';

        menu.style.top = '0';
    } else {
        openMenu.style.display = 'inline-block';
        closeMenu.style.display = 'none';

        menu.style.top = '-1000px';

        numClick = 0;
    }
});




// ======================= animations ================
let show = element => {
    if (element) {
        element.classList.remove('hide');
        element.classList.add('show');
    }
}

const hero = document.getElementById('hero');
const trusted = document.getElementById('trusted');
const builtSection = document.getElementById('what-we-build');
const proventTrack = document.getElementById('proven-Track');
const testiSection = document.getElementById('testimonials');
const defineSection = document.getElementById('defining-section');
// =========================== elements of about page =============
const aboutHero = document.querySelector('.about-hero .container');
const manifestoSection = document.querySelector('.manifesto .container');
const evolutionSection = document.querySelector('.evolution .container');
const leadershipSection = document.querySelector('.leadership .container');
const recognitionSection = document.querySelector('.recognition .container');

// ============================== capabilities elements ==========
const capaHero = document.querySelector('.capabilities-hero .container');
const pillar1 = document.getElementById('pill1');
const pillar2 = document.getElementById('pill2');
const tooling = document.querySelector('.tooling-section .container');

window.addEventListener('load', () => {
    show(hero);
    show(aboutHero);
    show(capaHero);
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 800) {
        show(trusted);
    }
    if (window.scrollY >= 1100) {
            show(builtSection);
    }
    if (window.scrollY >= 2300) {
            show(proventTrack);
    }
    if (window.scrollY >= 3376) {
            show(testiSection);
    }
    if (window.scrollY >= 4200) {
            show(defineSection);
    }
    
    // ===================================== about page ===========
    if (window.scrollY >= 300) {
        show(manifestoSection);
    }
    if (window.scrollY >= 300) {
        show(manifestoSection);
    }
    if (window.scrollY >= 853) {
        show(evolutionSection);
    }
    if (window.scrollY >= 1794) {
        show(leadershipSection);
    }
    if (window.scrollY >= 2411) {
        show(recognitionSection);
    }



    // =================================== capabilities =============
    if (window.scrollY >= 400) {
        show(pillar1);
    }
    if (window.scrollY >= 900) {
        show(pillar2);
    }
    if (window.scrollY >= 1500) {
        show(tooling);
    }
})


// =============================== band numbers 
let clientsNum = document.getElementById('clients');
let deliveryPercentage = document.getElementById('delivery');
let awards = document.getElementById('awards');
let products = document.getElementById('products');
let clientCounte = 0;
let deliveryCount = 0;
let awardsCounte = 0;
let productCount = 0;
let Started = false;


window.addEventListener('scroll', () => {
    if (window.scrollY >= 3000 && !Started) {
        Started = true;
        if(clientsNum) {
            let clientInt = setInterval(() => {
                clientCounte += 1;
                clientsNum.textContent = `$${clientCounte}M+`;
                if (clientCounte >= 480) {
                    clearInterval(clientInt);
                }
            }, 10);
        }

        if (deliveryPercentage) {
            let deliveryInt = setInterval(() => {
                deliveryCount += 1;
                deliveryPercentage.textContent = `${deliveryCount}%` ;
                if (deliveryCount >= 99) {
                    clearInterval(deliveryInt);
                }  
            }, 50);
        }

        if (awards) {
            let awardsInt = setInterval(() => {
                awardsCounte += 1;
                awards.textContent = awardsCounte;
                if (awardsCounte >= 42) {
                    clearInterval(awardsInt);
                }
            },115)
        }

        if (products) {
            let productsInt = setInterval(() => {
                productCount +=1;
                products.textContent = `${productCount}+`;
                if (productCount >= 120) {
                    clearInterval(productsInt);
                }
            },40);
        }
    }
})

