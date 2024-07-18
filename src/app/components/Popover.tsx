import Image from 'next/image';
import { useEffect } from 'react';

interface PopoverProps {
  image: string;
  onClose: () => void;
}

const Popover: React.FC<PopoverProps> = ({ image, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest('.popover-content') === null) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="popover-content bg-white p-4 rounded shadow-lg">
        <Image src={image} alt="Course" width={800} height={800} className='w-[700px] h-auto'/>
      </div>
    </div>
  );
};

export default Popover;
