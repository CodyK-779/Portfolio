"use client";

import TiltedCard from "./ui/TiltedCard";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="order-1 lg:order-2 flex justify-center transition-all duration-300 ease-out"
    >
      <div className="lg:size-[425px] md:size-[400px] sm:size-[350px] min-[450px]:size-[250px] min-[400px]:size-[225px] size-[200px] aspect-square rounded-2xl shadow-[0_0_30px_rgba(139,92,246,0.4)]">
        <TiltedCard
          imageSrc="/test.jpeg"
          altText="Profile Picture"
          captionText="Khant Zaw Thein"
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={10}
          scaleOnHover={1.05}
          showMobileWarning={false}
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;
