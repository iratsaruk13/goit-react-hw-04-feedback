import PropTypes from "prop-types";
import {
  StatisticContainer,
  StatisticItem,
  StatisticValue,
} from "./Statistics.styled";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticContainer>
      <StatisticItem color="#2ed947">
        <StatisticValue>Good: {good}</StatisticValue>
      </StatisticItem>
      <StatisticItem color="#efce4c">
        <StatisticValue>Neutral: {neutral}</StatisticValue>
      </StatisticItem>
      <StatisticItem color="#f54e3b">
        <StatisticValue>Bad: {bad}</StatisticValue>
      </StatisticItem>
      <StatisticItem color="#e71fd9">
        <StatisticValue>Total: {total()}</StatisticValue>
      </StatisticItem>
      <StatisticItem color="#27c31c">
        <StatisticValue>
          Positive feedback: {positivePercentage()}%
        </StatisticValue>
      </StatisticItem>
    </StatisticContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
