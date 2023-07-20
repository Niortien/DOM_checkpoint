
    let btn=document.querySelector(".plus");
    btn.addEventListener("click",plus);
    function plus(){
        let qnty=document.querySelector(".quantité");
        qnty.value=parseInt(qnty)+1
    }
