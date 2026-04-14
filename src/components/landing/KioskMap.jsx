import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const LOCATIONS = [
  { city: 'Amsterdam', country: 'Netherlands', lat: 52.3676, lng: 4.9041, status: 'planned' },
  { city: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050, status: 'planned' },
  { city: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, status: 'planned' },
  { city: 'Barcelona', country: 'Spain', lat: 41.3851, lng: 2.1734, status: 'planned' },
  { city: 'Lisbon', country: 'Portugal', lat: 38.7223, lng: -9.1393, status: 'planned' },
  { city: 'Zurich', country: 'Switzerland', lat: 47.3769, lng: 8.5472, status: 'planned' },
  { city: 'Prague', country: 'Czech Republic', lat: 50.0755, lng: 14.4378, status: 'planned' },
  { city: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402, status: 'planned' },
];

export default function KioskMap() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const filteredLocations = LOCATIONS.filter(loc =>
    loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    loc.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Locations</span>
            <span className="font-heading text-xs bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-2.5 py-1">
              BETA
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Find a RIFT Kiosk
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            Planned kiosk locations across Europe. Full live map and real-time availability coming to the Seeker Connect app after 500 units shipped.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left: Search & List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Search city or country..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-secondary border-border pl-10 h-11"
                />
              </div>
            </div>

            {/* Locations List */}
            <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((loc, i) => (
                  <motion.button
                    key={loc.city}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setSelectedLocation(loc)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedLocation?.city === loc.city
                        ? 'bg-primary/10 border-primary/40'
                        : 'bg-card border-border hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-heading text-sm font-semibold text-foreground">{loc.city}</p>
                        <p className="font-body text-xs text-muted-foreground">{loc.country}</p>
                      </div>
                    </div>
                  </motion.button>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="font-body text-sm text-muted-foreground">No locations found</p>
                </div>
              )}
            </div>

            {/* Stats */}
            <div className="mt-8 pt-8 border-t border-border space-y-3">
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="font-body text-xs text-muted-foreground mb-1">Planned Locations</p>
                <p className="font-heading text-2xl font-bold text-foreground">{LOCATIONS.length}</p>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <p className="font-body text-xs text-orange-400 mb-1">Live Map Available</p>
                <p className="font-heading text-sm font-semibold text-foreground">After 500 units shipped</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gradient-to-br from-card to-secondary border border-border rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

              {/* Location Points */}
              <div className="relative w-full h-full flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
                  {/* Simplified EU map outline */}
                  <defs>
                    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                    </linearGradient>
                  </defs>

                  {/* Plotted locations */}
                  {LOCATIONS.map((loc) => {
                    const x = ((loc.lng + 10) / 20) * 100;
                    const y = ((65 - loc.lat) / 40) * 100;
                    const isSelected = selectedLocation?.city === loc.city;

                    return (
                      <g key={loc.city}>
                        {/* Pulse ring */}
                        {isSelected && (
                          <circle cx={`${x}%`} cy={`${y}%`} r="40" fill="none" stroke="rgba(var(--primary), 0.2)" strokeWidth="2">
                            <animate attributeName="r" from="40" to="60" dur="1.5s" repeatCount="indefinite" />
                            <animate attributeName="stroke-width" from="2" to="0" dur="1.5s" repeatCount="indefinite" />
                          </circle>
                        )}

                        {/* Main dot */}
                        <circle
                          cx={`${x}%`}
                          cy={`${y}%`}
                          r={isSelected ? '8' : '6'}
                          fill="hsl(var(--primary))"
                          opacity={isSelected ? '1' : '0.7'}
                        />

                        {/* Label */}
                        {isSelected && (
                          <text x={`${x}%`} y={`${y - 4}%`} textAnchor="middle" fontSize="12" fill="hsl(var(--foreground))" fontWeight="600">
                            {loc.city}
                          </text>
                        )}
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Beta Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/40 backdrop-blur-xs pointer-events-none">
                <div className="text-center">
                  <p className="font-heading text-xs tracking-widest uppercase text-muted-foreground mb-2">Beta Preview</p>
                  <p className="font-body text-sm text-muted-foreground max-w-xs">
                    Interactive map and live location data coming to Seeker Connect after launch
                  </p>
                </div>
              </div>
            </div>

            {/* Info below map */}
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading text-xs text-primary tracking-widest uppercase mb-2">Seeker Connect</p>
                <p className="font-body text-sm text-foreground">Find live kiosks, check real-time availability, and complete KYC before arrival.</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <p className="font-heading text-xs text-orange-400 tracking-widest uppercase mb-2">Coming Soon</p>
                <p className="font-body text-sm text-foreground">Full interactive map, real-time availability, and navigation features launching after 500 units shipped.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}