const formm = document.querySelector('form');
const grabbed = document.getElementById('show');
const temp = document.getElementById('temp');
const day = document.getElementById('day');



const update = async(city)=>{

       const gettingCityInfo = await theCity(city);
       const gettingId = await weatherInfo(gettingCityInfo.Key);
       console.log(gettingId);

       temp.innerHTML = `<p>${gettingId.Temperature.Metric.Value} &deg; C </p>`;
       if(gettingId.IsDayTime == true){
           day.innerText = "yes"
       }
       else{
           day.innerText = "No";
       }
   
}

formm.addEventListener('submit', (e)=>{

    e.preventDefault();

    const cityName = formm.city.value.trim();
    
    formm.reset();

    //show in browser
grabbed.innerText = cityName;

update(cityName);
  

})