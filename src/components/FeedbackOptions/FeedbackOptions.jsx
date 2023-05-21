import PropTypes from "prop-types";
import {
  FeedbackOptionsList,
  FeedbackOptionBtn,
} from "./FeedbackOptions.styled";

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
