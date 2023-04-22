import { Button, Card, CardBody, Flex, VStack } from "@chakra-ui/react";
import FormikControl from "components/Form/FormikControl";
import Layout from "components/Layout/Layout";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

type LoginProps = {};
const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});
const onSubmit = (values: any) => {
  console.log("Form data", values);
};

const Login: React.FC<LoginProps> = () => {
  return (
    <Layout>
      <Flex justifyContent={"center"}>
        <Card w={"450px"}>
          <CardBody>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(formik) => (
                <Form>
                  <FormikControl
                    control={"input"}
                    label={"Email"}
                    placeholder={"Example@mail.com"}
                    name={"email"}
                    type={"email"}
                  />
                  <FormikControl
                    control={"input"}
                    label={"Password"}
                    placeholder={"Enter Password"}
                    name={"password"}
                    type={"password"}
                  />
                  <Button
                    type="submit"
                    w={"full"}
                    bg={"blue.500"}
                    borderRadius={"md"}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Flex>
    </Layout>
  );
};
export default Login;
