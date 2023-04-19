import React, { FC } from "react";
import Input from "./FormInputs/Input";
import TextArea from "./FormInputs/TextArea";
import Select from "./FormInputs/Select";
import Radio from "./FormInputs/Radio";
import Checkbox from "./FormInputs/Checkbox";
import DatePicker from "./FormInputs/DatePicker";
interface FormikControlProps {
  control: string;
  [key: string]: any; //* for accepting any additional props
}

const FormikControl: FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return (
        <Input label={""} name={""} placeholder={""} type={""} {...rest} />
      );
    case "textarea":
      return <TextArea label={""} name={""} placeholder={""} {...rest} />;
    case "select":
      return <Select label={""} name={""} placeholder={""} options={[]} />;
    case "radio":
      return <Radio />;
    case "checkbox":
      return <Checkbox />;
    case "date":
      return <DatePicker />;
    default:
      return null;
  }
};

export default FormikControl;
