import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-body' 
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-heading' 
});

export const metadata: Metadata = {
  title: 'Your Name - Creative Developer',
  description: 'Full Stack Developer crafting digital experiences that blend art with technology',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'Portfolio'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      className={`${inter.variable} ${playfair.variable}`}
      style={{ overflowX: 'hidden', maxWidth: '100vw' }}
    >
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body 
        className="font-body"
        style={{ overflowX: 'hidden', maxWidth: '100vw' }}
      >
        {children}
      </body>
    </html>
  );
}
