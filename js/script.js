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

//json 가져오는 함수
function fetchProducts(category) {
   fetch('../js/pd.js')
   .then(response => response.json())
   .then(data => { 
       products = data;
       displayProducts(category);
   })
   .catch(error => console.log(error));
}

function displayProducts(category) {
   let productData = "";
   let filterProducts = (category === '전체보기' || category == '')? 
                            products : 
                            products.filter(product => product.category === category);  
      console.log(filterProducts);
      for(let i = 0; i < filterProducts.length; i++) {
         let colors = "";
         for(let n = 0; n < filterProducts[i].color.length; n++){
            colors += `<span class="${filterProducts[i].color[n]}"></span> `;
         }

         let banners = "";
         for(let m = 0; m <filterProducts[i].banner.length; m++) {
            banners += `<span class="${filterProducts[i].banner[m]}"></span> `;
         }

         productData += `
         <div class="col-3 col-m6 my-30">
              <div class="pdbox">
                 <a href="#" class="pd-link">
                    <img src="${filterProducts[i].img}" alt="001">
                 </a>
                    <h4 class="pd-title"><a href="#">${filterProducts[i].pdname}</a></h4>
                    <p><del>${formatLocale(filterProducts[i].delprice)}</del></p>
                    <p>${formatLocale(filterProducts[i].price)}</p>
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
}

fetchProducts('');

function filterProducts(category ){
  // e.preventDefault();
   fetchProducts(category);
}

function formatLocale(val) {
   return val.replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
   //1 단어의 경계가 아닌 위치를 찾는다. \B  
   //2.뒤에 3자리 숫자가 한 번 이상 나오고 
   //3.그 뒤에 다른 숫자가 오지 않는 위치 찾아서 쉼표
}
