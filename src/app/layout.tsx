import './globals.css';
// import { Inter } from 'next/font/google';
import { Mulish } from 'next/font/google';

const mulish = Mulish({ subsets: ['latin'] });

// const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={ mulish.className }>{ children }</body>
        </html>
    );
}
