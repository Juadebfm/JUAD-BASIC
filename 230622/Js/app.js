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

// SWIPER PAGINATION FOR WORK
// let swiperTestimonial = new Swiper(".work-container", {
//     spaceBetween: 24,
//     loop: true,
//     grabCursor: true,

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },

       



// SWIPER PAGINATION

let swiperTestimonial = new Swiper(".testimonial-container, .work-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // RESPONSIVE BreakPOINTS FOR SWIPER
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    },
  });


//   var mySwiper2 = new Swiper('.swiper-container.shoes', {
//     // Optional parameters
//     pagination: '.pag-shoes',
//     paginationClickable: true,
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     spaceBetween: 30,
//     loop: true,
//     paginationType: "custom",
//     paginationCustomRender: function(swiper, current, total) {
//       var names = [];
//       $(".swiper-wrapper .swiper-slide").each(function(i) {
//         names.push($(this).data("name"));
//       });
//       var text = "<span style='background-color:black;padding:20px;'>";
//       for (let i = 1; i <= total; i++) {
//         if (current == i) {
//           text += "<span style='border-top:1px solid green;margin-right:4px;color:green;padding:10px;'>" + names[i] + "</span>";
//         } else {
//           text += "<span style='border-top:1px solid white;margin-right:4px;color:white;padding:10px;'>" + names[i] + "</span>";
//         }
  
//       }
//       text += "</span>";
//       return text;
//     }
  
//   });


//   SCROLL SECTION WHEN ACTIVE

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


// LIGHT AND DARK MENU

const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROLL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home-content')
sr.reveal('.home-handle', {delay: 700})
sr.reveal('.home-social, .home-scroll', {delay: 900, origin: 'bottom'})
sr.reveal('.nav-menu', {delay: 900})


// MENU BUTTON BURGER SCRIPT

// // Setup navigation bar
// {
//     const navMenu = document.querySelector(".nav");
//     const navOverlay = document.querySelector(".nav-overlay");
//     const navButton = document.querySelector(".nav-btn");
  
//     navButton.addEventListener("click", () => {
//       navMenu.classList.add("nav-open");
//       navOverlay.classList.add("nav-overlay-open");
//     });
  
//     navOverlay.addEventListener("click", () => {
//       navMenu.classList.remove("nav-open");
//       navOverlay.classList.remove("nav-overlay-open");
//     });
//   }