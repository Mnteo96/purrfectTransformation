let swiperCards = new Swiper('.cat-container', {
    loop: false,
    spaceBetween: 10,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        600:{
            slidesPerView: 2,
        },

        968:{
            slidesPerView: 3,
        },
    }
  });


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('transform-btn')) {
        let button = event.target;
        let kittenPic = document.getElementById(button.getAttribute('data-kitten-id'));
        let adultPic = document.getElementById(button.getAttribute('data-adult-id'));

        if (kittenPic.classList.contains('hidden') || !kittenPic.classList.contains('active')) {
            // Átváltás felnőtt cicáról kiscicára
            adultPic.classList.add('hidden');
            adultPic.classList.remove('active');

            kittenPic.classList.add('active');
            kittenPic.classList.remove('hidden');

            // Gomb szövegének frissítése
            button.textContent = "Make me an adult";
        } else {
            // Átváltás kiscicáról felnőtt cicára
            kittenPic.classList.add('hidden');
            kittenPic.classList.remove('active');

            adultPic.classList.add('active');
            adultPic.classList.remove('hidden');

            // Gomb szövegének frissítése
            button.textContent = "Make me a kitten";
        }
    }
});





  