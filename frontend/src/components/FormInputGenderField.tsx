import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputGenderFieldProps = {
  register: UseFormRegisterReturn;
  error?: string;
};

const FormInputGenderField = ({
  register,
  error,
}: FormInputGenderFieldProps) => {
  //
  ////UI
  return (
    <div>
      <div className="flex items-center gap-3">
        {' '}
        <p>Gender:</p>
        <label className="flex cursor-pointer items-center">
          <input type="radio" value="M" {...register} className="peer hidden" />
          <div
            className={`relative grid h-[30px] w-[30px] place-items-center rounded-full text-black ring-1 ring-black ring-opacity-30 transition peer-checked:bg-grayBG peer-checked:ring-opacity-100 dark:text-white dark:ring-white dark:peer-checked:text-black ${
              error ? 'border border-red-500' : ''
            }`}
          >
            M
          </div>
        </label>
        <label className="flex cursor-pointer items-center">
          <input
            type="radio"
            value="F"
            {...register}
            className="peer sr-only"
          />
          <div
            className={`relative grid h-[30px] w-[30px] place-items-center rounded-full text-black ring-1 ring-black ring-opacity-30 transition peer-checked:bg-grayBG peer-checked:ring-opacity-100 dark:text-white dark:ring-white dark:peer-checked:text-black ${
              error ? 'border border-red-500' : ''
            }`}
          >
            F
          </div>
        </label>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormInputGenderField;
