function getRandomQuote(){
  const endpoint = `https://api.quotable.io/random`
  return fetch(endpoint).then(data => data.json()).then((data)=>{
    return {
      name: data.author,
      quote: data.content
    }
  })
}

const btn = document.querySelector("button");
const quoteDisplay = document.querySelector("#quote-display");
const adviceDisplay = document.querySelector("#advice-display");

getRandomQuote().then(quote => {
  quoteDisplay.textContent = `"${quote.quote}"`;
  adviceDisplay.textContent = `Advice from: ${quote.name}`;
});

btn.addEventListener("click", () => {
  getRandomQuote().then(quote => {
    quoteDisplay.textContent = `"${quote.quote}"`;
    adviceDisplay.textContent = `Advice from: ${quote.name}`;
  });
});