let dx = 0;

document.querySelector(".btn-slider.left").addEventListener("click", () => {
    if(dx === 5) return;
    dx++;
    document.querySelector(".carousel").style.transform = `translateX(calc(-${dx * 100}% - ${dx * 32}px))`;
    document.querySelectorAll(".circle.active").forEach(el => el.classList.remove("active"));
    document.getElementById(`id-${dx}`).classList.add("active");

});
document.querySelector(".btn-slider.right").addEventListener("click", () => {
    if(dx === 0) return;
    dx--;
    document.querySelector(".carousel").style.transform = `translateX(calc(-${dx * 100}% - ${dx * 32}px))`;
    document.querySelectorAll(".circle.active").forEach(el => el.classList.remove("active"));
    document.getElementById(`id-${dx}`).classList.add("active");
});

const cardContainer = document.querySelector(".languages .container");
const infoContainer = document.querySelector(".info .container");
const infoContent = document.querySelector(".info .content");
const infoImg = document.querySelector(".info img");

const rotateCard = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log("dfdfsdfd");
            document.querySelectorAll(".languages .card").forEach(el => el.classList.add("animate"));
            cardObserver.unobserve(cardContainer); //unobserve so that callback triggers only on first intersection 
            //and not on subsequent intersections due to user scrolling
        }
    })
} 

const slideX = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            infoContent.classList.add("slide-right");
            infoImg.classList.add("slide-left");
            infoContentObserver.unobserve(infoContainer); //unobserve so that callback triggers only on first intersection 
            //and not on subsequent intersections due to user scrolling
        }
    });
}
const cardObserver = new IntersectionObserver(rotateCard, {threshold : 0.3});
cardObserver.observe(cardContainer)

const infoContentObserver = new IntersectionObserver(slideX, {threshold: 0.3});
infoContentObserver.observe(infoContainer);