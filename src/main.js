const accordion_btns = document.querySelectorAll(".accordion .accordion-button");
const collapse_btns = document.querySelectorAll(".collapse .collapse-button");


//Collapse
collapse_btns.forEach((button) => {

    if(button.classList.contains('collapse-active')){
        let collapse_item = button.nextElementSibling;
        collapse_item.style.maxHeight = collapse_item.scrollHeight + "px";
    }
    

    button.addEventListener("click", () => {

        let collapse_item = button.nextElementSibling;

        if(!collapse_item.classList.contains('collapse-item-active')){
            collapse_item.classList.add('collapse-item-active');
        }

        button.classList.toggle("collapse-active");

        if (collapse_item.style.maxHeight) {
            collapse_item.style.maxHeight = null;
        } else {
            collapse_item.style.maxHeight = collapse_item.scrollHeight + "px";
        } 
    });
});



//Accordion
accordion_btns.forEach((button) => {

    if(button.classList.contains('accordion-active')){
        let accordion_item = button.nextElementSibling;
        accordion_item.style.maxHeight = accordion_item.scrollHeight + "px";
    }
    

    button.addEventListener("click", () => {

        let accordion_item = button.nextElementSibling;

        if(!accordion_item.classList.contains('accordion-item-active')){
            accordion_item.classList.add('accordion-item-active');
        }

        accordion_btns.forEach((btn) => {
            if(btn.classList.contains('accordion-active')){
                if(btn != button){
                    btn.classList.toggle("accordion-active");
                    btn.nextElementSibling.style.maxHeight = null;
                }
            }
        })

        button.classList.toggle("accordion-active");

        if (accordion_item.style.maxHeight) {
            accordion_item.style.maxHeight = null;
        } else {
            accordion_item.style.maxHeight = accordion_item.scrollHeight + "px";
        } 
    });
});