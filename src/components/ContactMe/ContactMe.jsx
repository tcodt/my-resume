export default function ContactMe() {
  return (
    <section className="mt-32">
      <div className="container mx-auto p-4 md:p-0">
        <h4 className="text-white text-xl font-semibold block mb-4">
          ارتباط با من
        </h4>
        <div className="flex items-center md:justify-between flex-col md:flex-row gap-8">
          <div className="bg-transparent shadow-2xl rounded-md shadow-sky-500 border-2 border-slate-500 border-opacity-50 p-4 md:w-2/4 w-full">
            <form className="flex flex-col gap-4">
              <ul className="p-4">
                <li className="text-base text-white text-opacity-70 marker:text-yellow-400 list-disc">
                  لطفا اطلاعات مورد نطر خودت رو دقیق وارد کن تا با در اسرع وقت
                  باهات تماس بگیرم.
                </li>
              </ul>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="h-10 px-2 py-4 rounded-md border border-slate-500 bg-slate-700 bg-opacity-70 border-opacity-70 outline-none text-white"
              />
              <input
                type="text"
                placeholder="شماره موبایل یا ایمیل"
                className="h-10 px-2 py-4 rounded-md border border-slate-500 bg-slate-700 bg-opacity-70 border-opacity-70 outline-none text-white"
              />
              <textarea
                rows={7}
                placeholder="توضیحات"
                className="resize-none p-4 rounded-md border border-slate-500 bg-slate-700 bg-opacity-70 border-opacity-70 outline-none text-white"
              ></textarea>
              <button className="py- px-4 h-10 rounded-md bg-yellow-500 text-black outline-none hover:bg-yellow-400 transition">
                ارسال
              </button>
            </form>
          </div>
          <div className="p-4">
            <h4 className="text-white text-xl font-semibold block mb-4">
              توی فضای مجازی ازم سوالاتو بپرس !
            </h4>
            <p className="text-white text-base text-opacity-70 block">
              اگر از کارام خوشت اومده یا سوالی داری، خوشحال میشم بشنوم! میتونی
              از طریق فرم، ایمیل بزنی یا مستقیم توی شبکه‌های اجتماعی بهم پیام
              بدی. منتظر پیام‌های خوب و همکاری‌های هیجان‌انگیزت هستم. 😊
            </p>
            <div className="flex items-center justify-evenly mt-6">
              <a href="https://instagram.com/amirkhanjani01" target="_blink">
                <img
                  src="/images/instagram.png"
                  alt="Instagram"
                  className="h-14 object-contain drop-shadow-purple scale-90 rotate-0 hover:rotate-[360deg] hover:scale-100 transition"
                />
              </a>
              <a href="tel:09051061529">
                <img
                  src="/images/call.png"
                  alt="Instagram"
                  className="h-14 object-contain drop-shadow-green scale-90 rotate-0 hover:rotate-[360deg] hover:scale-100 transition"
                />
              </a>
              <a href="https://t.me/TCODT" target="_blink">
                <img
                  src="/images/telegram.png"
                  alt="Telegram"
                  className="h-14 object-contain drop-shadow-blue scale-90 rotate-0 hover:rotate-[360deg] hover:scale-100 transition"
                />
              </a>
              <a href="https://wa.me/989379646210" target="_blink">
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="h-14 object-contain drop-shadow-green scale-90 rotate-0 hover:rotate-[360deg] hover:scale-100 transition"
                />
              </a>
              {/* <a href="https://linkedin.com/amir-khanjani82" target="_blink">
                <img
                  src="/images/linkdin.png"
                  alt="Linkedin"
                  className="h-14 object-contain"
                />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
