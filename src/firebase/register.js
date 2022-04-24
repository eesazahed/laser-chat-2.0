import { auth } from "./config";
import { sendSignInLinkToEmail } from "firebase/auth";

export const handleSubmit = async (email) => {
  const actionCodeSettings = {
    url: "http://localhost:3000/",
    handleCodeInApp: true,
  };
  await sendSignInLinkToEmail(auth, email, actionCodeSettings);
  localStorage.setItem("emailForSignIn", email);
};
