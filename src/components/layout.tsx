import type { Metadata } from 'next';
import { Prompt, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-prompt',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Taejai Climate Resilience Catalogue 2026–2027 | Super El Niño',
  description:
    "Explore how Super El Niño could impact Thailand's communities, agriculture, public health and economy — and support projects building resilience on Taejai.com.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className={`${prompt.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-[#F8F9FA] text-[#183333] font-sans antialiased selection:bg-[#3B7A57] selection:text-white">
        {children}
      </body>
    </html>
  );
}