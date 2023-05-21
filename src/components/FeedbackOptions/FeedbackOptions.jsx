import PropTypes from "prop-types";
import {
  FeedbackOptionsList,
  FeedbackOptionBtn,
} from "./FeedbackOptions.styled";

import {
  BsEmojiHeartEyes,
  BsEmojiNeutral,
  BsEmojiFrown,
  BsEmojiSmile,
} from "react-icons/bs";

export const FeedBackOptions = ({ options, onStateUpdate }) => {
  return (
    <FeedbackOptionsList>
      {options.map((option) => (
        <li key={option}>
          <FeedbackOptionBtn
            type="button"
            onClick={() => onStateUpdate(option)}
          >
            {option}
            {option === "good" ? (
              <BsEmojiHeartEyes />
            ) : option === "neutral" ? (
              <BsEmojiNeutral />
            ) : option === "bad" ? (
              <BsEmojiFrown />
            ) : (
              <BsEmojiSmile />
            )}
          </FeedbackOptionBtn>
        </li>
      ))}
    </FeedbackOptionsList>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onStateUpdate: PropTypes.func.isRequired,
};
