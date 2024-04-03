import { Error, Success, Info, Landing } from "../index";
import "./Main.css";

export function Main() {
  return (
    <main className="main-container">
      {/* <Error message="Sorry you don’t hold any Nebulas" /> */}
      {/* <Success nebulaCount={3} date="12/02/2024" /> */}
      {/* <Info nebulaCount={199} /> */}

      <Landing />
    </main>
  );
}
