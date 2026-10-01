"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input, type InputProps } from "./Input";

type PasswordInputProps = Omit<InputProps, "type" | "endAdornment" | "label"> & { label?: string };

/** Password field with a show/hide toggle. */
export function PasswordInput({ label = "Password", ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Input
      label={label}
      type={visible ? "text" : "password"}
      autoComplete="current-password"
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
          className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface-muted hover:text-ink"
        >
          {visible ? <EyeOff className="size-5" aria-hidden /> : <Eye className="size-5" aria-hidden />}
        </button>
      }
      {...props}
    />
  );
}
