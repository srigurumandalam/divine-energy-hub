
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  children?: React.ReactNode;
}

export default function AnimatedBackground({ 
  className, 
  intensity = 'medium',
  children 
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Create particles
    let particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    
    const getRandomColor = () => {
      const colors = [
        'rgba(155, 135, 245, ', // shakti-400
        'rgba(139, 92, 246, ',  // shakti-500
        'rgba(126, 105, 171, ', // shakti-600
        'rgba(110, 89, 165, ',  // shakti-700
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    
    const createParticles = () => {
      const particleCount = intensity === 'light' ? 50 : intensity === 'medium' ? 75 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2 + 0.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          color: getRandomColor(),
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
        
        // Connect particles that are close to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `${p.color}${p.opacity * (1 - distance / 100)})`;
            ctx.lineWidth = 0.2;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
        
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
    };
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };
    
    // Initialize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createParticles();
    animate();
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [intensity]);
  
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />
      {children}
    </div>
  );
}
