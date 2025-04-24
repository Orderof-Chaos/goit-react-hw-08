import css from "./Layout.module.css";
import AppBar from "../appBar/AppBar";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}