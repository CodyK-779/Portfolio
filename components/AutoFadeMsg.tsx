"use client";

import { useEffect, useState } from "react";

interface Props {
  message: string;
  duration?: number;
}

const AutoFadeMsg = ({ message, duration = 5000 }: Props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} transition-all duration-500 ease-out`}
    >
      <p className="text-center sm:text-sm text-xs text-green-500">{message}</p>
    </div>
  );
};

export default AutoFadeMsg;
