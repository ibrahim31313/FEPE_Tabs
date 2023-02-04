//ul part :click > loop delete class active > put the active class in the ele clicked
//div part :click > loop delete class active > put the active class in the ele clicked

let lis = document.querySelectorAll("ul li");
let divs = document.querySelectorAll(".container2 div")


lis.forEach(function (li) {
    li.addEventListener("click", function(e) {
        lis.forEach(function (li, i) {
            //put the active class on the li clicked
            li.classList.remove("active") 
            e.currentTarget.classList="active"
            //put the active class on the right div
            if(e.currentTarget === li) {
                divs.forEach((div) => div.classList.remove("active"))
                divs[i].classList="active"
            }
        })
        
    })
})

