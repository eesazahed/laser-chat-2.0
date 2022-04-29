import RequestName from "./RequestName";
import RequestStatus from "./RequestStatus";
import SetTheme from "./SetTheme";
import { auth } from "..firebase/config";
import { signOut } from "firebase/auth";

export default function Settings() {
  return (
    <div className="settings">
      <br />
      <RequestName />
      <RequestStatus />
      <br />
      <SetTheme />
      <br />
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  );
}
