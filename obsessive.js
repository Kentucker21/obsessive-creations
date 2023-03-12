let navlist=document.querySelector('.nav-list')
let hamburger=document.getElementById('hamburgerId')
let isvisible=false

hamburger.addEventListener('click',()=>{
navlist.classList.toggle('active')
console.log('ok');
})

console.log('ew');
//Make navbar disappear on click
let navItems=document.querySelectorAll('.remove-scroll')


    
  
    for(navItem of navItems){
    
        navItem.addEventListener('click',()=>{
            navlist.classList.toggle('active')
        })
    }