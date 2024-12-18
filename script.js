// let filterButtons = document.querySelectorAll(".filter-buttons button");
// let filterableCards = document.querySelectorAll(".filterable-cards .card");
// // console.log("filter-buttons, filterableards");

// let filterCard = ((e) => {
//     document.querySelector("active").classList.remove("active");
//     e.targert.classList.add("active");

//     filterableCards.forEach((card) =>{
//         card.classList.add("hide");
        
//         if(card.dataset.name ===e.target.dataset.name ||e.target.dataset.name ==="all"){

//             card.classList.remove("hide");
//         }

//         })
// })
// filterButtons.forEach((button) =>{
//     button.addEventListener("click", filterCard);
// })

$(document).ready(function() {
let filterButtons = $(".filter-buttons button");
let filterableCards = $(".filterable-cards .card");
console.log(filterButtons, filterableCards);

let filterCards = (e)=> {
    $(".active").removeClass("active");
    $(e.target).addClass("active");
    
    filterableCards.addClass("hide");
    filterableCards.each(function() {
        let card = $(this);

        if(card.data('name') === $(e.target).data('name') || $(e.target).data('name') === "all"){
            card.removeClass("hide");
        }
    })
}

filterButtons.on("click", filterCards);

})