import clsx from 'clsx';
import { IKanjiObj } from '@/store/useKanaKanjiStore';
import { buttonBorderStyles } from '@/static/styles';
import { CircleArrowRight } from 'lucide-react';

const AnswerSummary = ({
  payload,
}: // payloadType
{
  payload: IKanjiObj;
  // payloadType: string;
}) => {
  return (
    <div className="flex flex-col items-center w-full gap-2">
      <div
        key={payload.id}
        className={clsx(
          'flex flex-row justify-center items-center gap-4 p-4 w-full '
        )}
      >
        <div className="relative w-full max-w-[100px] aspect-square flex items-center justify-center">
          {/* 4-segment square background */}
          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 border-1 border-[var(--border-color)] rounded-xl bg-[var(--background-color)]">
            <div className="border-r border-b border-[var(--border-color)]"></div>
            <div className="border-b border-[var(--border-color)]"></div>
            <div className="border-r border-[var(--border-color)]"></div>
            <div className=""></div>
          </div>

          <p
            lang="ja"
            className="text-7xl pb-2 relative z-10"
          >
            {payload.kanjiChar}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex md:flex-row gap-2 w-full">
            <div
              className={clsx(
                'flex flex-row gap-2',
                (payload.onyomi[0] === '' || payload.onyomi.length === 0) &&
                  'hidden'
              )}
            >
              {payload.onyomi.map(onyomiReading => (
                <span
                  key={onyomiReading}
                  className={clsx(
                    'rounded-lg px-1.5 py-1 flex flex-row items-center text-sm md:text-base',
                    'bg-[var(--border-color)]',
                    'text-[var(--secondary-color)]'
                  )}
                >
                  {onyomiReading}
                </span>
              ))}
            </div>
            {/*HR Divider*/}
            <div
              className={clsx(
                'border-t-1 w-full',
                'md:border-l-1 md:h-auto md:border-t-0 md:w-0 md:mx-1',
                'border-[var(--border-color)]',
                payload.onyomi[0] === '' ||
                  ((payload.kunyomi[0] === '' ||
                    payload.onyomi.length === 0 ||
                    payload.kunyomi.length === 0) &&
                    'hidden')
              )}
            />{' '}
            {/*HR Divider*/}
            <div
              className={clsx(
                'flex flex-row gap-2',
                (payload.kunyomi[0] === '' || payload.kunyomi.length === 0) &&
                  'hidden'
              )}
            >
              {payload.kunyomi.map(kunyomiReading => (
                <span
                  key={kunyomiReading}
                  className={clsx(
                    'rounded-lg px-1.5 py-1 flex flex-row items-center text-sm md:text-base',
                    'bg-[var(--border-color)]',
                    'text-[var(--secondary-color)]'
                  )}
                >
                  {kunyomiReading}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xl md:text-2xl">
            {payload.fullDisplayMeanings.join(', ')}
          </p>
        </div>
      </div>

      <button
        // ref={buttonRef}
        className={clsx(
          'text-xl font-medium py-4 px-16 rounded-3xl transform transition duration-150 hover:scale-105 hover:cursor-pointer ',
          buttonBorderStyles,
          'flex flex-row items-end gap-2'
        )}
        // onClick={handleSkip}
      >
        <span>continue</span>
        <CircleArrowRight />
      </button>
    </div>
  );
};

export default AnswerSummary;
