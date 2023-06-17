Exercise: Fetch and Display Random Jokes

Objective:
Fetch random jokes from an API and display them on a webpage using Promises, async/await, and the Fetch API.

Instructions:

Set up the HTML structure:
Create an HTML file with the basic structure, including a `<head>` and `<body>` section.
Inside the `<body>`, create a `<div>` element with an id attribute (e.g., "joke-container") to hold the jokes.

Write the JavaScript code:
Create a JavaScript file and link it to your HTML file using a `<script>` tag.
Inside the JavaScript file, create a function called `fetchJokes` with the following steps:

- Use the Fetch API to fetch random jokes from an API that provides jokes. For example, you can use the "official_joke_api" at https://official-joke-api.appspot.com/random_joke.
- Handle the response using `.then()` and convert it to JSON using the `.json()` method.
- Return the parsed JSON data as a Promise.

Inside the JavaScript file, create an async function called `displayJokes` with the following steps:

- Call the `fetchJokes` function and use `await` to wait for the Promise to resolve.
- Retrieve the jokes from the resolved Promise.
- Create an HTML string to display the jokes. You can use `<p>` tags or any other suitable HTML element.
- Set the `innerHTML` of the joke container element (identified by its id) to the HTML string you created.

Finally, outside any functions, call the `displayJokes` function to fetch and display the jokes.

Test the code:

- Open the HTML file in a web browser.
- Check the developer console for any error messages.
- Verify that random jokes are displayed on the webpage.

Test Solution Here:
