import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface TransitionLockProps {
  children: React.ReactNode;
}

export function TransitionLock({ children }: TransitionLockProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState<string | null>(null);
  const navigate = useNavigate();

  const startTransition = (path: string) => {
    setTargetPath(path);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setIsTransitioning(false);
      navigate(path);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { startTransition });
        }
        return child;
      })}
    </>
  );
}
