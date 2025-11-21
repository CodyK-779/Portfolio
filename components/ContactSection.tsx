import ContactHeader from "./ContactHeader";
import ContactLeft from "./ContactLeft";
import ContactForm from "./contact-form";

const ContactSection = () => {
  return (
    <section id="contact" className="max-container min-h-screen mt-60 mb-20">
      {/* Header */}
      <ContactHeader />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - Professional Info */}
        <ContactLeft />

        {/* Right Column - Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
