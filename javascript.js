// Solicita ao usuário que insira no mínimo um dado do tipo texto.
// Prompt the user to enter at least one text data.
var firstName = prompt("Enter your first name: ");
alert("Hello," + " " + firstName + "!");

// Solicita ao usuário que insira sua idade como um dado numérico e realiza uma operação matemática.
// Prompt the user to enter their age as a numeric data and perform a mathematical operation.
var age = parseFloat(prompt("Enter your age: "));
var year = 2024;
var yearBorn = year - age;
alert("You were born in " + yearBorn + "! :)" + "That is amazing!");

// Solicita ao usuário que insira seu prato e bebida favoritos como dados de texto e concatena as entradas.
// Prompt the user to enter their favorite food and drink as text data and concatenate the inputs.
var favoriteFood = prompt("What is your favorite food?");
var favoriteDrink = prompt("What is your favorite drink");
alert(
  `I am sure that ${favoriteFood} with ${favoriteDrink} goes really well together.`
);

// Exibe os dados coletados por meio de alert.
// Display the collected data in an alert format.
alert(
  `Follow the information we retrieved from you today: your first name is: ${firstName}. Your age: ${age}. Born in: ${yearBorn}. and your favorite food and drink: ${favoriteFood} and ${favoriteDrink}. We will keep this information safe for you. Have an amazing day! s2`
);

// Exibe os dados coletados no console.
// Display the collected data in the console.
console.log(firstName, age, yearBorn, favoriteFood, favoriteDrink);
