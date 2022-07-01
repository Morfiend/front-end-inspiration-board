import React from "react";
import PropTypes from "prop-types";

const Board = (props) => {
  const boardInfo = () => {
    let boardSelect = {
      id: props.id,
      title: props.title,
      owner: props.owner,
    };
    props(boardSelect);
  };

  return (
    <div onClick={() => boardInfo.props.onBoardSelect(props.board)}>
      {props.board.title}
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};
export default Board;
