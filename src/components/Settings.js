import RequestName from "./RequestName";
import RequestStatus from "./RequestStatus";
import { signUserOut } from "../firebase/signUserOut";
import SetTheme from "./SetTheme";

export default function Settings(props) {
  return (
    <div className="settings">
      <br />
      <RequestName user={props.user} />
      <RequestStatus user={props.user} />
      <SetTheme />
      <br />
      <button onClick={signUserOut}>Sign Out</button>
    </div>
  );
}
