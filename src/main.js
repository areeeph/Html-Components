const accordion_btns = document.querySelectorAll(".accordion .accordion-button");
const collapse_btns = document.querySelectorAll(".collapse .collapse-button");


//Modal
const body = document.querySelector('body');
       const modal_buttons = document.querySelectorAll('.modal-button');
       const modal_close_buttons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    modal_buttons.forEach((button) => {
  button.addEventListener('click', () => {
      modalContainer = document.querySelector(button.getAttribute('target'));

    modalContainer.classList.remove('out');
    modalContainer.classList.add('modal-active');
    body.classList.add('modal-active');
  });
});

modals.forEach((modal) => {
    modal.addEventListener('click', () => {
        if(!modal.classList.contains('static')){
            modal.classList.add('out');
            body.classList.remove('modal-active');
        }
});
});

modal_close_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.getAttribute('target'));
            modal.classList.add('out');
            body.classList.remove('modal-active');
});
});


//Dropdown
const dropdownBtns = document.querySelectorAll('.dropdown-btn');
var dropdowns = document.querySelectorAll(".dropdown-content");

for(let i = 0; i < dropdowns.length; i++){
    dropdowns[i].setAttribute('tab-index', i);
}

dropdownBtns.forEach((button) => {
  button.addEventListener('click', () => {
    
      const dropdownContent = button.nextElementSibling;
    if(dropdownContent.classList.contains('dropdown-content')){
        closeDropdown(dropdownContent);
        dropdownContent.classList.toggle('show');
    }
});
});



function closeDropdown(dropdownContent){

  dropdowns.forEach((el) => {
    if (dropdownContent.getAttribute('tab-index') !== el.getAttribute('tab-index') && el.classList.contains('show')) {
      el.classList.remove('show');
    }
  });
}


window.onclick = function(e) {
  if (!e.target.matches('.dropdown-btn')) {
    closeAllDropdown()
  }
}

function closeAllDropdown(){

  dropdowns.forEach((el) => {
    if (el.classList.contains('show')) {
      el.classList.remove('show');
    }
  });
}




//Collapse
collapse_btns.forEach((button) => {

    if(button.classList.contains('active')){
        let collapse_item = button.nextElementSibling;
        collapse_item.style.maxHeight = collapse_item.scrollHeight + "px";
    }
    

    button.addEventListener("click", () => {

        let collapse_item = button.nextElementSibling;

        if(!collapse_item.classList.contains('active')){
            collapse_item.classList.add('active');
        }

        button.classList.toggle("active");

        if (collapse_item.style.maxHeight) {
            collapse_item.style.maxHeight = null;
        } else {
            collapse_item.style.maxHeight = collapse_item.scrollHeight + "px";
        } 
    });
});



//Accordion
accordion_btns.forEach((button) => {

    if(button.classList.contains('active')){
        let accordion_item = button.nextElementSibling;
        accordion_item.style.maxHeight = accordion_item.scrollHeight + "px";
    }
    

    button.addEventListener("click", () => {

        let accordion_item = button.nextElementSibling;

        if(!accordion_item.classList.contains('active')){
            accordion_item.classList.add('active');
        }

        accordion_btns.forEach((btn) => {
            if(btn.classList.contains('active')){
                if(btn != button){
                    btn.classList.toggle("active");
                    btn.nextElementSibling.style.maxHeight = null;
                }
            }
        })

        button.classList.toggle("active");

        if (accordion_item.style.maxHeight) {
            accordion_item.style.maxHeight = null;
        } else {
            accordion_item.style.maxHeight = accordion_item.scrollHeight + "px";
        } 
    });
});