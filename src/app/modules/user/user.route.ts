import express from 'express';
import { createStudentValidationSchema } from './../student/student.validation';
import { UserControllers } from './user.controller';
import validateRequest from '../../middlwares/validRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
