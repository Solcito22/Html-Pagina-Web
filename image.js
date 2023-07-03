const hamburguerIcon = document.querySelector('.nav_hamburguer');
const navOverlay = document.querySelector('.nav_overlay');
const navMenu = document.querySelector('.nav_menu');
let currentDropdown = navOverlay;

    hamburguerIcon.addEventListener('click', () =>{
    hamburguerIcon.classList.toggle('nav_hamburguer--open');
    navOverlay.classList.toggle('nav_overlay--show');

});

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault(); //desactiva el comportamiento de los elementos por defecto
    const currentElement = e.target;
    //console.log(e.target.classList.value); 
    if(isActive(currentElement, 'nav_parent')){
        //console.log('Tengo submenu');
        
        const submenu = currentElement.parentElement.querySelector('.nav_inner');
        //const submenu = currentElement.parentElement.children[1];
        //console.log(submenu);
        if(window.innerWidth < 768){

            /*clientHeight = e.pointerEvent*/
            let height = (submenu.clientHeight == 0)
            ?submenu.scrollHeight : 0; /*alto minimo del submenu*/
            //console.log(submenu.clientHeight);
            submenu.style.height = `${height}px`;

        }else{
            if( !isActive(submenu, 'nav_inner--show')){
                closeDropdown(currentDropdown);
            }
            submenu.classList.toggle('nav_inner--show');
            currentDropdown = submenu;
        }
    }else if(!navMenu.contains(currentElement)){
        closeMenu;
    }
});

/*function isActive(Element, string){
    return Element.classList.value.includes(string);
}*/
function isActive(Element, className){
    return Element.classList.contains(className);
}

function closeMenu() {
    hamburguerIcon.classList.remove('nav_hamburguer--open');
    navOverlay.classList.remove('nav_overlay--show');
    const navInners = document.querySelectorAll('.nav_inner');
    navInners.forEach(navInner => {
    navInner.classList.remove('nav_inner--show');
    });
}

window.addEventListener('resize', () => {
    closeMenu(closeMenu);

    if (window.innerWidth > 768) {
    const navInners = document.querySelectorAll('.nav_inner');
    navInners.forEach(navInner => {
        navInner.style.height = 'auto';
    });
    }
});


