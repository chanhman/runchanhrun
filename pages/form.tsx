//
// Object structure
//
// {
//   "Date": "",
//   "Running Surface": "Pavement,Gravel,Track,Treadmill,Trail (soft),Trail (hard),Trail (mixed),Grass,Turf,Other (soft),Other (hard),Mixed",
//   "Tech": "",
//   "Time (min)": "",
//   "Miles": "",
//   "Vert (ft)": "",
//   "Fatigue Score": "1,2,3,4,5",
//   "Subjective Feedback": "",
//   "Injury / Soreness Info": "",
//   "Notes on Additional / Strength work": "",
// }
//

import { ChangeEventHandler, FocusEventHandler } from 'react'
import type { NextPage } from 'next'
import { useFormik } from 'formik'
import * as Yup from 'yup'

type FormGroupTypes = {
  handleBlur: FocusEventHandler<HTMLInputElement> | undefined
  handleChange: ChangeEventHandler<HTMLInputElement> | undefined
  id: string
  name: string
  values: string
}

const FormGroup = ({
  handleBlur,
  handleChange,
  id,
  name,
  values,
}: FormGroupTypes) => (
  <>
    <label htmlFor={id}>First Name</label>
    <input
      id={id}
      name={name}
      type="text"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values}
    />
  </>
)

const SignupForm: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormGroup
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        id="firstName"
        name="firstName"
        values={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <FormGroup
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        id="lastName"
        name="lastName"
        values={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <FormGroup
        handleBlur={formik.handleBlur}
        handleChange={formik.handleChange}
        id="email"
        name="email"
        values={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  )
}

export default SignupForm
