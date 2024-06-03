const circle=document.getElementById('circle')
const circle3=document.getElementById('circle3')
const circle2=document.getElementById('circle2')
const container=document.getElementById('container')

const btn=document.getElementById('btn').addEventListener('click',function () {
    
    circle.style.background='#8A2BE2'
    circle.style.borderRadius='50px'
    circle.style.height='50px'
    circle.style.width='50px'
    
    circle2.style.background='#EE82EE'
    circle2.style.borderRadius= '50%'
    circle2.style.height='50px'
    circle2.style.width='50px'
    
    circle3.style.background='#8A2BE2'
    circle3.style.borderRadius='50px'
    circle3.style.height='50px'
    circle3.style.width='50px' 
  
    container.appendChild(circle,circle2,circle3)
});