import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltOptions {
  max?: number;
  speed?: number;
  glare?: boolean;
  'max-glare'?: number;
}

type TiltDivElement = HTMLDivElement & {
  vanillaTilt?: {
    destroy: () => void;
  };
};

const useTilt = (options: TiltOptions) => {
  const tiltRef = useRef<TiltDivElement | null>(null);

  useEffect(() => {
    const node = tiltRef.current;
    if (node) {
      VanillaTilt.init(node, options);
    }

    // Cleanup function to destroy VanillaTilt instance on unmount
    return () => {
      if (node && node.vanillaTilt) {
        node.vanillaTilt.destroy();
      }
    };
  }, [options]);

  return tiltRef;
};

export default useTilt;
