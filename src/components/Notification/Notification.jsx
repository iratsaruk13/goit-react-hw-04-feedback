import PropTypes from "prop-types";
import { Notice } from "./Notification.styled";

export const Notification = ({ notification }) => {
  return <Notice>{notification}</Notice>;
};

Notification.propTypes = {
  notification: PropTypes.string,
};
