const formm = document.querySelector('form');
const grabbed = document.getElementById('show');
const temp = document.getElementById('temp');
const day = document.getElementById('day');
const body = document.querySelector('body');
const title= document.querySelector('h1');
const head= document.getElementsByClassName('head');
const result = document.getElementById('result');


const update = async(city)=>{

  

       const gettingCityInfo = await theCity(city);
       const gettingId = await weatherInfo(gettingCityInfo.Key);
       console.log(gettingId);

       temp.innerHTML = `<p>${gettingId.Temperature.Metric.Value} &deg;C </p>`;
       if(gettingId.IsDayTime == true){

           
           day.innerText = `yes` 
           body.classList.add('day');
           title.classList.add('text-white');

       }
       else{
           day.innerText = "No";
           body.classList.add('night');
           head.classList.add('text-white');
           
       }
   
}

formm.addEventListener('submit', (e)=>{

    e.preventDefault();
   


    const cityName = formm.city.value.trim();
    
    formm.reset();

    //show in browser
grabbed.innerText = cityName;
if(result.classList.contains('d-none')){
    result.classList.remove('d-none');
}

update(cityName);
  

})