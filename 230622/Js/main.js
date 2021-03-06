// This script gives the header shadows when scrolling yp and down. The arrow function was used here instead of the 
//usual if else statements. makes the script easier to understand

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

// SWIPER PAGINATION

let swiperTestimonial = new Swiper(".testimonial-container, .work-container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // RESPONSIVE BREAKPOINTS FOR SWIPER
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 48,
        },
    },
  });

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

//ABOUT ME PAGE
$(window).scroll(function(){
    var boxje = $(".home-social").offset().top;
    var value = 160;
      if (boxje>value) {
        $(".home-social-link").css({"display":"none"});
      } else {
        $(".home-social-link").css({"display":"flex"});
      }
  });


