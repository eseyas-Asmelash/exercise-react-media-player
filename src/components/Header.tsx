import { ReactElement } from "react";
import "./Header.css";

export function Header(): ReactElement {
  return (
    <header className="header container">
      <button className="play-button">
      <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <h2 className="logo-name">Playlist - Moody</h2>
      <button className="play-button">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
    </header>
  );
}

export default Header;