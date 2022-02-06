/**
 *
 */

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  children: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button onClick={(e) => props.handleClick(e, 2)}>{props.children}</button>
  );
};

// #endregion

export default Button;
