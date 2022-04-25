import RequestName from "./RequestName";
import RequestStatus from "./RequestStatus";
import { signUserOut } from "../firebase/signUserOut";
import SetTheme from "./SetTheme";

export default function Settings() {
  return (
    <div className="settings">
      <br />
      <RequestName />
      <RequestStatus />
      <br />
      <SetTheme />
      <br />
      <button onClick={signUserOut}>Sign Out</button>
    </div>
  );
}
