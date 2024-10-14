import { Link, useNavigate } from "react-router-dom";
import "../account.scss";
import { Form } from "@mongez/react-form";
import PasswordInput from "../../../utils/validation/PasswordInput";
import RadioGroup from "../../../utils/validation/RadioGroup";
import RadioInput from "../../../utils/validation/RadioInput";
import login from "/assets/account/login.png";
import EmailInput from "../../../utils/validation/EmailInput";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { toast, Toaster } from "react-hot-toast";

export default function LoginPage() {
  const { userInfo } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  const submitForm = ({ values }: any) => {
    let findEmail = userInfo.find((el) => el.email === values.email);
    if (values.typeUser === "user") {
      if (findEmail) {
        if (findEmail.password === values.password) {
          navigate("/");
          setTimeout(() => {
            toast.success(`Welcome back ${findEmail?.userName}`, {
              duration: 3000,
            });
          }, 1000);
        } else {
          toast.error(
            "Error: Password not correct. Please check and try again!",
            {
              duration: 3000,
            }
          );
        }
      } else {
        toast.error("Error: Email not found. Please check and try again!", {
          duration: 3000,
        });
      }
    } else {
      if (
        values.email === "menna@gmail.com" &&
        values.password === "29112004"
      ) {
        navigate("/admin");
        setTimeout(() => {
          toast.success(`Welcome Menna`, {
            duration: 3000,
          });
        }, 1000);
      } else {
        toast.error(
          "Error: Login admin is not correct. Please check and try again!",
          {
            duration: 3000,
          }
        );
      }
    }
  };
  return (
    <div className="container login">
      <Toaster />
      <div className="row align-items-center justify-content-center">
        <div className="image d-none d-md-block col-6">
          <img src={login} alt="Login" />
        </div>
        <div className="content col-8 col-md-6">
          <header>
            <h1>Login</h1>
            <span>Don't have an account? </span>
            <Link to={"/register"}>Create here</Link>
          </header>
          <Form onSubmit={submitForm}>
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
            <RadioGroup name="typeUser" defaultValue="user">
              <div className="radio">
                <RadioInput value="user" id="user">
                  Login as an user
                </RadioInput>
              </div>
              <div className="radio">
                <RadioInput value="admin" id="admin">
                  Login as an admin
                </RadioInput>
              </div>
            </RadioGroup>
            <button type="submit">Login</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
