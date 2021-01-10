// import s from './Button.module.css';

const Button = ({ type, className, onClick, text }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
  text: 'click',
};

export default Button;
