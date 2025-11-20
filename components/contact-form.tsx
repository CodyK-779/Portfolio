"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
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
import { submitForm } from "./form/action";

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    submitForm(values);
  }

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
                        placeholder="Enter Your Name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors duration-300"
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
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors duration-300"
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
                        placeholder="How can i help you?"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-colors duration-300 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <RainbowButton
            type="submit"
            variant="outline"
            className="w-full flex items-center gap-2 min-[500px]:lg-rainbow-btn mt-8 group hover:scale-105 transition-transform duration-300 ease-out"
          >
            <Send className="size-4 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
            <p>Send Message</p>
          </RainbowButton>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
