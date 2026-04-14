import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';
import { Input } from '@/components/ui/input';
import { MapPin, Loader2, Check } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';

const regions = [
  { emoji: "🇧🇷", label: "Brazil" },
  { emoji: "🇵🇹", label: "Portugal" },
  { emoji: "🇷🇸", label: "Serbia / Balkans" },
  { emoji: "🇬🇪", label: "Georgia" },
  { emoji: "🌍", label: "Other" },
];

export default function Waitlist() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data) => {
      await base44.entities.EarlyBirdSignup.create(data);
    },
    onSuccess: () => setSubmitted(true),
    onError: () => toast({ title: 'Something went wrong. Please try again.', variant: 'destructive' }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) { toast({ title: 'Please enter a valid email', variant: 'destructive' }); return; }
    if (!name.trim()) { toast({ title: 'Please enter your name', variant: 'destructive' }); return; }
    mutation.mutate({ name, email, location, quantity: 1 });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 px-6 max-w-2xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-12 text-center">
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">User Waitlist</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 leading-tight">
            Where should we open<br />the first Rift?
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Tell us your city. We're deciding our first deployment locations based on demand. Be the first to know when Rift arrives near you.
          </p>
        </motion.div>

        {/* Target regions */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {regions.map(r => (
            <button key={r.label} type="button" onClick={() => setLocation(r.label)} className={`flex items-center gap-2 border rounded-full px-4 py-2 font-heading text-xs font-semibold transition-colors ${location === r.label ? 'bg-foreground text-background border-foreground' : 'bg-card border-border text-foreground hover:border-primary/40'}`}>
              <span>{r.emoji}</span> {r.label}
            </button>
          ))}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <Input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12" />
            <Input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12" />
            <Input type="text" placeholder="Your city / country (e.g. São Paulo, Brazil)" value={location} onChange={e => setLocation(e.target.value)} className="bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-12" />
            <button type="submit" disabled={mutation.isPending} className="bg-foreground text-background h-12 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50">
              {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : 'JOIN THE WAITLIST →'}
            </button>
          </form>
        ) : (
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-card border border-border rounded-xl p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">You're on the list!</h2>
            <p className="font-body text-sm text-muted-foreground">We'll notify you when Rift arrives in your area. Follow us on <a href="https://x.com/riftatm" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">@riftatm</a> for updates.</p>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
}