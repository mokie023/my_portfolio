import { profile } from "../data/profile";

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? "compact" : ""}`}>
      {profile.socials.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
