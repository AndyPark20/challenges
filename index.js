


// function outer(){
//   console.log('outer')
//   function inner(){
//     for (var i=0;i<5;i++){
//           // debugger;
//       i+=1;
//       console.log('inner',i)
//     }
//   }
//   inner();
// }


// function testing(){
//   i = 0;
//   for (let i=0;i<5;i++){
//      i += 1;
//     console.log('testing',i)
//   }
// }

// // outer();
// testing()

var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function () {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  },
};
myObject.func();

//func method will call a method that is currently attached to myObject called func. First the outer func console log will run, then the inner function will run.
