//Exercise 3 (a)
//Created the array
const myArray = ["a", "b", "c", "d"];

//Exercise 3 (b)
//Adds items to the array
let addTask = (task)=>{
    myArray.push(task);
    console.log(task + " has been added to the array");
    //Print array length
    console.log("items in array " + myArray.length);
}

//Exercise 3 (c)
//Lists the items in the array
let listAllTasks = ()=>{
    myArray.forEach((item) => {
        console.log(item);
    })
}

//Exercise 3 (d)
//Deletes items from the array
let deleteTask = (task)=>{
    const index = myArray.indexOf(task);
    if(index > -1){
        //Removes the item at the specified index of the array
        myArray.splice(index, 1);
        //If item is in array, remove it
        console.log(task + " has been removed from the array");
    }
    else{
        //If item is not in array, it cannot be removed
        console.log(task + " has not been removed from the array");
    }
    //Print array length
    console.log("items in array " + myArray.length);
}

//Print functions to console
addTask("e");
listAllTasks();
deleteTask("b");
listAllTasks();