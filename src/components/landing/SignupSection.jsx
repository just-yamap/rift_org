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
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: signups = [] } = useQuery({
    queryKey: ['earlybird-count'],
    queryFn: () => base44.entities.EarlyBirdSignup.list(),
    initialData: [],
  });

  const signupMutation = useMutation({
    mutationFn: (data) => base44.entities.EarlyBirdSignup.create(data),
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
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Be First In Line
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Sign up now to get notified when pre-orders go live. Early birds get exclusive pricing on the RIFT terminal.
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
              <p className="font-body text-xs text-muted-foreground">
                Confirmation email sent — check your <strong className="text-foreground">spam or promotions</strong> folder if you don't see it.
              </p>
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