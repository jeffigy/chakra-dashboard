import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import { Button, Card, CardBody } from "@chakra-ui/react";
function FormikContainer() {
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };
  const options = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
  });
  const onSubmit = (values: any) => {
    console.log("Form data", values);
  };
  //log options to the console
  useEffect(() => {
    console.log(options);
  }, [options]);
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
