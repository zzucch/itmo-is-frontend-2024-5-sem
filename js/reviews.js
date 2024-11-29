document.addEventListener("DOMContentLoaded", () => {
  const reviewsContainer = document.querySelector(".reviews-container");
  const preloader = document.querySelector(".preloader");
  const loadMoreButton = document.querySelector("#load-more-reviews");

  const API_URL = "https://jsonplaceholder.typicode.com/comments";
  let requestCount = 0;

  const showPreloader = () => {
    loadMoreButton.style.display = "none";
    preloader.style.display = "block";
  };

  const hidePreloader = () => {
    loadMoreButton.style.display = "block";
    preloader.style.display = "none";
  };

  const loadReviews = async () => {
    showPreloader();
    try {
      const filter = requestCount % 2 === 0 ? "id_gte=100" : "id_lte=200";
      requestCount++;

      const response = await fetch(`${API_URL}?${filter}`);
      if (response.status !== 200) {
        throw new Error(`Response status is not OK: ${response.status}`);
      }

      const reviews = await response.json();
      const timeout_ms = 3500;

      setTimeout(() => {
        reviews.slice(0, 5).forEach((review) => {
          const reviewElement = document.createElement("blockquote");

          const reviewText = document.createElement("p");
          reviewText.textContent = `"${review.body}"`;

          const reviewAuthor = document.createElement("cite");
          reviewAuthor.textContent = review.name;

          reviewElement.appendChild(reviewText);
          reviewElement.appendChild(reviewAuthor);

          reviewsContainer.appendChild(reviewElement);
        });
        hidePreloader();
      }, timeout_ms);
    } catch (error) {
      const errorElement = document.createElement("p");

      errorElement.classList.add("error");
      errorElement.textContent = `Something went wrong: ${error.message}`;

      reviewsContainer.appendChild(errorElement);

      hidePreloader();
    }
  };

  loadReviews();

  loadMoreButton.addEventListener("click", loadReviews);
});
