import React from "react";

type Props = {
  children?: React.ReactNode;
}

export const Button = (props: Props) => {
  return <button>{props.children}</button>;
};

const Parent = () => {
  return (
    <>
      <Button></Button>
      <Button>Hello world!</Button>
    </>
  );
};
