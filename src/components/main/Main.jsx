import { Landing, Info, Error } from "../index";
import "./Main.css";

export function Main({ children }) {
  return <main className="main-container">{children}</main>;
}

Main.Info = (props) => <Info {...props} />;
Main.Landing = (props) => <Landing {...props} />;
Main.Error = (props) => <Error {...props} />;
