
// // document.getElementById('card-btn-steel').addEventListener("click",function(){
// //     alert('STEEL ER HARI CLICKED')
// // })

// const titles = document.querySelectorAll('.card-title');
// console.log(titles);
// for (let title of titles){
//    title.classList.remove("card-title")
// }

// 
const images = document.getElementsByTagName('img');

// for (let img of images) {
//  img.addEventListener('mouseover',function(){
//      img.src = "https://i.ibb.co/BHsS1sqs/Whats-App-Image-2025-11-25-at-12-37-02-829420c2.jpg";
// })
// }

function getElement(id){
    const element = document.getElementById(id);
    return element;
}
document.getElementById('card-btn-1').addEventListener("click",function()
{
    const title =getElement('card-title-1').innerText;
    const price = getElement('card-price-1').innerText;
  
    
})