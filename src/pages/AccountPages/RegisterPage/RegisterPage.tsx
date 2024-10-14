import { Link, useNavigate } from "react-router-dom";
import "../account.scss";
import { Form } from "@mongez/react-form";
import TextInput from "../../../utils/validation/TextInput";
import PasswordInput from "../../../utils/validation/PasswordInput";
import EmailInput from "../../../utils/validation/EmailInput";
import CheckboxInput from "../../../utils/validation/CheckBoxInput";
import { useAppDispatch } from "../../../app/store";
import { addNewUser } from "../../../app/features/auth/authSlice";
import { toast, Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();
  const submitForm = ({ values }: any) => {
    let findEmail = userInfo.find((el) => el.email === values.email);
    if (findEmail) {
      toast.error("This email already registered!", {
        duration: 4000,
      });
    } else {
      dispatch(addNewUser(values));
      navigate("/");
      setTimeout(() => {
        toast.success(`Welcome ${values.userName} to our website 😍`, {
          duration: 3000,
        });
      }, 1000);
    }
  };
  return (
    <div className="container login">
      <Toaster />
      <div className="row align-items-center justify-content-center">
        <div className="content col-9 col-md-8">
          <header>
            <h1 className="title">Create an Account</h1>
            <span>Already have an account? </span>
            <Link className="link" to={`/login`}>
              Login
            </Link>
          </header>
          <Form onSubmit={submitForm}>
            <TextInput
              type="text"
              name="userName"
              placeholder="UserName"
              required
            />
            <EmailInput
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <PasswordInput
              type="password"
              name="password"
              placeholder="Password"
              minLength={8}
              required
            />
            <PasswordInput
              type="confirm-password"
              name="confirmPassword"
              placeholder="Confirm Password"
              match="password"
              minLength={8}
              required
            />
            <div className="policy">
              <CheckboxInput name="checkPolicy" id="policy" required />
              <label htmlFor="policy" className="check-policy">
                I agree to terms & Policy.
              </label>
            </div>
            <button type="submit">Register</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
