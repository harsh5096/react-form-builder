import React from 'react';
import "../components/css/contact.css";

function Contact() {
  return (
    <div className="contact-agency">
      <div className="contact-agency-info">
        <h2 className="contact-agency-title">
          Let's Discuss Your <span className="highlight-green">Project</span>
        </h2>
        <p className="contact-agency-intro">
          Feel free to reach out for work, collaborations, or just to say hello! I'm always excited to work on new projects and opportunities.
        </p>
        <div className="contact-agency-details">
          <div className="contact-detail"><b>Email:</b> harshjoshijh3382565@gmail.com</div>
          <div className="contact-detail"><b>Phone:</b> +91 9548215889</div>
          <div className="contact-detail"><b>Location:</b> Uttarakhand, India</div>
          <div className="contact-detail"><b>LinkedIn:</b> linkedin.com/in/harsh-joshi-467796253</div>
          <div className="contact-detail"><b>GitHub:</b> github.com/harsh5096</div>
        </div>
        {/* Optional: Map */}
        <div className="contact-agency-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.9953023646112!2d79.49938122521097!3d29.19426522526465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09b32773d30e5%3A0xea2c41b42474626d!2sDewalchaur%20Rd%2C%20Uttarakhand%20263139!5e0!3m2!1sen!2sin!4v1668266608547!5m2!1sen!2sin" title="contact-map" loading="lazy"></iframe>
        </div>
      </div>
      <div className="contact-agency-form-wrapper">
        <form className="contact-agency-form" action="https://formspree.io/f/mwkzwelq" method="POST">
          <input type="text" name="username" placeholder="Your Name" autoComplete="off" required />
          <input type="email" name="email" placeholder="Your Email" autoComplete="off" required />
          <textarea name="desc" placeholder="Your Message" autoComplete="off" required></textarea>
          <button className="contact-agency-btn" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;



        





