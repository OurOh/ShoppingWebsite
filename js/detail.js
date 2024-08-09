const sigms = document.querySelectorAll('.simg');
const simgs = document.getElementsByClassName('.simg');

const bimg =document.querySelector('b-img > img');

const colorRadios = document.querySelectorAll('.colors');
const thisColor = document.getElementById('thiscolor');

simgs.forEach(img => {
    img.addEventListener("click", (event)=>{
        bimg.src = event.target.src;
    });
});

colorRadios.forEach(radio =>{
    radio.addEventListener('change', (event)=>{
        const selectColor = event.target.value;
        thisColor.textContent = selectColor;
    });
});


// 사이즈 구하기
function viewdetail(){
    const detailBox = document.querySelector(".size-box-detail");
    const toggleIcon = document.getElementById("toggle-icon");

    //현재 detailBox의 상태 확인
    if(detailBOx.style.display == 'block'){
        detailBOx.style.display == "none"
        toggleIcon.classList.remove("fa-angle-up");
        toggleIcon.classList.add("fa-angle-down");
    }else{
        detailBOx.style.display = 'block';
        toggleIcon.classList.remove("fa-angle-down");
        toggleIcon.classList.add("fa-angle-up")
    }
}

//**사이즈선택***//
Option.forEach(option => {
    option.addEventListener("click", (e) =>{

        //클릭한 option의 data-value 값을 받음
        const svalue = e.target.getAttribute("data-value");

        //option 클래스에 있는 모든 selected 클래스를 지워줌
        options.ferEach(opt => opt.classList.remove("selected"));

        //클릭한 곳에 selected를 추가함
        e.target.classList.add("selected");
        sizeBox.textContent = '사이즈 : ${'svalue'}
    });
});




// 백분율 구하기
function calcPercent(or,nr){
    return (Math.floor((or - nr) / or * 100));
}