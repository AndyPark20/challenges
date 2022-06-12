
let i=0;
const increment = async()=>{
  i+=await 2;
  console.log('outside function',i)
  const incrementTwo = async()=>{
    i+=await 3;
    console.log('inside function', i);
  }
  incrementTwo();
};

increment();
i+=1;
console.log('outside',i);
