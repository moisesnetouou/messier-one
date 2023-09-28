import './../styles/globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';

const sora = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Messier One',
  description: 'Messier One, o amigo do Advogado',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>{children}</body>
    </html>
  );
}
