import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  name: string;
  provider: string;
  date?: string;
  credentialUrl?: string;
  skills?: string[];
}

interface CertificateModalProps {
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
}

const CertificateModal = ({ certificate, isOpen, onClose }: CertificateModalProps) => {
  if (!certificate) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card/95 backdrop-blur-xl border-primary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-xl">
            <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
              <Award className="h-6 w-6 text-white" />
            </div>
            <span className="text-foreground">{certificate.name}</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Building2 className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Issued by</p>
              <p className="font-medium text-foreground">{certificate.provider}</p>
            </div>
          </div>

          {certificate.date && (
            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Issue Date</p>
                <p className="font-medium text-foreground">{certificate.date}</p>
              </div>
            </div>
          )}

          {certificate.skills && certificate.skills.length > 0 && (
            <div className="pt-2">
              <p className="text-xs text-muted-foreground mb-2">Skills</p>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {certificate.credentialUrl && (
            <div className="pt-4">
              <Button
                variant="hero"
                className="w-full"
                onClick={() => window.open(certificate.credentialUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Credential
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CertificateModal;
