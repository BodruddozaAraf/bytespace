"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { PasswordInput } from "@/components/ui/PasswordInput";

type RegisterValues = { fullName: string; email: string; password: string };

const initialValues: RegisterValues = { fullName: "", email: "", password: "" };

/** Minimum password length enforced by HTML validation (UI only, no backend). */
const PASSWORD_MIN_LENGTH = 8;

/**
 * Register form card content (Figma 47:362 → Content 47:363).
 * Column over the card height: [title block + fields + Continue] … [footer link].
 * UI only: native HTML validation, submit is prevented.
 */
export function RegisterForm() {
  const [values, setValues] = useState<RegisterValues>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-1 flex-col justify-between gap-12">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10" aria-labelledby="register-title">
        {/* Title block (47:365) */}
        <div className="flex flex-col">
          <p className="text-lg leading-[1.6] text-primary">Create an Account</p>
          <h2
            id="register-title"
            className="font-heading text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-ink sm:text-[44px]"
          >
            Welcome to ByteSpace
          </h2>
        </div>

        {/* Fields + button (47:368): 24px gaps, button right-aligned */}
        <div className="flex flex-col items-end gap-6">
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Jamie Davis"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="designer@example.com"
            autoComplete="email"
            inputMode="email"
            required
            value={values.email}
            onChange={handleChange}
          />
          <PasswordInput
            name="password"
            placeholder="********"
            autoComplete="new-password"
            required
            minLength={PASSWORD_MIN_LENGTH}
            title={`At least ${PASSWORD_MIN_LENGTH} characters`}
            value={values.password}
            onChange={handleChange}
          />
          <Button type="submit" variant="lime" size="md">
            Continue
          </Button>
        </div>
      </form>

      {/* Footer link (47:383) */}
      <p className="flex flex-wrap justify-center gap-1 text-center text-base leading-[1.6]">
        <span className="text-body-alt">Already have an account?</span>
        <Link
          href="/login"
          className="rounded-sm text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
