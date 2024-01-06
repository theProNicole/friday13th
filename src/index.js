// CHALLENGE 1:
// For each movie returned from http://localhost:3000/movies create an 
// image and add it to the movie-list nav element.
// 1. render movies in nav element
// CHALLENGE 2
// As soon as the page loads, we should see the details of the first movie in the dataset.
//  1. render 1st movie on to dom in movie info
//  2. creat var for tags #detail-image, #title, #year-released, #description
//CHALLENGE 3
// When you click on each movie image in the top nav, you should populate the detail area with the 
// image, title, release_year, description, watched, and blood_amount for the movie that was clicked.
// If the value of 'watched' is false, the button should say 'Unwatched'. If the value is true,
//  then the button should say 'Watched'.
//  1. click event for navBar
//  2. button event for button watched = unwacthed / unwatched = false
// CHALLENGE 4
// When you click on the button in the details it should toggle between
// Watched or Unwatched depending on the value of watched for the movie currently
// being displayed.
//CHALLENGE 5
// On the right side there's a form that allows the user to enter a number of blood 
// drops to add to each movie (don't ask why). For each movie, I should be able to add 
// more drops.
// Example:
// If the value is 0 and I enter 10, then number of drops for the movie should be 10.
// If the value is 20 and I enter 5, then the number of drops for the movie should be 25.



// Links:
const url = 'http://localhost:3000/movies'
// console.log(movies)
const stMovieUrl = 'http://localhost:3000/movies/1'

// Elements:
const navBar = document.getElementById('movie-list')
  //console.log(navBar)
const detailImg = document.querySelector('#detail-image')
// console.log(detailImg)
const title = document.getElementById('title')
//console.log(detailTitle)
const relsYear = document.getElementById('year-released')
// console.log(relsYear)
const descriptTag = document.getElementById('description')
//console.log(descriptTag)
const button = document.getElementById('watched')
//console.log(button)
const amount = document.getElementById('amount')
 console.log(amount)
const form = document.getElementById('blood-form')
 console.log(form)
let watched = false

function renderMovie(movieObj){
    detailImg.src = movieObj.image
    title.textContent = movieObj.title
    relsYear.textContent = movieObj.release_year
    descriptTag.textContent = movieObj.description
    button.innerText = movieObj.watched ? 'unwatched':'watched'
} 

fetch(url)
.then(res => res.json())
.then(arrMovies => {
    //  console.log(arrMovies)
    arrMovies.forEach(movieObj=>{
        // console.log(movieObj)
        let img = document.createElement('img')
        img.src = movieObj.image
        navBar.appendChild(img)
        img.addEventListener('click', () =>{
        renderMovie(movieObj)
        })        
    })
    button.addEventListener('click',()=>{
        // console.log('click')
        watched = !watched 
        button.innerText = watched ? 'unwatched':'watched'
    })
    renderMovie(arrMovies[0])
})

form.addEventListener('submit',(e)=>{
      e.preventDefault()
        // console.log(e.target['blood-amount'].value)  
        let curBlood = parseInt(amount.textContent)
        let formBlood = parseInt(e.target['blood-amount'].value)
        let newBlood = curBlood + formBlood
        amount.textContent = newBlood
        e.target.reset()
    })
        
