import { memo } from 'react';

type SectionSubtitleProps = {
  title: string;
};

const SectionSubtitle = memo(({ title }: SectionSubtitleProps) => {
  //
  ////UI
  return (
    <h6 className="font-satoshi text-xl font-bold sm:text-2xl">{title}</h6>
  );
});

export default SectionSubtitle;
