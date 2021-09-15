import { useState } from "react";
import "./like-button.scss";

export interface ILikeButton {
  liked: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const LikeButton = ({ liked, onClick = () => {} }: ILikeButton) => {
  return (
    <>
      {liked ? (
        <button
          className="liked"
          role="button"
          aria-pressed="true"
          onClick={onClick}
        >
          <span role="img" aria-label="sparkling heart">
            💖
          </span>
        </button>
      ) : (
        <button
          className="like"
          role="button"
          aria-pressed="false"
          onClick={onClick}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
      )}
    </>
  );
};

export default LikeButton;
