const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervallId = null;


document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length >0){
        slides[slideIndex].classList.add("displaySlide")
        intervallId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
}
function prevSlide(){

}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

async function fetchData() {
    try{
        const response = await fetch("code.json")

        if (!response.ok)
            throw new Error("várjá baj van");

        const data = await response.json()
        console.log(data)
    }
    catch(e){
        console.log(e)
    }
}

fetchData()