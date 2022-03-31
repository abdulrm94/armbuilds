
function collectReviews(){
  let allReviews = "";

  for (let i = 0; i < reviews.length; i++) {

    reviewStars = "";
    for (let step = 0; step < reviews[i].rating; step++) {
      // Runs 5 times, with values of step 0 through 4.
      reviewStars += "&bigstar;";
    }

    allReviews += 
    `<div class='review-card ${reviews[i].platform}'>

      <p class='name'>
        ${reviews[i].name}
      </p>

      <p class='platform'>
      ${reviews[i].platform}
      </p>

      <p class='date'>
        ${reviews[i].date}
      </p>

      <p class='rating'>
      ${reviewStars}
      </p>

      <p class='message'>
      ${reviews[i].message}
      </p>

    </div>`
  }

  htmlStr = `<h3>${reviews.length} Reviews</h3>` + allReviews;
  
  // document.getElementById("reviews").innerHTML = `<h2>Reviews</h2><h3>${reviews.length} Reviews</h3>` + allReviews;
  // document.getElementById("reviews").appendChild(test);
  document.getElementById('reviews').insertAdjacentHTML('beforeend', htmlStr);

};