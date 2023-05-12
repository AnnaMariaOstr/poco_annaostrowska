fetch('/project_dashbord/ZH_data/data.json')
  .then(response => response.json())
  .then(data => {
    let dataList = document.getElementById("data-list");
    let dataHTML = "";

    data.forEach(item => {
      dataHTML += "<li>GEBIET_NAME: " + item.GEBIET_NAME + ", Ausländeranteil[%]: " + item["Ausländeranteil[%]"] + ", Bevölkerung:HeimatAusland[Pers.]: " + item["Bevölkerung:HeimatAusland[Pers.]"] + ", Bevölkerung:HeimatSchweiz[Pers.]: " + item["Bevölkerung:HeimatSchweiz[Pers.]"] + ", Bevölkerung[Pers.]: " + item["Bevölkerung[Pers.]"] + "</li>";
    });

    dataList.innerHTML = dataHTML;
  })
  .catch(error => console.error(error));
  

  
    
  
 
