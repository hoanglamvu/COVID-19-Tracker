setTimeout(getJson, 1);

function getJson() {
    Promise.all([
    fetch('https://covidtracking.com/api/v1/states/current.json'),
    fetch('https://covidtracking.com/api/v1/states/info.json')
    ])
        .then(function(responses){
            return Promise.all(responses.map(function(response){
                return response.json();
            }))
        }

        )
        /*
        .then(function (res) {
            return res.json();
        })
        */

        .then(function (data) {
            
            const places = data[0].length;
            let positive = 0,
                negative = 0,
                pending = 0;
            let html = '';
            for (let i = 0; i < places; i++) {
                if (data[0][i].state != "World") {
                    positive = positive + data[0][i].positive;
                    negative = negative + data[0][i].negative;
                    pending = pending + data[0][i].pending;
                }
            }

            html += ``;
            for (let i = 0; i < places; i++) {
                if (i % 3 == 0) {

                    html += `<div class="popup">
                    <div class="row">
                 <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:305px; height: 100%" >
                      <div class = "card-body" style="background:#111525">
                      <h2 class = "card-title" style="color:white;" >${data[0][i].state}</h2>
    
                      <h3 class = "card-title text-light" > Tested Positive :${data[0][i].positive} </h3> 
                      <h3 class = "card-title text-light" > Tested Negative :${data[0][i].negative} </h3> 
                      <h3 class = "card-title text-light" > Pending Results :${data[0][i].pending} </h3> 
                      <h3 class = "card-title text-light" > Currently Hospitalized :${data[0][i].hospitalizedCurrently} </h3> 
                      <h3 class = "card-title text-light" > Data Quality Grade :${data[0][i].dataQualityGrade} </h3> 
                      <h3 class = "card-title text-light" > <a href="${data[1][i].covid19Site}">Official COVID-19 Website</a> </h3> 
    
                  </div> 
                 </div>
                
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:305px; height: 100%" >
                      <div class = "card-body" style="background:#111525">
                      <h2 class = "card-title" style="color:white;" >${data[0][i].state}</h2>
    
                      <h3 class = "card-title text-light" > Tested Positive :${data[0][i].positive} </h3> 
                      <h3 class = "card-title text-light" > Tested Negative :${data[0][i].negative} </h3> 
                      <h3 class = "card-title text-light" > Pending Results :${data[0][i].pending} </h3> 
                      <h3 class = "card-title text-light" > Currently Hospitalized :${data[0][i].hospitalizedCurrently} </h3> 
                      <h3 class = "card-title text-light" > Data Quality Grade :${data[0][i].dataQualityGrade} </h3> 
                      <h3 class = "card-title text-light" > <a href="${data[1][i].covid19Site}">Official COVID-19 Website</a> </h3> 
                    
                </div> 
                  </div>
                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:305px; height: 100%" >
                      <div class = "card-body" style="background:#111525">
                      <h2 class = "card-title" style="color:white;" >${data[0][i].state}</h2>
    
                      <h3 class = "card-title text-light" > Tested Positive :${data[0][i].positive} </h3> 
                      <h3 class = "card-title text-light" > Tested Negative :${data[0][i].negative} </h3> 
                      <h3 class = "card-title text-light" > Pending Results :${data[0][i].pending} </h3> 
                      <h3 class = "card-title text-light" > Currently Hospitalized :${data[0][i].hospitalizedCurrently} </h3> 
                      <h3 class = "card-title text-light" > Data Quality Grade :${data[0][i].dataQualityGrade} </h3> 
                      <h3 class = "card-title text-light" > <a href="${data[1][i].covid19Site}">Official COVID-19 Website</a> </h3> 
                    
                  </div> 
                  </div>
                  </div>
                  `;

                }
            }
            document.getElementById('virus').innerHTML = html;
        })
        .catch(function (err) {
            console.log(err);
        });
}
