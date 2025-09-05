export default function MetricCard({ title, value, change, changeColor }) {
  return (
    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#243c47]">
      <p className="text-white text-base font-medium">{title}</p>
      <p className="text-white text-2xl font-bold">{value}</p>
      <p className={`text-base font-medium ${changeColor}`}>{change}</p>
    </div>
  );
}
