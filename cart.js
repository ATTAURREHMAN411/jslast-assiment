let data = JSON.parse(localStorage.getItem("cart"))
let container = document.querySelector(".container")

console.log(data);
function gettocard(){
    data.map((item, value) =>{
        let total = item.quantity * item.price
      container.innerHTML +=`
         <div class="card">
                    <img src="${item.thumbnail}" alt="">
                    <h3>Tittle : <span>${item.title}</span></h3>
                    <h3>Category : <span>${item.category}</span></h3>
                    <h3>Describtion : <span>${item.description}</span></h3>
                    <h3 class="quantity">Quantity : <button onclick="supration( ${value})">-</button> ${item.quantity} <button onclick="addition(${value})">+</button></h3>
                      <h3>Price : <span>$${item.price}</span></h3>
                      <h3>Total Amount : <span>$${total}</span></h3>
                </div>`
    })
}
gettocard()

function addition(value){
      container.innerHTML = ""
   data[value].quantity += 1

   gettocard()
}
function supration(value){
     container.innerHTML = ""
     if(data[value].quantity == 1){
        data[value].quantity = 1
     }else{
        data[value].quantity -= 1
     }
   gettocard()

}





































