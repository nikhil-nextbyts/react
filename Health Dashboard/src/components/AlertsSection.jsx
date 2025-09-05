import AlertItem from "./AlertItem";

export default function AlertsSection() {
  const alerts = [
    {
      title: "High Heart Rate Detected",
      message: "Heart rate is elevated above normal range.",
      time: "2 hours ago",
      icon: <span>❤️</span>,
    },
    {
      title: "Low Glucose Level Detected",
      message: "Glucose levels are slightly below normal range.",
      time: "4 hours ago",
      icon: <span>🩸</span>,
    },
  ];

  return (
    <div className="px-4">
      <h2 className="text-white text-[22px] font-bold py-5">Alerts</h2>
      {alerts.map((alert, index) => (
        <AlertItem key={index} {...alert} />
      ))}
    </div>
  );
}
