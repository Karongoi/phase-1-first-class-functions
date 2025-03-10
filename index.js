function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function");
    };
  }
  
  function returnsAnAnonymousFunction() {
    return () => console.log("I am an anonymous function");
    // Or: return function () { console.log("I am an anonymous function"); };
  }
  