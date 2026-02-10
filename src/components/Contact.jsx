import { useState } from "react";
import { profile } from "../data/profile";

const defaultForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(defaultForm);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
    setForm(defaultForm);
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <h2>Contact</h2>
          <p className="muted">{profile.contactNote}</p>
          <div className="contact-details">
            <span>{profile.links.email}</span>
            <span>{profile.location}</span>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={onSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Tafadzwa"
              value={form.name}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="user@gmail.com"
              value={form.email}
              onChange={onChange}
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={onChange}
              required
            />
          </label>
          <button className="button" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
