const allBtn = document.getElementsByClassName('btn');
let count = 0;
let counts = 8;
for (const btn of allBtn){
    btn.addEventListener('click', function (e) {
        count += 1; counts = counts - 1;
        // document.getElementById('ticket-count').innerText = count;
        // console.log(count);
        setInnerText('ticket-count', count)
        setInnerText('ticket-counts', count)
        setInnerText('seat-left', counts);
       if (count > 4){
        alert("you don't select more than 4 tickets at a time")
        }
    })};
    
    
    
    if (count > 4){
    console.log("you don't select more than 4 tickets")
    }
    
    function setInnerText(id, value){
    document.getElementById(id).innerText = value;
    };
    
    // document.getElementsByClassName('btn').addEventListener('click',function () {
    // document.body.backgroundColor = "green"});
    // function myFunc() {
    //     changeColor('green');
    //     result.innerHTML = "Background Color changed";
    // }   
    
  const allBtn = document.querySelectorAll("#btn");
  // for(const btn of allBtn){
  // btn.addEventListener('click', function (e) {
  // handleButtonClick(btn);
  // btn.classList.add("bg-[#1DD100]")
  // btn.classList.add("text-white");
  
  // event.Target.disabled = true;
  // if(event.target.disabled = true){
  // btn.computedStyleMap.background = '1DD100';
  // btn.computedStyleMap.color = '#FFFFFF';
  // }

  // })};
  const allBtn = document.querySelectorAll("#btn");

// function to handle the button click
function handleButtonClick(button) {
  button.classList.add("bg-[#1DD100]");
  button.classList.add("text-white");

  event.Target.disabled = true;
  if (event.target.disabled = true) {
    button.computedStyleMap.background = '1DD100';
    button.computedStyleMap.color = '#FFFFFF';
  }
}
// add event listener to all buttons
for (const btn of allBtn) {
  btn.addEventListener("click", (event) => {
    handleButtonClick(event.target);
  });
}
    
    