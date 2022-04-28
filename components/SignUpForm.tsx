import { connect } from "react-redux";
import UserForm from "../components/UserForm";
import { setSignUpFormField } from "../store/user/actionCreators";

export interface IdentificationProps { }

type Props = IdentificationProps & MapStateToPropsTypes & MapDispatchToPropsTypes;

const SignUpForm = ({ getSignUpForm, setSignUpForm, getErrorMessages}: Props) => {

  return <>
    <UserForm
      formTitle='Cadastre-se'
      buttonTitle ='Cadastar'
      getters={getSignUpForm()}
      setters={setSignUpForm()}
      errorMessages={getErrorMessages()}
      submit={() => console.log('submit')}
    />
  </>
}

interface MapStateToPropsTypes {
  getSignUpForm: () => UserInterface,
  getErrorMessages: () => ValidationUserInterface,
}

interface MapDispatchToPropsTypes {
  setSignUpForm: () => ({
    name: (e: any) => void,
    email: (e: any) => void,
    password: (e: any) => void
  })
}

function mapStateToProps(state: any) {
  return {
    getSignUpForm: () => state.user.forms.signup,
    getErrorMessages: () => state.user.validations.signup,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setSignUpForm: () => ({
      name: (e: any) => dispatch(setSignUpFormField({ field: 'name', value: e.target.value })),
      email: (e: any) => dispatch(setSignUpFormField({ field: 'email', value: e.target.value })),
      password: (e: any) => dispatch(setSignUpFormField({ field: 'password', value: e.target.value }))
    }),
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (SignUpForm);
