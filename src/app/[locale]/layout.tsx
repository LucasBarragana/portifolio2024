import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NavBar from '../components/Navbar';
import { ThemeProvider } from '../themeContext';

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
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className='bg-[#c8cef8] text-black dark:bg-gray-900 dark:text-white'>
              <NavBar />
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
