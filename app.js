const apiUrl = 'https://v2.jokeapi.dev/joke/Any';

const getJoke = async () => {
  const jokeResult = document.getElementById('jokeResult');
  jokeResult.textContent = "Loading...";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.type === 'single') {
      jokeResult.textContent = data.joke;
    } else if (data.type === 'twopart') {
      jokeResult.innerHTML = `${data.setup}<br><strong>${data.delivery}</strong>`;
    } else {
      jokeResult.textContent = 'Oops! No joke found. Try again.';
    }
  } catch (error) {
    jokeResult.textContent = 'Error loading joke. Please try again later.';
  }
};

document.getElementById('getJoke').addEventListener('click', getJoke);
