let weather={
    "apiKey":"d1bf7eb18861fa648b01de757bc7cc0f",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey)
        .then((response) => response.json())
        .then((data)=>this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name}=data;
        const{icon,description}=data.weather[0];
        const{temp,temp_max,temp_min,feels_like,humidity}=data.main;
        const{speed}=data.wind;
        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+icon+".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText=temp+"°C";
        document.querySelector(".humidity").innerText="Humidity: "+humidity+"%";
        document.querySelector(".wind").innerText="Wind speed: "+speed+"km/hr";
        document.querySelector(".maxtemp").innerText="Max Temp: "+temp_max+"°C";
        document.querySelector(".mintemp").innerText="Min Temp: "+temp_min+"°C";
        document.querySelector(".feellike").innerText="Feels Like: "+feels_like+"°C";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage="url('https://source.unsplash.com/1600x900/?"+name+"')"        
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Mumbai");