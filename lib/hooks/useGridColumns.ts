import { useMediaQuery } from 'react-responsive';

const useGridColumns = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 }); // 4 cols
  const isLG = useMediaQuery({ minWidth: 1024 }); // 3 cols
  const isMD = useMediaQuery({ minWidth: 768 }); // 2 cols

  return is2XL ? 3 : isLG ? 2 : isMD ? 1 : 1;
};

export default useGridColumns;
