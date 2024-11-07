const clickerFade = [document.querySelector('.clicker-fade'), document.querySelector('.show-more'), document.querySelector('.bottom-svg')];
const productBox = [document.querySelector('.product-box')];
const groupingSMPContent = {
    smpCard : document.querySelectorAll('.small-product'),
    cbSMP: document.querySelectorAll('.card-body-smp'),
    fSMP: document.querySelectorAll('.footer-card-smp'),
}

const [cF, sM, bSVG] = clickerFade;
const [pB] = productBox;
sM.innerHTML = 'Tampilkan Banyak';
let heightpB = 'h-auto';
let sizeDefault = 'max-h-[500px]';
let rotateDefault = 'rotate-180'
let newText = 'Tampilkan Sedikit'
pB.classList.add('pb-8');

function fadeBox(action){
    return action(sizeDefault, rotateDefault, heightpB, newText);
}

function actionFadeBox(sizeDefaultCallback,rotate, newSize, newText){
    cF.addEventListener('click', ()=>{
        if(pB.classList.contains(sizeDefaultCallback)){
            pB.classList.add(newSize);
            pB.classList.remove(sizeDefaultCallback)
            sM.innerHTML = newText;
            bSVG.classList.add(rotate);
        } else {
            pB.classList.remove(newSize);
            pB.classList.add(sizeDefaultCallback);
            sM.innerHTML = 'Tampilkan Banyak';
            bSVG.classList.remove(rotate)
        }
    })
}
fadeBox(actionFadeBox);

const bM  = document.querySelectorAll('.btn-modal');

function showModal(id) {
    document.getElementById(id).showModal();
}


function fetchJSONData() {
    
	fetch("data/dataMarket1.json")
	.then((res) => {
		if (!res.ok) {
			throw new Error
				(`HTTP error! Status: ${res.status}`);
		}
		return res.json();
	})
	.then((data) => {
		var a = 0;
		data.forEach(function() {
			
			document.getElementById("asd").innerHTML += "<dialog id='my_modal_"+ data[a]['id'] +"' class='modal'>><div id='modal-content' class='modal-box modal-content'><h3 class='font-bold text-lg mb-2 text-lime-400'>"+ data[a]['judul'] +"</h3><ul class='flex flex-col w-full items-start justify-start'><li class='p-2 w-full'><strong>Harga: </strong>Rp "+ data[a]['harga'] +"</li><li class='p-2 w-full'><strong>Watt: </strong>Rp "+ data[a]['watt'] +"</li><li class='p-2 w-full'><strong>Deskripsi: </strong> "+ data[a]['deskripsi'] +"</li><div class='modal-action mt-2'><form method='dialog'><!-- if there is a button in form, it will close the modal --><button class='btn'>Close</button></form></div></ul></div></dialog>";
			a++;
		});
	})
	.catch((error) => 
		console.error("Unable to fetch data:", error));
}

fetchJSONData();

const fSMP = document.querySelectorAll('.footer-card-smp');
fSMP.forEach(e=>{
    e.addEventListener('click', ()=>{
        
    })
})

const spanC = document.querySelector('.content-c');
const boxArea2 = document.querySelector('.box-area-2');


function fetchDataMarket2() {
    fetch('data/dataMarket2.json')
        .then(response => response.json())
        .then(result => {
            let cards = ``;
            result.forEach(data => {
                const cardHtml = UICard(data);
                cards += cardHtml;
            });
            boxArea2.innerHTML = cards;

            const cardBodies = document.querySelectorAll('.card-body-smp');
            cardBodies.forEach(cardBody => {
                clickAction(cardBody);
            });

        })
        .catch(error => console.log(`Error! Cannot GET data product: ${error}`));
}

fetchDataMarket2();


// function fetchDataMarket2() {
//     fetch('data/dataMarket2.json')
//         .then(response => response.json())
//         .then(result => {
//             let cards = ``;
//             result.forEach(data => {
//                 const dataArray = UICard(data);
//                 cards += dataArray;
//             });
//             boxArea2.innerHTML = cards; // Setelah semua elemen ditambahkan
//             const cbs = document.querySelectorAll('.card-body-smp')
//             cbs.forEach((e) =>{
//                 clickAction(e);
//             })

//         })
//         .catch(error => console.log(`Error Cannot GET data product: ${error}`));
// }

// fetchDataMarket2();

function clickAction(cardBody) {
    const footer = cardBody.parentElement.querySelector('.footer-card-smp');
    footer.addEventListener('click', () => {
        if (cardBody.classList.contains('opacity-0')) {
            cardBody.classList.replace('opacity-0', 'opacity-75');
        } else {
            cardBody.classList.replace('opacity-75', 'opacity-0');
        }
    });
}



function UICard(apply){
    return `<div class="small-product my-4 w-[270px] overflow-hidden h-[auto] max-[718px]:w-60 max-[718px]:h-[auto] relative bg-slate-200 max-[656px]:w-52 max-[656px]:h-[240px] max-[596px]:w-48 max-[596px]:h-56 max-[563px]:w-40 max-[563px]:h-48 max-[499px]:w-36 max-[499px]:h-auto" style="box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;">
                                <img src="${apply.image}" class="object-cover w-full aspect-square" alt="">
                                <div class="card-body-smp transition-all duration-200 opacity-0 max-[563px]:px-3 max-[563px]:py-2 h-[270px] z-30 top-0 absolute bg-green-950 py-4 px-6 max-[718px]:h-[240px] max-[656px]:h-[208px] max-[596px]:h-[192px] max-[563px]:h-[160px] max-[499px]:h-[144px]">
                                    <h2 class="title-product text-lime-400 text-2xl max-[563px]:text-lg">${apply.title}</h2>
                                    <p class="text-white mt-4 max-[563px]:mt-0 max-[656px]:text-[10px] ">${apply.description}</p>
                                </div>
                                <div class="footer-card-smp overflow-hidden z-40 text-green-800 w-full text-center mx-auto bg-lime-200 hover:bg-green-950  py-1 cursor-pointer ">
                                    <p class="">Lihat</p>
                                </div>
                            </div>`;
}

