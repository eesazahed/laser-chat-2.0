import { useState } from "react";
import { handleSubmit } from "../firebase/register";
import { signIn } from "../firebase/signIn";

export default function Register() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  var re =
    /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

  const register = () => {
    if (re.test(email)) {
      handleSubmit(email);
      setMessage(
        `An email has been sent to ${email}. Please go to your inbox to verify it.`
      );
    }
  };

  signIn();

  setInterval(() => setLoading(false), 3000);

  if (loading) {
    return (
      <div className="registeration">
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="registeration">
        <h1>Welcome</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button onClick={register}>Register</button>
        <br />
        {message}
      </div>
    );
  }
}
