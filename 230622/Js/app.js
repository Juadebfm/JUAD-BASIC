// This script gives the header shadows when scrolling yp and down. The arrow function was used here instead of the usal if else statements. makes the script easier to understand

const scrollHeader = () =>{
    const header = document.getElementById('header')
    // when the scroll is greater than 50 vh, add the scroll-header class to header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header')
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Services Mod Hide And Unhide Toggle

const modViews = document.querySelectorAll('.services-mod'),
      modBtns = document.querySelectorAll('.services-button'),
      modClose = document.querySelectorAll('.services-mod-close')

let mod = function(modClick){
    modViews[modClick].classList.add('active-mod')
}

modBtns.forEach((mb, i) =>{
    mb.addEventListener('click', () =>{
        mod(i)
    })
})

modClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modViews.forEach((mv) =>{
            mv.classList.remove('active-mod')
        })
    })
})


// MIXITUP SCRIPTING

// var mixerPortfolio = mixitup(ʻ.work-containerʻ, {
//     selectors: {
//         target: '.work-card'
//     },
//     animation: {
//         duration: 300
//     }
// });

// ACTIVE LINK
// const linkWork = document.querySelectorAll(ʻ.work-itemʻ)

// function activeWork(){
//     linkWork.forEach(l=> l.classList.remove(ʻactive-workʻ))
//     this.classList.add(ʻactive-workʻ)
// }

// linkWork.forEach(l=> l.addEventListener(ʻclick, active-workʻ))


// SWIPER PAGINATION

let swiperTestimonial = new Swiper(".testimonial-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });