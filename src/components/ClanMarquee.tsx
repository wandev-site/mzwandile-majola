import { motion } from 'motion/react';
import { CLAN_NAMES } from '../data/portfolio';

export function ClanMarquee() {
  return (
    <div className="w-full overflow-hidden bg-primary/5 py-4 border-y border-white/5">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...CLAN_NAMES, ...CLAN_NAMES].map((name, i) => (
          <span key={i} className="text-sm font-medium text-primary/40 uppercase tracking-widest italic">
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
