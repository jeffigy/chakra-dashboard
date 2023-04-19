import { FC, FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Input as input } from "@chakra-ui/react";
type InputProps = {
  label: string;
  name: string;
  placeholder: string;
  type: string;
  [key: string]: any;
};
const Input: FC<InputProps> = ({ label, name, placeholder, type, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field
        as={input}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};

export default Input;
