import './globals.css';
import { Mulish } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
const mulish = Mulish({ subsets: ['latin'] });


export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={ mulish.className }>
                { children }
                <Analytics />
            </body>
        </html>
    );
}
