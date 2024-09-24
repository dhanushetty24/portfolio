import { useState } from 'react';
import styles from '../styles/Contact.module.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Enter Your Message"
            value={formData.message}
            onChange={handleChange}
            className={styles.textarea}
            required
          />
        </div>
        <div className= {styles.alignButton}>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
