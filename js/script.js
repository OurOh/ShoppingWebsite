function viewSub(x){
   const gnb = document.getElementById("gnb");
   gnb.classList.toggle("flex");
   x.classList.toggle("change");
}

function slideShow(){
   const heroIn = document.querySelector(".hero-in");
   const bannerBox = document.querySelectorAll(".banner-box");
   const bCount = bannerBox.length;
   let fBannerBox = bannerBox[0];
   let lBannerBox = bannerBox[bCount - 1];
   heroIn.classList.add("ani");  //ani 클래스를 추가한다. (-1330픽셀 이동)

   setTimeout(function(){
      //1. ani 클래스를 지운다
      heroIn.classList.remove("ani");
      //2. 첫번째 배너를 지우고 복제해서 마지막에 추가 한다.
      fBannerBox.remove();
      lBannerBox.insertAdjacentElement("afterend", fBannerBox);
      //3. left 포지션을 0으로 셋팅한다.
      heroIn.style.left = "0";
   }, 400);
  
   setTimeout(slideShow, 5000);
}

slideShow();

let products = [];
let productData = "";
//json 가져오는 함수
function fetchProducts() {
   fetch('./js/pd.json')
   .then(response => response.json())
   .then(data => { 
       products = data;
       for(let i = 0; i < products.length; i++) {

         let colors = "";
         let banners = "";

         for(let n = 0; n < products[i].color.length; n++) {
            colors += `<span class="${products[i].color[n]}"></span> `;
         }
   
         for(let m = 0; m < products[i].banner.length; m++) {
            banners += `<span class="${products[i].banner[m]}"></span> `;
         }

         productData += `
          <div class="col-3 col-m6 my-30">
               <div class="pdbox">
                  <a href="#" class="pd-link">
                     <img src="${products[i].img}" alt="001">
                  </a>
                     <h4 class="pd-title"><a href="#">${products[i].pdname}</a></h4>
                     <p><del>${formatLocale(products[i].delprice)}</del></p>
                     <p>${formatLocale(products[i].price)}</p>
                     <div class="colorbox">
                        ${colors}
                     </div>
                     <div class="banner-icon">
                        ${banners}
                     </div>
               </div>   
            </div>
         `;
       }

       document.getElementById("pdlist").innerHTML = productData;
   })
   .catch(error => console.log(error));
}

fetchProducts();

function formatLocale(val) {
   return val.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}