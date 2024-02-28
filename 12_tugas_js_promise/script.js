const searchInput = document.getElementById("searchInput");
const newsContainer = document.getElementById("newsContainer");

// Function to fetch news data from the API
const fetchNews = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e03f62162c8d4a93bf5a5cad15d78715"
    );
    const articlesData = response.data.articles;
    renderNews(articlesData);
  } catch (error) {
    console.error("Error fetching news data:", error);
  }
};

// Function to render news articles
const renderNews = (articles) => {
  newsContainer.innerHTML = "";
  articles.forEach((article) => {
    console.log(article);
    const col = document.createElement("div");
    col.classList.add("col");

    const card = document.createElement("div");
    card.classList.add("card", "h-100");

    const img = document.createElement("img");
    img.src = article.urlToImage ? article.urlToImage : "./public/berita.jpg";
    img.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = article.title;

    const text = document.createElement("p");
    text.classList.add("card-text");
    text.textContent = article.description;

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const small = document.createElement("small");
    small.classList.add("text-body-secondary");
    small.textContent = `Published at: ${new Date(
      article.publishedAt
    ).toLocaleString()}, by : ${article.author ? article.author : "Unknown"}`;

    // Append elements to their respective parents
    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardFooter.appendChild(small);
    card.appendChild(cardFooter);
    col.appendChild(card);
    newsContainer.appendChild(col);
  });
};

// Event listener for search input
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredArticles = articlesData.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
  });
  renderNews(filteredArticles);
});

// Event listener for form submission
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission
  // Trigger search based on input value
  const searchTerm = searchInput.value.toLowerCase();
  const filteredArticles = articlesData.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
  });
  renderNews(filteredArticles);
});

// Call the fetchNews function when the page loads
window.onload = fetchNews;
