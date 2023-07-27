import { ComponentProps } from "react";
import { Equal, Expect } from "../helpers/type-utils";

interface InputProps {
  onChange: (value: string) => void;
}
type UpdatedInputProps = Omit<InputProps, "onChange"> & InputProps

export const Input = (
  props: UpdatedInputProps
) => {
  return (
    <input
      {...props}
      onChange={(e) => {
        props.onChange(e.target.value);
      }}
    ></input>
  );
};

const Parent = () => {
  return (
    <Input
      onChange={(e) => {
        console.log(e);

        type test = Expect<Equal<typeof e, string>>;
      }}
    ></Input>
  );
};
