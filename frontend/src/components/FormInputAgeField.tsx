import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputAgeFieldProps = {
  register: UseFormRegisterReturn;
  error?: string;
};

const FormInputAgeField = memo(
  ({ register, error }: FormInputAgeFieldProps) => {
    //
    ////UI
    return (
      <div>
        <div className="flex items-center gap-2">
          <p>Age:</p>
          <input
            type="number"
            min="0"
            {...register}
            className="h-8 w-[50px] rounded-full bg-grayBG pl-3 focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:focus:outline-orange-500"
          />
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

export default FormInputAgeField;
