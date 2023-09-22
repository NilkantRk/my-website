const open = document.querySelector('.open');
const speakerList = document.querySelector('.speakers-lineout');
const btn = document.getElementById('button');

const speakers = [
  6,
  {
    name: 'Gaurav Yadav',
    image: 'images/speaker.png',
    summary: 'From Deparment Of Chemical Engineering , Indian Institute of TEchnology ropar.',
    summary2: 'He had done his Masers from National Institute of Technology ang graduation from Delhu TEchnological university , Delhi',
  },
   
     {
    name: 'Utkarsh Suryaman',
    image: 'images/speaker1.png',
    summary: 'From Deparment Of Computer Science , Indian Institute of TEchnology ropar.',
    summary2: 'He had done his graduation from Thapar Institute Of Engineering and TEchnology , patiala',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  open.addEventListener('click', () => {
    open.classList.toggle('oppenned');
  });

  for (let i = 1; i <= 2; i += 1) {
    const speakerCards = `<div id="speaker-${i}" class="only-desktop">
  <img src="${speakers[i].image}" alt="Image of speaker">
  <div>
  <h3>${speakers[i].name}</h3>
  <p class="speaker-summary">${speakers[i].summary}</p>
  <hr>
  <p>${speakers[i].summary2}</p>
  </div>
  </div>`;

    speakerList.innerHTML += speakerCards;
  }

  const eachSpeaker = document.querySelectorAll('#speaker-3, #speaker-4, #speaker-5, #speaker-6');

  if (window.innerWidth < 768) {
    eachSpeaker.forEach((el) => {
      el.style.display = 'none';
    });

    btn.addEventListener('click', () => {
      eachSpeaker.forEach((el) => {
        el.style.display = 'flex';
      });

      btn.style.display = 'none';
    });
  }
});


(function($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(function() {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function() {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function() {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        nav: true,
        loop: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

})(jQuery);
