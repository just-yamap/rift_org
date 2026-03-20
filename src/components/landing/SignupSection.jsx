import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Check, Loader2, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const GOAL = 500;

export default function SignupSection() {
  const [email, setEmail] = useState('');
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
    signupMutation.mutate({ email });
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12"
              />
              <button
                type="submit"
                disabled={signupMutation.isPending}
                className="bg-primary text-primary-foreground px-6 h-12 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {signupMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  'NOTIFY ME'
                )}
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center justify-center gap-3 bg-primary/10 border border-primary/20 rounded-lg px-6 py-4 max-w-md mx-auto mb-10"
            >
              <Check className="w-5 h-5 text-primary" />
              <span className="font-body text-foreground">You're on the list! We'll notify you when pre-orders open.</span>
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