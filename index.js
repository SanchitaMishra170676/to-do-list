let inputfield = document.querySelector("#text-input");
let addbutton = document.querySelector("#add-btn");
let todo = document.querySelector("#to-do-list");
// console.log(inputfield ,addbutton)


addbutton.addEventListener('click', finalcode)
inputfield.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      finalcode();
    }
}); 



function finalcode(){

    if(inputfield.value==""){
        alert("Kindly enter the data");
        return;
    }

    todo.innerHTML += `
    <div  class="to-do-list d-flex justify-content-start mt-3">
                <span id="lst" style="width: 500px;" class="p-decor" type="text" >${inputfield.value}</span>
                <button id="del" style="width: 300px;" class="form-control">DELETE</button>
               <br>  
    </div>
    `
    inputfield.value="";

    
    let todoitems = document.querySelectorAll("#del");
    todoitems.forEach(deletefun);
    function deletefun(item){
        item.addEventListener('click', function(){
            this.parentNode.remove();
        })
    }

    let listitems = document.querySelectorAll("#lst");
    listitems.forEach(crossfun);
    function crossfun(item){
        item.addEventListener('click', function(){
            this.classList.add('cross');
        })
    }
}


