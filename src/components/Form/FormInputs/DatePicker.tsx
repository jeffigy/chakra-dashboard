import { ErrorMessage, Field } from "formik";
import React, { FunctionComponent } from "react";
import { Input } from "@chakra-ui/react";
import DateView from "react-datepicker";
import TextError from "./TextError";
type DatePickerProps = {
  label: string;
  name: string;
  [key: string]: any;
};

const DatePicker: React.FC<DatePickerProps> = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }: any) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={(val: Date) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};
export default DatePicker;
