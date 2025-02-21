import { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type FormInputTextProps = {
  id: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
};

const FormInputTextField = memo(
  ({ id, placeholder, register, error }: FormInputTextProps) => {
    //
    ////UI
    return (
      <div className="relative">
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          {...register}
          className={`peer h-[40px] w-[250px] rounded-full bg-grayBG pl-8 placeholder-transparent focus:outline-none focus:ring-1 focus:ring-black dark:text-black dark:focus:outline-orange-500 ${
            error ? 'border border-red-500' : ''
          }`}
        />
        <label
          htmlFor="username"
          className="absolute -top-[19px] left-7 text-[13px] text-black transition-all peer-placeholder-shown:left-[2rem] peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 dark:-top-[22px] dark:text-gray-400"
        >
          {placeholder}
        </label>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

export default FormInputTextField;
