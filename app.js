const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        let icon = item.querySelector(".icon img"); 

        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`;
            icon.src = "/img/icon-minus.svg"; 
        }else{
            description.style.height = "0px";
            icon.src = "/img/icon-plus.svg"; 
        }
        removeOpen(index);
    })
})  

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            let icon = item2.querySelector(".icon img"); 

            des.style.height = "0px";
            icon.src = "/img/icon-plus.svg";
        }
    })
}
