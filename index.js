let array =  {
    arr1 : ['Javascript','Python','Ruby','Go',"languages","isChallenging","isRewarding","difficulty","isFun"],
    arr2 :['Javascript','Python','Ruby','Go'],
    arr3:[true,7,true],

    print()
    {
        this.arr1.forEach(function(item){
            console.log(item);
        });
        console.log(this.arr2);
        this.arr3.forEach(function(item){
           console.log(item);
        })
    }

}
array.print();




// let course=
// {
//     book:"js",
//     bookId: "24",
//     bookPrice:500,
//     otherbooks:["java","c","c++"],
//     address:
//    {
//          company:"prograd",  //key:value
//          Country:"India"
//     },
//     showbook()
//     {
//         let msg=this.otherbooks
//         this.otherbooks.forEach(function(value){
//             console.log(value)
//         })
        
//     }
// }
// course.showbook()

// let course={
//     first:"Javascript is a object-based language. ",
//     second :{
//         third:"Learning Nested Data Structures. "
//     },
//     gettings(){
//         let msg=this.first+this.second.third;
//         console.log(msg);
//     }
    
// }
// course.gettings()



// let book={
//     title:["js","java","c++"],
//     author:["ss","kk","dd"],
//     bookid:[1,2,3]
// }
// console.log(book.title,book.author,book.bookid)




// for(let i=0;i<10;i++)
// {
//     console.log("Number"+(i+1))
// }


// let n=prompt("enter the number")
// n=Number.parseInt(n);
// let sum=0;
// while(n>0)
// {
//     let rem=n%10;
//     sum+=rem;
//     n=n/10;
// }
// console.log(sum)


// let a=[{ course:"mern",company:"prograd"},
// {name:"js",company:"prograd1"}]
// let sd=a.filter(function(value){
//     return a.course
// })
// console.log(sd)




// const radius=[1,2,3,4];
// function circumference(radius)
// {
//     return 2*Math.PI*radius
// }
// function calculatecircumference(radius,logic)
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         output.push(logic(radius[i]))
//     }

//     return output;
// }
// console.log(calculatecircumference(radius,circumference))