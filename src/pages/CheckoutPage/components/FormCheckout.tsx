import TextInput from "../../../utils/validation/TextInput";
import PhoneInput from "../../../utils/validation/PhoneInput";
import EmailInput from "../../../utils/validation/EmailInput";

export default function FormCheckout() {
  return (
    <>
      <h5 className="mb-4">Billing Details</h5>
      <div className="row">
        <div className="col-12 col-md-6">
          <TextInput
            type="text"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <TextInput
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <PhoneInput
            name="phone"
            placeholder="Phone Number"
            required
            pattern={/^01[0-2|5]{1}[0-9]{8}$/}
          />
        </div>
        <div className="col-12 col-md-6">
          <EmailInput
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <TextInput
            type="text"
            name="country"
            placeholder="Country / Region"
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <TextInput
            type="text"
            name="town"
            placeholder="Town / City"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <TextInput type="text" name="state" placeholder="State" required />
        </div>
        <div className="col-12 col-md-6">
          <TextInput type="text" name="zip" placeholder="ZIP" required />
        </div>
      </div>
      <div className="row">
        <div className="col-12 inputBox">
          <TextInput type="text" name="notes" placeholder="Order Notes" />
        </div>
      </div>
    </>
  );
}
