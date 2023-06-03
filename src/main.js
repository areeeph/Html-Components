const body = document.querySelector('body');



//Modal
       const modal_buttons = document.querySelectorAll('.modal-button');
       const modal_close_buttons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    modal_buttons.forEach((button) => {
  button.addEventListener('click', () => {
      modalContainer = document.querySelector(button.getAttribute('modal-target'));

    modalContainer.classList.remove('out');
    modalContainer.classList.add('modal-active');
    body.classList.add('modal-active');
  });
});


modal_close_buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.getAttribute('modal-target'));
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

  if(e.target.matches('.modal-body')){
    const modals = document.querySelectorAll('.modal.modal-active');

    modals.forEach((modal) => {
        if(!modal.classList.contains('modal-static')){
          modal.classList.add('out');
          body.classList.remove('modal-active');  
        }
    });
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
const collapse = document.querySelectorAll('.collapse');
const collapse_btns = document.querySelectorAll(".collapse .collapse-button");
removeShowCollapse();

collapse_btns.forEach((button) => {
    
    button.addEventListener("click", () => {
        let collapse_item = button.nextElementSibling;

        if(!collapse_item.classList.contains('collapse-active')){
            collapse_item.classList.add('collapse-active');
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
const accordion_btns = document.querySelectorAll(".accordion .accordion-button");
accordion_btns.forEach((button) => {
  let accordion = button.parentElement;
    let accordion_item = button.nextElementSibling;

    if(accordion.classList.contains('accordion-open')){
       accordion.classList.add('accordion-active')
        button.classList.add('accordion-active');
        accordion_item.classList.add('accordion-active');
        accordion_item.style.maxHeight = accordion_item.scrollHeight + "px";
    }
    

    button.addEventListener("click", () => {
       accordion.classList.remove('accordion-open')
       accordion.classList.toggle('accordion-active')

        if(!accordion_item.classList.contains('accordion-active')){
            accordion_item.classList.add('accordion-active');
        }

        accordion_btns.forEach((btn) => {
            if(btn.classList.contains('accordion-active')){
                if(btn != button){
                    btn.parentElement.classList.toggle('accordion-active');
                    btn.parentElement.classList.remove('accordion-open');
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

function removeShowCollapse(){

  collapse.forEach((item) => {
      
      if(item.classList.contains('collapse-open')){
        let collapse_content = item.querySelector('.collapse-content');
        collapse_content.style.maxHeight = collapse_content.scrollHeight + "px";
        
        if(item.classList.contains('collapse-arrow')){
          let collapse_button = item.querySelector('.collapse-button');
          collapse_button.classList.add('collapse-active');
        }
        item.classList.remove('collapse-open');
      }
  });
}