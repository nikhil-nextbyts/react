import MetricCard from "./MetricCard";

export default function MetricsSection() {
  const metrics = [
    {
      title: "Heart Rate",
      value: "72 bpm",
      change: "+2%",
      color: "text-[#0bda57]",
    },
    { title: "Steps", value: "5,420", change: "+5%", color: "text-[#0bda57]" },
    {
      title: "Glucose Level",
      value: "95 mg/dL",
      change: "-1%",
      color: "text-[#fa5f38]",
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
          change={metric.change}
          changeColor={metric.color}
        />
      ))}
    </div>
  );
}
