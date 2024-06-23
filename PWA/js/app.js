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
  { name: "Range Rover", image: "Cars/10.jpg" },
  { name: "Buggati Chiron", image: "Cars/11.jpg" },
  { name: "BMW", image: "Cars/12.jpg" },
  { name: "Rolls Royces", image: "Cars/13.jpg" },
  { name: "LEXUS", image: "Cars/14.jpg" },
  { name: "Lamborghani URUS", image: "Cars/15.jpg" },
  { name: "BMW i7", image: "Cars/16.jpg" },
  { name: "Bently", image: "Cars/17.jpg" },
  { name: "Audi", image: "Cars/18.jpg" },
  { name: "Buggati bolide", image: "Cars/19.jpg" },
  { name: "G-Wagon", image: "Cars/20.jpg" },
  // { name: "LEXUS", image: "Cars/14.jpg" },
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
