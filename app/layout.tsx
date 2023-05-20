import Navbar from './components/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'WikiRocket',
  description: 'Nextjs Client Components Demo',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-slate-800`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
