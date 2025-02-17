import { arrowLeft, arrowRight } from '../assets';
import { type PaginationBarProps } from '../lib/types';
import { PaginationButton, PaginationPageNumberButton } from '.';
import { usePagination } from '../lib/hooks';

const PaginationBar = ({ total, page }: PaginationBarProps) => {
  //
  ////DATA
  const {
    handlePrevious,
    handleNext,
    pageNumbers,
    pageNumber,
    handleSelectedPageNumber,
  } = usePagination(page, total);

  ////UI
  return (
    <div className="mt-[20px] flex justify-between">
      <PaginationButton
        onClick={handlePrevious}
        icon={arrowLeft}
        text="Previous"
      />

      <div className="mx-auto hidden space-x-2 md:block">
        {pageNumbers.map((number, index) => (
          <PaginationPageNumberButton
            key={index}
            onClick={() =>
              number !== '...' && handleSelectedPageNumber(Number(number))
            }
            number={number}
            pageNumber={pageNumber}
          />
        ))}
      </div>

      <PaginationButton onClick={handleNext} icon={arrowRight} text="Next" />
    </div>
  );
};

export default PaginationBar;
