import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import '../index.css';

const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseClicked, setMouseClicked] = useState(false); // New state for click effect
  const { cursorVariant } = useCursor(); // Get the current cursor variant from context
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const mouseDown = () => setMouseClicked(true);
    const mouseUp = () => setMouseClicked(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setCursorPosition(prev => ({
        x: lerp(prev.x, mousePosition.x, 0.18),
        y: lerp(prev.y, mousePosition.y, 0.18),
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [mousePosition]);

  const variants = {
    default: {
      x: cursorPosition.x - 16,
      y: cursorPosition.y - 16,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      scale: 1,
    },
    text: {
      height: 48,
      width: 48,
      x: cursorPosition.x - 24,
      y: cursorPosition.y - 24,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      scale: 1,
    },
    button: {
      height: 40,
      width: 40,
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      scale: 1.2, // Slightly larger for buttons
    },
    clicked: {
      height: 60,
      width: 60,
      x: cursorPosition.x - 30,
      y: cursorPosition.y - 30,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
      scale: 0.8, // Smaller on click, then springs back
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50"
      variants={variants}
      animate={mouseClicked ? 'clicked' : cursorVariant}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default CustomCursor;