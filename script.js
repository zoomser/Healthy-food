// BURGER

let burger=document.querySelector('.burger')
let menu=document.querySelector('.nav_ul')
burger.addEventListener("click",function(){
    menu.classList.toggle("show")
    burger.classList.toggle("active_burger");
})
window.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !menu.contains(e.target)) {
        burger.classList.remove('active_burger');
        menu.classList.remove('show');
        }
});

// arrow






