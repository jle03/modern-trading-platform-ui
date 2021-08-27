import './App.css';
import * as React from 'react';
import getCompanyProfile from './API/symbol';
import { map } from 'lodash';

function App() {
  const [symbol, setSymbol] = React.useState("");
  const [results, setResults] = React.useState();

  const formSubmit = async (e) => {
    e.preventDefault();
    if (symbol && symbol.length > 0) {
      const searchResult = await getCompanyProfile(symbol);
      setResults(searchResult.data);
    }
    else {
      alert("Please enter a symbol");
    }
  }

  const handleClearInputClick = () => {
    setSymbol("");
  }

  const handleClearResultsClick = () => {
    setResults()
  }

  const handleSymbolInput = (e) => {
    setSymbol(e.target.value);
  }

  console.log(results);
  return (
    <div className="App">
      <form onSubmit={formSubmit}>
        <div>
          <label>
            Symbol:
            <input type='text' value={symbol} onChange={handleSymbolInput} />
          </label>
        </div>
        <div>
          <button type='submit'>Submit</button>
          <button type='button' onClick={handleClearInputClick}>clear input</button>
        </div>
      </form>
      <button type='button' onClick={handleClearResultsClick}>Clear result</button>
      <div>
        {results && (
          <div>
            <div>Symbol: {results.symbol}</div>
            {map(results.quoteList, quote => {
              return (
                <div>
                  <div>
                    Date: {quote.date}
                  </div>
                  <div>
                    Price: {quote.price}
                  </div>
                  <div>
                    Volume: {quote.volume}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
