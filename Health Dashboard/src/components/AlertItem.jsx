export default function AlertItem({ icon, title, message, time }) {
  return (
    <div className="flex items-center gap-4 bg-[#111d22] px-4 min-h-[72px] py-2 justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center justify-center rounded-lg bg-[#243c47] size-12 text-white">
          {icon}
        </div>
        <div className="flex flex-col">
          <p className="text-white text-base font-medium">{title}</p>
          <p className="text-[#93b8c8] text-sm">{message}</p>
        </div>
      </div>
      <p className="text-[#93b8c8] text-sm">{time}</p>
    </div>
  );
}
