const people = [
    {name: "Anna", location: 'Zurich', nationality: "Swiss", image:"img/Anna.jpg"},
    {name: "Melek", location: 'Zurich', nationality: "Turkish",image:"img/Melek.jpg"},
    {name: "Merve", location: 'Zurich', nationality: "Turkish",image:"img/MERVE.jpg" },
    {name: "Anastasiia", location: 'Bern', nationality: "Ukrainian",image:"img/Anastasiia_03.jpg"},
    {name: "Oana", location: 'Bern', nationality: "Romanian",image:"img/oana.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/Sumeyra.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/41-PowerCoders_41.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/14-PowerCoders_14.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/23-PowerCoders_23.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/15-PowerCoders_15.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/16-PowerCoders_16.jpg"},
    {name: "Sumeyra", location: 'Lausanne', nationality: "Turkish",image:"img/20-PowerCoders_20.jpg"},
    
  ];


  let photos = people.map((user)=>{
      return `<li>
      <img src="${user.image}">
      <h2>${user.location}</h2><p>${user.name}</p>
      </li>`
  }).join("")

  document.querySelector("#photo-collage").innerHTML=photos


