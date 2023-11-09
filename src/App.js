import './App.css';
import { useState } from 'react';
/**
 * @function QuoteBody Shows the quote text and author, and tweet link
 * 
 * @param {String} props.author Author of the quote
 * @param {String} props.quote The quote body
 */
function QuoteBody(props) {
  return (
    <div>
      <span>
        <h4 id="author">{props.author}: </h4>
        <p id="text">{props.quote}</p>
      </span>
      {props.link}
    </div>
  );
}
/**
 * @function QuotesSection Displays quote, its author link to tweet quote, and button allowing
 * change of quote randomly.
 *
 * @param {Array} quotes Used to hold the list of quote objects
 * @param {Object} quote Used to hold individual quote
 * @param {String} link Used to store link to tweet
 * @param {String} l Used to temporarily store link of tweet and quote
 * @param {String} linkPath Used to combine and store html and link of tweet
 * 
 * @method setQuote Used to change content of the current quote
 * @method setLink Used to change content of current link
 * 
 */
function QuotesSection() {
  
  const quotes = [
    {author: "Nelson Mandela", quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."'},
    {author: "Walt Disney", quote: '"The way to get started is to quit talking and begin doing."'},
    {author: "Eleanor Roosevelt", quote: '"The future belongs to those who believe in the beauty of their dreams."'},
    {author: "James Cameron", quote: '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."'},
    {author: "John Lennon", quote: '"You may say I\'m a dreamer, but I\'m not the only one. I hope someday you\'ll join us. And the world will live as one."'}
  ];
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random()*5)]);
  let l = `https://twitter.com/intent/tweet/${quote.quote}`;
  let linkPath = <a className="App-link" rel="noopener noreferrer" id="tweet-quote" target="_blank" href={l}>Tweet Quote</a>;
  const [link, setLink] = useState(linkPath);
   /** 
   * @function handleClick Executes on click by button to change to a new quote
   */
  function handleClick() {
    setQuote(quotes[Math.floor(Math.random()*5)]);
    l = `https://twitter.com/intent/tweet/${quote.quote}`;
    linkPath = <a className="App-link" rel="noopener noreferrer" id="tweet-quote" target="_blank" href={l}>Tweet Quote</a>;
    setLink(linkPath);
  };
  
  return (
    <div id="quote-box">
      <button onClick={handleClick} id="new-quote">New quote</button>
      <QuoteBody author={quote.author} quote={quote.quote} link={link} />
    </div>
  );
}
/** 
 * @function App Build app
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuotesSection />

      </header>
    </div>
  );
}

export default App;
