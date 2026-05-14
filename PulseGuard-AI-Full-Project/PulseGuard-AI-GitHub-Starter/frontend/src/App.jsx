export default function App() {
  const stats = [
    { title: "System Health", value: "92%", icon: "🟢" },
    { title: "Critical Bugs", value: "14", icon: "🐞" },
    { title: "Response Time", value: "1.2s", icon: "⚡" },
    { title: "Downtime", value: "2h", icon: "📉" },
  ];

  const bugs = [
    {
      title: "Payment API Delay",
      severity: "Critical",
      status: "In Progress",
    },
    {
      title: "Authentication Failure",
      severity: "High",
      status: "Testing",
    },
    {
      title: "Memory Leak",
      severity: "Medium",
      status: "AI Analysis",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold">🚀 PulseGuard AI</h1>
          <p className="text-gray-400 mt-2">
            Smart Bug & Efficiency Optimization Platform
          </p>
        </div>

        <button className="bg-blue-600 px-5 py-3 rounded-2xl font-semibold">
          + Create Issue
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6"
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h2 className="text-gray-400 text-sm">{item.title}</h2>
            <p className="text-3xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-6">🐞 Active Bug Tracker</h2>

        <div className="space-y-4">
          {bugs.map((bug, index) => (
            <div
              key={index}
              className="bg-black border border-zinc-800 rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{bug.title}</h3>
                </div>

                <div className="flex gap-3">
                  <span className="bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm">
                    {bug.severity}
                  </span>

                  <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm">
                    {bug.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2026 PulseGuard AI
      </div>
    </div>
  );
}
