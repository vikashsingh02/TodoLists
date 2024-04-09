const input = document.getElementById("inputbox");
const lists = document.getElementById("list-container");
function addTask(){
    if(input.value === ''){
        alert("you must add somthing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        lists.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
    

}
lists.addEventListener("click",function(e){
   if(e.target.tagName==="LI"){
       e.target.classList.toggle("checked");
      
   }
   
   else if(e.target.tagName ="SPAN"){
       e.target.parentElement.remove();
      
   }
   
},false);
function showData(){
    localStorage.setItem("data",lists.innerHTML);
}
function showtask(){
    lists.innerHTML = localStorage.getItem("data");
}
showtask();

