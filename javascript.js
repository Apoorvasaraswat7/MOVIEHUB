const arrows=document.querySelectorAll(".arrow");
const movieLists=document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", ()=>{
        clickCounter++;
        if(itemNumber - (2 + clickCounter) >= 0){
        movieLists[i].style.transform=`translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value
        -300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });

    console.log(movieLists[i].querySelectorAll("img").length);
});


const ball= document.querySelector(".toggle-ball");
const items=document.querySelectorAll(".container,movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle,.movie-list-item-button")

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})



const image=document.querySelectorAll(".movie-list-item-img");

    image.addEventListener("mouseover",()=>{
        image.style.transform="scale(1.2)";
    })

    image.addEventListener("mouseout",()=>{
        image.style.transform="scale(1)";
    })


  //  movieLists[i].querySelectorAll("img").length