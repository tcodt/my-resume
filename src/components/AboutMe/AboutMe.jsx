import { useInView } from "react-intersection-observer";
import AutoType from "../AutoType/AutoType";
import BgBlur from "../BgBlur/BgBlur";

export default function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <section className="container mx-auto mt-40">
      <div className="container mx-auto p-4 md:p-0">
        <h3 className="text-white text-2xl font-semibold mb-4 block">
          درباره من
        </h3>
        <div ref={ref} className="md:w-[70%] w-full relative">
          <BgBlur bgColor="bg-sky-500" sideY="bottom-0" sideX="left-0" />
          <AutoType
            start={inView}
            text="من امیرمحمد خانجانی هستم، یه برنامه‌نویس فرانت‌اند که عاشق
                    طراحی و ساخت رابط‌های کاربری زیبا و کاربردیه. تخصصم توی کار
                    با React.js، JavaScript و تکنولوژی‌های روز فرانت‌اند هست و
                    همیشه دنبال اینم که پروژه‌ها رو طوری طراحی کنم که هم از نظر
                    ظاهر جذاب باشن و هم تجربه کاربری عالی داشته باشن. به جزئیات
                    اهمیت زیادی می‌دم و دوست دارم هر چیزی که میسازم یه حس
                    حرفه‌ای بودن و خلاقیت داشته باشه. یادگیری چیزهای جدید و
                    پیشرفت توی کاری که انجام میدم برام خیلی مهمه و از همکاری با
                    تیم‌های باحال و پروژه‌های چالش‌برانگیز حسابی انرژی میگیرم.
                    هدفم اینه که با کارایی که انجام میدم، دنیای دیجیتال رو یه
                    قدم بهتر کنم و همیشه دنبال راه‌های جدید برای بهبود و نوآوری
                    هستم. 😊"
            className="md:text-xl text-base text-white text-opacity-70 font-medium"
            speed={10}
          />
        </div>
      </div>
    </section>
  );
}
