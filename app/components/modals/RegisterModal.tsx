"use client";

import axios from "axios";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { toast } from "react-hot-toast";
import { Button } from "../Button";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("err");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4 text-center">
      <Heading title="Welcome to MARV" subtitle="Create your account" />
      <Input
        id="email"
        label="Email"
        required
        register={register}
        errors={errors}
        disabled={isLoading}
      />
      <Input
        id="name"
        label="Name"
        required
        register={register}
        errors={errors}
        disabled={isLoading}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        required
        register={register}
        errors={errors}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div
      className=" 
      flex flex-col gap-4 mt-3
      "
    >
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Github"
        icon={IoLogoGithub}
        onClick={() => {}}
      />
      <div
        className="
      text-neutral-500
      text-center
      mt-4
      font-light
      "
      >
        <div
          className="
        flex
        flex-row
        items-center
        gap-2
        justify-center
        "
        >
          <div>Already have an account?</div>
          <div
            onClick={registerModal.onClose}
            className="
          text-white
          cursor-pointer
          hover:underline
          "
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};
