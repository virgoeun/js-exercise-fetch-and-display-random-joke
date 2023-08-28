function fetchJokes() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
}

console.log(fetchJokes());

async function displayJokes() {
  try {
    const joke = await fetchJokes();
    console.log(joke);

    const setUp = joke.setup;
    const punchLine = joke.punchline;

    const setUpString = document.createElement("p");
    const punchLineString = document.createElement("p");

    console.log(setUpString);

    setUpString.innerHTML = setUp;
    punchLineString.innerHTML = punchLine;
    //p has joke & punchline (string)

    const divElement = document.getElementById("joke-container");
    divElement.appendChild(setUpString);
    divElement.appendChild(punchLineString);
  } catch (error) {
    console.log(error);
  }
}
displayJokes();

// don't forget to invoke the function :
// displayJokes()

/*
async function fetchAndDisplayImages() {
  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    const data = await response.json();

    data.forEach((launchObj) => {
      const patchImage = launchObj.links.patch.small;
      const imgElement = document.createElement("img");

      imgElement.src = patchImage;
      document.body.appendChild(imgElement);
    });
  } catch (err) {
    console.log(err);
  }
}

fetchAndDisplayImages();
*/
