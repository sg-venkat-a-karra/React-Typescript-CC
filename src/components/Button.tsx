/**
 *
 */

type ButtonProps = {
  handleClick: () => void;
  children: string;
};

const Button = (props: ButtonProps) => {
  return <button onClick={props.handleClick}>{props.children}</button>;
};

// #endregion

export default Button;
