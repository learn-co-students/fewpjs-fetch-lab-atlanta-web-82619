function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));

}

function renderBooks(json) {
  const main = document.querySelector('main')
  // select the whole page
  json.forEach(book => {
    //everything you got from json you iterate through
    // and create a proper tage and in the tag u put the book.name

    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
    //slap it on the dom
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
