'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../themeContext';

export default function NavBar() {
  const t = useTranslations('NavBar');
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <header className="max-w-6xl mx-auto font-inter">
      <nav className="flex justify-between align-center items-center py-4 px-10 xl:px-0 font-semibold text-medium">
        <div className='w-12 h-12 rounded-full relative overflow-hidden'>
          <Image src="/perfil.jpg" alt='foto' layout='fill' objectFit='cover' />
        </div>
        <div className=" hidden lg:block space-x-10">
          <Link href="/#hero" className='hover:text-blue-700'>{t('home')}</Link>
          <Link href="/#About" className='hover:text-blue-700'>{t('about')}</Link>
          <Link href="/#Services" className='hover:text-blue-700'>{t('services')}</Link>
          <Link href="/#Projects" className='hover:text-blue-700'>{t('projects')}</Link>
          <Link href="/#Contact" className='hover:text-blue-700'>{t('contact')}</Link>
        </div>
        <div className="space-x-10 flex items-center">
          <Link href="/pt">
            <Image
              src="/portugues.png"
              alt="portugues"
              width={126}
              height={126}
              className="w-10 h-10"
            />
          </Link>
          <Link href="/en">
            <Image
              src="/ingles.png"
              alt="ingles"
              width={126}
              height={126}
              className="w-10 h-10"
            />
          </Link>
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 bg-gray-200 dark:bg-gray-800 rounded"
          >
            {isDarkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </nav>
    </header>
  );
}
