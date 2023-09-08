


const fetchInfo = () => {
   let input = userInput.value
   let apiKey = 'a761011a1d2c2da7166b4426485c4a56'
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
   userInput.value = "";

   fetch(url)
   
   .then(response=>response.json())
   
   .then((result)=>{
      let imago = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`
      console.log(imago);
      // result.map((result)=>{console.log(result)})
      disp.innerHTML = `
      <div>${result.weather[0].description} </div>
      <img src=${imago} alt='icon'/>
      `
      temp.innerHTML = `${result.main.temp}°C`
      cat.innerHTML = `${result.name}` 
      imag.src = imago

      console.log(result)
   })

   .catch((err)=>{
      console.log(err)
   })
}


navigator.geolocation.getCurrentPosition((pos)=>{
   console.log(pos);
   let lat = pos.coords.latitude
   let lon = pos.coords.longitude
   let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a761011a1d2c2da7166b4426485c4a56&units=metric`

   fetch(endpoint)
   .then(res=>res.json())
   .then((resp)=>{
      let imago = `http://openweathermap.org/img/w/${resp.weather[0].icon}.png`
      console.log(resp)
      temp.innerHTML = `${resp.main.temp}°C`
      cat.innerHTML = `${resp.name}`
      imag.src = imago

   })
   .catch((err)=>{console.log(err)})
})
   