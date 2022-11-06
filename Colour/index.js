let colour=document.querySelectorAll('.colour')
let circle=document.querySelector('.circle')
colour.forEach((ele)=>{
    ele.addEventListener('mouseenter',()=>{
        circle.style.backgroundColor=ele.style.backgroundColor;
        let col=ele.style.backgroundColor
        
    })
})