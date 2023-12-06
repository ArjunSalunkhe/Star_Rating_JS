let star = document.querySelectorAll(".star");

let rat = document.querySelector(".rating");

star.forEach((e,id)=>{
    e.starValue = (id+1);
    ["click","mouseover","mouseout"].forEach((val)=>{
        e.addEventListener(val,showRating)
    })


})

function showRating(val){
    let type = val.type;
    let starValue = this.starValue;

    star.forEach((elm , idx)=>{

        if(type === "mouseover"){
            if(idx < starValue){
                elm.classList.add("yellow")

            }else{
                elm.classList.remove("yellow")
            }
        }

        if(type === "mouseout"){
            elm.classList.remove("yellow");
        }

        if(type === "click"){
            if(idx < starValue){
                elm.classList.add("orange")

            }else{
                elm.classList.remove("orange")
            }
        }

        if(type === "click"){
            if(starValue > 1){
                rat.innerHTML = `You Rated This ${starValue} Star!`
            }
        }

    })

}


let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
    window.location.reload();
})