
const population = document.getElementById('population');

const gender = document.getElementById('gender');
const age = document.getElementById('age');

const nationality = document.getElementById('nationality');
const religion = document.getElementById('religion');

/*line chart*/
new Chart(population, {
 
  type: 'line', 
  data: {
    labels: ['1962','1963','1964','1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'],
    datasets: [{
      label: '# residents/year',
      data: [3336,3745,4074,4183,4407,4562,4736,4826,4879,5352,5718,6299,6523,6663,6605,6689,6738,6825,6784,6703,6638,6552,6609,6622,6610,6600,6547,6593,6571,6640,6615,6554,6469,6418,6470,6511,6477,6591,6563,6638,6682,6666,6595,6650,6834,6971,7127,7178,7250,7197,7223,7308,7413,7449,7476,7500,7522,7727,7880,7977,8039
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

/*pie1*/
  new Chart(gender, {
    type: 'doughnut',
    data: {
      labels: ["men 49%", "women 51%"],
      datasets: [{
        label: 'gender',
        data: [49, 51],
        borderWidth: 1
      }]
    },
    
  });

  /*pie2*/
  new Chart(age, {
    type: 'doughnut',
    data: {
      labels: ["0-14 Year[%]", "15-19 Year[%]","20-39 Year[%]","40-64 Year[%]","65-79 Year[%]","80 and more Year[%]"],
      datasets: [{
        label: 'age distribution',
        data: [15.8, 5.5, 23.1,34.7,13.9,7],
        borderWidth: 1
      }]
    },
    
  });
  /*pie3*/
  new Chart(religion, {
    type: 'doughnut',
    data: {
      labels: ["katolic", "protestant","other/noreligon"],
      datasets: [{
        label: 'religion',
        data: [2268,1952,3819],
        borderWidth: 1
      }]
    },
    
  });
  /*pie4*/
  new Chart(nationality, {
    type: 'doughnut',
    data: {
      labels: ["Swiss 70.7%", "Others 29.3%"],
      datasets: [{
        label: 'Nationality',
        data: [5685, 2354],
        borderWidth: 1
      }]
    },

     
  });


  

  
    
  
 
