const quotes = [
  { text: "Believe in yourself.", category: "Motivation" },
  { text: "The only limit is your mind.", category: "Mindset" },
  { text: "Code like a pro!", category: "Programming" },
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteDiv = document.getElementById("quoteDisplay");
  quoteDiv.innerHTML = `<p><strong>${quote.category}</strong>: ${quote.text}</p>`;
}

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (quoteText === "" || quoteCategory === "") {
    alert("Please enter both quote and category.");
    return;
  }

  // Add new quote to array
  quotes.push({ text: quoteText, category: quoteCategory });

  // Clear the input fields
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  // Optional: Show the newly added quote
  const quoteDiv = document.getElementById("quoteDisplay");
  quoteDiv.innerHTML = `<p><strong>${quoteCategory}</strong>: ${quoteText}</p>`;
}