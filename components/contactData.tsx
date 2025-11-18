import { Mail, MapPin, Clock } from "lucide-react";

export const contactMethods = [
  {
    icon: <Mail className="size-5" />,
    label: "Email",
    value: "khantzawthein779@gmail.com",
    href: "mailto:your.email@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <MapPin className="size-5" />,
    label: "Location",
    value: "Remote Worldwide",
    href: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="size-5" />,
    label: "Response Time",
    value: "Within 24 hours",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
];
