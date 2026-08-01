"use client";

import React from "react";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { isValidPhoneNumber } from "react-phone-number-input";
import axios from "axios";
import {
  X,
  User,
  Mail,
  IndianRupee,
  BadgeCheck,
  CheckCircle2,
  Loader2,
} from "lucide-react";

// Shadcn UI Imports
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "sonner";

/**
 * Form Schema Definition - All fields required
 */
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
  budget: z.string().min(1, "Please select your investment budget"),
});

type FormValues = z.infer<typeof formSchema>;

interface ClubTowersModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ClubTowersModal({
  open,
  onClose,
}: ClubTowersModalProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      budget: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: FormValues) {
    try {
      console.log("Submitting Lead:", data);

      const response = await axios.post("/api/send-lead", data);

      console.log("Response:", response.data);

      toast.success(
        "Details submitted successfully! We'll contact you shortly.",
      );
      form.reset();
      onClose();
    } catch (error) {
      console.error("Submission error:", error);

      // Handle axios error
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.error || "Failed to submit. Please try again.";
        toast.error(errorMessage);
      } else {
        toast.error("Failed to submit. Please try again.");
      }
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 overflow-hidden font-sans z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-white sm:rounded-2xl rounded-2xl overflow-hidden shadow-2xl m-0 sm:m-4 max-h-[100dvh] sm:max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 p-1.5 bg-white/90 hover:bg-white rounded-full shadow-lg transition-transform hover:rotate-90 active:scale-90"
              aria-label="Close modal"
            >
              <X size={16} className="text-gray-700" />
            </button>

            <div className="grid lg:grid-cols-2 overflow-y-auto max-h-[100dvh] sm:max-h-[90vh]">
              {/* LEFT SIDE - Marketing */}
              <div className="hidden lg:flex flex-col bg-gradient-to-br from-[#c89b66] to-[#a8865c] p-8 text-white relative">
                <div className="relative z-10 h-full flex flex-col">
                  <Image
                    src="/logo/Logo Horizontal.png"
                    alt="CCS Infratech Logo"
                    width={130}
                    height={45}
                    className="mb-6 brightness-0 invert"
                  />

                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-600 rounded-full mb-5 text-[9px] uppercase font-bold tracking-widest w-fit"
                  >
                    <BadgeCheck size={11} /> Booking Open - Limited Units
                  </motion.div>

                  <h2 className="text-2xl font-bold mb-3 leading-tight">
                    Premium 3 & 4 BHK Villas
                  </h2>
                  <p className="text-white/80 mb-6 text-base">
                    Lucknow's Fastest Selling Project
                  </p>

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/20">
                    <p className="text-[10px] text-white/70 uppercase tracking-widest mb-0.5">
                      Starting Price
                    </p>
                    <p className="text-3xl font-bold">₹1.67 Cr*</p>
                  </div>

                  <div className="mt-auto space-y-3">
                    <BenefitItem text="Instant Call Back Within 2 Minutes" />
                    <BenefitItem text="Free Site Visit with Cab Facility" />
                    <BenefitItem text="Unmatched Price Guarantee" />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Form */}
              <div className="p-6 lg:p-8 bg-gray-50 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Get Instant Details
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5">
                    Receive floor plans, pricing & exclusive offers.
                  </p>
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                  >
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                            <FormControl>
                              <Input
                                placeholder="Full Name*"
                                className="pl-9 h-10 text-sm rounded-lg bg-white text-black border-gray-200 focus-visible:ring-[#c89b66]"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    {/* Phone Input */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormControl className="w-full">
                            <PhoneInput
                              defaultCountry="IN"
                              placeholder="Mobile Number*"
                              className="h-10 text-sm font-sans"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                            <FormControl>
                              <Input
                                placeholder="Email Address*"
                                className="pl-9 h-10 text-sm rounded-lg text-black bg-white border-gray-200 focus-visible:ring-[#c89b66]"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    {/* Budget Select */}
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <div className="relative">
                            <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 z-10 pointer-events-none" />
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="pl-9 h-10 text-sm rounded-lg bg-white border-gray-200 focus:ring-[#c89b66]">
                                  <SelectValue placeholder="Investment Budget*" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="font-sans">
                                <SelectItem value="upto-75" className="text-sm">
                                  Up to ₹75 Lacs
                                </SelectItem>
                                <SelectItem value="75-100" className="text-sm">
                                  ₹75L - ₹1 Cr
                                </SelectItem>
                                <SelectItem value="100-150" className="text-sm">
                                  ₹1 - 1.5 Cr
                                </SelectItem>
                                <SelectItem
                                  value="150-plus"
                                  className="text-sm"
                                >
                                  ₹1.5 Cr+
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-10 rounded-lg bg-gradient-to-r from-[#c89b66] to-[#a8865c] hover:brightness-110 active:scale-[0.98] text-white font-bold text-base transition-all shadow-md shadow-[#c89b66]/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin mr-2 h-4 w-4" />
                          Processing...
                        </>
                      ) : (
                        "Submit Details"
                      )}
                    </Button>

                    <p className="text-[9px] text-gray-400 text-center leading-relaxed mt-3 px-3">
                      By clicking submit, you agree to our Terms and consent to
                      be contacted via Call, SMS, or WhatsApp.
                    </p>
                  </form>
                </Form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="bg-white/20 p-0.5 rounded-full">
        <CheckCircle2 size={13} className="text-white" />
      </div>
      <p className="text-xs font-medium text-white/90">{text}</p>
    </div>
  );
}
