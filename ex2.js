//Exercise 2 (a)
let part1 = ()=>{
    console.log("Data Representation & Querying");
}
part1();

//Exercise 2 (b)
let part2 = (myValue)=>{
    return(myValue);
}
console.log(part2("Data Representation & Querying"));

//Exercise 2 (c)
let part3 = (num1, num2)=>{
    return (num1+num2);
}
console.log(part3(2, 3))

//Exercise 2 (d)
const ages = [25, 31, 42, 77];
let part4 = ages.map((item)=>{
    //If item is less than 70, multiply it by 2
    if(item < 70){
        return item * 2;
    }

    else{
        return item;
    }
})
console.log(part4);