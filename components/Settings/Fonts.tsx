'use client';
import clsx from 'clsx';
import { useClick } from '@/lib/useAudio';
import useThemeStore from '@/store/useThemeStore';
import { buttonBorderStyles } from '@/static/styles';
import fonts from '@/static/fonts';

const Fonts = () => {
  const { playClick } = useClick();

  const currentFont = useThemeStore(state => state.font);
  const setFont = useThemeStore(state => state.setFont);

  return (
    <div className='flex flex-col gap-4'>
      <fieldset
        className={clsx('grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4')}
      >
        {fonts.map(fontObj => (
          <label
            key={fontObj.name}
            className={clsx(
              'flex justify-center items-center',
              buttonBorderStyles,
              'py-4 px-4'
            )}
            onClick={() => playClick()}
          >
            <input
              type='radio'
              name='selectedTheme'
              onChange={() => {
                setFont(fontObj.name);
              }}
              className='hidden'
            />
            <span
              className={clsx('text-center text-xl', fontObj.font.className)}
            >
              {fontObj.name === currentFont ? '\u2B24 ' : ''}
              {fontObj.name}
              {fontObj.name === 'Zen Maru Gothic' && ' (default)'}
              &nbsp;かな道場
            </span>
          </label>
        ))}
      </fieldset>
      <div className='flex flex-col gap-2'>
        <h4 className='text-xl'>Hiragana:</h4>
        <p className='text-3xl ' lang='ja'>
          {'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん'.slice(
            0,
            20
          )}
        </p>
        <h4 className='text-xl'>Katakana:</h4>
        <p className='text-3xl ' lang='ja'>
          {'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメもヤユヨラリルレロワヲン'.slice(
            0,
            20
          )}
        </p>
        <h4 className='text-xl'>Kanji:</h4>
        <p className='text-3xl ' lang='ja'>
          人日大小学 校生先円上下中外右左名前時分国
        </p>
        <h4 className='text-xl'>Sample sentence:</h4>
        <p className='text-3xl ' lang='ja'>
          人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利とを承認することは
        </p>
      </div>
    </div>
  );
};

export default Fonts;
