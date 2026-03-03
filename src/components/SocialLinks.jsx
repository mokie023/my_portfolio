import { profile } from "../data/profile";

export default function SocialLinks({ compact = false }) {
  const links = profile.socials.filter(
    (link) => !link.url.includes("your-resume-link")
  );

  return (
    <div className={`social-links ${compact ? "compact" : ""}`}>
      {links.map((link) => (
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
