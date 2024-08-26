import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";

function WatchList() {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, idx) => {
          return <WatchListItem key={idx} stockvar={stock}></WatchListItem>;
        })}
      </ul>
    </div>
  );
}

export default WatchList;

const WatchListItem = ({ stockvar }) => {
  const [showWatchListActions, setWatchListActions] = useState(false);

  const showOption = (eve) => {
    setWatchListActions(true);
  };

  const vanishOptions = (eve) => {
    setWatchListActions(false);
  };

  return (
    <li onMouseEnter={showOption} onMouseLeave={vanishOptions}>
      <div className="item">
        <p className={stockvar.isDown ? "down" : "up"}>{stockvar.name}</p>
        {!showWatchListActions && (
          <div className="itemInfo">
            <span className="percent">{stockvar.percent}</span>
            &nbsp;
            {stockvar.isDown ? (
              <i className="fa fa-arrow-up up"></i>
            ) : (
              <i className="fa fa-arrow-down down"></i>
            )}
            &nbsp;
            <span className="price">{stockvar.price}</span>
          </div>
        )}
      </div>
      {showWatchListActions && (
        <WatchListActions uid={stockvar.name}></WatchListActions>
      )}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy(B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell(S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics(A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="icon">
            <i className="fa fa-info-circle" aria-hidden="true"></i>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
