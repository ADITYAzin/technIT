const replaceBox = document.querySelector('.online-course-area');
const swiperSlides = document.querySelectorAll('.swiper-slide');




function fetchCourseArea() {
    fetch("data/course.json")
    .then(response => response.json())
    .then((data) => {
        let cardsCourse = ``;
        data.forEach((e, i) => {
            const cardCourse = UICardCourse(e,i);
            cardsCourse+=cardCourse;
            
        });
        replaceBox.innerHTML = cardsCourse;
        const one = document.querySelectorAll('.course-img')[1];
        one.classList.add('bg-[#1F252F]')
    });
}

fetchCourseArea();

function UICardCourse(applies){
    return `<main class="card-online-course-items block w-[180px] bg-white rounded-3xl" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                <main class="card-oc-content w-full flex flex-col items-center gap-4">
                    <figure class="course-img flex flex-row items-center justify-center rounded-3xl bg-white border-b border-gray-200 relative w-full h-[200px] px-4"><img src="${applies.img}" alt=""></figure>
                    <main class="oc-title"><h2 class="text-lg">${applies.judul}</h2></main>
                    <main class="oc-visit-btn mb-4"><a href="${applies.url}" class="w-full bg-[#658DE4] text-center p-2 rounded-lg text-white"><button>Kunjungi Kursus</button></a></main>
                </main>
            </main> `;
}



fetch('data/ytchannel.json')
  .then(response => response.json()) // Mengambil data JSON
  .then(data => {
    let cardsChannel = '';
    
    // Loop untuk menambahkan setiap channel ke dalam cardsChannel
    data.forEach(e => {
      const CardsChannel = UICardYTChannel(e); // Memanggil fungsi UICardYTChannel untuk setiap elemen data
      cardsChannel += CardsChannel; // Gabungkan HTML card ke dalam string
    });

    // Loop untuk mengisi setiap swiper-slide dengan card sesuai dengan urutan
    swiperSlides.forEach((sS, index) => {
      // Pastikan index sesuai dengan data yang ada
      if (index < data.length) {
        sS.innerHTML = UICardYTChannel(data[index]); // Setiap swiper-slide diisi dengan card yang sesuai

        const transition = ['transition-all', 'duration-700', 'ease-out'];
        const cardYTChannel = document.getElementsByClassName('card');
        const drop = sS.querySelectorAll('.drop'); // pastikan ini untuk hanya mengambil elemen .drop dalam slide ini
        
        drop.forEach((dropElement, i) => {
          dropElement.setAttribute('data-index', index); // Set data-index dengan index dari swiperSlides
          
          dropElement.addEventListener('click', () => {
              const index = dropElement.getAttribute('data-index');
              const card = cardYTChannel[index];
      
              function rotate() {
                  dropElement.classList.add(...transition);
                  setTimeout(() => {
                      dropElement.classList.toggle('-rotate-180');
                      card.classList.add(...transition);
                      card.classList.toggle('h-[86px]');
                      card.classList.toggle('h-[284px]');
                      card.classList.toggle('scale-75');
                      card.classList.toggle('scale-100');
                  }, 0);
              }
      
              rotate();
          });
      });
      }
    });
  })
  .catch(error => {
    console.error("Terjadi kesalahan:", error); // Tangani error jika ada
  });

// Fungsi untuk membuat card dari data channel
function UICardYTChannel(applies,i) {
  return `
    <div class="card block bg-white p-4 w-[360px] rounded-[2.5rem] overflow-hidden h-[86px] scale-75" style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
      <div class="card-content w-full flex flex-col items-center justify-between h-full gap-4">
        <div class="card-header w-full flex flex-row items-center justify-between gap-1">
          <figure class="card-profile w-14"><img class="img-profile object-cover rounded-full" src="${applies.img}" alt=""></figure>
          <div class="card-profile flex flex-col">
            <h2 class="name">${applies.judul}</h2>
            <p class="role text-sm">${applies.role}</p>
          </div>
          <div class="drop-icon-area">
            <svg class="drop" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path fill="black" d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12l-5.657 5.658Z" />
              </g>
            </svg>
          </div>
        </div>
        <div class="middle-card-area text-[14px]">
          <p>${applies.description}</p>
        </div>
        <div class="socials w-full flex flex-col items-center justify-center gap-4">
          <div class="socials-icon flex flex-row items-center justify center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="black" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
              <path fill="black" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
            </svg>
          </div>
          <a class="w-full bg-[#658DE4] text-center py-2 rounded-full text-white" href="${applies.youtube}"><button>Channel Youtube</button></a>
        </div>
      </div>
    </div>`;
}


