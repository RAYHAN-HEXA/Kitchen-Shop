
// // document.getElementById('card-btn-steel').addEventListener("click",function(){
// //     alert('STEEL ER HARI CLICKED')
// // })

// const titles = document.querySelectorAll('.card-title');
// console.log(titles);
// for (let title of titles){
//    title.classList.remove("card-title")
// }

// // 
// const images = document.getElementsByTagName('img');

// for (let img of images) {
//  img.addEventListener('mouseover',function(){
//      img.src = "https://i.ibb.co/BHsS1sqs/Whats-App-Image-2025-11-25-at-12-37-02-829420c2.jpg";
// })
// }

function getElement(id){
    return document.getElementById(id);
}

const cartBtns = document.getElementsByClassName('cart-btn');
console.log(cartBtns);


for(let cartBtn of cartBtns){
   cartBtn.addEventListener('click',function(){
    const productImg = cartBtn.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;
 
    const productTitle = cartBtn.parentNode.parentNode.children[1].innerText;
    const productPrice = cartBtn.parentNode.parentNode.children[2].innerText;
    const totalPrice = getElement("total-price").innerText;
    const currentPrice = Number(totalPrice) + parseFloat(productPrice);
    getElement("total-price").innerText = currentPrice.toFixed(2);
    const cartContainer = getElement('cart-container');
    const newCart = document.createElement("div");
    const quantity = getElement('product-iteam').innerText;
    const totalQuantity = Number(quantity) + 1;
    getElement('product-iteam').innerText = totalQuantity;
   

newCart.innerHTML = `

                 <div class="bg-gray-500 rounded-xl flex justify-between
                  p-4 mb-5">
                  <img src="${productImg}" alt="" class="w-10">
                  <div class="" >
                 <h2>${productTitle}</h2>
                 <p>Price : ${productPrice} tk</p>
                  <p>Quantity : <span >=${totalQuantity }</span></p>
                
                
                </div>
                  </div>
              
`;
cartContainer.append(newCart);



 

});


}


document.getElementById('clr-btn').addEventListener('click', function() {
    const cartContainer = getElement('cart-container');
    cartContainer.innerHTML = "";
});








// document.getElementById('card-btn-1').addEventListener("click", function () {

//     const title = getElement('card-title-1').innerText;

//     const price = Number(getElement('card-price-1').innerText);

//     const totalprice = Number(getElement('total-price').innerText);

//     const currentTotal = price + totalprice;

//     getElement('total-price').innerText = currentTotal.toFixed(2);

//     const cartContainer = getElement('cart-container');

// const newCart = document.createElement("div");

// newCart.innerHTML = `

//                   <div class="bg-gray-500 rounded-xl flex justify-between
//                   p-4 mb-5">
//                   <img src="./assets/kitchen-1.png" alt="" class="w-10">
//                   <div class="" >
//                     <h2>Product Name</h2>
//                     <p>Price : 39 tk</p>

//                   </div>

//                   </div>
              
// `;
// cartContainer.append(newCart);
// });






