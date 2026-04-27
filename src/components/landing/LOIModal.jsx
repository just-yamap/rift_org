import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, FileText, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/components/ui/use-toast';

const SECTIONS = [
  { id: 'contact', label: 'Contact' },
  { id: 'company', label: 'Company' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'intent', label: 'Intent' },
  { id: 'sign', label: 'Sign' },
];

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-heading text-xs text-muted-foreground tracking-wider uppercase">
        {label}{required && <span className="text-destructive ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "bg-secondary border-border font-body text-foreground placeholder:text-muted-foreground h-11 text-sm";
const textareaCls = "bg-secondary border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground text-sm p-3 resize-none focus:outline-none focus:ring-1 focus:ring-ring w-full";

export default function LOIModal({ isOpen, onClose }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    // Contact
    full_name: '',
    email: '',
    phone: '',
    role: '',
    // Company
    company_name: '',
    company_type: '',
    country: '',
    website: '',
    // Deployment
    quantity: '1',
    location: '',
    venue_type: '',
    expected_monthly_volume: '',
    // Intent
    use_case: '',
    timeline: '',
    additional_notes: '',
    // Sign
    signature: '',
    date: new Date().toISOString().split('T')[0],
    agreed: false,
  });

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const mutation = useMutation({
    mutationFn: (data) => base44.entities.EarlyBirdSignup.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['earlybird-count'] });
      setSubmitted(true);
    },
    onError: () => {
      toast({ title: 'Submission failed. Please try again.', variant: 'destructive' });
    },
  });

  const validate = () => {
    if (step === 0 && (!form.full_name || !form.email || !form.email.includes('@'))) {
      toast({ title: 'Please fill in your name and a valid email.', variant: 'destructive' });
      return false;
    }
    if (step === 1 && !form.company_name) {
      toast({ title: 'Please enter your company name.', variant: 'destructive' });
      return false;
    }
    if (step === 2 && (!form.location || !form.quantity)) {
      toast({ title: 'Please fill in deployment location and quantity.', variant: 'destructive' });
      return false;
    }
    if (step === 4) {
      if (!form.signature || form.signature.trim().length < 2) {
        toast({ title: 'Please type your full name as signature.', variant: 'destructive' });
        return false;
      }
      if (!form.agreed) {
        toast({ title: 'Please agree to the terms to submit.', variant: 'destructive' });
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (!validate()) return;
    if (step < SECTIONS.length - 1) setStep(s => s + 1);
  };

  const handleSubmit = () => {
    if (!validate()) return;
    mutation.mutate({
      name: form.full_name,
      email: form.email,
      quantity: parseInt(form.quantity),
      location: form.location,
      // store extra fields as a serialized string in existing entity
    });
  };

  const reset = () => {
    setStep(0);
    setSubmitted(false);
    setForm({
      full_name: '', email: '', phone: '', role: '',
      company_name: '', company_type: '', country: '', website: '',
      quantity: '1', location: '', venue_type: '', expected_monthly_volume: '',
      use_case: '', timeline: '', additional_notes: '',
      signature: '', date: new Date().toISOString().split('T')[0], agreed: false,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-card border border-border rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-base font-bold text-foreground">Letter of Intent</h2>
                  <p className="font-body text-xs text-muted-foreground">RIFT Terminal — Operator Registration</p>
                </div>
              </div>
              <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!submitted ? (
              <>
                {/* Progress steps */}
                <div className="flex items-center gap-0 px-6 pt-5 pb-4 flex-shrink-0">
                  {SECTIONS.map((s, i) => (
                    <React.Fragment key={s.id}>
                      <button
                        onClick={() => i < step && setStep(i)}
                        className={`flex items-center gap-1.5 text-xs font-heading transition-colors ${
                          i === step ? 'text-foreground' : i < step ? 'text-primary cursor-pointer' : 'text-muted-foreground/40 cursor-default'
                        }`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                          i < step ? 'bg-primary text-primary-foreground' :
                          i === step ? 'bg-foreground text-background' :
                          'bg-secondary text-muted-foreground'
                        }`}>
                          {i < step ? <Check className="w-3 h-3" /> : i + 1}
                        </span>
                        <span className="hidden sm:block">{s.label}</span>
                      </button>
                      {i < SECTIONS.length - 1 && (
                        <div className={`flex-1 h-px mx-2 ${i < step ? 'bg-primary' : 'bg-border'}`} />
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Form content */}
                <div className="flex-1 overflow-y-auto px-6 pb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      {/* Step 0: Contact */}
                      {step === 0 && (
                        <>
                          <p className="font-body text-sm text-muted-foreground pb-1">Your personal contact information.</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Full Name" required>
                              <Input className={inputCls} placeholder="John Smith" value={form.full_name} onChange={e => set('full_name', e.target.value)} />
                            </Field>
                            <Field label="Email Address" required>
                              <Input className={inputCls} type="email" placeholder="john@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
                            </Field>
                            <Field label="Phone Number">
                              <Input className={inputCls} type="tel" placeholder="+33 6 12 34 56 78" value={form.phone} onChange={e => set('phone', e.target.value)} />
                            </Field>
                            <Field label="Your Role / Title">
                              <Input className={inputCls} placeholder="CEO, COO, Director..." value={form.role} onChange={e => set('role', e.target.value)} />
                            </Field>
                          </div>
                        </>
                      )}

                      {/* Step 1: Company */}
                      {step === 1 && (
                        <>
                          <p className="font-body text-sm text-muted-foreground pb-1">Tell us about your organisation.</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Company Name" required>
                              <Input className={inputCls} placeholder="Acme Corp Ltd." value={form.company_name} onChange={e => set('company_name', e.target.value)} />
                            </Field>
                            <Field label="Company Type">
                              <Select value={form.company_type} onValueChange={v => set('company_type', v)}>
                                <SelectTrigger className={`${inputCls} w-full`}>
                                  <SelectValue placeholder="Select type..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="llc">LLC / SARL</SelectItem>
                                  <SelectItem value="sa">SA / PLC</SelectItem>
                                  <SelectItem value="sole">Sole Trader</SelectItem>
                                  <SelectItem value="ngo">NGO / Association</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Country of Registration">
                              <Input className={inputCls} placeholder="France, Germany, UAE..." value={form.country} onChange={e => set('country', e.target.value)} />
                            </Field>
                            <Field label="Website">
                              <Input className={inputCls} placeholder="https://yourcompany.com" value={form.website} onChange={e => set('website', e.target.value)} />
                            </Field>
                          </div>
                        </>
                      )}

                      {/* Step 2: Deployment */}
                      {step === 2 && (
                        <>
                          <p className="font-body text-sm text-muted-foreground pb-1">Where and how many terminals do you intend to deploy?</p>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Number of Terminals" required>
                              <Select value={form.quantity} onValueChange={v => set('quantity', v)}>
                                <SelectTrigger className={`${inputCls} w-full`}>
                                  <SelectValue placeholder="Select quantity..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="1">1 terminal</SelectItem>
                                  <SelectItem value="2">2 terminals</SelectItem>
                                  <SelectItem value="3">3 terminals</SelectItem>
                                  <SelectItem value="5">5 terminals</SelectItem>
                                  <SelectItem value="10">10 terminals</SelectItem>
                                  <SelectItem value="20">20+ terminals</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Venue Type">
                              <Select value={form.venue_type} onValueChange={v => set('venue_type', v)}>
                                <SelectTrigger className={`${inputCls} w-full`}>
                                  <SelectValue placeholder="Select venue..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="mall">Shopping Mall</SelectItem>
                                  <SelectItem value="hotel">Hotel / Resort</SelectItem>
                                  <SelectItem value="airport">Airport / Transport Hub</SelectItem>
                                  <SelectItem value="office">Office Building</SelectItem>
                                  <SelectItem value="exchange">Crypto Exchange / OTC</SelectItem>
                                  <SelectItem value="convenience">Convenience Store / Supermarket</SelectItem>
                                  <SelectItem value="casino">Casino / Gaming</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Deployment Location" required>
                              <Input className={inputCls} placeholder="City, Country (e.g. Dubai, UAE)" value={form.location} onChange={e => set('location', e.target.value)} />
                            </Field>
                            <Field label="Expected Monthly Volume (EUR)">
                              <Select value={form.expected_monthly_volume} onValueChange={v => set('expected_monthly_volume', v)}>
                                <SelectTrigger className={`${inputCls} w-full`}>
                                  <SelectValue placeholder="Estimated volume..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="<10k">Under €10,000</SelectItem>
                                  <SelectItem value="10k-50k">€10,000 – €50,000</SelectItem>
                                  <SelectItem value="50k-200k">€50,000 – €200,000</SelectItem>
                                  <SelectItem value="200k-1m">€200,000 – €1,000,000</SelectItem>
                                  <SelectItem value=">1m">Over €1,000,000</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                          </div>
                        </>
                      )}

                      {/* Step 3: Intent */}
                      {step === 3 && (
                        <>
                          <p className="font-body text-sm text-muted-foreground pb-1">Describe your intended use and timeline.</p>
                          <div className="grid gap-4">
                            <Field label="Primary Use Case">
                              <textarea
                                className={textareaCls}
                                rows={3}
                                placeholder="Describe how you plan to use RIFT terminals — e.g. serving international hotel guests, providing crypto on/off-ramp at a trading venue..."
                                value={form.use_case}
                                onChange={e => set('use_case', e.target.value)}
                              />
                            </Field>
                            <Field label="Expected Deployment Timeline">
                              <Select value={form.timeline} onValueChange={v => set('timeline', v)}>
                                <SelectTrigger className={`${inputCls} w-full`}>
                                  <SelectValue placeholder="When do you plan to deploy?" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="asap">As soon as available</SelectItem>
                                  <SelectItem value="q3-2026">Q3 2026</SelectItem>
                                  <SelectItem value="q4-2026">Q4 2026</SelectItem>
                                  <SelectItem value="2027">2027</SelectItem>
                                  <SelectItem value="exploring">Just exploring</SelectItem>
                                </SelectContent>
                              </Select>
                            </Field>
                            <Field label="Additional Notes">
                              <textarea
                                className={textareaCls}
                                rows={3}
                                placeholder="Any specific requirements, questions, or context you'd like to share..."
                                value={form.additional_notes}
                                onChange={e => set('additional_notes', e.target.value)}
                              />
                            </Field>
                          </div>
                        </>
                      )}

                      {/* Step 4: Sign */}
                      {step === 4 && (
                        <>
                          <div className="bg-secondary/50 border border-border rounded-xl p-5 text-xs font-body text-muted-foreground leading-relaxed space-y-3 mb-4">
                            <p className="font-heading text-sm text-foreground font-semibold">Letter of Intent — Summary</p>
                            <p>This Letter of Intent ("LOI") is submitted by <strong className="text-foreground">{form.full_name}</strong>{form.company_name ? `, representing ${form.company_name}` : ''}, expressing a non-binding intent to purchase and operate <strong className="text-foreground">{form.quantity} RIFT terminal{parseInt(form.quantity) > 1 ? 's' : ''}</strong> at <strong className="text-foreground">{form.location || '—'}</strong>.</p>
                            <p>This LOI is non-binding and does not constitute a purchase order or contractual commitment. It serves as a formal expression of interest and will be used by RIFT to prioritise allocation, pricing, and deployment support.</p>
                            <p>Upon production readiness, RIFT will follow up with a formal purchase agreement. Pricing, terms, and delivery schedule will be confirmed at that stage.</p>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <Field label="Full Name (Signature)" required>
                              <Input
                                className={inputCls}
                                placeholder="Type your full name"
                                value={form.signature}
                                onChange={e => set('signature', e.target.value)}
                              />
                            </Field>
                            <Field label="Date">
                              <Input className={`${inputCls} text-muted-foreground`} value={form.date} readOnly />
                            </Field>
                          </div>
                          <label className="flex items-start gap-3 mt-4 cursor-pointer group">
                            <div
                              onClick={() => set('agreed', !form.agreed)}
                              className={`mt-0.5 w-5 h-5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
                                form.agreed ? 'bg-primary border-primary' : 'border-border bg-secondary'
                              }`}
                            >
                              {form.agreed && <Check className="w-3 h-3 text-primary-foreground" />}
                            </div>
                            <span className="font-body text-xs text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                              I confirm that the information provided is accurate. I understand this LOI is non-binding and acknowledge that RIFT will contact me to finalise a formal agreement.
                            </span>
                          </label>
                        </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-border flex-shrink-0">
                  <button
                    onClick={() => step > 0 ? setStep(s => s - 1) : onClose()}
                    className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {step === 0 ? 'Cancel' : '← Back'}
                  </button>
                  <div className="flex items-center gap-3">
                    <span className="font-body text-xs text-muted-foreground">{step + 1} / {SECTIONS.length}</span>
                    {step < SECTIONS.length - 1 ? (
                      <button
                        onClick={next}
                        className="bg-primary text-primary-foreground px-5 py-2 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={mutation.isPending}
                        className="bg-primary text-primary-foreground px-5 py-2 rounded font-heading text-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
                      >
                        {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                        Submit LOI
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                >
                  <Check className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">LOI Submitted</h3>
                <p className="font-body text-muted-foreground max-w-sm mb-2">
                  Thank you, <strong className="text-foreground">{form.full_name}</strong>. Your Letter of Intent has been received.
                </p>
                <p className="font-body text-sm text-muted-foreground max-w-sm mb-8">
                  Our team will review your application and contact you at <strong className="text-foreground">{form.email}</strong> to proceed with the next steps.
                </p>
                <button
                  onClick={reset}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors border border-border px-5 py-2 rounded"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}