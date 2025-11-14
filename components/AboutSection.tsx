import { Rocket } from "lucide-react";
import { aboutData, statsData } from "./aboutData";

export default function AboutSection() {
  return (
    <section id="about" className="max-container min-h-screen py-20">
      {/* Header */}
      <div className="text-center min-[366px]:mb-16 mb-14">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
          <Rocket className="sm:size-4 size-3 text-blue-500" />
          <span className="sm:text-sm text-xs font-medium text-blue-500">
            Next.js Specialist
          </span>
        </div>
        <h1 className="lg:text-5xl md:text-4xl min-[400px]:text-3xl min-[366px]:text-2xl text-xl font-bold min-[400px]:mb-4 mb-2.5">
          Building{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Scalable Solutions
          </span>
        </h1>

        <p className="lg:text-xl sm:text-lg min-[400px]:text-base min-[366px]:text-sm text-xs font-medium text-neutral-300 sm:max-w-2xl w-full mx-auto">
          Full-stack developer crafting user-centric web applications with
          exceptional performance, security, and user experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-7 lg:gap-6 gap-10">
        {/* Left Column - Story */}
        <div className="flex flex-col gap-6">
          {/* About Me */}
          <div>
            <h1 className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold min-[400px]:mb-6 mb-4">
              About Me
            </h1>
            <div className="border-0 bg-white/5 backdrop-blur-sm shadow-2xl p-6 rounded-2xl">
              <div className="space-y-6">
                <p className="sm:text-lg min-[400px]:text-base min-[350px]:text-sm text-xs text-white/90 leading-relaxed font-medium">
                  I'm a{" "}
                  <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    self-taught full-stack developer
                  </strong>{" "}
                  specializing in the modern Next.js ecosystem. I transform
                  ideas into production-ready, type-safe applications that don't
                  just function, they deliver exceptional speed, security, and
                  user experience.
                </p>
                <p className="sm:text-lg min-[400px]:text-base min-[350px]:text-sm text-xs text-white/90 leading-relaxed font-medium">
                  With expertise across the full stack—from the UI (
                  <strong className="text-yellow-400">
                    Next.js, React, Tailwind CSS
                  </strong>
                  ) to the backend and database. I build cohesive, scalable
                  systems that stand up to real-world demands.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="sm:p-6 min-[400px]:p-4 px-2 py-4 grid grid-cols-2 gap-6 rounded-2xl text-center bg-white/5 backdrop-blur-sm">
            {statsData.map((stat) => (
              <div
                key={stat.title}
                className="flex flex-col items-center justify-center"
              >
                <p className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.title}
                </p>
                <p className="sm:text-base min-[400px]:text-sm text-xs font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Approach & Value */}
        <div>
          <h1 className="sm:text-3xl min-[400px]:text-2xl text-xl font-bold min-[400px]:mb-6 mb-4">
            What I Deliver
          </h1>
          <div className="space-y-4">
            {aboutData.map((data) => (
              <div key={data.title} className={data.style}>
                <div className="flex items-start gap-4">
                  {data.icon}
                  <div>
                    <h3 className="sm:text-lg min-[375px]:text-base text-sm text-white font-semibold mb-1.5">
                      {data.title}
                    </h3>
                    <p className="text-white/80 sm:text-base min-[375px]:text-sm text-xs">
                      {data.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
