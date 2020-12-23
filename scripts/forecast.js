const accWeatherApiKey = 'TrgaAHKtayGpAybNSEFTU5BGSOUgn4Z4';



const getWeatherDetails = async (cityKey)=>{

    const baseURL='http://dataservice.accuweather.com/currentconditions/v1/';

    const query=`${cityKey}?apikey=${accWeatherApiKey}`;

    const responseFromWeatherAPI = await fetch(baseURL+query);

    const details = await responseFromWeatherAPI.json();

    return details[0];

};


//The below metod is used to get city information
const getCity= async (city)=>{

    const baseURL='http://dataservice.accuweather.com/locations/v1/cities/search';

    const query =`?apikey=${accWeatherApiKey}&q=${city}`;



    const responseFromURL = await fetch(baseURL+query);

    const dataAfterParsing = await responseFromURL.json();
    //console.log(dataAfterParsing);
    return dataAfterParsing[0];
};


//When you call an async func, we use .then method once



// getCity('auckland')
// .then(data=> {
//    //console.log(data.Key)

//     return getWeatherDetails(data.Key);
// }).then(weatherData=>{
//     console.log('City',weatherData);
// })
// .catch(err =>{console.log(error)});

