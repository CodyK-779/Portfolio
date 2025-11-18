const socialIcons = [
  {
    icon: "ri-facebook-fill text-lg",
    name: "Faceook",
    href: "#",
    color: "bg-blue-600",
  },
  {
    icon: "ri-instagram-line text-lg",
    name: "Instagram",
    href: "#",
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
  },
  {
    icon: "ri-linkedin-box-fill text-lg",
    name: "Linkedin",
    href: "#",
    color: "bg-blue-700",
  },
  {
    icon: "ri-github-fill text-lg",
    name: "Github",
    href: "https://github.com/CodyK-779",
    color: "bg-gray-700",
  },
];

const ContactSocials = () => {
  return (
    <div>
      <h1 className="font-bold text-[22px] mt-4">Connect With Me</h1>
      <div className="flex items-center gap-3.5 mt-3">
        {socialIcons.map((icon) => (
          <div
            key={icon.icon}
            className={`flex items-center justify-center size-11 rounded-xl ${icon.color}`}
          >
            <i className={`${icon.icon}`}></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSocials;
