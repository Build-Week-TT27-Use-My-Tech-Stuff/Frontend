import * as Yup from 'yup';

export default Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  password: Yup.string()
    .required('Password is required')
    .min(3, 'Password must be at least 3 characters long'),
  email: Yup.string().required('Email is required'),
  pwconfirm: Yup.string()
    .required('Please confirm your password')
    // .when("password",{
    //     is: password => (password && password.length > 0 ? true : false),
    //     then: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
    // }),
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  // .test('passwords-match', 'Passwords must match', function(value){
  //     return this.parent.password === value
  // }),
  // userType: Yup.string().oneOf(
  //   ['renter', 'owner'],
  //   'Please select a user type.'
  // ),
});
