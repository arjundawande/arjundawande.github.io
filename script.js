window.onload = () =>{
  const test = document.getElementById('test');
  setInterval(()=>{
    test.textContent = test.textContent + '.';
    if(test.textContent == "Testing..."){
      test.textContent = "Testing";
    }
  },1000);
  
}
