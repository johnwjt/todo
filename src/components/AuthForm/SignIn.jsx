import AuthForm from ".";

export default function SignIn() {
  return (
    <AuthForm
      form={[
        {
          label: "Email / Username",
          type: "text",
          name: "username",
          placeholder: "Enter your username or email",
        },
        {
          label: "Password",
          type: "password",
          name: "password",
          placeholder: "Enter your password",
        },
      ]}
    />
  );
}
