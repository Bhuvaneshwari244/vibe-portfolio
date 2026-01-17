import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-message", {
        body: formData,
      });

      if (error) throw error;

      setSubmitStatus("success");
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-primary-foreground/80">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-primary-foreground/80">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="subject" className="text-primary-foreground/80">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          required
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-primary-foreground/80">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={4}
          required
          className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-white/40 resize-none"
        />
      </div>
      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : submitStatus === "success" ? (
          <>
            <CheckCircle className="mr-2 h-5 w-5" />
            Sent!
          </>
        ) : submitStatus === "error" ? (
          <>
            <AlertCircle className="mr-2 h-5 w-5" />
            Try Again
          </>
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
