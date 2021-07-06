import { Formik, Form } from "formik";
import React from "react";
import { Button, FormField } from "semantic-ui-react";
import * as Yup from "yup";
import PortfolioService from "../services/portfolioService";
import HRMSTextInput from "../utilities/customFormComp/HRMSTextInput";

export default function PortfolioSave() {
  const portfolioService = new PortfolioService();
  const initialValues = { intro: "", image: "" };

  const schema = Yup.object({
    intro: Yup.string().required("Giriş Yazısı Zorunlu"),
  });

  ///SAVE DATA
  const saveData = async (image) => {
    let data = new FormData();
    data.append("file", image);
    const res = await portfolioService.setImage(8, data);
    return console.log(res.data.data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        saveData(values.image);
      }}
    >
      {(formProps) => (
        <Form className="ui form">
          <HRMSTextInput name="intro" placeholder="Giriş Bilgisi" />

          <FormField name="image">
            <input
              type="file"
              name="image"
              onChange={(event) =>
                formProps.setFieldValue("image", event.target.files[0])
              }
            />
          </FormField>

          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      )}
    </Formik>
  );
}
