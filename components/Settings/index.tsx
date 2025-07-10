'use client';
import clsx from 'clsx';
import Banner from '@/components/reusable/Banner';
import Themes from './Themes';
import Fonts from './Fonts';
import Behavior from './Behavior';
import {
  Joystick,
  Sparkles,
  CaseSensitive,
  Blocks,
  Palette
} from 'lucide-react';
import Sidebar from '@/components/reusable/Sidebar';

const Settings = () => {
  return (
    <div className='min-h-[100dvh] max-w-[100dvw] lg:pl-2 lg:pr-20 flex gap-4'>
      <Sidebar />
      <div
        className={clsx(
          'border-l-2 h-auto w-0',
          'border-[var(--border-color)]',
          'max-lg:hidden'
        )}
      />
      <div className={clsx('flex flex-col gap-8', 'w-full lg:w-4/5 lg:px-0 px-4 md:px-8 ', 'pb-20')}>
        <Banner />
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col gap-4'>
            <h3 className='flex flex-row text-3xl gap-2 items-center border-b-2 border-t-2 py-6 border-[var(--border-color)]'>
              <Joystick />
              <span>Behavior</span>
            </h3>
            <Behavior />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='flex flex-row text-3xl gap-2 items-center border-b-2 border-t-2 py-6 border-[var(--border-color)]'>
              <Palette size={28} />
              <span>Display</span>
            </h3>
            <h3 className='flex flex-row text-2xl gap-2 items-center pb-2 border-b-1 border-[var(--border-color)]'>
              <Sparkles />
              <span>Themes</span>
            </h3>
            <Themes />
          </div>
          <div className='flex flex-col gap-4'>
            <h3 className='flex flex-row text-2xl gap-2 items-end pb-2 border-b-1 border-[var(--border-color)]'>
              <CaseSensitive size={32} />
              <span>Fonts</span>
            </h3>
            <Fonts />
          </div>
          <div className='flex flex-col gap-4 mb-12'>
            <h3
              className={clsx(
                'flex flex-row text-3xl gap-2 items-end',
                'border-b-2 border-t-2 py-6 border-[var(--border-color)]'
              )}
            >
              <Blocks size={32} />
              <span>Coming Soon...</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
