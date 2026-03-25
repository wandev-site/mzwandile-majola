import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useTransitionNavigate() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const navigateWithTransition = (path: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
      navigate(path);
    }, 800);
  };

  return { isTransitioning, navigateWithTransition };
}
