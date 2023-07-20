import './globals.css';
import { Mulish } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import ReduxProvider from './blogapi/redux/provider';
const mulish = Mulish({ subsets: ['latin'] });


export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={ mulish.className }>
                <ReduxProvider>{ children }</ReduxProvider>
                <Analytics />
            </body>
        </html>
    );
}
