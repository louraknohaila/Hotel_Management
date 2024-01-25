
   document.addEventListener("DOMContentLoaded", function() {
    var reviewsSwiper = new Swiper('.reviews-slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const swiperContainer = new Swiper('.home-slider', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          document.querySelectorAll('.swiper-slide').forEach(function (slide) {
            slide.classList.remove('swiper-slide-active');
          });
          const activeSlide = document.querySelector('.swiper-slide-active');
          if (activeSlide) {
            activeSlide.classList.add('swiper-slide-active');
          }
        },
      },
    });
  });
    //   Ajoutez un script pour observer la visibilité et ajouter la classe "visible"
document.addEventListener("DOMContentLoaded", function() {
  const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.5 });

  animateOnScrollElements.forEach(element => {
    observer.observe(element);
  });
});

   document.addEventListener("DOMContentLoaded", function() {
     var gallerySwiper = new Swiper('.gallery-slider', {
       loop: true,
       pagination: {
         el: '.swiper-pagination',
         clickable: true,
       },
       autoplay: {
         delay: 700, 
         disableOnInteraction: false, 
       },
     });
   });
   function afficherModal1(){
      let emailss = document.querySelector('input[name="mail"]').value;
      let rooms = document.querySelector('select[name="chambre"]').value;
      let check_in = document.querySelector('input[name="check_db"]').value;
      let check_out = document.querySelector('input[name="check_notdb"]').value;
        if( emailss &&  rooms &&  check_in  && check_out )
           {
             let modal = document.querySelector('.modal');
             modal.style.display ='flex';
            }
           else{
           let modal2 = document.querySelector('.modal2');
           modal2.style.display="flex";
           } 
   }
   function afficherModal() {
    let checkIn = document.querySelector('input[name="check_in"]').value;
    let checkOut = document.querySelector('input[name="check_out"]').value;
    let adults = document.querySelector('select[name="adults"]').value;
    let childs = document.querySelector('select[name="childs"]').value;
    let rooms = document.querySelector('select[name="rooms"]').value;
    if (checkIn && checkOut && adults && childs && rooms) {
        let modal = document.querySelector('.modal');
        modal.style.display = 'flex';
    } else {
      let modal2 = document.querySelector('.modal2');
           modal2.style.display="flex";
    }
}
function afficherModal2() {
    let name = document.querySelector('input[name="namess"]').value;
    let email = document.querySelector('input[name="emailss"]').value;
    let number = document.querySelector('input[name="numberss"]').value;
    let message = document.querySelector('textarea[name="message"]').value;


    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Number:", number);
    console.log("Message:", message);

    if (name !== "" && email !== "" && number !== "" && message !== "") {
        console.log("Conditions satisfaites. Affichage du modal.");
        let modal = document.querySelector(".modal");
        modal.style.display = "flex";
    } else {
      let modal2 = document.querySelector('.modal2');
           modal2.style.display="flex";
    }
}


   function fermerModal(){
       let b = document.querySelector('.modal');
         b.style.display='none'
         let d = document.querySelector('.modal2');
         d.style.display='none'
         let w = document.querySelector('.modal3');
         w.style.display='none'
   }



   function toggleBox(index) {
    // Récupérer toutes les boîtes
    var boxes = document.querySelectorAll('.faq .box');
    
    // Retirer la classe 'active' de toutes les boîtes
    boxes.forEach(function(box) {
      box.classList.remove('active');
    });

    // Ajouter la classe 'active' à la boîte correspondante
    boxes[index - 1].classList.add('active');
  }

let enter = document.querySelector('.enter');
  enter.addEventListener('click', function(){
      window.location.href="index.html";
  });
  let entere = document.querySelector('#entere');
    entere.addEventListener('click', function(){
       window.location.href="bookings.html";
    })
  


