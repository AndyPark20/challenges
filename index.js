
let i=0;
const increment =()=>{
  i+=2;
  console.log('outside function',i)
  const incrementTwo =()=>{
    setTimeout(()=>{
         i += 3;
         console.log("inside function", i);
    },3000)
  }
  incrementTwo();
};

increment();
i+=1;
console.log('outside',i);
