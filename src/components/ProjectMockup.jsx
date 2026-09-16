import { BarChart3, Bot, CalendarDays, CheckCircle2, CloudSun, IndianRupee, MapPin, MessageSquare, PackageCheck, ShieldCheck, Users, WalletCards } from "lucide-react";

function MiniBar({ value }) {
  return <div className="mini-bar"><span style={{ width: `${value}%` }} /></div>;
}

export default function ProjectMockup({ kind }) {
  if (kind === "tour") {
    return (
      <div className="mockup-window">
        <div className="mockup-top"><span className="terminal-dots"><i /><i /><i /></span><span>TourMate Pro / trip</span><span className="mockup-online"><span className="status-dot" /> AI ready</span></div>
        <div className="tour-mockup">
          <aside className="mock-side">
            <div className="mock-logo">T</div>
            <div className="mock-side-line active" /><div className="mock-side-line" /><div className="mock-side-line" /><div className="mock-side-line" />
          </aside>
          <div className="mock-main">
            <div className="mock-title-row"><div><p className="mock-muted">AI trip planner</p><h4>Chennai → Ooty</h4></div><span className="mock-chip"><CloudSun size={12} /> 24°C</span></div>
            <div className="mock-stats"><div><span>Budget</span><b>₹18,500</b></div><div><span>Days</span><b>4</b></div><div><span>Stops</span><b>8</b></div></div>
            <div className="mock-panel">
              <div className="flex items-center gap-2"><Bot size={13} className="text-violet-400" /><span>AI-generated itinerary</span></div>
              <div className="mock-timeline">
                <div className="timeline-dot" /><div><b>Day 01 · Arrival</b><p>Botanical Garden · local café · hotel check-in</p></div>
                <div className="timeline-dot" /><div><b>Day 02 · Explore</b><p>Doddabetta · Tea Museum · sunset viewpoint</p></div>
                <div className="timeline-dot" /><div><b>Day 03 · Nature</b><p>Lake visit · nearby places · relaxed evening</p></div>
              </div>
            </div>
            <div className="mock-bottom-grid"><div className="mock-panel"><span><WalletCards size={12} /> Budget advice</span><MiniBar value={72} /></div><div className="mock-panel"><span><PackageCheck size={12} /> Packing list</span><p className="mt-2 text-[9px]">✓ Jacket · ✓ Camera · ✓ Charger</p></div></div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "smart") {
    return (
      <div className="mockup-window">
        <div className="mockup-top"><span className="terminal-dots"><i /><i /><i /></span><span>SmartMate AI / digital twin</span><span className="mockup-online"><span className="status-dot" /> tracking</span></div>
        <div className="smart-mockup">
          <div className="mock-header"><div><p className="mock-muted">Student digital twin</p><h4>Today&apos;s snapshot</h4></div><span className="mock-chip">Level 04</span></div>
          <div className="smart-grid"><div className="smart-stat"><span>Attendance</span><b>86%</b><MiniBar value={86} /></div><div className="smart-stat"><span>Productivity</span><b>74%</b><MiniBar value={74} /></div><div className="smart-stat"><span>Focus</span><b>8.2h</b><MiniBar value={68} /></div></div>
          <div className="mock-panel smart-insight"><div className="flex items-center gap-2"><Bot size={13} className="text-violet-400" /><b>Personalized insight</b></div><p>Keep the current study rhythm and prioritize the weakest subject next.</p></div>
        </div>
      </div>
    );
  }

  return (
    <div className="mockup-window">
      <div className="mockup-top"><span className="terminal-dots"><i /><i /><i /></span><span>HostelPro AI / admin</span><span className="mockup-online"><span className="status-dot" /> system live</span></div>
      <div className="hostel-mockup">
        <aside className="mock-side">
          <div className="mock-logo">H</div>
          <div className="mock-side-label">Overview</div><div className="mock-side-line active" /><div className="mock-side-line" /><div className="mock-side-line" /><div className="mock-side-line" /><div className="mock-side-line" />
        </aside>
        <div className="mock-main">
          <div className="mock-title-row"><div><p className="mock-muted">Admin portal</p><h4>Hostel overview</h4></div><span className="mock-chip"><ShieldCheck size={12} /> 4 portals</span></div>
          <div className="mock-stats"><div><span>Students</span><b>1,248</b></div><div><span>Attendance</span><b>91%</b></div><div><span>Complaints</span><b>18</b></div></div>
          <div className="mock-chart-row">
            <div className="mock-panel chart-panel"><div className="flex items-center gap-2"><BarChart3 size={12} /> Attendance</div><div className="chart-bars">{[45, 62, 52, 76, 68, 88, 73, 92, 81, 96].map((v, i) => <span key={i} style={{ height: `${v}%` }} />)}</div></div>
            <div className="mock-panel"><div className="flex items-center gap-2"><Bot size={12} className="text-violet-400" /> AI insights</div><p className="mt-3 text-[9px] leading-4 text-slate-400">3 complaints need priority review.</p><p className="mt-2 text-[9px] leading-4 text-slate-400">Visitor activity is above weekly average.</p></div>
          </div>
          <div className="mock-bottom-grid"><div className="mock-panel"><span><Users size={12} /> Portals</span><div className="portal-row"><b>Admin</b><b>Student</b><b>Parent</b><b>Security</b></div></div><div className="mock-panel"><span><MessageSquare size={12} /> Complaints</span><p className="mt-2 text-[9px]">Room maintenance · Food · Wi-Fi</p></div></div>
        </div>
      </div>
    </div>
  );
}
