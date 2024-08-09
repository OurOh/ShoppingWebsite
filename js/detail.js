const simgs = document.querySelectorAll('.simg');
const bimg = document.querySelector('.b-img > img');

const colorRadios = document.querySelectorAll('.colors');
const thisColor = document.getElementById('thiscolor');

const options = document.querySelectorAll(".option");
const sizeBox = document.querySelector(".size-box > span");
const sizeBoxDetail = document.querySelector(".size-box-detail");
const toggleIcon = document.getElementById("toggle-icon");

simgs.forEach( img => {
   img.addEventListener("click", (event)=>{
      bimg.src = event.target.src;
   });
});

colorRadios.forEach( radio => {
   radio.addEventListener('change', (event)=>{
       const selectColor = event.target.value;
       thisColor.textContent = selectColor;
   });
});

/**** 사이즈 박스 토글  */
function viewdetail(){
   const detailBox = document.querySelector(".size-box-detail");
   const toggleIcon = document.getElementById("toggle-icon");
   //현재 detailBox의 상태 확인 
   if(detailBox.style.display == "block") {
      detailBox.style.display  = "none";
      toggleIcon.classList.remove("fa-angle-up");
      toggleIcon.classList.add("fa-angle-down");
   }else{
      detailBox.style.display = "block";
      toggleIcon.classList.remove("fa-angle-down");
      toggleIcon.classList.add("fa-angle-up");
   }
}

/* 사이즈 박스에서 사이즈 선택 */
options.forEach(option => {
   option.addEventListener("click", (e)=>{

      //클릭한 option의 data-value 값을 받음
      const svalue = e.target.getAttribute("data-value");

      //option 클래스에 있는 모든 selected 클래스를 지워줌 
      options.forEach(opt=> opt.classList.remove("selected"));

      //클릭한 곳에 selected를 추가함
      e.target.classList.add("selected");
      sizeBox.textContent = `사이즈 : ${svalue}`;
      document.getElementById("size").value = svalue;
      sizeBoxDetail.style.display="none";
      toggleIcon.classList.remove("fa-angle-up");
      toggleIcon.classList.add("fa-angle-down");
   });
});

//백분율 구하기
function calcPercent(or, nr) {
    return (Math.floor((or - nr) / or* 100));
}

console.log(calcPercent(69900, 29900));