import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const locations = [
  { name: 'Amsterdam, Netherlands', lat: 52.3676, lng: 4.9041, status: 'Live' },
  { name: 'Berlin, Germany', lat: 52.5200, lng: 13.4050, status: 'Live' },
  { name: 'Paris, France', lat: 48.8566, lng: 2.3522, status: 'Coming Soon' },
  { name: 'Lisbon, Portugal', lat: 38.7223, lng: -9.1393, status: 'Live' },
  { name: 'Barcelona, Spain', lat: 41.3851, lng: 2.1734, status: 'Coming Soon' },
  { name: 'Zurich, Switzerland', lat: 47.3769, lng: 8.5472, status: 'Live' },
  { name: 'London, UK', lat: 51.5074, lng: -0.1278, status: 'Coming Soon' },
  { name: 'Milan, Italy', lat: 45.4642, lng: 9.1900, status: 'Live' },
];

export default function MapSection() {
  const mapRef = useRef(null);

  return (
    <section id="locations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="font-heading text-xs text-primary tracking-wider">RIFT LOCATIONS</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Find Your Nearest<br />RIFT Terminal
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-xl">
            RIFT terminals are expanding across Europe. Find your nearest access point or check back soon for availability in your area.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-xl overflow-hidden h-96 lg:h-[500px] shadow-lg"
        >
          <MapContainer
            center={[51.5, 5]}
            zoom={4}
            className="w-full h-full"
            ref={mapRef}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker key={location.name} position={[location.lat, location.lng]}>
                <Popup className="custom-popup">
                  <div className="font-body text-sm">
                    <p className="font-semibold text-foreground">{location.name}</p>
                    <p className={`text-xs mt-1 ${location.status === 'Live' ? 'text-green-500' : 'text-yellow-500'}`}>
                      {location.status}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* Location list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {locations.map((location) => (
            <div key={location.name} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-heading text-sm font-semibold text-foreground">{location.name}</h3>
                <div className={`w-2 h-2 rounded-full ${location.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`} />
              </div>
              <p className={`font-body text-xs ${location.status === 'Live' ? 'text-green-500' : 'text-yellow-500'}`}>
                {location.status}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}