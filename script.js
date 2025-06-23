window.onload = () =>{
  const test = document.getElementById('test');
  setInterval(()=>{
    if(test.textContent == "Testing...."){
      test.textContent = "Testing";
    }
    test.textContent = test.textContent + '.';
  },1000);
  
}
