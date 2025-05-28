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
  Settings as SettingsIcon,
  Blocks,
  Palette
} from 'lucide-react';

const Settings = () => {
  return (
    <div className='flex flex-col max-w-[100dvw] min-h-[100dvh] px-4 md:px-20 gap-8'>
      <Banner
        subheading={
          <>
            <SettingsIcon size={28} className='' />
            <span>Preferences</span>
          </>
        }
      />
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
  );
};

export default Settings;
