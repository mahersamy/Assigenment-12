let weathers=document.getElementById("weathers");
let search=document.getElementById("search");


search.addEventListener("input",function(event){
    getData(event.target.value);
});
async function getData(country="egypt"){
    let data=await fetch(`http://api.weatherapi.com/v1/forecast.json?key=85e797461a03475980b115405241312&q=${country}&days=3&aqi=no&alerts=no`);
    data=await data.json();

    addWeather(data.forecast.forecastday,data.location.name);
    
}


function addWeather(listOfWeather,country){
    // console.log(listOfWeather.day);
    let display=``;
    for(let i=0;i<3;i++){
        let day=new Date(listOfWeather[i].date).getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayName = daysOfWeek[day];

        display+=`
         <div class="col-md-4">
                    <div class="card ${i!==1?"":"color-dark"} ">
                        <div class="card-header d-flex flex-wrap justify-content-center ${i===1?"color-dark":""}">
                            <span>${dayName}</span>
                        </div>
                        <div class="card-content p-2">
                            <p>${country}</p>
                            <p id="degree" class="degree text-center text-light ">${listOfWeather[i].day.avgtemp_c}<sup>o</sup>c</p>
                            <img class="w-50 " src="${listOfWeather[i].day.condition.icon}">
                            <span class="color-blue-light">${listOfWeather[i].day.condition.text}</span>
                            
                        </div>
                        <div class="p-2 car-footer">
                            <div class="row">
                                <div class="col-4">
                                    <img src="images/icon-umberella.png" alt="image for icon-umberella">
                                    <span>20%</span>
                                </div>
                                <div class="col-4 p-0">
                                    <img src="images/icon-wind.png" alt="image for icon-umberella">
                                    <span>${listOfWeather[i].day.maxwind_kph}km/h</span>
                                </div>
                                <div class="col-4">
                                    <img src="images/icon-compass.png" alt="image for icon-umberella">
                                    <span>20%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>`;
    }
    weathers.innerHTML=display;
}

// async function getData(){
//   let data= await fetch("http://api.weatherapi.com/v1/forecast.json?key=85e797461a03475980b115405241312&q=Egypt&days=3&aqi=no&alerts=no");
//   let data2 =await data.json();
  
//   console.log(data2);
// }


getData();




