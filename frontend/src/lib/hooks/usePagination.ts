import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generatePagination } from '../helpers';

const usePagination = (page: number, total: number) => {
  //
  ////DATA
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(page); //local selected page number

  const items = Math.ceil(total / 9); //numbers of pages

  ////LOGIC
  const pageNumbers = generatePagination(page, items); // dynamically created table of

  const handleSelectedPageNumber = useCallback(
    (number: number) => {
      navigate(`?page=${number}`);
      setPageNumber(number);
    },
    [navigate, pageNumber],
  );

  const handlePrevious = useCallback(() => {
    const newPage = Math.max(pageNumber - 1, 1); //prevent exceeding the minimum number of pages
    setPageNumber(newPage); //set new page number in local state
    navigate(`?page=${newPage}`); // upload new page to url, so Shop component can use it
  }, [navigate, pageNumber]);

  const handleNext = useCallback(() => {
    const newPage = Math.min(pageNumber + 1, items); //prevent exceeding the maximum number of pages
    setPageNumber(newPage); //set new page number in local state
    navigate(`?page=${newPage}`); // upload new page to url, so Shop component can use it
  }, [navigate, pageNumber]);

  return {
    handlePrevious,
    handleNext,
    pageNumbers,
    pageNumber,
    handleSelectedPageNumber,
  };
};

export default usePagination;
