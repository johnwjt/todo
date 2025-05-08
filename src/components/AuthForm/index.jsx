import { useState } from "react";

export default function AuthForm({ form }) {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (const value of values) initialState[value] = "";
    return initialState;
  });
  return (
    <form>
      {form.map((field) => {
        <input
          type={field.type}
          key={field.name}
          placeholder={field.placeholder}
          value={values[field.label]}
          onChange={(e) =>
            setValues({ ...values, [field.label]: e.target.value })
          }
        />;
      })}
      <button>Hello</button>
    </form>
  );
}
