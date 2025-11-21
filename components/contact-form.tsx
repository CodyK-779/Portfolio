"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { RainbowButton } from "./ui/rainbow-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { Input } from "./ui/input";
import { formSchema } from "./form/schema";
import { useState, ViewTransition } from "react";
import AutoFadeMsg from "./AutoFadeMsg";

const ContactForm = () => {
  const [pending, setPending] = useState(false);
  const [results, setResults] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setPending(true);
    setResults(null);

    try {
      const { submitForm } = await import("./form/action");
      const result = await submitForm(values);
      setResults(result);

      if (results?.success) {
        form.reset();
      }
    } catch (error) {
      setResults({
        success: false,
        message: "An unexpected error occoured",
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6"
    >
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-300">
                      Your Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={pending}
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-300">
                      Your Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={pending}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors duration-300"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-neutral-300">
                      Your Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        disabled={pending}
                        placeholder="How can i help you?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors duration-300 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8">
            <RainbowButton
              type="submit"
              variant="outline"
              disabled={pending}
              className="w-full flex items-center gap-2 min-[500px]:lg-rainbow-btn group hover:scale-105 transition-transform duration-300 ease-out"
            >
              {pending ? (
                <>
                  <Loader2 className="animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <Send className="size-4 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
                  <p>Send Message</p>
                </>
              )}
            </RainbowButton>{" "}
            {results?.success && (
              <ViewTransition>
                <AutoFadeMsg message={results.message} duration={5000} />
              </ViewTransition>
            )}
            {results?.success === false && (
              <ViewTransition>
                <p className="text-center text-sm text-red-500">
                  An unexpected error occoured.
                </p>
              </ViewTransition>
            )}
          </div>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
