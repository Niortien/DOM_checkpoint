
let btnPlusAll=document.querySelectorAll(".plus")
let btnLessAll= document.querySelectorAll(".less")
let addButton=document.querySelector(".add_button")

addButton.addEventListener("click", addArticle)
btnPlusAll.forEach((btn)=>{btn.addEventListener("click",increaseQuantity)})
btnLessAll.forEach((btn)=>{btn.addEventListener("click",decreaseQuantity)})


function increaseQuantity(){
    this.previousElementSibling.value=parseInt(this.previousElementSibling.value)+1
    
    subTotal(this)
}


function decreaseQuantity(){
    if( document.querySelector(".qty").value>0){
        document.querySelector(".qty").value= parseInt(document.querySelector(".qty").value)-1
        subTotal(this)
    }
}
function subTotal(element){
    let price=parseInt(element.parentElement.nextElementSibling.innerText)
    let qty=parseInt(element.previousElementSibling.value) 
    let subt=price*qty;
    element.parentElement.nextElementSibling.nextElementSibling.innerText=subt

    
    

}
function addArticle(){
    let name=document.querySelector(".name")
    let price=document.querySelector(".priceProduct")
    document.querySelector("tbody").innerHTML +='<tr><td class="case1"><strong>'+name.value+'</strong><div class="bouton supprimer"><strong>supprimer</strong></div> </td> <td class="case2"><button class="less">-</button> <input type="text" class="qty" value="1">  <button class="plus" >+</button></td> <td class="price">'+price.value+'</td><td class="subtotal">'+price.value+'</td></tr>'
    loadNewElement()

}



function loadNewElement(){
    let btnPlusAll=document.querySelectorAll(".plus")
    let btnLessAll= document.querySelectorAll(".less")
    btnPlusAll.forEach((btn)=>{btn.addEventListener("click",increaseQuantity)})
    btnLessAll.forEach((btn)=>{btn.addEventListener("click",decreaseQuantity)})
   

}