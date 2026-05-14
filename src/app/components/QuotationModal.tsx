import { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotationModal({ isOpen, onClose }: QuotationModalProps) {
  const [clientInfo, setClientInfo] = useState({
    name: '',
    company: '',
    phone: '',
    projectDescription: ''
  });

  if (!isOpen) return null;

  const sendQuoteRequest = () => {
    if (!clientInfo.name) {
      toast.error('Please fill in your name');
      return;
    }

    // Build email body with client info
    let emailBody = `Hello Mtika Technologies,\n\nI would like to request a quotation for your services.\n\n`;
    
    emailBody += `CLIENT INFORMATION:\n`;
    emailBody += `Name: ${clientInfo.name}\n`;
    if (clientInfo.company) {
      emailBody += `Company: ${clientInfo.company}\n`;
    }
    if (clientInfo.phone) {
      emailBody += `Phone: ${clientInfo.phone}\n`;
    }
    
    if (clientInfo.projectDescription) {
      emailBody += `\nPROJECT DESCRIPTION:\n${clientInfo.projectDescription}\n`;
    } else {
      emailBody += `\nI am interested in learning more about your services and would like to discuss my project needs.\n`;
    }
    
    emailBody += `\nPlease contact me to discuss the details and provide a quotation.\n\n`;
    emailBody += `Thank you,\n${clientInfo.name}`;
    
    // Create mailto link
    const mailtoLink = `mailto:info@mtikatechnologies.com?subject=${encodeURIComponent('Quote Request')}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast.success('Opening your email client...');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary/20">
        <div className="flex items-center justify-between p-6 border-b border-primary/10 bg-gradient-to-r from-primary/5 to-accent/5">
          <h2 className="text-2xl font-bold text-foreground">
            Get Your <span className="text-primary">Quo</span><span className="text-accent">tation</span>
          </h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-primary/10">
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Client Information */}
          <Card className="border-primary/10 hover:border-accent/20 transition-all duration-300">
            <CardHeader>
              <CardTitle>Contact <span className="text-accent">Information</span></CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <Input
                  value={clientInfo.name}
                  onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                  placeholder="Your full name"
                  required
                  className="border-primary/20 focus:border-accent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    value={clientInfo.company}
                    onChange={(e) => setClientInfo({...clientInfo, company: e.target.value})}
                    placeholder="Your company name"
                    className="border-primary/20 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                    placeholder="Your phone number"
                    className="border-primary/20 focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Description</label>
                <Textarea
                  value={clientInfo.projectDescription}
                  onChange={(e) => setClientInfo({...clientInfo, projectDescription: e.target.value})}
                  placeholder="Describe your project requirements and what services you're interested in..."
                  rows={5}
                  className="border-primary/20 focus:border-accent"
                />
              </div>
            </CardContent>
          </Card>

          {/* Send Request Button */}
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
            <CardContent className="pt-6">
              <Button 
                onClick={sendQuoteRequest}
                className="w-full bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 shadow-lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Request Quote via Email
              </Button>
              <p className="text-sm text-muted-foreground text-center mt-4">
                We'll respond to your quote request within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
