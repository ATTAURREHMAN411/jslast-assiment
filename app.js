let container = document.querySelector(".container")
let carditem = []
fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((res) =>{
    
    res.products.map((items, value) =>{
        container.innerHTML +=`
       <div class="card">
            <img src="${items.thumbnail}" alt="">
            <h3>Tittle : <span>${items.title}</span></h3>
            <h3>Category: <span>${items.category}</span></h3>
            <h3>Description : <span>${items. description}</span></h3>
            <h3>Price : <span>${items.price}</span>
            </h3>
            <div class="next-card disabld">
           
    <button onclick="addtocart(${value})">Add To Cart</button>
            </div>
        </div>`
        // 
        carditem.push(items)
    })
    
}).catch(err => console.log(err)
)
let newcards = []

function addtocart(product){
    let checkbox = newcards.indexOf(carditem[product])
    console.log(checkbox);
    
  if(checkbox == -1){
   carditem[product].quantity = 1
   newcards.push(carditem[product])
  }else{
    newcards[checkbox].quantity += 1
  }
  localStorage.setItem("cart", JSON.stringify(newcards))

  console.log(newcards);
  
            

        
   
    
// window.location = "add.html"


}




























/* <a href="add.html" ></a> */