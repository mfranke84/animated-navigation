const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navs = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2){
    navs.forEach((navItem,index=1) => {
        navItem.classList.replace(`slide-${direction1}-${index+1}`,`slide-${direction2}-${index+1}`)
    })
}

function toogleNav(){
    // Toggle: Menu Bars open/close
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')){
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right' );
        // Animate In - Nav Items
        navAnimation('out','in');
    } else{
        // Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left' );
        // Animate Out Nav Items
        navAnimation('in', 'out');
    }
    
}

// Event listeners
// menuBars.addEventListener('click',toogleNav);
menuBars.addEventListener('click',toogleNav);
navs.forEach(item => {
    item.addEventListener('click',toogleNav);
});