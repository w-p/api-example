import yup from "yup";

export const DefectSchema = yup.object({
  id: yup.string().required(),
  timestamp: yup.number().default(() => +new Date()),
  system: yup.string().required(),
  code: yup.number().required(),
  severity: yup.string().required(),
  error: yup.string().required(),
});

export type Defect = yup.InferType<typeof DefectSchema>;
