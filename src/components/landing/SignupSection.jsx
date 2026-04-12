import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Check, Loader2, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const GOAL = 500;

export default function SignupSection() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: signups = [] } = useQuery({
    queryKey: ['earlybird-count'],
    queryFn: () => base44.entities.EarlyBirdSignup.list(),
    initialData: [],
  });

  const signupMutation = useMutation({
    mutationFn: async (data) => {
      const signup = await base44.entities.EarlyBirdSignup.create(data);
      const emailBody = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0A0A0A;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#141414;border:1px solid #292929;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="background:#0A0A0A;padding:32px 40px;border-bottom:1px solid #292929;text-align:center;">
            <img src="https://media.base44.com/images/public/69bce5cb012b9c997937b65e/d6fd69fe3_image.png" width="120" alt="RIFT" style="display:block;margin:0 auto;" />
            <p style="margin:8px 0 0;color:#808080;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;">Rapid Integrated Fiat Terminal</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 8px;color:#808080;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">Early Bird Confirmed</p>
            <h1 style="margin:0 0 24px;color:#F5F5F5;font-size:28px;font-weight:700;">You're on the list, ${data.name}.</h1>
            <p style="margin:0 0 24px;color:#808080;font-size:15px;line-height:1.7;">Thank you for joining the RIFT Early Bird waitlist. You've locked in your <strong style="color:#F5F5F5;">25% discount</strong> — reserved exclusively for founding members.</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0A0A;border:1px solid #292929;border-radius:8px;margin-bottom:24px;">
              <tr><td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="color:#808080;font-size:13px;padding-bottom:10px;">Machines reserved</td>
                    <td align="right" style="color:#F5F5F5;font-size:13px;font-weight:600;padding-bottom:10px;">${data.quantity}</td>
                  </tr>
                  <tr>
                    <td style="color:#808080;font-size:13px;padding-bottom:10px;">Planned location</td>
                    <td align="right" style="color:#F5F5F5;font-size:13px;font-weight:600;padding-bottom:10px;">${data.location || '—'}</td>
                  </tr>
                  <tr>
                    <td style="color:#808080;font-size:13px;">Early bird discount</td>
                    <td align="right" style="color:#F5F5F5;font-size:13px;font-weight:600;">25% OFF</td>
                  </tr>
                </table>
              </td></tr>
            </table>
            <p style="margin:0 0 32px;color:#808080;font-size:14px;line-height:1.7;">We'll email you the moment pre-orders open. The world's first Solana-native ATM is almost here.</p>
            <a href="https://x.com/riftatm" style="display:inline-block;background:#F5F5F5;color:#0A0A0A;font-size:13px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:6px;letter-spacing:0.05em;">FOLLOW US ON X →</a>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #292929;text-align:center;">
            <p style="margin:0 0 4px;color:#808080;font-size:12px;">Questions? <a href="mailto:contact@riftatm.com" style="color:#F5F5F5;">contact@riftatm.com</a></p>
            <p style="margin:0;color:#3d3d3d;font-size:11px;">© ${new Date().getFullYear()} RIFT. All rights reserved.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

      try {
        await base44.integrations.Core.SendEmail({
          to: data.email,
          subject: "You're on the RIFT Early Bird list ✓",
          body: emailBody
        });
      } catch (emailErr) {
        console.error('Email send failed:', emailErr);
        setEmailError(true);
      }
      return signup;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['earlybird-count'] });
      setSubmitted(true);
      setEmail('');
      setName('');
      setQuantity(1);
      setLocation('');
    },
  });

  const count = signups.length;
  const percentage = Math.min((count / GOAL) * 100, 100);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({ title: 'Please enter a valid email', variant: 'destructive' });
      return;
    }
    if (!name || name.trim().length < 2) {
      toast({ title: 'Please enter your name', variant: 'destructive' });
      return;
    }
    if (!quantity || quantity < 1) {
      toast({ title: 'Please select at least 1 machine', variant: 'destructive' });
      return;
    }
    signupMutation.mutate({ email, name, quantity, location });
  };

  return (
    <section id="signup" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-primary/3" />
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
            <Zap className="w-3 h-3 text-accent" />
            <span className="font-heading text-xs text-accent tracking-wider">EARLY BIRD — 25% OFF</span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Be First In Line
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Sign up now to get notified when pre-orders go live. Early birds get a 25% discount on the RIFT terminal.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-lg mx-auto mb-10">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12"
                />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12"
                />
              </div>
              <Input
                type="text"
                placeholder="ATM location — city, country or venue (e.g. Paris, France)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <Select value={quantity.toString()} onValueChange={(val) => setQuantity(parseInt(val))}>
                  <SelectTrigger className="bg-secondary border-border h-12">
                    <SelectValue placeholder="How many machines?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 machine</SelectItem>
                    <SelectItem value="2">2 machines</SelectItem>
                    <SelectItem value="3">3 machines</SelectItem>
                    <SelectItem value="5">5 machines</SelectItem>
                    <SelectItem value="10">10+ machines</SelectItem>
                  </SelectContent>
                </Select>
                <button
                  type="submit"
                  disabled={signupMutation.isPending}
                  className="bg-primary text-primary-foreground px-6 h-12 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {signupMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    'SECURE MY SPOT'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg px-6 py-4 max-w-md mx-auto mb-10"
            >
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">You're on the list! We'll notify you when pre-orders open.</span>
              </div>
              {emailError ? (
                <p className="font-body text-xs text-destructive">
                  We couldn't send the confirmation email. Please contact{' '}
                  <a href="mailto:atmrift@gmail.com" className="underline">atmrift@gmail.com</a> to confirm your spot.
                </p>
              ) : (
                <p className="font-body text-xs text-muted-foreground">
                  Confirmation email sent — check your <strong className="text-foreground">spam or promotions</strong> folder if you don't see it.
                </p>
              )}
            </motion.div>
          )}

          {/* Progress bar */}
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-baseline mb-2">
              <span className="font-heading text-sm text-foreground">{count} signed up</span>
              <span className="font-body text-xs text-muted-foreground">Goal: {GOAL}</span>
            </div>
            <div className="h-3 bg-secondary rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
            <p className="font-body text-xs text-muted-foreground mt-2">
              {GOAL - count > 0 ? `${GOAL - count} spots remaining for early bird pricing` : 'Goal reached! Pre-orders opening soon.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}