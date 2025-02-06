import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Footer, Newsletter } from "../sections";
import { Button } from "./";
import { lock, email } from "../assets";
import { type SignUpSchema, signUpSchema } from "../lib/types";
import authenticate from "../api/queries/authorization";
import { AppDispatch, useAppDispatch } from "../redux/store";
import { useMutation } from "@tanstack/react-query";
import { getUsername } from "../lib/helpers";
import { setUsername } from "../redux/userSlice";

const SignUp = () => {
  //
  ////DATA
  const navigate = useNavigate();

  const dispatch: AppDispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const getAuth = useMutation({
    mutationFn: authenticate,
    onError: () => {
      setError("username", {
        type: "custom",
        message: "User already exist",
      });
    },
    onSuccess: (data, variables) => {
      clearErrors(["username"]);
      localStorage.setItem("token", data.token);
      const user = getUsername(variables.username);
      dispatch(setUsername(user));
      localStorage.setItem("user", user);
      reset(); //form fields reset
      navigate("/shop");
    },
  });

  //handle submit form data
  const onSubmit = (data: SignUpSchema) => {
    const dataToSend = {
      auth: "register",
      username: data.username,
      password: data.password,
    };
    getAuth.mutate(dataToSend);
  };

  ////UI
  return (
    <>
      <section className="max-container bg-grayBG px-4 sm:px-[100px] dark:bg-zinc-900">
        <div className="mx-auto flex w-full max-w-[400px] flex-col">
          <h2 className="pt-[60px] font-integralCFBold text-[32px] max-sm:leading-9 sm:pt-[100px] sm:text-5xl">
            Let's just <br /> Sign Up!
          </h2>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-[400px] space-y-4 pb-9 pt-8 sm:pb-[80px]"
          >
            <div className="relative w-full">
              <img
                src={email}
                alt="envelope"
                width={20}
                height={20}
                className="absolute left-6 top-[30%] opacity-60"
              />
              <input
                {...register("username")}
                type="text"
                placeholder="Enter your email"
                className="h-[48px] w-full rounded-full bg-white pl-[60px] focus:outline-none focus:ring-1 focus:ring-black max-sm:placeholder:text-[14px] dark:bg-zinc-600 dark:focus:ring-2 dark:focus:ring-orange-700"
              />
            </div>
            {errors.username && (
              <p className="pb-2 pl-5 leading-[1px] text-red-500">
                {errors.username.message}
              </p>
            )}

            <div className="relative w-full">
              <img
                src={lock}
                alt="lock"
                width={20}
                height={20}
                className="absolute left-6 top-[30%] opacity-60"
              />
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="h-[48px] w-full rounded-full bg-white pl-[60px] focus:outline-none focus:ring-1 focus:ring-black max-sm:placeholder:text-[14px] dark:bg-zinc-600 dark:focus:ring-2 dark:focus:ring-orange-700"
              />
            </div>
            {errors.password && (
              <p className="pb-2 pl-5 leading-[1px] text-red-500">
                {errors.password.message}
              </p>
            )}
            <div className="relative w-full">
              <img
                src={lock}
                alt="lock"
                width={20}
                height={20}
                className="absolute left-6 top-[30%] opacity-60"
              />
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="Confirm password"
                className="h-[48px] w-full rounded-full bg-white pl-[60px] focus:outline-none focus:ring-1 focus:ring-black max-sm:placeholder:text-[14px] dark:bg-zinc-600 dark:focus:ring-2 dark:focus:ring-orange-700"
              />
            </div>
            {errors.confirmPassword && (
              <p className="pb-2 pl-5 leading-[1px] text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}

            <Button type="submit">Sign up</Button>
          </form>
        </div>
      </section>
      <div className="max-container">
        {" "}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
