'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const spaces = [
  { image: '/images/store/reception.png', label: '01 — RECEPTION', title: '前台接待区', description: '柔和灯光与开放动线，让毛孩从进门开始就慢慢放松。', alt: '中国高端宠物洗护店的前台接待区，设有弧形柜台、产品陈列与透明洗护空间' },
  { image: '/images/store/grooming-zone.png', label: '02 — GROOMING', title: '专业洗护区', description: '独立洗护台、专业设备与透明隔间，干净、安静，也看得见。', alt: '中国高端宠物洗护店的专业洗护区，设有宠物浴缸、美容台与玻璃隔间' },
  { image: '/images/store/lounge-retail.png', label: '03 — LOUNGE', title: '等候与选品区', description: '为毛孩和家长都留好位置，在舒适空间里安心等待。', alt: '中国高端宠物洗护店的等候与选品区，设有弧形座椅、宠物饮水台与洗护产品陈列' },
];

export default function EnvironmentCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % spaces.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) => setActive((current) => (current + direction + spaces.length) % spaces.length);

  return (
    <div className="environment-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} aria-roledescription="carousel" aria-label="店内环境">
      <div className="environment-viewport" aria-live="polite">
        {spaces.map((space, index) => <figure className={`environment-slide ${index === active ? 'is-active' : ''}`} key={space.title} aria-hidden={index !== active}><Image src={space.image} alt={index === active ? space.alt : ''} fill sizes="(max-width: 850px) 88vw, 86vw" priority={index === 0}/><figcaption><span>{space.label}</span><h3>{space.title}</h3><p>{space.description}</p></figcaption></figure>)}
        <div className="environment-arrows"><button type="button" onClick={() => move(-1)} aria-label="上一张店内环境">←</button><button type="button" onClick={() => move(1)} aria-label="下一张店内环境">→</button></div>
      </div>
      <div className="environment-dots" aria-label="选择店内环境图片">
        {spaces.map((space, index) => <button type="button" className={index === active ? 'is-active' : ''} onClick={() => setActive(index)} aria-label={`查看${space.title}`} aria-current={index === active ? 'true' : undefined} key={space.title}/>)}
      </div>
    </div>
  );
}
