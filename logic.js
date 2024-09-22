document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  // Fetch quote from Ninjas API
  function getNinjasQuote() {
    const category = "happiness"; // Change the category if needed
    $.ajax({
      method: "GET",
      url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
      headers: { "X-Api-Key": "AucygD88qyCH5W8lfCBJAg==UoeUtexNyEDjjYZL" }, // Replace with your actual API key
      contentType: "application/json",
      success: function (result) {
        console.log(result);
        if (result.length > 0) {
          const data = result[0]; // The API returns an array, take the first quote
          quoteElement.innerHTML = data.quote;
          authorElement.innerHTML = data.author;
        } else {
          quoteElement.innerHTML = "No quotes available for this category";
          authorElement.innerHTML = "";
        }
      },
      error: function (jqXHR) {
        console.error("Error: ", jqXHR.responseText);
        quoteElement.innerHTML = "Failed to fetch quote";
        authorElement.innerHTML = "";
      },
    });
  }

  // Fetch a quote on button click
  document
    .getElementById("fetch-ninjas")
    .addEventListener("click", getNinjasQuote);

  // Tweet function
  window.tweet = function () {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        quoteElement.innerHTML +
        " ---- by " +
        authorElement.innerHTML,
      "Tweet Window",
      "width=600, height=300"
    );
  };
});
