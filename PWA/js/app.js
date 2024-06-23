const container = document.querySelector(".container")
const coffees = [
  { name: "Buggati Divo", image: "Cars/1.jpg" },
  { name: "Porche", image: "Cars/2.jpg" },
  { name: "BMW", image: "Cars/3.jpg" },
  { name: "Ferarri", image: "Cars/4.jpg" },
  { name: " Lambo", image: "Cars/5.jpg" },
  { name: " Dodge", image: "Cars/6.jpg" },
  { name: "Inventore", image: "Cars/7.jpg" },
  { name: "Dodge Challenger", image: "Cars/8.jpg" },
  { name: "Lamborghani", image: "Cars/9.jpg" },
]
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">View</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)