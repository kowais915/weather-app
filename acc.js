const key = 'BcJi4B6Zbp1cheeDGw4w2wTWfjjgOArR';


const theCity = async (city)=>{


    const resource = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(resource + query);
    const data = await response.json();
  
    return data[0];
}


//weatherinfo

const weatherInfo = async (id)=>{

    const res = "https://dataservice.accuweather.com/currentconditions/v1/";
    const quer = `${id}?apikey=${key}`;

    const response = await fetch(res + quer);
    const data = await response.json();

    console.log(data);

    return data[0];



}






// theCity('peshawar')
//     .then(data=>{
//         return weatherInfo(data.Key);
//     }).then(data=>{
//         console.log(data);
//     })
//     .catch(err => {
//         alert('error');
//     })

// weatherInfo(259370);