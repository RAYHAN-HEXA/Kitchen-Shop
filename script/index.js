
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

document.getElementById('card-btn-1').addEventListener("click", function () {

    const title = getElement('card-title-1').innerText;

    const price = Number(getElement('card-price-1').innerText);

    const totalprice = Number(getElement('total-price').innerText);

    const currentTotal = price + totalprice;

    getElement('total-price').innerText = currentTotal.toFixed(2);

    const cartContainer = getElement('cart-container');

const newCart = document.createElement("div");

newCart.innerHTML = `

                  <div class="bg-gray-500 rounded-xl flex justify-between
                  p-4 mb-5">
                  <img src="./assets/kitchen-1.png" alt="" class="w-10">
                  <div class="" >
                    <h2>Product Name</h2>
                    <p>Price : 39 tk</p>
                  </div>

                  </div>
              
`;
cartContainer.append(newCart);
});





