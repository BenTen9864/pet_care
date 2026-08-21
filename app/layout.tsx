import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://mao-day-pet-care.chiksiuho2776.chatgpt.site'),
  title: '毛日子 MAO DAY｜溫柔寵物洗護',
  description: '一對一、慢節奏的寵物洗護空間。溫和洗澡、造型美容與深層護理，讓毛孩安心享受每一次洗護。',
  openGraph: { title: '毛日子 MAO DAY｜溫柔寵物洗護', description: '洗得乾淨，更要被溫柔對待。', type: 'website', images: ['/og.png'] },
  twitter: { card: 'summary_large_image', title: '毛日子 MAO DAY｜溫柔寵物洗護', description: '洗得乾淨，更要被溫柔對待。', images: ['/og.png'] },
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-Hant"><body>{children}</body></html>}
