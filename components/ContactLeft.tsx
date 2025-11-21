"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { contactMethods } from "./contactData";
import ContactSocials from "./ContactSocials";
import { BorderBeam } from "./ui/border-beam";

const ContactLeft = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Professional Status */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="relative flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <div
              className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white`}
            >
              {method.icon}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-white">{method.label}</div>
              <div className="text-neutral-300 font-medium text-sm">
                {method.value}
              </div>
            </div>
            <BorderBeam duration={8} size={100} />
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
      <ContactSocials />

      {/* Remote Work Ready */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl px-4 py-5 mt-6"
      >
        <div className="flex  gap-3">
          <Globe className="size-6 text-green-400" />
          <div>
            <h3 className="font-semibold text-white">Currently Available</h3>
            <p className="text-green-400 text-sm mt-1">
              Open to full-time remote positions across different timezones.
              Let's discuss how I can contribute to your team.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactLeft;
