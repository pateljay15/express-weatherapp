const submitBtn = document.getElementById("submitBtn")
const cityName = document.getElementById('cityName')
const city_name = document.getElementById('city_name')
const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event) => {
    event.preventDefault()
    let cityVal = cityName.value
    
    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`
        datahide.classList.add('data_hide')
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ed8712101a275be914e62dd090271022`
            const response = await fetch(url)
            const data = await response.json()
            const arrData = [data]
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp
    
            const tempMood = arrData[0].weather[0].main
            if(tempMood == "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }else if(tempMood == "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }else if(tempMood == "Rain"){
                temp_status.innerHTML = 
                "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }
            datahide.classList.remove('data_hide')
        }catch{
            city_name.innerText = `Plz enter the city name properly`
            datahide.classList.add('data_hide')
        }
    }
}

submitBtn.addEventListener('click', getInfo)

const day = document.getElementById('day')
const today_data = document.getElementById('today_data')


const getCurrentDay = () => {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
  };

  const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();
    return `${date} ${month}`
    }  

    day.innerText = getCurrentDay()
    today_data.innerText = getCurrentTime()
// https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=ed8712101a275be914e62dd090271022