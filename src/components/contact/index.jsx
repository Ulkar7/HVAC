import "./style.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ContactUs = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validate = () => {
    let errors = {};
    // const phonePattern = /^\+99\d{10}$/;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.name) errors.name = "Name is required";
    // if (!formValues.phone || !phonePattern.test(formValues.phone))
    //   errors.phone = "Phone number is required";
    if (!formValues.email || !emailPattern.test(formValues.email))
      errors.email = "Valid email is required";
    if (!formValues.address) errors.address = "Address is required";
    if (!formValues.message) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        setErrors({});
        emailjs
          .sendForm("service_h0y27tw", "template_35mxjbl", form.current, {
            publicKey: "RXUJRPb3OS2mS1bXS",
          })
          .then(
            () => {
              toast.success("Message sent succesfully");
            },
            (error) => {
              console.log("FAILED...", error.text);
              toast.error("Error occured while sending message");
            }
          );

        // console.log("Form Submitted Successfully!", formValues);
      } else {
        setErrors(validationErrors);
      }
    } catch {
      toast.error("Error occured while sending message");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const form = useRef();

  return (
    <div className="contact" id="contact">
      <h1>Contact Us</h1>

      <form ref={form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone (+994 XX XXXXXXX)"
          value={formValues.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formValues.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <textarea
          name="message"
          placeholder="Message"
          value={formValues.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">{loading ? "Sending..." : "Send message"}</button>
      </form>
    </div>
  );
};

export default ContactUs;
