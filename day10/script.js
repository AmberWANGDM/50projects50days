jokeBtn.addEventListener('click', () => {
  fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      joke.innerHTML = data.joke
    })
})
