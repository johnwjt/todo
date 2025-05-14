import Navbar from "../../shared-components/Navbar";
import Hero from "./Hero";
import SignUp from "../AuthForm/SignUp";

import { useRef } from "react";

export default function HomePage() {
  const signUpRef = useRef(null);
  const handleScrollToSignUp = () => {
    signUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-linear-to-b from-black to-neutral-700 min-h-screen pb-20 ">
        <Navbar scrollToSignUpRef={handleScrollToSignUp} />
        <Hero />
        <SignUp signUpRef={signUpRef} />
      </div>
    </>
  );
}
