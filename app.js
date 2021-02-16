var listOfActivities=[];

var input =document.getElementById("input");

var toDoList =document.getElementById("todolist");

document.getElementById("button").onclick=click;

function click(){
    listOfActivities.push(input.value);

    console.log(listOfActivities);

    input.value="";

    showList();

}
// function -> showList()

function showList(){

    todolist.innerHTML = " "

     listOfActivities.forEach( function(n,i) {
  
     todolist.innerHTML += ("<li>"+n+
                            
    "<a onclick='editItem("+i+")'>Edit</a>"+
                            
     "<a onclick='deleteItem("+i+")'>&times | </a></li>")
  
    } )
     
  } 

  function editItem(index){
      var newValue=prompt("Type in edited task :)");

      listOfActivities.splice(index, 1, newValue);

      showList();
  }

  function deleteItem(index){
      listOfActivities.splice(index,1);

      showList()
  }