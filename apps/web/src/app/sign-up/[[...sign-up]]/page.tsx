"use client";

import SignUp from "@repo/auth/ui/sign-up";

export default function SignUpPage() {
  return (
    <div className="h-mnav relative grid w-full grow items-center px-4 sm:justify-center">
      <div className="absolute left-8 top-8">
        <h1 className="flex flex-col text-base font-black uppercase leading-4">
          The Starter
          <span className="text-brand-primary text-xs font-light">
            PixelsCortex
          </span>
        </h1>
      </div>
      <SignUp />
    </div>
  );
}
