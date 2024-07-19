import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from '../components/Navbar';
import { ThemeProvider } from '../themeContext';

import { Roboto, Londrina_Outline } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ['400','500','700','900'] });
const londrinaOutline = Londrina_Outline({ subsets: ["latin"], weight: "400" });

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();



  return (
    <html lang={locale}>
      <body className={`${roboto.className} ${londrinaOutline.className}`}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className='bg-[#c8cef8] text-black dark:bg-gray-900 dark:text-white'>
              <NavBar />
              <div className='w-full h-[2px] bg-gray-900 dark:bg-white'></div>
              {children}
              <footer className="border-t p-8 text-center text-black dark:text-white mt-16 font-inter">
                &copy; 2024 All rights reserved - Dev. Lucas Oliveira Barragana
              </footer>
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
