window.onload = () =>{
  const test = document.getElementById('test');
  setInterval(()=>{
      test.textContent = test.textContent + '.';
  },1000);
}
