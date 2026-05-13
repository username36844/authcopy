"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Eye, EyeClosed, Lock, Mail } from "lucide-react";

import { AnimatedPage } from "@/components/layout/animated-page";
import { AuthCard } from "@/components/auth/auth-card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormField } from "@/components/ui/form-field";
import { SectionHeading } from "@/components/ui/section-heading";
import Image from "next/image";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (loading) return;

    try {
      setLoading(true);

      /*
        REAL API CALL HERE
      */

      await new Promise((resolve) => setTimeout(resolve, 900));

      setSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  function resetFlow() {
    setSuccess(false);
  }

  return (
    <AnimatedPage>
      <main className="relative flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-blue-100/40 blur-3xl rounded-full" />
        </div>

        {/* stable card container */}
        <div className="relative z-10 w-full max-w-md">
          <AuthCard className="overflow-hidden">
            <div className="relative">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.div
                    key="signup-form"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="space-y-8"
                  >
                    {/* logo */}
                    <div className="flex flex-col items-center gap-4 justify-center">
                      <div className="flex items-center gap-3">
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0.94,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="flex size-8 items-center justify-center mb-2"
                        >
                          <Image
                            src={"/symbol.svg"}
                            alt="logo"
                            height={100}
                            width={100}
                          />
                        </motion.div>
                      </div>
                      {/* heading */}
                      <SectionHeading
                        title="Create your workspace"
                        description="Manage clients, projects, and tasks from one focused workspace."
                      />
                    </div>

                    {/* form */}
                    <form onSubmit={onSubmit} className="space-y-5">
                      <Input
                        label="Work email"
                        placeholder="you@studio.com"
                        leftIcon={<Mail size={16} />}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                      />

                      <Input
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        leftIcon={<Lock size={16} />}
                        helper="Use at least 8 characters."
                        rightIcon={showPassword ? <Eye size={16} /> : <EyeClosed size={16} />}
                        onRightIconClick={() => setShowPassword((p) => !p)}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          })
                        }
                      />

                      <Button type="submit" loading={loading}>
                        {loading ? "Creating workspace..." : "Create workspace"}
                      </Button>
                    </form>

                    {/* footer */}
                    <div className="space-y-5 pt-2">
                      <div className="text-center text-sm text-slate-500">
                        Already have a workspace?{" "}
                        <Link
                          href="/login"
                          className="font-medium text-slate-900 transition-colors hover:text-blue-600"
                        >
                          Sign in
                        </Link>
                      </div>

                      <p className="text-center text-xs leading-6 text-slate-400">
                        By continuing, you agree to our Terms and Privacy
                        Policy.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup-success"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex flex-col justify-center"
                  >
                    <div className="space-y-8">
                      {/* success icon */}
                      <div className="flex justify-center">
                        <motion.div
                          initial={{
                            scale: 0.92,
                            opacity: 0,
                          }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 0.32,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="relative flex size-20 items-center justify-center rounded-full bg-blue-50"
                        >
                          <div className="absolute inset-0 rounded-full border border-blue-100" />

                          <Mail className="size-8 text-blue-600" />

                          <motion.div
                            initial={{
                              scale: 0,
                            }}
                            animate={{
                              scale: 1,
                            }}
                            transition={{
                              delay: 0.12,
                              duration: 0.2,
                            }}
                            className="absolute -bottom-1 -right-1 flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm"
                          >
                            <Check className="size-4" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* content */}
                      <div className="space-y-3 text-center">
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                          Check your inbox
                        </h1>

                        <p className="text-sm leading-6 text-slate-500">
                          We sent a verification link to{" "}
                          <span className="font-medium text-slate-700">
                            {formData.email}
                          </span>
                          .
                        </p>

                        <p className="text-sm leading-6 text-slate-400">
                          Verify your email to continue setting up your
                          workspace.
                        </p>
                      </div>

                      {/* actions */}
                      <div className="space-y-3">
                        <Button type="button">
                          <span className="flex items-center gap-2">
                            Open Gmail
                            <ArrowRight className="size-4" />
                          </span>
                        </Button>

                        <button
                          type="button"
                          onClick={resetFlow}
                          className="
                            w-full
                            rounded-full
                            px-4
                            py-3
                            text-sm
                            font-medium
                            text-slate-600
                            transition-all
                            duration-200
                            hover:bg-slate-100
                            hover:text-slate-900
                          "
                        >
                          Use another email
                        </button>

                        <div className="flex justify-center">
                          <Link
                            href="/resend-verification"
                            className="
                              text-sm
                              text-slate-500
                              transition-colors
                              hover:text-blue-600
                            "
                          >
                            Resend verification email
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AuthCard>
        </div>
      </main>
    </AnimatedPage>
  );
}
