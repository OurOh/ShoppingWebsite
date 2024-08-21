const simgs = document.querySelectorAll('.simg');
const bimg = document.querySelector('.b-img > img');

const colorRadios = document.querySelectorAll('.colors'); //색상설정
const thisColor = document.getElementById('thiscolor');

const options = document.querySelectorAll(".option"); //사이즈 설정
const sizeBox = document.querySelector(".size-box > span");
const sizeBoxDetail = document.querySelector(".size-box-detail");
const toggleIcon = document.getElementById("toggle-icon");

const totalBox = document.getElementById("total-box");
const selectedOption = document.getElementById("selected-option");

const totalAmountTxt = document.getElementById("total-price");
const totalAmountInput= document.getElementById("totalAmount");

//전체 주문 목록을 저장할 배열
const orderList = [];

let selectColor = '';
let selectSize = ''; 
let selectPrice = 0; //선택한 가격 * 수량
let totalAmount = 0; //총 금액


//가격 가져오기
const orPrice = document.getElementById("or-pd-price").value; 
const price = document.getElementById("pd-price").value; //가격설정
const sale = calcPercent(orPrice, price);  //할인률 구하기

//수량 가져오기
const quantityBox = document.getElementById("quintity");

document.querySelector(".dwn").textContent = sale + "%";

simgs.forEach( img => {
   img.addEventListener("click", (event)=>{
      bimg.src = event.target.src;
   });
});

colorRadios.forEach( radio => {
   radio.addEventListener('change', (event)=>{
       selectColor = event.target.value;
       thisColor.textContent = selectColor;
       updateTotalBox();
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
      selectSize = e.target.getAttribute("data-value");

      //option 클래스에 있는 모든 selected 클래스를 지워줌 
      options.forEach(opt=> opt.classList.remove("selected"));

      //클릭한 곳에 selected를 추가함
      e.target.classList.add("selected");
      sizeBox.textContent = `사이즈 : ${selectSize}`;
      document.getElementById("size").value = selectSize;
      sizeBoxDetail.style.display="none";
      toggleIcon.classList.remove("fa-angle-up");
      toggleIcon.classList.add("fa-angle-down");
      updateTotalBox();
   });
});

//증가, 감소 이벤트
document.querySelector(".dec").addEventListener('click', ()=>{
   let quantity = parseInt(quantityBox.value);
   if(quantity > 1) {
      quantityBox.value = quantity - 1;
      updateTotalBox()
   }
});

document.querySelector(".inc").addEventListener('click', ()=>{
    let quantity = parseInt(quantityBox.value);
    if(quantity < 10) {
       quantityBox.value = quantity + 1;
       updateTotalBox()
    }
 });

function updateTotalBox() {
   if(selectColor && selectSize) {
      //totalBox.classList.remove("display-none");
      //selectedOption.innerHTML = "* 색상 : "+ selectColor + "<br>* 사이즈 : " + selectSize; 
      if(order.quantity == '') {order.quantity}
      selectPrice = price * quantity;
      
      //새로운 주문 정보를 객체로 저장
      const order = {
         color: selectColor,
         size: selectSize,
         quantity: quantity,
         price: selectPrice
      }
 
     //새주문이 기존주문과 같을 경우
     const existOrder = orderList.findIndex( o => o.color === order.color && o.size === order.size);
      if(existOrder > -1) {
         orderList[existOrder].quantity += order.quantity;
         orderList[existOrder].price += order.price;    
      }else{
         orderList.push(order);
      }
      //전체 주문 및 금액 표시
      console.log
      const totalAmount = orderList.reduce((sum,o)=> sum + o.price, 0);
      totalBox.classList.remove("display-none");

      for();

      document.querySelector(".select-price").value=selectPrice;
      document.querySelector(".p-price").textContent = selectPrice.toLocaleString() + "원";
   
      totalAmountTxt.textContent = totalAmout.toLocaleString + "원";
      totalAmountInput.textContent = selectPrice;
   }
}

//x를 눌러 상품 금액 제거
document.querySelector(".closeinit").addEventListener("click", (event)=>{
   event.preventDefault();
   selectColor="";
   selectSize="";
   quantityBox.value=1;
   sizeBox.textContent = "* [필수] 사이즈를 선택하세요.";
   thisColor.textContent = "* [필수] 색상을 선택하세요."; 

});


//백분율 구하기
function calcPercent(or, nr) {
    return (Math.floor((or - nr) / or* 100));
}

console.log(calcPercent(69900, 29900));