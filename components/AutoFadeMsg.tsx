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

  if (!visible) return null;

  return (
    <div>
      <p className="text-center sm:text-sm text-xs text-green-500">{message}</p>
    </div>
  );
};

export default AutoFadeMsg;
