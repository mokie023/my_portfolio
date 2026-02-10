import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <div>
            <p className="brand-name">{profile.name}</p>
            <p className="brand-role">{profile.role}</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <SocialLinks compact />
      </div>
    </header>
  );
}
