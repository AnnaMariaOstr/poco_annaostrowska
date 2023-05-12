
const ZHpopulation = document.getElementById('ZHpopulation');

let cityNames = [];
let swissResidents= [];
let foreignResidents = [];

for (i=0; i<HorgenData.length; i++){
  let cityData = HorgenData[i];
  cityNames.push(cityData.city);
  swissResidents.push(cityData.swiss);
  foreignResidents.push(cityData.nonSwiss);
}



/*bar chart horizontal*/
new Chart(ZHpopulation, {
  type: 'bar', 
  data: {
    labels: cityNames,
    datasets: [{
      label: '# swissResidents 2022',
      data: swissResidents,
      borderWidth: 1
    },
    {
      label: '# foreignResidents 2022',
      data: foreignResidents,
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        beginAtZero: true,
        stacked: true
      }
    }
  }
});

