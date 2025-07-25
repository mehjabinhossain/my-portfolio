import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-[1.05rem] md:text-[1.15rem]">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
<div className="space-y-10 text-left">
  <div>
    <h3 className="text-3xl font-bold mb-6">Contact Information</h3>

    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-lg md:text-xl">Email</h4>
          <a
            href="mailto:mehjabinhossaineva@gmail.com"
            className="text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
          >
            mehjabinhossaineva@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Phone className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-lg md:text-xl">Phone</h4>
          <a
            href="tel:+01521111289"
            className="text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
          >
            01521111289
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <MapPin className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-lg md:text-xl">Location</h4>
          <span className="text-base md:text-lg text-muted-foreground">
            Keranigonj, Dhaka, Bangladesh
          </span>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h3 className="text-3xl font-bold mb-8">Connect With Me</h3>


    <div className="flex space-x-9 text-2xl">
      <a href="https://www.linkedin.com/in/mehjabin-hossain/" target="_blank" rel="noreferrer">
        <Linkedin size={30}/>
      </a>
      <a href="https://www.instagram.com/yellow_minance_23/" target="_blank" rel="noreferrer">
        <Instagram size={30}/>
      </a>
      <a href="https://www.facebook.com/slashymehu/" target="_blank" rel="noreferrer">
        <Facebook size={30}/>
      </a>
    </div>
  </div>
</div>


          {/* Right: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-3xl font-bold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-base md:text-lg font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 text-base md:text-lg rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-base md:text-lg font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-base md:text-lg rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-base md:text-lg font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 text-base md:text-lg rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
