import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignInModal = ({ modalOpen, toggleModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTermsAgreedChange = () => {
    setTermsAgreed(!termsAgreed);
  };

  const handleSignIn = () => {
    // Perform your sign-in logic here
    // You can access the email, password, and termsAgreed states here
    // Remember to handle validation and any API requests as needed
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Terms Agreed:", termsAgreed);

    // Close the modal
    toggleModal();
  };

  const handleCloseModal = () => {
    toggleModal();
  };

  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-button" onClick={handleCloseModal}>
            X
          </button>
          <h2>CatsEzy</h2>
          <p>Welcome To CatsEzy</p>
          <p>Login to your account - share your adorable cat video</p>
        </div>
        <div className="modal-body">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {showPassword ? (
              <AiOutlineEye onClick={togglePasswordVisibility} />
            ) : (
              <AiOutlineEyeInvisible onClick={togglePasswordVisibility} />
            )}
          </div>
          <label>
            <input
              type="checkbox"
              checked={termsAgreed}
              onChange={handleTermsAgreedChange}
            />
            Agreed to terms and conditions
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={handleSignIn}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
