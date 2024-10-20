
 let share = document.querySelector('.fa-share-square')
 let icons = document.querySelector('.icons')

console.log(icons);


share.addEventListener('click', function(){
    
//    icons.style.transform ='translateX(0)' 

   if(icons.style.transform ==='translateX(100%)'){
    icons.style.transform ='translateX(0)' 
    }else{
        icons.style.transform ='translateX(100%)'   
    }
})