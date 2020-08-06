setTimeout(getJson, 1);

function getJson() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const places = data.length;
            let confirmed = 0,
                deaths = 0,
                recovered = 0;
            let html = '';
            for (let i = 0; i < places; i++) {
                if(data[i].country != "World"){
                confirmed = confirmed + data[i].cases;
                deaths = deaths + data[i].deaths;
                recovered = recovered + data[i].recovered;
                }
            }
            let deathpercent = (deaths * 100) / confirmed;
            let recoveredpercent = (recovered * 100) / confirmed;
            html += ``;
            for (let i = 0; i < places; i++) {
                if (i % 3 == 0) {

                    html += `<div class="popup">
                    <div class="row">
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px; height: 100%" >
                  <div class = "card-body" style="background:#111525">
                  <h2 class = "card-title" style="color:white;" >${data[i].country}</h2>

                  <h3 class = "card-title text-light" > Total Cases :${data[i].cases} </h3> 
                  <h3 class = "card-title text-light" > Deaths :${data[i].deaths} </h3> 
                  <h3 class = "card-title text-light" > Recovered Patients:${data[i].recovered} </h3> 
                  <h3 class = "card-title text-light" > Cases Today :${data[i].todayCases} </h3> 
                  <h3 class = "card-title text-light" > Deaths Today :${data[i].todayDeaths} </h3> 
                  <h3 class = "card-title text-light" > Critical Condition Patients :${data[i].critical} </h3> 
  
                  </div> 
                 </div>
                
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px; height: 100%" >
                <div class = "card-body" style="background:#111525">
                  <h2 class = "card-title" style="color:white;" >${data[i].country}</h2>

                  <h3 class = "card-title text-light" > Total Cases :${data[i].cases} </h3> 
                  <h3 class = "card-title text-light" > Deaths :${data[i].deaths} </h3> 
                  <h3 class = "card-title text-light" > Recovered Patients :${data[i].recovered} </h3> 
                  <h3 class = "card-title text-light" > Cases Today :${data[i].todayCases} </h3> 
                  <h3 class = "card-title text-light" > Deaths Today :${data[i].todayDeaths} </h3> 
                  <h3 class = "card-title text-light" > Critical Condition Patients :${data[i].critical} </h3> 
  

                </div> 
                  </div>
                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px; height: 100%" >
                <div class = "card-body" style="background:#111525">
                  <h2 class = "card-title" style="color:white;" >${data[i].country}</h2>

                  <h3 class = "card-title text-light" > Total Cases :${data[i].cases} </h3> 
                  <h3 class = "card-title text-light" > Deaths :${data[i].deaths} </h3> 
                  <h3 class = "card-title text-light" > Recovered Patients :${data[i].recovered} </h3> 
                  <h3 class = "card-title text-light" > Cases Today :${data[i].todayCases} </h3> 
                  <h3 class = "card-title text-light" > Deaths Today :${data[i].todayDeaths} </h3> 
                  <h3 class = "card-title text-light" > Critical Condition Patients :${data[i].critical} </h3> 
  
                  </div> 
                  </div>
                  </div>
                  `;

                }
            }
            document.getElementById('virus').innerHTML = html;
        })
        .catch(function(err) {
            console.log(err);
        });
}
