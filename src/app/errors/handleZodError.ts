import { ZodError, ZodIssue } from "zod";
import { TErrrorSource } from "../interface/error";

const handelZodError = (err: ZodError) => {
  const errorSources: TErrrorSource = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handelZodError;
