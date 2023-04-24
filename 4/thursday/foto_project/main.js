const people = [
    {name: "Anna", Location: 'Zurich', nationality: "Swiss"},
    {name: "Melek", Location: 'Zurich', nationality: "Turkish"},
    {name: "Merve", Location: 'Zurich', nationality: "Turkish", },
    {name: "Anastasiia", Location: 'Bern', nationality: "Ukrainian"},
    {name: "Oana", Location: 'Bern', nationality: "Romanian"},
    {name: "Sumeyra", Location: 'Lausanne', nationality: "Turkish"}
  ];

  function hideElementsZ() {
    const elements = document.querySelectorAll("ul > li").forEach(function(item) {
      if (item.querySelector('h2').textContent === 'Zurich') {
        item.style.display = ' inline-block';
      }
        else {
          item.style.display = 'none';
        }
      })
    }

    function hideElementsB() {
      const elements = document.querySelectorAll("ul > li").forEach(function(item) {
        if (item.querySelector('h2').textContent === 'Bern') {
          item.style.display = ' inline-block';
        }
          else {
            item.style.display = 'none';
          }
        })
      }
      function hideElementsL() {
        const elements = document.querySelectorAll("ul > li").forEach(function(item) {
          if (item.querySelector('h2').textContent === 'Lozanne') {
            item.style.display = ' inline-block';
          }
            else {
              item.style.display = 'none';
            }
          })
        }