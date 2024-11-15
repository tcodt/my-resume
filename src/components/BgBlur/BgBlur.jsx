export default function BgBlur({ bgColor, sideY, sideX }) {
  return (
    <div
      className={`absolute ${sideY} ${sideX} ${bgColor} rounded-full blur-3xl bg-opacity-50 w-[200px] h-[200px]`}
    ></div>
  );
}
