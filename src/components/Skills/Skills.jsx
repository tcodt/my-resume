import { useInView } from "react-intersection-observer";
import BgBlur from "../BgBlur/BgBlur";

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const skills = [
    { url: "/images/html.png", color: "bg-orange-500", percentage: "95%" },
    { url: "/images/css.png", color: "bg-blue-500", percentage: "90%" },
    { url: "/images/js.webp", color: "bg-yellow-500", percentage: "80%" },
    { url: "/images/react.png", color: "bg-sky-500", percentage: "80%" },
    {
      url: "/images/bootstrap.webp",
      color: "bg-violet-500",
      percentage: "95%",
    },
    { url: "/images/tailwind.webp", color: "bg-cyan-500", percentage: "95%" },
    { url: "/images/redux.webp", color: "bg-purple-500", percentage: "75%" },
  ];

  return (
    <section className="mt-32">
      <div className="container mx-auto p-4 md:p-0 relative">
        <h3 className="text-2xl text-white font-semibold block mb-4">
          مهارت های کد نویسی
        </h3>
        <BgBlur bgColor="bg-purple-500" sideY="-bottom-20" sideX="left-0" />
        <div className="flex flex-col gap-4" ref={ref}>
          {skills.length &&
            skills.map((skill, index) => (
              <div key={index} className="flex items-center md:gap-4 gap-2">
                <img
                  src={skill.url}
                  alt={skill.url}
                  className="md:h-10 h-8 object-contain"
                />
                <div className="bg-slate-500 bg-opacity-60 rounded-md w-full md:h-10 h-5">
                  <div
                    className={`${skill.color} h-full transition-all bg-opacity-75 rounded-md`}
                    style={{
                      width: inView ? skill.percentage : "0%",
                      transition: "width 1s ease-out",
                    }}
                  ></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
