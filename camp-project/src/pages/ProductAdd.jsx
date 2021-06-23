import React from "react";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField,Button,Label } from "semantic-ui-react";
import KITextInput from "../utilities/customFormControls/KITextInput";

export default function ProductAdd() {
  const initialValues = {
    productName: "",
    unitPrice: 10,
  };
  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });
  return (
    <div>
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit={(values)=>{
          console.log(values);
      }}>
        <Form className="ui form">
            <KITextInput name="productName" placeholder="Ürün Adı"/>
            <KITextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
