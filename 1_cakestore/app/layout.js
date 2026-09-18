

import { Inter } from 'next/font/google';
import './globals.css';
import { StateContext } from '../context/StateContext';
import { LayOut } from '../components';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Cake Store',
    description: 'Cake Store for portfolio',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StateContext>
            <LayOut>
                <Toaster />
                {children}
            </LayOut>
        </StateContext>
        </body>
        </html>
    );
}
