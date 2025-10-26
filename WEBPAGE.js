// Handle form submission
const form = document.getElementById('userForm');
const output = document.getElementById('output');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const hobbies = document.getElementById('hobbies').value;
  const color = document.querySelector('input[name="color"]:checked').value;

  output.innerHTML = `<strong>Name:</strong> ${name} <br>
                      <strong>Hobbies:</strong> ${hobbies} <br>
                      <strong>Favorite Color:</strong> ${color}`;
});

// 🧠 Example of DOM + OOP in JS
class Person {
  constructor(name, hobbies) {
    this.name = name;
    this.hobbies = hobbies;
  }

  introduce() {
    console.log(`Hey, I'm ${this.name} and I love ${this.hobbies}!`);
  }
}

// API Example (fetch a random joke 😄)
async function getJoke() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await response.json();
  console.log(`Joke: ${data.setup} - ${data.punchline}`);
}

// Run examples
const me = new Person("Nishant", "Badminton & Music");
me.introduce();
getJoke();