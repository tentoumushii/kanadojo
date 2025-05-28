'use client';
import Banner from '@/components/reusable/Banner';
import Info from '@/components/reusable/Info';
// import N5NounsCloze from '@/static/cloze/n5/nouns.json'

const SentencesMenu = () => {
  return (
    <div className='flex flex-col gap-4 min-h-[100dvh] max-w-[100dvw] px-4 sm:px-8 md:px-20 lg:px-30 xl:px-40 2xl:px-60 pb-20'>
      <Banner subheading={`Sentences 文`} />
      <Info currentDojo='kanjiMenu' />
    </div>
  );
};

export default SentencesMenu;
