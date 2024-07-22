
async function checkAdhan()
{
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    console.log(city);
    console.log(country);
    var response = fetch("http://api.aladhan.com/v1/timingsByCity?city="+city+"&country="+country+"&method=8");
    console.log(response);
    var data =  await((await response).json());
    console.log(data);

   document.getElementById("Datelbl").innerHTML="Today is :"+ data.data.date.readable;
   document.getElementById("flbl").innerHTML="Al Fajr : " +data.data.timings.Fajr;
   document.getElementById("dlbl").innerHTML="Al Doha : "+ data.data.timings.Sunrise;
   document.getElementById("dhlbl").innerHTML="Al Dhohr : " +data.data.timings.Dhuhr;
   document.getElementById("aslbl").innerHTML="Al Asr :"+ data.data.timings.Asr;
   document.getElementById("mlbl").innerHTML="Al Maghreb :"+ data.data.timings.Maghrib;
   document.getElementById("aelbl").innerHTML="Al Aesha :"+ data.data.timings.Isha;


}