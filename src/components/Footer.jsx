import SocialLinks from "./SocialLinks";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p className="muted">
          {profile.name} · {new Date().getFullYear()}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
