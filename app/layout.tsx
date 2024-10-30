import '@/app/ui/global.css';
import { inter } from './ui/fonts';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard'
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
};

// export const experimental_ppr = true;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.className} antialiased`} lang="en">
      <body>{children}</body>
    </html>
  );
}
