import axios from "axios";
axios
  .post("http://localhost:8000/web_search", {
    query: "latest news",
    num_results: 2,
  })
  .then((response) => {
    const results = response.data.results;
    if (results && Object.keys(results).length > 0) {
      const content = Object.values(results);
      console.log("Scraped content:", content);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
