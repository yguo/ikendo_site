"use client";

import {
  Brain,
  FlaskConical,
  Rocket,
  BarChart3,
  Check,
  X,
  AlertTriangle,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  Search,
  Settings,
  Bell,
  User,
  Plus,
  Play,
  Pause,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
} from "lucide-react";

function WindowChrome({ title, children, accent = "#8B3A2F" }: { title: string; children: React.ReactNode; accent?: string }) {
  return (
    <div className="rounded-xl border border-border bg-card shadow-lg overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <span className="text-[10px] text-muted-foreground/60 font-light">{title}</span>
        <div className="flex items-center gap-2">
          <Bell className="w-3 h-3 text-muted-foreground/40" />
          <Settings className="w-3 h-3 text-muted-foreground/40" />
        </div>
      </div>
      {children}
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: React.ElementType; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] ${active ? "bg-[#8B3A2F]/10 text-[#8B3A2F] font-normal" : "text-muted-foreground/60 hover:text-muted-foreground"}`}>
      <Icon className="w-3 h-3" />
      {label}
    </div>
  );
}

export function TrainScreenshot() {
  return (
    <WindowChrome title="iKendo — Agent Studio">
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-border bg-secondary/30 p-3 space-y-1 hidden sm:block">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-2 px-3">Workspace</div>
          <SidebarItem icon={Brain} label="Agent Studio" active />
          <SidebarItem icon={Settings} label="Rules Engine" />
          <SidebarItem icon={User} label="Voice Profiles" />
          <SidebarItem icon={MessageCircle} label="Knowledge Base" />
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mt-4 mb-2 px-3">Agents</div>
          <div className="px-3 py-1.5 text-[10px] text-foreground flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Claims Assistant
          </div>
          <div className="px-3 py-1.5 text-[10px] text-muted-foreground/60 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            Sales Outbound
          </div>
          <div className="px-3 py-1.5 text-[10px] text-muted-foreground/60 flex items-center gap-1.5">
            <Plus className="w-3 h-3" />
            New Agent
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-light">Claims Assistant</h3>
              <span className="text-[10px] text-muted-foreground/60">Insurance · APAC · 3 languages</span>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-md border border-border text-[10px] text-muted-foreground">Save Draft</div>
              <div className="px-3 py-1 rounded-md bg-[#8B3A2F] text-white text-[10px]">Publish</div>
            </div>
          </div>

          {/* Conversational training interface */}
          <div className="border border-border rounded-lg p-4 mb-4 bg-secondary/20">
            <div className="text-[10px] text-muted-foreground/60 mb-3 flex items-center gap-1.5">
              <Brain className="w-3 h-3 text-[#8B3A2F]" />
              Training Conversation
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8B3A2F]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Brain className="w-2.5 h-2.5 text-[#8B3A2F]" />
                </div>
                <div className="bg-card border border-border rounded-lg px-3 py-2 text-[11px] text-muted-foreground">
                  Tell me about your claims process. What happens when a customer calls in?
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-[#8B3A2F]/8 border border-[#8B3A2F]/15 rounded-lg px-3 py-2 text-[11px] text-foreground max-w-[70%]">
                  The customer calls, provides their policy number, describes the incident, and we collect photos if needed. We verify coverage and initiate the claim within 24 hours.
                </div>
                <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-2.5 h-2.5 text-muted-foreground" />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8B3A2F]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Brain className="w-2.5 h-2.5 text-[#8B3A2F]" />
                </div>
                <div className="bg-card border border-border rounded-lg px-3 py-2 text-[11px] text-muted-foreground">
                  Got it. I&apos;ve created 12 rules for FNOL intake. Shall I also configure escalation paths for complex claims?
                </div>
              </div>
            </div>
          </div>

          {/* Rules generated */}
          <div className="grid grid-cols-3 gap-3">
            <div className="border border-border rounded-md p-3 bg-card">
              <div className="text-[10px] text-muted-foreground/50 mb-1">Rules</div>
              <div className="text-lg font-extralight text-foreground">47</div>
              <div className="text-[9px] text-green-600 flex items-center gap-0.5 mt-0.5">
                <Check className="w-2.5 h-2.5" /> configured
              </div>
            </div>
            <div className="border border-border rounded-md p-3 bg-card">
              <div className="text-[10px] text-muted-foreground/50 mb-1">Languages</div>
              <div className="text-lg font-extralight text-foreground">3</div>
              <div className="text-[9px] text-muted-foreground/50 mt-0.5">EN · JA · ZH</div>
            </div>
            <div className="border border-border rounded-md p-3 bg-card">
              <div className="text-[10px] text-muted-foreground/50 mb-1">Voice Profile</div>
              <div className="text-lg font-extralight text-foreground">Yuki</div>
              <div className="text-[9px] text-muted-foreground/50 mt-0.5">Female · Warm</div>
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function SimulationScreenshot() {
  const scenarios = [
    { name: "FNOL — auto accident", score: 98, status: "pass", turns: 8 },
    { name: "Policy inquiry — coverage limits", score: 96, status: "pass", turns: 5 },
    { name: "Multi-language switch (JA → EN)", score: 95, status: "pass", turns: 12 },
    { name: "Hostile caller — escalation", score: 93, status: "pass", turns: 6 },
    { name: "Ambiguous claim — edge case", score: 87, status: "warn", turns: 14 },
    { name: "Background noise — outdoor call", score: 91, status: "pass", turns: 7 },
    { name: "Interrupted mid-sentence", score: 97, status: "pass", turns: 9 },
  ];

  return (
    <WindowChrome title="iKendo — Simulation Lab">
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-border bg-secondary/30 p-3 space-y-1 hidden sm:block">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-2 px-3">Simulation</div>
          <SidebarItem icon={FlaskConical} label="Test Suites" active />
          <SidebarItem icon={Play} label="Live Preview" />
          <SidebarItem icon={Settings} label="Scenarios" />
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mt-4 mb-2 px-3">Recent</div>
          <div className="px-3 py-1.5 text-[10px] text-foreground">Suite #47 — Today</div>
          <div className="px-3 py-1.5 text-[10px] text-muted-foreground/60">Suite #46 — Yesterday</div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-light">Test Suite #47</h3>
              <span className="text-[10px] text-muted-foreground/60">Claims Assistant · 24 scenarios · Running</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[10px]">
                <div className="w-2 h-2 rounded-full bg-[#8B3A2F] animate-pulse" />
                <span className="text-[#8B3A2F]">7/24 complete</span>
              </div>
              <div className="px-3 py-1 rounded-md border border-border text-[10px] text-muted-foreground flex items-center gap-1">
                <Pause className="w-2.5 h-2.5" /> Pause
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-secondary rounded-full h-1.5 mb-5">
            <div className="bg-[#8B3A2F] h-1.5 rounded-full transition-all" style={{ width: "29%" }} />
          </div>

          {/* Results table */}
          <div className="border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-[1fr_60px_50px_60px] gap-2 px-4 py-2 bg-secondary/50 text-[9px] uppercase tracking-widest text-muted-foreground/50">
              <span>Scenario</span>
              <span className="text-center">Score</span>
              <span className="text-center">Turns</span>
              <span className="text-center">Status</span>
            </div>
            {scenarios.map((s) => (
              <div key={s.name} className="grid grid-cols-[1fr_60px_50px_60px] gap-2 px-4 py-2.5 border-t border-border items-center">
                <span className="text-[11px] text-foreground font-extralight">{s.name}</span>
                <div className="text-center">
                  <span className={`text-[11px] font-light ${s.score >= 90 ? "text-foreground" : "text-yellow-600"}`}>
                    {s.score}%
                  </span>
                </div>
                <span className="text-[11px] text-muted-foreground/60 text-center">{s.turns}</span>
                <div className="flex justify-center">
                  {s.status === "pass" ? (
                    <div className="w-4.5 h-4.5 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-4.5 h-4.5 rounded-full bg-yellow-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-2.5 h-2.5 text-yellow-600" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="border border-border rounded-md p-3 bg-card text-center">
              <div className="text-lg font-extralight text-green-600">94.5%</div>
              <div className="text-[9px] text-muted-foreground/50 mt-0.5">Avg Score</div>
            </div>
            <div className="border border-border rounded-md p-3 bg-card text-center">
              <div className="text-lg font-extralight text-foreground">6/7</div>
              <div className="text-[9px] text-muted-foreground/50 mt-0.5">Passed</div>
            </div>
            <div className="border border-border rounded-md p-3 bg-card text-center">
              <div className="text-lg font-extralight text-yellow-600">1</div>
              <div className="text-[9px] text-muted-foreground/50 mt-0.5">Needs Review</div>
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function DeployScreenshot() {
  return (
    <WindowChrome title="iKendo — Deployment Center">
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-border bg-secondary/30 p-3 space-y-1 hidden sm:block">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-2 px-3">Deploy</div>
          <SidebarItem icon={Rocket} label="Channels" active />
          <SidebarItem icon={Settings} label="Configuration" />
          <SidebarItem icon={Bell} label="Alerts" />
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mt-4 mb-2 px-3">Live Now</div>
          <div className="px-3 py-1.5 text-[10px] text-foreground flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            3 channels
          </div>
          <div className="px-3 py-1.5 text-[10px] text-muted-foreground/60">265 active</div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-light">Live Dashboard</h3>
              <span className="text-[10px] text-muted-foreground/60">Claims Assistant · Real-time</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] text-green-600">All systems operational</span>
            </div>
          </div>

          {/* Channel cards */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              { icon: Phone, label: "Voice", active: 142, queue: 3, latency: "612ms", status: "live" },
              { icon: MessageCircle, label: "Chat", active: 89, queue: 0, latency: "340ms", status: "live" },
              { icon: Mail, label: "Email", active: 34, queue: 12, latency: "—", status: "live" },
            ].map((ch) => (
              <div key={ch.label} className="border border-border rounded-lg p-4 bg-card">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-md bg-[#8B3A2F]/8 flex items-center justify-center">
                      <ch.icon className="w-3.5 h-3.5 text-[#8B3A2F]" />
                    </div>
                    <span className="text-[11px] font-light">{ch.label}</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <div className="text-2xl font-extralight text-foreground mb-1">{ch.active}</div>
                <div className="text-[9px] text-muted-foreground/50">active conversations</div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border text-[9px] text-muted-foreground/60">
                  <span>Queue: {ch.queue}</span>
                  <span>Latency: {ch.latency}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Live conversation feed */}
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-muted-foreground/60">Live Conversation Feed</span>
              <div className="flex items-center gap-2">
                <Search className="w-3 h-3 text-muted-foreground/40" />
                <span className="text-[10px] text-muted-foreground/40">Filter</span>
              </div>
            </div>
            {[
              { id: "#4892", channel: "Voice", topic: "Auto claim — rear collision", duration: "2:34", status: "active", lang: "JA" },
              { id: "#4891", channel: "Chat", topic: "Policy renewal inquiry", duration: "1:12", status: "active", lang: "EN" },
              { id: "#4890", channel: "Voice", topic: "FNOL — water damage", duration: "3:01", status: "resolved", lang: "EN" },
              { id: "#4889", channel: "Email", topic: "Coverage comparison request", duration: "—", status: "pending", lang: "ZH" },
            ].map((conv) => (
              <div key={conv.id} className="flex items-center justify-between py-2 border-t border-border first:border-t-0">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-muted-foreground/40 w-10">{conv.id}</span>
                  <span className="text-[10px] text-muted-foreground/50 w-10">{conv.channel}</span>
                  <span className="text-[11px] text-foreground font-extralight">{conv.topic}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] text-muted-foreground/40">{conv.lang}</span>
                  <span className="text-[10px] text-muted-foreground/50">{conv.duration}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                    conv.status === "active" ? "bg-green-500/10 text-green-600" :
                    conv.status === "resolved" ? "bg-blue-500/10 text-blue-600" :
                    "bg-yellow-500/10 text-yellow-600"
                  }`}>
                    {conv.status}
                  </span>
                  <ChevronRight className="w-3 h-3 text-muted-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function InsightsScreenshot() {
  return (
    <WindowChrome title="iKendo — Insights & Analytics">
      <div className="flex min-h-[380px]">
        {/* Sidebar */}
        <div className="w-40 border-r border-border bg-secondary/30 p-3 space-y-1 hidden sm:block">
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mb-2 px-3">Analytics</div>
          <SidebarItem icon={BarChart3} label="Overview" active />
          <SidebarItem icon={TrendingUp} label="Performance" />
          <SidebarItem icon={MessageCircle} label="Conversations" />
          <SidebarItem icon={Settings} label="Rules Audit" />
          <div className="text-[9px] uppercase tracking-widest text-muted-foreground/40 mt-4 mb-2 px-3">Period</div>
          <div className="px-3 py-1 text-[10px] text-foreground bg-card rounded border border-border">Last 7 days</div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-sm font-light">Analytics Overview</h3>
              <span className="text-[10px] text-muted-foreground/60">Claims Assistant · Apr 4 – Apr 11, 2026</span>
            </div>
            <div className="px-3 py-1 rounded-md border border-border text-[10px] text-muted-foreground flex items-center gap-1">
              Export <ArrowUpRight className="w-2.5 h-2.5" />
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-3 mb-5">
            {[
              { label: "Total Conversations", value: "2,847", change: "+12%", up: true },
              { label: "Resolution Rate", value: "94.7%", change: "+2.1%", up: true },
              { label: "Avg Handle Time", value: "2m 14s", change: "-18s", up: true },
              { label: "Rule Compliance", value: "100%", change: "—", up: true },
            ].map((kpi) => (
              <div key={kpi.label} className="border border-border rounded-lg p-3 bg-card">
                <div className="text-[9px] text-muted-foreground/50 mb-1">{kpi.label}</div>
                <div className="text-xl font-extralight text-foreground">{kpi.value}</div>
                <div className={`text-[9px] mt-1 flex items-center gap-0.5 ${kpi.change === "—" ? "text-muted-foreground/40" : kpi.up ? "text-green-600" : "text-red-500"}`}>
                  {kpi.change !== "—" && (kpi.up ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />)}
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="border border-border rounded-lg p-4 bg-card mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-muted-foreground/60">Conversation Volume & Resolution</span>
              <div className="flex gap-3 text-[9px] text-muted-foreground/50">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#8B3A2F]" /> Volume</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Resolved</span>
              </div>
            </div>
            {/* Mini bar chart */}
            <div className="flex items-end gap-1.5 h-24">
              {[65, 72, 58, 80, 75, 90, 85].map((v, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full flex gap-0.5">
                    <div className="flex-1 bg-[#8B3A2F]/20 rounded-sm" style={{ height: `${v}px` }} />
                    <div className="flex-1 bg-green-500/20 rounded-sm" style={{ height: `${v * 0.94}px` }} />
                  </div>
                  <span className="text-[8px] text-muted-foreground/40">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="border border-[#8B3A2F]/20 rounded-lg p-4 bg-[#8B3A2F]/3">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-3.5 h-3.5 text-[#8B3A2F]" />
              <span className="text-[10px] text-[#8B3A2F] font-normal">3 AI Optimization Suggestions</span>
            </div>
            <div className="space-y-2">
              {[
                "Add a fallback rule for \"partial claim\" scenarios — 23 conversations hit this gap last week",
                "Voice profile \"Yuki\" performs 8% better on FNOL calls than \"Kenji\" — consider switching default",
                "Customers asking about deductibles take 40% longer — add a quick-reference knowledge card",
              ].map((suggestion, i) => (
                <div key={i} className="flex items-start gap-2 text-[10px] text-foreground font-extralight">
                  <div className="w-4 h-4 rounded bg-[#8B3A2F]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[8px] text-[#8B3A2F]">{i + 1}</span>
                  </div>
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}
