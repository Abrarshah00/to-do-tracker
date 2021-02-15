import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("clicked");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Hello" color="green" onClick={onClick} />
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = { title: PropTypes.string.isRequired };

// CSS in jsx
// const headingStyle = {
//   color: "red",
//   backgroundColor: "Black",
// };
export default Header;
