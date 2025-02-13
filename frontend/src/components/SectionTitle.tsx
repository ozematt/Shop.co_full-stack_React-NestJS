type SectionTitleProps = {
  title: string;
  center?: boolean;
};

const SectionTitle = ({ title, center }: SectionTitleProps) => {
  //
  ////UI
  return (
    <h2
      className={`${center ? 'text-center' : null} font-integralCFBold text-[32px] max-md:leading-9 sm:text-5xl`}
    >
      {title}
    </h2>
  );
};

export default SectionTitle;
