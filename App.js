let inputcity=document.getElementById("inputcity")
let getwether=document.getElementById("getwether")
let cityname=document.getElementById("cityname")
let temp=document.getElementById("temp")
let describtion=document.getElementById("describtion")

getwether.addEventListener("click",()=>{
    let city= inputcity.value;
    if(city){
        weatherapi(city)
    } else{
        alert("please enter the city")
    }
})

async function weatherapi(city){
    try{
        let apikey="d6be8601cacf4b1a38f3c9a6e5d2a641"
        let apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    let data = await fetch(apiurl);
    console.log(data);
    data= await data.json()
    console.log(data);
    if(data.cod === 200){
        cityname.innerHTML=`weather in ${data.name},${data.sys.country}`;
        temp.innerHTML=`temperature is ${data.main.temp} `
        describtion.innerHTML=`describtion report ${data.weather[0].describtion}`;


    }else{
        alert("city is not found");
    }
    
    } catch(err){
        console.log(err);
    }
        
    
}

weatherapi()