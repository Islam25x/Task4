let Top = document.getElementById('top')
console.log(Top)

window.addEventListener('scroll',()=>{
    if(window,pageYOffset > 100){
        Top.style.opacity = 1
    }
    else{
        Top.style.opacity = 0
    }
})