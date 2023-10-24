const img = document.getElementById("modal-img");
const overlay = document.getElementById('overlay')
const modal = document.getElementById('modal')
let isNavOpen = false;

function openModal(m) {
  img.src =`assets/certifications/cer-${m}.png`;
  modal.classList.add('active')
  overlay.classList.add('active')
  console.log(m)
}

function closeModal() {

  isNavOpen&&openCloseNav();
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// ------------------------ goto top ---------------------------------
let mybutton = document.getElementById("gotop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if ( document.documentElement.scrollTop > 100) {
    mybutton.style.zIndex = "10";
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.zIndex = "-2";
    mybutton.style.opacity = "0";

  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// ---------------------- open nav ---------------------------------



function openCloseNav(){
  if(window.innerWidth<=768){
    if(isNavOpen){
      isNavOpen=false;
      closeModal();
      document.querySelector("#navBar").style.left="-200px";
    }
    else{
      isNavOpen=true;
      openModal();
      document.querySelector("#navBar").style.left="0";
    }
  }
}