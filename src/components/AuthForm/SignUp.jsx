import AuthForm from ".";

export default function SignUp({ signUpRef }) {
  return (
    <div className="flex justify-center" ref={signUpRef}>
      <AuthForm
        form={[
          {
            label: "Email / Username",
            type: "text",
            name: "username",
            placeholder: "Enter your email",
          },
          {
            label: "Password",
            type: "password",
            name: "password",
            placeholder: "Enter your password",
          },
          {
            label: "Confirm Password",
            type: "password",
            name: "confirmPassword",
            placeholder: "Confirm your password",
          },
        ]}
      />
    </div>
  );
}
