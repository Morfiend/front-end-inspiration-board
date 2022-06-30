import "./ListOfBoards.css";
import { useState } from "react";

import ClickAwayListener from "react-click-away-listener";

const ListOfBoards = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div>
      <button onClick={() => setPopup(true)}> Choose a Board </button>

      {popup && (
        <ClickAwayListener onClickAway={() => setPopup(false)}>
          <div className={"popup"}>
            <li>Items of the Popup</li>
            <li>Items of the Popup</li>
            <li>Items of the Popup</li>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default ListOfBoards;
