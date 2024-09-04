import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Reveal from "../components/ui/Reveal";
import Card from "../components/ui/Card";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EmailJsService,
          import.meta.env.VITE_EmailJsTemplate,
          formRef.current,
          import.meta.env.VITE_EmailJsId
        )
        .then(
          () => {
            setSuccess(true);
          },
          (error) => {
            setError(true);
            console.log(error);
          }
        );
    }
  };

  return (
    <Card className="card bg-neutral bg-clip-padding bg-opacity-60 border border-primary max-w-[950px]">
      <div className="card-body">
        <div className="textContainer">
          <Reveal delay="0">Let’s work together</Reveal>
          <div className="my-5">
            <Reveal delay="0.3">
              I am always open to discussing product design work or partnership
              opportunities
            </Reveal>
          </div>
        </div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-[20px] transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <Reveal delay="0.6" width="100%" padding="5px">
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              className="input input-bordered input-primary bg-transparent w-full"
            />
          </Reveal>
          <Reveal delay="0.9" width="100%" padding="5px">
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              className="input input-bordered input-primary bg-transparent w-full"
            />
          </Reveal>
          <Reveal delay="1.2" width="100%" padding="5px">
            <textarea
              rows={3}
              defaultValue="testing"
              placeholder="Message"
              name="message"
              className="textarea textarea-bordered textarea-primary bg-transparent w-full resize-none text-lg"
            />
          </Reveal>
          <Reveal delay="1.5">
            <button className="btn  btn-primary">Submit</button>
          </Reveal>
          <Reveal>{error && "Error"}</Reveal>
          <Reveal>{success && "Success"}</Reveal>
        </motion.form>
      </div>
    </Card>
  );
};

export default Contact;
