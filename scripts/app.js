

const cityForm = document.querySelector('form');

const time =document.querySelector('img.time');

//takes the div element with class icon and takes the inner element whihc is img tag
const icon = document.querySelector('.icon img')



const UpdateCity = async(cityName)=>{
    const cityDetails = await getCity(cityName);
    //console.log('cityDetails);
    
    const cityWeatherInfo =  await getWeatherDetails(cityDetails.Key);

    //Below statemment is returning an object using ObjectShorthand notation
    return{cityDetails,cityWeatherInfo};
};


cityForm.addEventListener('submit',(e)=>{

    e.preventDefault();

    //Getting city value here
    const city = cityForm.city.value.trim();
    cityForm.reset();


    //Update the div with city info
    UpdateCity(city).then(data=>{
        console.log(data);


        UpdateUI(data);
    }).catch(err=>{
        console.log(err);
    });

});


const card = document.querySelector('.card');
const details = document.querySelector('.details');


const UpdateUI= (data)=>{
    // const cityWeather = data.cityWeatherInfo;
    // const cityDets=data.cityDetails;
    

    //The are of destructuring the above two statements
    const { cityDetails,cityWeatherInfo} =data;

    //Update Details Template

    details.innerHTML=`
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${cityWeatherInfo.WeatherText}</div>
            <div class="display-4 my-4">

                <span>${cityWeatherInfo.Temperature.Metric.Value}</span>
                <span>&deg;C</span>

            </div>
    
    `;
    // Updating the night and day icon images 

    const iconSrc=`img/icons/${cityWeatherInfo.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    let timmeSrc=cityWeatherInfo.IsDayTime?'img/day.svg':'img/night.svg'

    time.setAttribute('src',timmeSrc);

    //remove d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};




