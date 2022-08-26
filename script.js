let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
}else{
    document.querySelector('#scroll-top').classList.remove('active');
}

function loader(){
    const leader = document.querySelector('.loader-container')
    leader.classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut(); // or fadeOut()


const sectionCenter = document.querySelector(".ourmenu_center");
const filterBtns = document.querySelectorAll(".filter-btn")

// load items
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(ourmenu)
})

// filter items
filterBtns.forEach( function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.menu;
        const menuCategory = ourmenu.filter(function (menuItem){
            if(menuItem.category === category){
                return menuItem
            }
        })
        // console.log(menuCategory);
        if(category == 'all'){
            displayMenuItems(ourmenu)
        }else{
            displayMenuItems(menuCategory)
        }
    });
});
function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function (item){
        return `<article class="ourmenu-item">
                    <img src=${item.img} class="ourmenu-photo" alt=${item.title} /> 
                    <div class="ourmenu-info">
                        <div class="ourmenu-info-in">
                            <h4 class="outmenu-info-title">${item.title}</h4>
                            <h4 class="ourmenu-price">$${item.price}</h4>
                        </div>
                        <p class="ourmenu-text">${item.desc}</p>
                        <button class="ourmenu_order">Order Now</button>
                    </div>           
                </article>` 
        });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu
}




// ********* Scroll Page ******//

window.addEventListener('scroll', reveal);
function reveal(){
    var scrollLeft = document.querySelectorAll('.ourmenu-item, .steps .box, .speciality .box-container .box, .popular .box-container .box,.gallery .box-container .box,.review .box-container .box,.order .row,.heading,.filter-btn');
    var windowheight = window.innerHeight;
    var revealpoint = 150;
    for (let i = 0; i < scrollLeft.length; i++) {
        var revealtop = scrollLeft[i].getBoundingClientRect().top;

        if(revealtop < windowheight - revealpoint){
            scrollLeft[i].classList.add('active');
        }else{
            scrollLeft[i].classList.remove('active');
        }
    }
}

// ********* Scroll Page End ******//