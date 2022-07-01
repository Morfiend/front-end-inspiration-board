import "./ListOfBoards.css";
import React, { useState } from "react";
import Board from "./Board";
import ClickAwayListener from "react-click-away-listener";

const ListOfBoards = (props) => {
  // our variables and tracking state
  const [popup, setPopup] = useState(false);
  const [selected, setSelected] = useState(null);
  const [boardsData, setBoardsData] = useState([]);

  const handleSelectedBoard = (board) => {
    setSelected(board);
    setPopup(false);
  };

  const boardChoices = boardsData.map((board) => {
    return (
      <li>
        <Board board={board} onBoardSelect={handleSelectedBoard}></Board>
      </li>
    );
  });

  return (
    <div>
      <button onClick={() => setPopup(true)}> Choose a Board </button>

      {popup && (
        <ClickAwayListener onClickAway={() => setPopup(false)}>
          <div className={"popup"}>
            <li>test board 1</li>
            <li>test board</li>
          </div>
        </ClickAwayListener>
      )}
      <section>Board: {selected || ""}</section>
    </div>
  );
};

export default ListOfBoards;
