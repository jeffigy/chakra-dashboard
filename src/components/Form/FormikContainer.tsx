import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Card, CardBody } from "@chakra-ui/react";
function FormikContainer() {
  const options = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const radioOptions = [
    { key: "Option 1", value: "roption1" },
    { key: "Option 2", value: "roption2" },
    { key: "Option 3", value: "roption3" },
  ];

  const checkBoxOptions = [
    { key: "Option 1", value: "coption1" },
    { key: "Option 2", value: "coption2" },
    { key: "Option 3", value: "coption3" },
  ];

  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    date: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    date: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };
  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <FormikControl
                control={"input"}
                label={"Email"}
                placeholder={"Email"}
                name={"email"}
                type={"email"}
              />
              <FormikControl
                control={"textarea"}
                placeholder={"Description here..."}
                label={"Description"}
                name={"description"}
              />
              <FormikControl
                control={"select"}
                label={"Select a topic"}
                name={"selectOption"}
                options={options}
              />
              <FormikControl
                control={"radio"}
                label={"Radio Topic"}
                name={"radioOption"}
                options={radioOptions}
              />
              <FormikControl
                control={"checkbox"}
                label={"Checkbox Topic"}
                name={"checkboxOption"}
                options={checkBoxOptions}
              />
              <FormikControl
                control={"date"}
                label={"Pick a date"}
                name={"date"}
              />
              <Button bg={"blue.500"} type="submit" w={"full"}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
}

export default FormikContainer;
