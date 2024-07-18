'use client';

import { useState } from 'react';
import Popover from './Popover';
import {useTranslations} from 'next-intl';
import Person from './icons/person';
import Email from './icons/email';
import Phone from './icons/phone';
import School from './icons/scholl';
import Terminal from './icons/terminal';
import Guide from './icons/guide';

const About: React.FC = () => {
  const t = useTranslations('About');


  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverImage, setPopoverImage] = useState('');

  const handleParagraphClick = (image: string) => {
    setPopoverImage(image);
    setPopoverVisible(true);
  };

  const closePopover = () => {
    setPopoverVisible(false);
    setPopoverImage('');
  };

  const courseImages: Record<string, string> = {
    'Node.js': '/node-certificado.jpg',
    'React.js': '/React-certificado.jpg',
    'React Native': '/MongoDB-certificado.jpg',
    'Angular': '/MongoDB-certificado.jpg',
    'JavaScript and TypeScript': '/MongoDB-certificado.jpg',
    'Database SQL, NoSQL': '/MongoDB-certificado.jpg',
    'MongoDB': '/MongoDB-certificado.jpg',
  };

  return (
    <section id="About" className="max-w-6xl mx-auto py-10 font-inter dark:text-white">
      <div className="flex justify-between">
        <div className="w-1/3">
          IMAGEM
        </div>
        <div className="w-2/3">
          <h3 className="text-green-500 font-semibold text-2xl">{t('h3')}?</h3>
          <h2 className="text-3xl font-semibold py-2">{t('h2')}</h2>
          <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quae, 
            vel et ea quo, repellendus doloremque odit, fuga suscipit iste possimus recusandae nisi? 
            Ad sapiente rerum accusamus vero voluptate ratione.</p>
          <div className="bg-black dark:bg-white w-full h-[2px] my-6"></div>
          <div className=''>
            <div className="grid grid-cols-2 gap-4">
              <p><span className="flex font-semibold text-blue-700 text-lg"><Person />{t('name')}:</span> <span>Lucas Oliveira Barragana</span></p>
              <p><span className="flex font-semibold text-blue-700 text-lg"><Terminal />{t('expirience')}:</span> <span>{t('time')}</span></p>
              <p><span className="flex font-semibold text-blue-700 text-lg"><Email />Email:</span> <span>lucasobarragana@gmail.com</span></p>
              <p><span className="flex font-semibold text-blue-700 text-lg"><Phone />{t('phone')}:</span><span>+55(53)991743979</span></p>
            </div>
            <div className="py-6">
              <p><span className="flex font-semibold text-blue-700 text-lg"><School />{t('degree')}:</span> <span>{t('degreeDescription')}</span></p>
              <div className="ml-4 text-sm">
                <p><span className="font-semibold">{t('institution')}: </span><span>{t('institutionDescription')}</span></p>
                <p><span className="font-semibold">{t('conclusion')}:</span> 06/2025</p>
              </div>
            </div>
            <div>
              <p className="flex font-semibold text-blue-700 text-lg"><Guide />{t('Courses')}: <span>{t('coursesAdd')}</span></p>
              <div className="grid grid-cols-2">
                {Object.keys(courseImages).map((course) => (
                  <p
                    key={course}
                    onClick={() => handleParagraphClick(courseImages[course])}
                    className="cursor-pointer italic"
                  >
                    - {course}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {popoverVisible && <Popover image={popoverImage} onClose={closePopover} />}
    </section>
  );
};

export default About;
