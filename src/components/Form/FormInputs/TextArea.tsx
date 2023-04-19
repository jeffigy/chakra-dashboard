import React, { FunctionComponent } from "react";
import { Textarea } from "@chakra-ui/react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
type TextAreaProps = {
  label: string;
  name: string;
  placeholder: string;
  [key: string]: any;
};

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <Field as={Textarea} id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};
export default TextArea;
