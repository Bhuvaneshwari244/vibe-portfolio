import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-foreground">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-foreground/50 to-primary-foreground mx-auto mb-4 rounded-full" />
          <p className="text-center text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="glass-card p-6 bg-card/10 backdrop-blur-xl border-white/10 hover:border-white/20 hover:bg-card/15 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 text-primary-foreground">Contact Information</h3>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:bhuvaneshwaritsms010@gmail.com"
                    className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-all group hover:translate-x-1"
                  >
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Email</p>
                      <p className="font-medium">bhuvaneshwaritsms010@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+919701473371"
                    className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-all group hover:translate-x-1"
                  >
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Phone</p>
                      <p className="font-medium">+91-9701473371</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-primary-foreground/80">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-primary-foreground/60">Location</p>
                      <p className="font-medium">Telangana, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-primary-foreground/60 mb-4">Follow me on</p>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Bhuvaneshwari244/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 hover:-rotate-6 transition-all duration-300 text-primary-foreground"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://in.linkedin.com/in/bhuvaneshwari-rebba-650800280"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-xl hover:bg-white/20 hover:scale-110 hover:rotate-6 transition-all duration-300 text-primary-foreground"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="glass-card p-6 bg-card/10 backdrop-blur-xl border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 text-primary-foreground">Send a Message</h3>
                <p className="text-primary-foreground/70 mb-6 text-sm">
                  Have a project in mind or want to collaborate? Drop me a message!
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`mt-16 pt-8 border-t border-white/10 text-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-primary-foreground/60 text-sm">
            © 2026 Bhuvaneshwari Rebba. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
