const resDiv = document.querySelector('#result');
const resBtn = document.querySelector('#getdata');

window.onload = () =>{
    getAdvice();
};
resBtn.addEventListener('click',() =>{
    getAdvice(); 
});
function getAdvice  (){
    fetch('https://api.adviceslip.com/advice').then(response =>
    {
        return (response.json());
    }
).then(adviceData =>
    {
       // console.log(adviceData);
        const Adviceobj = adviceData.slip;
        
        resDiv.innerHTML =`${Adviceobj.advice}`;
    }    
).catch(error =>
    {
        console.log(error);
    }
)
}

