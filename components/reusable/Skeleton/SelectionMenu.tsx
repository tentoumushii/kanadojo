const SelectionMenu = () => {
  return (
    <div className='flex flex-row justify-center max-w-[100dvw] min-h-[100dvh]'>
      <div className='pb-10 flex flex-col items-start md:justify-center gap-4 px-4 sm:w-3/4 lg:w-1/2 w-full'>
        {/* Banner skeleton */}
        <div className='w-full h-20 bg-[var(--border-color)] rounded-xl animate-pulse'></div>

        {/* Info skeleton */}
        <div className='w-full h-12 bg-[var(--border-color)] rounded-xl animate-pulse'></div>

        {/* Links grid skeleton */}
        <div className='w-full grid grid-cols-2 gap-4 flex-none'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='aspect-square md:aspect-auto md:h-16'>
              <div className='w-full h-full bg-[var(--border-color)] rounded-3xl animate-pulse'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionMenu;
