import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Must be 8-14 characters')
    .max(14, 'Must be 8-14 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
  nickname: Yup.string()
    .min(2, 'Must be 2-12 characters')
    .max(12, 'Must be 2-12 characters')
    .required('Required'),
  name: Yup.string()
    .min(1, 'Must be 1-12 characters')
    .max(12, 'Must be 1-12 characters')
    .matches(/^[가-힣]+$/, 'Only Korean characters are allowed')
    .required('Required'),
  birthday: Yup.string()
    .matches(/^(19|20)\d{2}\.(0[1-9]|1[012])\.(0[1-9]|[12][0-9]|3[01])$/, 'Invalid birthday format')
    .required('Required'),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      nickname: '',
      name: '',
      birthday: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Add signup logic here
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="email" type="text" placeholder="이메일" {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
      
      <input name="password" type="password" placeholder="비밀번호" {...formik.getFieldProps('password')} />
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <input name="confirmPassword" type="password" placeholder="비밀번호 확인" {...formik.getFieldProps('confirmPassword')} />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

      <input name="nickname" type="text" placeholder="닉네임" {...formik.getFieldProps('nickname')} />
      {formik.touched.nickname && formik.errors.nickname ? <div>{formik.errors.nickname}</div> : null}

      <input name="name" type="text" placeholder="성함" {...formik.getFieldProps('name')} />
      {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <input name="birthday" type="text" placeholder="YYYY.MM.DD" {...formik.getFieldProps('birthday')} />
      {formik.touched.birthday && formik.errors.birthday ? <div>{formik.errors.birthday}</div> : null}

      <input type="file" name="photo" onChange={(event) => {
        formik.setFieldValue("photo", event.currentTarget.files[0]);
      }} />

      <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Sign Up</button>
    </form>
  );
};

export default SignupForm;
