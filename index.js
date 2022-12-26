const openBtn = document.querySelector("button");
const closeBtn = document.querySelector(".close");
const modal = document.querySelector(".modal");
const form = document.querySelector("form");

// OPEN MODAL
function openModal(){
    modal.style.display = "grid";
}

openBtn.addEventListener('click', openModal);

// CLOSE MODAL
function closeModal(){
    modal.classList.add('close-modal-animation');
    setTimeout(()=>{
        modal.style.display = "none";
        window.location.reload();
    },1000)
}

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})

// thank you message after subscription

function submitForm(){
    const card = document.querySelector(".card");
    card.innerHTML = "<h1>Thanks for your subscription</h1>";
    setTimeout(()=>{
        closeModal();
    },3000)
}

form.addEventListener('submit', submitForm);
