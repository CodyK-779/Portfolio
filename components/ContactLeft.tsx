"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { contactMethods } from "./contactData";
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
        <h3 className="min-[400px]:text-2xl text-xl font-bold text-white mb-6">
          Connect With Me
        </h3>
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className="relative flex items-center min-[350px]:gap-3.5 gap-3 min-[425px]:p-4 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
          >
            <div
              className={`min-[425px]:p-3 p-2.5 min-[425px]:rounded-xl rounded-lg bg-gradient-to-r ${method.color} text-white`}
            >
              {method.icon}
            </div>
            <div className="flex-1">
              <div className="min-[425px]:text-base text-sm font-semibold text-white">
                {method.label}
              </div>
              <div className="text-neutral-300 font-medium min-[425px]:text-sm min-[350px]:text-[13px] text-xs">
                {method.value}
              </div>
            </div>
            <BorderBeam duration={8} size={100} />
          </motion.div>
        ))}
      </div>

      {/* Social Icons */}
      {/* <ContactSocials /> */}

      {/* Remote Work Ready */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl min-[425px]:px-4 min-[425px]:py-5 px-3 py-4 mt-6"
      >
        <div className="flex gap-3">
          <Globe className="size-6 text-green-400" />
          <div>
            <h3 className="min-[425px]:text-base text-sm font-semibold text-white">
              Currently Available
            </h3>
            <p className="text-green-400 min-[425px]:text-sm min-[350px]:text-[13px] text-xs mt-1">
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
