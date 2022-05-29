import * as yup from "yup";

const xmlSchema = yup.object({
  body: yup.object({
    makeId: yup.number().required("Vehicle makeId is required!")
  }),
});
export default xmlSchema;