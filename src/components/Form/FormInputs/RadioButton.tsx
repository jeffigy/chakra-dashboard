import React, { FunctionComponent } from "react";
import { Radio } from "@chakra-ui/react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
type RadioButtonProps = {
  [key: string]: any;
  label: string;
  name: string;
  options: any[];
};

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>

      <Field as={Radio} name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};
export default RadioButton;
