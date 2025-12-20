import React, { useEffect, useRef, useState } from 'react';

export type Season = 'winter' | 'spring' | 'summer' | 'autumn';

interface SeasonEffectProps {
  isVisible: boolean;
  type?: Season; 
}

interface Particle {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  color: string;
  angle: number;
}

const getCurrentSeason = (): Season => {
  const month = new Date().getMonth(); 
  
  if (month === 11 || month === 0 || month === 1) return 'winter';
  
  
  if (month >= 2 && month <= 4) return 'spring';
  
  
  if (month >= 5 && month <= 7) return 'summer';
  
  
  return 'autumn';
};

const SeasonEffect: React.FC<SeasonEffectProps> = ({ isVisible, type }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Если type передали в пропсах — берем его, если нет — вычисляем сами
  const [activeSeason, setActiveSeason] = useState<Season>(type || getCurrentSeason());

  // Следим за изменением пропа type (если вдруг захотим переключить вручную)
  useEffect(() => {
    if (type) {
      setActiveSeason(type);
    } else {
      setActiveSeason(getCurrentSeason());
    }
  }, [type]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: Particle[] = [];
    
    const config = {
      winter: { count: 150, color: () => '#ffffff', size: 0.5 },
      spring: { count: 80, color: () => '#ffb7c5', size: 2 }, 
      summer: { count: 100, color: () => '#ffdb58', size: 1 }, 
      autumn: { count: 60, color: () => ['#d35400', '#e67e22', '#f1c40f'][Math.floor(Math.random() * 3)], size: 3 }
    };

    // Используем activeSeason вместо type
    const current = config[activeSeason];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < current.count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * current.size + 0.5,
        speed: Math.random() * 1.0 + 0.5,
        wind: Math.random() * 1.0 - 0.25,
        color: current.color(),
        angle: Math.random() * Math.PI * 2
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 0; 

        if (activeSeason === 'winter') {
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          p.y += p.speed;
          p.x += p.wind; 
        } 
        else if (activeSeason === 'spring' || activeSeason === 'autumn') {
          p.angle += 0.02;
          p.x += p.wind + Math.sin(p.angle) * 0.5; 
          p.y += p.speed;
          ctx.ellipse(p.x, p.y, p.radius, p.radius * 1.5, p.angle, 0, Math.PI * 2);
        } 
        else if (activeSeason === 'summer') {
          p.y += Math.sin(p.angle) * 0.2;
          p.x += Math.cos(p.angle) * 0.2 + p.wind * 0.1; 
          p.angle += 0.01;
          
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.shadowBlur = 5;
          ctx.shadowColor = p.color;
        }

        ctx.fill();

        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSeason]); 

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: isVisible ? 0.7 : 0,
        transition: 'opacity 1.5s ease-in-out',
      }}
    />
  );
};

export default SeasonEffect;