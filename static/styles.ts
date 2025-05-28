import clsx from 'clsx';

export const cardBorderStyles = clsx(
  'rounded-xl bg-[var(--card-color)] border-[var(--border-color)]',
  'shadow-md'
);

export const buttonBorderStyles = clsx(
  'rounded-xl bg-[var(--card-color)] hover:cursor-pointer',
  'active:scale-95 md:active:scale-98 active:duration-250',
  'duration-225',
  'shadow-lg hover:shadow-xl transition-all ease-in-out'
);

export const miniButtonBorderStyles = clsx(
  'rounded-xl bg-[var(--background-color)] hover:cursor-pointer border-[var(--border-color)] border-1',
  'active:scale-95 md:active:scale-98 active:duration-250',
  'duration-225',
  'shadow-md hover:shadow-lg transition-all ease-in-out'
);
