import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ExternalLink } from 'lucide-react';

const ASSETS = [
  { symbol: 'SOL', name: 'Solana', logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png', network: 'Solana', category: 'SPL' },
  { symbol: 'USDC', name: 'USD Coin', logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png', network: 'Solana', category: 'SPL' },
  { symbol: 'wBTC', name: 'Wrapped Bitcoin', logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png', network: 'Solana', category: 'Wrapped' },
  { symbol: 'wETH', name: 'Wrapped Ethereum', logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs/logo.png', network: 'Solana', category: 'Wrapped' },
  { symbol: 'BTC', name: 'Bitcoin', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bitcoin/info/logo.png', network: 'Bitcoin', category: 'Native', soon: true },
  { symbol: 'ETH', name: 'Ethereum', logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png', network: 'Ethereum', category: 'Native', soon: true },
];

const TOKEN_LIST_URL = 'https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json';

export default function SupportedAssets() {
  const [hoveredAsset, setHoveredAsset] = useState(null);
  const [splSearch, setSplSearch] = useState('');
  const [tokenList, setTokenList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loadingList, setLoadingList] = useState(false);
  const [listLoaded, setListLoaded] = useState(false);
  const [jupiterSearching, setJupiterSearching] = useState(false);
  const searchRef = useRef(null);
  const jupiterDebounceRef = useRef(null);

  // Lazy-load token list when user focuses the search box
  const loadTokenList = async () => {
    if (listLoaded || loadingList) return;
    setLoadingList(true);
    try {
      const res = await fetch(TOKEN_LIST_URL);
      const data = await res.json();
      setTokenList(data.tokens || []);
      setListLoaded(true);
    } catch (e) {
      console.error('Token list load failed', e);
    } finally {
      setLoadingList(false);
    }
  };

  // Fallback: fetch from Jupiter token search API
  const searchJupiter = async (q) => {
    setJupiterSearching(true);
    try {
      // Try by mint address first (exact)
      const mintRes = await fetch(`https://tokens.jup.ag/token/${q}`);
      if (mintRes.ok) {
        const t = await mintRes.json();
        setSearchResults([{ address: t.address, symbol: t.symbol, name: t.name, logoURI: t.logoURI }]);
        setJupiterSearching(false);
        return;
      }
      // Fallback: search by name/symbol
      const searchRes = await fetch(`https://tokens.jup.ag/tokens/search?query=${encodeURIComponent(q)}&limit=8`);
      if (searchRes.ok) {
        const tokens = await searchRes.json();
        setSearchResults((tokens || []).slice(0, 8).map(t => ({
          address: t.address, symbol: t.symbol, name: t.name, logoURI: t.logoURI
        })));
      } else {
        setSearchResults([]);
      }
    } catch (e) {
      setSearchResults([]);
    } finally {
      setJupiterSearching(false);
    }
  };

  useEffect(() => {
    if (!splSearch.trim()) {
      setSearchResults([]);
      return;
    }
    const q = splSearch.trim().toLowerCase();

    // Search local list first
    const localResults = tokenList
      .filter(t =>
        t.symbol?.toLowerCase().includes(q) ||
        t.name?.toLowerCase().includes(q) ||
        t.address?.toLowerCase().includes(q)
      )
      .slice(0, 8);

    if (localResults.length > 0) {
      setSearchResults(localResults);
      return;
    }

    // If local list has no results, fall back to Jupiter API (debounced)
    if (listLoaded) {
      clearTimeout(jupiterDebounceRef.current);
      jupiterDebounceRef.current = setTimeout(() => searchJupiter(splSearch.trim()), 400);
    }
  }, [splSearch, tokenList, listLoaded]);

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-heading text-xs text-muted-foreground tracking-widest uppercase">Supported</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Trade Everything
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl text-lg">
            Buy and sell SOL, wrapped assets, and native chains — or search any verified SPL token.
          </p>
        </motion.div>

        {/* Assets Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {ASSETS.map((asset, i) => (
            <motion.div
              key={asset.symbol}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onMouseEnter={() => setHoveredAsset(asset.symbol)}
              onMouseLeave={() => setHoveredAsset(null)}
              className="relative"
            >
              <motion.div
                className={`relative w-full aspect-square rounded-xl border transition-all cursor-pointer flex flex-col items-center justify-center ${
                  hoveredAsset === asset.symbol
                    ? 'bg-primary/10 border-primary/40 shadow-lg'
                    : 'bg-card border-border hover:border-primary/20'
                } ${asset.soon ? 'opacity-60' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {/* Logo */}
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img
                    src={asset.logo}
                    alt={asset.symbol}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Symbol */}
                <p className="font-heading text-sm font-bold text-foreground text-center">
                  {asset.symbol}
                </p>

                {/* Soon Badge */}
                {asset.soon && (
                  <span className="absolute top-2 right-2 bg-orange-500/20 text-orange-400 text-xs font-semibold px-2 py-1 rounded-full">
                    BETA
                  </span>
                )}

                {/* Hover Info */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    hoveredAsset === asset.symbol
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 8 }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 rounded-xl bg-background/95 backdrop-blur-sm border border-primary/30 flex flex-col items-center justify-center p-3 pointer-events-none"
                >
                  <p className="font-heading text-xs font-semibold text-foreground text-center mb-1">
                    {asset.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground text-center">
                    {asset.network}
                  </p>
                  <div className="mt-2 pt-2 border-t border-border/50 w-full text-center">
                    <span className={`font-heading text-xs font-bold ${
                      asset.category === 'SPL' ? 'text-primary' :
                      asset.category === 'Wrapped' ? 'text-accent' :
                      'text-orange-400'
                    }`}>
                      {asset.category}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom SPL search */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-xl p-6 max-w-2xl"
        >
          <p className="font-heading text-xs text-muted-foreground tracking-widest uppercase mb-3">Any SPL Token</p>
          <p className="font-body text-sm text-muted-foreground mb-4">
            Don't see your token? Search any verified SPL token by name or mint address. If it has sufficient liquidity on Jupiter, you can buy it at the kiosk instantly.
          </p>
          <div className="relative" ref={searchRef}>
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
            <input
              type="text"
              placeholder="Search token name or mint address..."
              value={splSearch}
              onFocus={loadTokenList}
              onChange={(e) => setSplSearch(e.target.value)}
              className="w-full bg-secondary border border-border rounded-lg pl-10 pr-10 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            />
            {splSearch && (
              <button
                onClick={() => { setSplSearch(''); setSearchResults([]); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            {/* Dropdown results */}
            <AnimatePresence>
              {splSearch && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-xl overflow-hidden shadow-2xl z-50"
                >
                  {loadingList || jupiterSearching ? (
                    <div className="px-4 py-6 text-center font-body text-xs text-muted-foreground">
                      {loadingList ? 'Loading token list…' : 'Searching Jupiter…'}
                    </div>
                  ) : searchResults.length > 0 ? (
                    <ul>
                      {searchResults.map((token) => (
                        <li key={token.address}>
                          <a
                            href={`https://jup.ag/swap/USDC-${token.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors group"
                          >
                            {token.logoURI ? (
                              <img
                                src={token.logoURI}
                                alt={token.symbol}
                                className="w-7 h-7 rounded-full object-contain flex-shrink-0 bg-secondary"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                            ) : (
                              <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                                <span className="font-heading text-xs text-muted-foreground">{token.symbol?.[0]}</span>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-heading text-sm font-semibold text-foreground">{token.symbol}</p>
                              <p className="font-body text-xs text-muted-foreground truncate">{token.name}</p>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : listLoaded ? (
                    <div className="px-4 py-6 text-center font-body text-xs text-muted-foreground">
                      No verified tokens found for "{splSearch}"
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <p className="font-body text-xs text-muted-foreground mt-3">
            Powered by Solana token registry · 13,000+ verified tokens
          </p>
        </motion.div>
      </div>
    </section>
  );
}