import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useCategoryClick = () => {
  //
  ////DATA
  const navigate = useNavigate();

  ////LOGIC
  const handleCategoryClick = useCallback(
    (category: string) => {
      navigate(`/shop/${category}`);
      window.scrollTo(0, 0);
    },
    [navigate],
  );

  return { handleCategoryClick };
};

export default useCategoryClick;
