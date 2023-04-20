import React, { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import { Select as select } from "@chakra-ui/react";
type SelectProps = {
  label: string;
  name: string;
  options: any[];
  placeholder: string;
  [key: string]: any;
};

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as={select} id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};
export default Select;
