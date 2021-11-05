import './App.css';
import * as React from 'react';
import ProfilePage from './component/ProfilePage';
import WatchlistPage from './component/WatchlistPage';
import QuotesPage from './component/QuotesPage';

function App() {
  const [selectedPage, setSelectedPage] = React.useState("profile")
  const handleMenuOptionClick = (e) => {
    e.preventDefault();
    setSelectedPage(e.target.value)
  }

  const isProfilePageButtonDisabled = selectedPage && selectedPage === "profile";
  const isWatchlistPageButtonDisabled = selectedPage && selectedPage === "watchlist";
  const isQuotesPageButtonDisabled = selectedPage && selectedPage === "quotes";

  return (
    <div className="App">
      <div className="app-menu">
        <h1 className="header">Modern Trading Platform</h1>
        <span>
          <button value="profile" className="menu-option" disabled={isProfilePageButtonDisabled} onClick={handleMenuOptionClick}>Profile</button>
          <button value="watchlist" className="menu-option" disabled={isWatchlistPageButtonDisabled} onClick={handleMenuOptionClick}>Watchlist</button>
          <button value="quotes" className="menu-option" disabled={isQuotesPageButtonDisabled} onClick={handleMenuOptionClick}>Quotes</button>
        </span>
      </div>
      {isProfilePageButtonDisabled &&
        <ProfilePage />
      }
      {isQuotesPageButtonDisabled &&
        <QuotesPage />
      }
      {isWatchlistPageButtonDisabled &&
        <WatchlistPage />
      }
    </div>
  );
}

export default App;
