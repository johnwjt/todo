import { useState } from "react";

export default function AuthForm({ form }) {
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (const value of form) initialState[value] = "";
    return initialState;
  });
  return (
    <form className="flex flex-col p-4 rounded-lg bg-white w-96 h-84 justify-center ">
      {form.map((field) => {
        return (
          <>
            <label htmlFor={field.label}>{field.label}</label>
            <input
              id={field.label}
              type={field.type}
              key={field.name}
              className="border border-black mb-4 p-2 rounded-sm"
              placeholder={field.placeholder}
              value={values[field.label]}
              onChange={(e) =>
                // This line updates the values state object by:
                // 1. Using spread operator (...values) to copy all existing key-value pairs
                // 2. Adding/updating a new key-value pair where:
                //    - The key is field.label (in square brackets for computed property name)
                //    - The value is the new input value from the event (e.target.value)
                setValues({ ...values, [field.label]: e.target.value })
              }
            />
          </>
        );
      })}
      <button className="text-black p-2 rounded-sm hover:bg-black hover:text-white border border-black">
        Create Account
      </button>
    </form>
  );
}
