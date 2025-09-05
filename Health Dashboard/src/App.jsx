
import './App.css'
import {Header,
  MetricsSection,
  AlertsSection,
  TelemedicineSection,
  MetricsGraph,
  StepsGraph,
  GlucoseGraph
} from ./components/components.js

function App() {
  return (
    <div
      className="min-h-screen w-screen bg-gray-900 text-white p-6 flex flex-col items-center"
      style={{ fontFamily: "'Space Grotesk', 'Noto Sans', sans-serif" }}
    >
      <Header />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="p-4">
            <p className="text-white text-[32px] font-bold">Dashboard</p>
            <p className="text-[#93b8c8] text-sm">
              Overview of your health metrics and alerts.
            </p>
          </div>
          <MetricsSection />
          <MetricsGraph />
          <StepsGraph />
          <GlucoseGraph />
          <AlertsSection />
          <TelemedicineSection />
        </div>
      </div>
    </div>
  );
}

export default App
