import type { Metadata } from "next";
import { AuthShell } from "@/components/auth/AuthShell";

export const metadata: Metadata = { title: "Create an Account — ByteSpace" };

// Placeholder — replaced by the register agent.
export default function RegisterPage() {
  return (
    <AuthShell heading="Sign up and come in" description="Register form WIP">
      <p>Register form WIP</p>
    </AuthShell>
  );
}
