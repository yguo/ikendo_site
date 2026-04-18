"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Blocks,
  Bot,
  Brain,
  Building2,
  ChevronRight,
  CircleDollarSign,
  ClipboardCheck,
  Clock3,
  Cpu,
  FileCheck2,
  Flag,
  Globe2,
  Handshake,
  Headset,
  Layers,
  LayoutGrid,
  LineChart,
  MessagesSquare,
  Radar,
  Scale,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";

const investorSnapshot = [
  { label: "融资目标", value: "2000万 RMB", note: "本轮" },
  { label: "出让股份", value: "10%", note: "本轮" },
  { label: "投后估值", value: "2亿 RMB", note: "post-money" },
  { label: "A轮规划", value: "1.5亿 RMB", note: "下一阶段" },
];

const marketSignals = [
  {
    icon: TrendingUp,
    title: "市场正在切换价值单位",
    body: "企业开始从“语音能力采购”转向“可审计的会话结果采购”，预算更容易落到客服、销售、运营 KPI 上。",
  },
  {
    icon: Headset,
    title: "企业对外会话是高 ROI 切入口",
    body: "自动化替代率、平均处理时长、一次解决率、合规触发率都能直接映射企业财务与运营指标。",
  },
  {
    icon: Globe2,
    title: "北美成熟，亚洲增速高",
    body: "北美仍是最大采购市场，亚洲则在多语言、客服出海、合规本地化上具备更高增量空间。",
  },
];

const moatPillars = [
  {
    icon: Layers,
    title: "动态上下文装配",
    body: "参考 Parlant 等产品强调的 context engineering：每一轮只把与当前话题、流程阶段和风险边界相关的策略、知识与工具说明注入模型上下文，而不是把所有条规一次性塞进单一 system prompt，从结构上降低注意力稀释与「临场乱答」。",
    bullets: ["按轮次装配", "少即是多", "与模型迭代解耦"],
  },
  {
    icon: Workflow,
    title: "会话状态驱动行为",
    body: "用可观测的会话与业务状态（流程节点、风险标签、客户意图簇等）决定哪些 guideline、工具调用与话术边界生效；多规则并存时由控制层裁决与合并，而不是完全依赖 LLM 自行权衡。",
    bullets: ["状态 → 策略", "关键路径可裁决", "多主题并行不乱"],
  },
  {
    icon: ClipboardCheck,
    title: "行业 SOP 资产化",
    body: "把理赔 intake、回访、订单售后、风险提示等行业流程沉淀成模板、失败场景库与评测集，与上述控制层叠加后形成可复制的交付资产，而不是一次性 prompt 工程。",
    bullets: ["流程模板", "失败场景库", "评测/回归集"],
  },
  {
    icon: Scale,
    title: "企业交付与可追责",
    body: "权限沙箱、审计 trace、回滚与多区域数据策略，使「在什么状态下触发了什么行为」可解释、可回归；优化目标锚定业务结果与替代人工的可量化 ROI。",
    bullets: ["多租户", "审计 trace", "回滚与区域部署"],
  },
];

const productMatrix = [
  {
    icon: Bot,
    title: "Enterprise Voice Agent",
    body: "客服、外呼、预约、催收、售后流程自动执行。",
  },
  {
    icon: Workflow,
    title: "Builder / Studio",
    body: "Persona、Policy、Workflow、版本发布与回滚管理。",
  },
  {
    icon: Sparkles,
    title: "Copilot",
    body: "实时辅助、摘要、下一步动作推荐，以及 AI 到人工的平滑接管。",
  },
  {
    icon: Radar,
    title: "AgentOps / Compliance",
    body: "质量监控、审计日志、留存控制、成本归因与数据驻留。",
  },
];

const architectureLayers = [
  {
    icon: MessagesSquare,
    title: "Voice Layer",
    desc: "VAD / ASR / TTS / Turn-taking",
  },
  {
    icon: Brain,
    title: "Behavior Layer",
    desc: "Guidelines / Procedures / Tool Routing",
  },
  {
    icon: Blocks,
    title: "Integration Layer",
    desc: "CRM / 工单 / 订单 / MCP / API",
  },
  {
    icon: BarChart3,
    title: "AgentOps Layer",
    desc: "评测 / 回归 / 审计 / 成本 / 合规",
  },
];

const metrics = [
  { label: "任务成功率", value: "70% → 85%" },
  { label: "自动化替代率", value: "20% → 40%" },
  { label: "延迟 P95", value: "< 1.2s" },
  { label: "TTS MOS", value: "> 4.1" },
  { label: "可用性", value: "99.9%" },
];

const icpCards = [
  {
    icon: Shield,
    title: "保险公司",
    body: "寿险 / 财险客服、理赔 intake、保单回访、续费提醒。",
  },
  {
    icon: Building2,
    title: "再保险公司",
    body: "分入分出咨询、条款澄清、服务台与流程协作。",
  },
  {
    icon: LayoutGrid,
    title: "中型电商零售",
    body: "售后、WISMO、退换货、工单处理与会员服务。",
  },
  {
    icon: LineChart,
    title: "金融服务平台",
    body: "信贷咨询、反欺诈前置问答、会员与客服运营。",
  },
  {
    icon: Target,
    title: "交易平台",
    body: "开户、风险提示、订单与结算查询等高置信流程。",
  },
];

const gtmPhases = [
  {
    step: "01",
    title: "Land",
    body: "先直销灯塔客户，从金融保险中单一高价值流程切入，用 2–6 周 POC 打出结果。",
  },
  {
    step: "02",
    title: "Validate",
    body: "以任务成功率、转人工率、AHT、合规触发率建立证据链，沉淀行业模板与评测基线。",
  },
  {
    step: "03",
    title: "Expand",
    body: "从单流程扩展到更多流程、更多坐席、更多区域，再叠加 Copilot 与 AgentOps 模块。",
  },
  {
    step: "04",
    title: "Partner",
    body: "绑定 CTI / CRM / SI / 云渠道，以更低交付摩擦复制到相邻行业。",
  },
];

const revenuePath = [
  { year: "Year 1", customers: "8 家", arr: "800万 RMB" },
  { year: "Year 2", customers: "25 家", arr: "2500万 RMB" },
  { year: "Year 3", customers: "60 家", arr: "7200万 RMB" },
];

const team = [
  {
    name: "Erik Kwak",
    role: "AI 产品 / 平台化",
    points: [
      "原阿里巴巴资深 AI 产品专家",
      "前夸克 AI、阿里云盘产品负责人",
      "擅长企业级产品定义与平台化落地",
    ],
  },
  {
    name: "Kelly Lee",
    role: "实时音视频 / 算法产品化",
    points: [
      "原字节跳动资深 AI 算法专家",
      "飞书视频会议负责人",
      "擅长实时音视频与工程产品化",
    ],
  },
  {
    name: "Gai",
    role: "语音 / 多模态 / 会话算法",
    points: [
      "原阿里巴巴资深算法专家",
      "前通义听悟算法 Leader",
      "擅长语音、多模态与会话算法体系",
    ],
  },
  {
    name: "Xi Chen",
    role: "前沿研究 / 学术资源",
    points: [
      "资深算法专家",
      "复旦大学 AI 研究院教授、院长助理",
      "提供前沿算法研究与学术资源支撑",
    ],
  },
  {
    name: "Edward Xiao",
    role: "2B 增长 / GTM",
    points: [
      "资深 2B 产品增长专家",
      "擅长大模型、AgentOps 平台 GTM",
      "2025 年全年营收 5亿 RMB（按团队材料口径）",
    ],
  },
];

const fundingAllocation = [
  { label: "产品研发", percent: 55, amount: "1100万" },
  { label: "GPU / 云资源", percent: 20, amount: "400万" },
  { label: "SRE / 安全 / 合规", percent: 10, amount: "200万" },
  { label: "销售 / POC / 交付", percent: 10, amount: "200万" },
  { label: "法务 / 其他", percent: 5, amount: "100万" },
];

const gpuPrices = [
  { label: "AWS H100 8卡", price: "$55.04 / 小时", note: "公开价量级" },
  { label: "AWS H100 1卡", price: "$6.88 / 小时", note: "公开价量级" },
  { label: "AWS A100 8卡", price: "$21.96–32.77 / 小时", note: "区域与规格浮动" },
  { label: "B200", price: "价格未稳定公开", note: "A轮预算需重算" },
];

const milestones = [
  "灯塔客户 2–5 家",
  "行业模板 150+",
  "交付周期 ≤ 6 周",
  "ARR ≥ 2500 万 RMB",
  "可用性 99.9%",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <span className="text-[10px] uppercase tracking-[0.32em] text-kendo font-normal">
        {eyebrow}
      </span>
      <h2 className="mt-3 text-2xl md:text-3xl font-light tracking-tight text-foreground">
        {title}
      </h2>
      <p className="mt-3 text-sm text-muted-foreground font-extralight leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function SignalBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {[0, 1, 2].map((line) => (
        <motion.div
          key={line}
          className="absolute left-0 right-0 h-px bg-kendo/15"
          style={{ top: `${26 + line * 18}%` }}
          initial={{ opacity: 0.15, x: "-8%" }}
          animate={{ opacity: [0.15, 0.3, 0.15], x: ["-8%", "8%", "-8%"] }}
          transition={{
            duration: 8 + line * 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: line * 0.5,
          }}
        />
      ))}
      {[0, 1, 2, 3].map((dot) => (
        <motion.div
          key={dot}
          className="absolute size-1.5 rounded-full bg-kendo/30"
          style={{ top: `${28 + (dot % 2) * 18}%` }}
          initial={{ left: "-2%" }}
          animate={{ left: ["-2%", "102%"], opacity: [0, 0.7, 0] }}
          transition={{
            duration: 7 + dot,
            repeat: Infinity,
            ease: "linear",
            delay: dot * 1.4,
          }}
        />
      ))}
    </div>
  );
}

function TrackCard({
  icon: Icon,
  title,
  body,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-kendo/8">
          <Icon className="size-4 text-kendo" />
        </div>
        <h3 className="text-sm font-light tracking-tight">{title}</h3>
      </div>
      <p className="text-[13px] leading-relaxed text-muted-foreground font-extralight">
        {body}
      </p>
    </div>
  );
}

function MarketFragmentationGraphic() {
  const tracks = [
    { name: "超大规模云", width: "92%", tone: "bg-kendo/18 border-kendo/20" },
    { name: "CCaaS 套件", width: "84%", tone: "bg-kendo/12 border-kendo/15" },
    { name: "语音能力件", width: "62%", tone: "bg-secondary border-border" },
    { name: "Voice Agent 初创", width: "56%", tone: "bg-secondary border-border" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Market Structure
          </p>
          <h3 className="mt-2 text-lg font-light tracking-tight">
            企业语音智能引擎高度碎片化
          </h3>
        </div>
        <Badge variant="outline" className="text-[10px] font-normal">
          无统一单一市占率表
        </Badge>
      </div>
      <div className="space-y-4">
        {tracks.map((track, index) => (
          <motion.div
            key={track.name}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="mb-1 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>{track.name}</span>
              <span>{track.width}</span>
            </div>
            <div className="h-9 rounded-xl bg-secondary/70 p-1">
              <div
                className={`flex h-full items-center rounded-lg border px-3 text-xs text-foreground ${track.tone}`}
                style={{ width: track.width }}
              >
                主要玩家与客户心智分散
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-5 text-[12px] leading-relaxed text-muted-foreground font-extralight">
        ElevenLabs 在语音合成与实时交互品牌心智领先，但企业采购决策往往仍分散在云、联络中心、
        语音栈与 Agent 平台四类预算项中。
      </p>
    </div>
  );
}

function MoatIllustration() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Moat Illustration
        </p>
        <h3 className="mt-2 text-lg font-light tracking-tight">
          从语音能力到企业执行系统
        </h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-border bg-secondary/50 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Input
          </p>
          <div className="mt-3 space-y-2 text-xs text-muted-foreground">
            <div className="rounded-lg bg-card px-3 py-2">实时语音</div>
            <div className="rounded-lg bg-card px-3 py-2">业务规则</div>
            <div className="rounded-lg bg-card px-3 py-2">企业系统与知识库</div>
          </div>
        </div>
        <div className="rounded-xl border border-kendo/20 bg-kendo/5 p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-kendo">
            Control
          </p>
          <div className="mt-3 space-y-2 text-xs text-foreground">
            <div className="rounded-lg bg-background px-3 py-2">
              Guidelines / Procedures
            </div>
            <div className="rounded-lg bg-background px-3 py-2">
              Simulations / Regression
            </div>
            <div className="rounded-lg bg-background px-3 py-2">
              Audit / Rollback / Permissions
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="my-4 h-px bg-kendo/20"
        animate={{ opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="grid gap-3 sm:grid-cols-3">
        {["结果可交付", "过程可追责", "部署可规模化"].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-center text-[13px] text-foreground"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureFlow() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Lifecycle Stack
          </p>
          <h3 className="mt-2 text-lg font-light tracking-tight">
            可控的企业会话技术路线
          </h3>
        </div>
        <Badge variant="outline" className="text-[10px] font-normal">
          Mobile friendly
        </Badge>
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        {architectureLayers.map((layer, index) => {
          const Icon = layer.icon;
          return (
            <div key={layer.title} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-xl border border-border bg-secondary/50 p-4"
              >
                <div className="mb-3 flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                  <Icon className="size-4 text-kendo" />
                </div>
                <h4 className="text-sm font-light tracking-tight">{layer.title}</h4>
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground font-extralight">
                  {layer.desc}
                </p>
              </motion.div>
              {index < architectureLayers.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-2 z-10 size-4 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background">
                  <ChevronRight className="size-3 text-muted-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FundingBars() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
      <div className="mb-5">
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Funding Allocation
        </p>
        <h3 className="mt-2 text-lg font-light tracking-tight">
          2000 万 RMB 的使用优先级
        </h3>
      </div>
      <div className="space-y-4">
        {fundingAllocation.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <div className="mb-1 flex items-center justify-between text-[12px]">
              <span className="text-foreground">{item.label}</span>
              <span className="text-muted-foreground">{item.amount}</span>
            </div>
            <div className="h-8 rounded-xl bg-secondary p-1">
              <motion.div
                className="flex h-full items-center rounded-lg bg-kendo/12 px-3 text-[11px] text-foreground"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
              >
                {item.percent}%
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Horizontal inset for all BP sections: slightly wider than `px-6` on phones + safe-area on notches. */
const bpInset =
  "mx-auto w-full max-w-6xl pl-[max(1.75rem,env(safe-area-inset-left,0px))] pr-[max(1.75rem,env(safe-area-inset-right,0px))] sm:pl-8 sm:pr-8 md:pl-8 md:pr-8";

export default function InvestorBpPage() {
  return (
    <div className="bg-background overflow-x-hidden">
      <section className="relative overflow-hidden border-b border-border bg-background pt-28 pb-14 md:pt-32 md:pb-20">
        <SignalBackdrop />
        <div className={`relative ${bpInset}`}>
          <AnimatedSection>
            <div className="mx-auto max-w-4xl text-center">
              <Badge variant="outline" className="text-[10px] font-normal">
                Investor Brief / BP
              </Badge>
              <h1 className="mt-4 text-3xl md:text-5xl font-light tracking-tight text-foreground">
                准确、快速、持续优化的
                <br className="hidden sm:block" />
                企业轻量级智能体搭建平台
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base leading-relaxed text-muted-foreground font-extralight">
                为客服、销售、运营场景打造可控、可审计、可规模化的 Voice Agent 平台。
                我们不做单点语音工具，不只做一个 Bot，也不是单纯编排画布。
                我们做企业级会话执行系统。
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {[
                  "企业语音智能体",
                  "Behavior Control Layer",
                  "金融保险优先",
                  "Outcome 定价",
                ].map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="text-[10px] font-normal"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {investorSnapshot.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.08}>
                <div className="rounded-xl border border-border bg-card p-4 text-left">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </p>
                  <div className="mt-2 text-lg md:text-xl font-light tracking-tight">
                    {item.value}
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground font-extralight">
                    {item.note}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Market Window"
              title="为什么是现在：语音执行已进入企业采购窗口"
              description="企业真正愿意付费的，不是单一语音能力，而是可量化的降本、提效、合规与可审计结果。北美已经证明预算存在，亚洲正在进入高增长区间。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-3">
              {marketSignals.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.08}>
                  <TrackCard
                    icon={item.icon}
                    title={item.title}
                    body={item.body}
                  />
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.18}>
              <div className="rounded-2xl border border-border bg-secondary/50 p-5 md:p-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                  2030 路演口径
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    ["北美企业对外会话 AI", "26.7 亿美元"],
                    ["亚太企业对外会话 AI", "20.5 亿美元"],
                    ["全球相关市场", "59–99.5 亿美元"],
                  ].map(([name, value]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-4 py-3"
                    >
                      <span className="text-[13px] text-muted-foreground">
                        {name}
                      </span>
                      <span className="text-sm font-light tracking-tight text-foreground">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground font-extralight">
                  由于不同研报对 “企业对外会话 AI / Conversational AI / AI in Customer
                  Service” 定义不同，市场规模数字会随统计边界变化。
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatedSection>
              <MarketFragmentationGraphic />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-kendo/8">
                    <Search className="size-5 text-kendo" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      Competition Readout
                    </p>
                    <h3 className="mt-1 text-lg font-light tracking-tight">
                      ElevenLabs 强，但不是我们要正面复制的公司
                    </h3>
                  </div>
                </div>
                <div className="space-y-3 text-[13px] leading-relaxed text-muted-foreground font-extralight">
                  <p>
                    ElevenLabs 在 AI 语音合成与实时交互细分中增长极快，公开报道中常见
                    ARR 达到 3.3 亿美元量级、企业采用持续增强。
                  </p>
                  <p>
                    但企业真实采购不是“买最好听的声音”，而是买一套能被测试、追责、回滚、
                    合规上线的会话执行系统。
                  </p>
                  <p className="text-foreground">
                    iKendo 的错位竞争点在于：把语音引擎之上的行为控制、行业 SOP 资产、
                    AgentOps 与合规能力做成平台层。
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Pain & Need"
              title="今天的语音 Agent 还不够企业"
              description="企业并不缺实时语音 demo。真正缺的是一套能够接入真实业务系统、按规则执行、支持追责与回滚的生产级会话能力。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-secondary">
                    <Clock3 className="size-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight">现有方案普遍问题</h3>
                </div>
                <ul className="space-y-3 text-[13px] leading-relaxed text-muted-foreground font-extralight">
                  {[
                    "声音自然，但业务流程不可控",
                    "能实时对话，但 SOP 一致性不足",
                    "能接 API，但缺少审计与回归体系",
                    "能试点演示，但很难大规模上线",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[6px] size-1.5 rounded-full bg-kendo/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="rounded-2xl border border-kendo/15 bg-kendo/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-background">
                    <FileCheck2 className="size-4 text-kendo" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight">企业真实需求</h3>
                </div>
                <ul className="space-y-3 text-[13px] leading-relaxed text-foreground font-extralight">
                  {[
                    "能按规则办事，并与 CRM / 工单 / 订单系统协同",
                    "能被测试、追责、回滚，且支持多角色权限控制",
                    "能满足数据驻留、留存策略、零留存等要求",
                    "能稳定扩展到更多流程、坐席、区域与行业模板",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[6px] size-1.5 rounded-full bg-kendo" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-kendo/15 bg-background px-4 py-3 text-sm font-light tracking-tight text-foreground">
                  企业买的不是“好听的声音”，而是“可交付的结果”。
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Why We Win"
              title="我们的优势"
              description="思路与 Parlant 等产品强调的「动态上下文 + 会话状态控制 Agent 行为」一致：在每一轮只装配刚好相关的规则与边界，并用显式状态驱动当下允许的行为集合。iKendo 把这一层做实到企业实时语音、业务系统集成与交付运维上——企业采购的是可执行、可回归、可追责的会话结果，而不是单次 demo 的听感。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {moatPillars.map((item, index) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={item.title} delay={index * 0.07}>
                    <div className="rounded-2xl border border-border bg-card p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                          <Icon className="size-4 text-kendo" />
                        </div>
                        <h3 className="text-sm font-light tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-relaxed text-muted-foreground font-extralight">
                        {item.body}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.bullets.map((bullet) => (
                          <Badge
                            key={bullet}
                            variant="secondary"
                            className="text-[10px] font-normal"
                          >
                            {bullet}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
            <AnimatedSection delay={0.16}>
              <MoatIllustration />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Product Matrix"
              title="先卖一个场景，再扩成整个平台"
              description="企业客户不会一开始采购“万能 Agent 平台”。更有效的路径是先用单场景 Agent 建立 ROI，再用 Builder、Copilot 与 AgentOps 扩张客单价与平台粘性。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {productMatrix.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} delay={index * 0.08}>
                  <div className="rounded-2xl border border-border bg-card p-5 h-full">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-kendo/8">
                      <Icon className="size-5 text-kendo" />
                    </div>
                    <h3 className="mt-4 text-base font-light tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground font-extralight">
                      {item.body}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Technology"
              title="为什么我们适合从 0 到 1 做成"
              description="会话任务参数规模更小、成本更可控、指标更清晰，适合用“成功结果”而不是“更大模型”定义技术路线。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <AnimatedSection>
              <ArchitectureFlow />
            </AnimatedSection>
            <div className="grid gap-4">
              <AnimatedSection delay={0.08}>
                <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                      <Layers className="size-4 text-kendo" />
                    </div>
                    <h3 className="text-lg font-light tracking-tight">
                      为什么做“会话”
                    </h3>
                  </div>
                  <div className="space-y-3 text-[13px] leading-relaxed text-muted-foreground font-extralight">
                    <p>参数规模更小，成本与延迟更可控。</p>
                    <p>任务定义更清晰，成功率、AHT、替代率等指标更明确。</p>
                    <p>更容易形成标准化产品、重复销售与行业模板资产。</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.14}>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border bg-card p-4"
                    >
                      <div className="text-lg font-light tracking-tight text-foreground">
                        {item.value}
                      </div>
                      <div className="mt-1 text-[11px] text-muted-foreground font-extralight">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="GTM"
              title="第一阶段：先打金融保险，再向高标准化场景扩展"
              description="优先切入置信度要求高、市场成熟度仍低的中大型企业。强监管与低容错使客户更愿意为审计、回归、权限沙箱与稳定交付付费。"
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                    <Target className="size-4 text-kendo" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight">
                    第一阶段典型企业画像
                  </h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {icpCards.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="rounded-xl border border-border bg-secondary/50 p-4"
                      >
                        <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-background">
                          <Icon className="size-4 text-kendo" />
                        </div>
                        <h4 className="text-sm font-light tracking-tight">
                          {item.title}
                        </h4>
                        <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground font-extralight">
                          {item.body}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                    <Handshake className="size-4 text-kendo" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight">
                    分阶段扩张逻辑
                  </h3>
                </div>
                <div className="space-y-3">
                  {gtmPhases.map((item, index) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.42, delay: index * 0.08 }}
                      className="rounded-xl border border-border bg-secondary/40 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-kendo text-[11px] text-white">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="text-sm font-light tracking-tight">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground font-extralight">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Business Model"
              title="我们卖的不是 API，而是企业会话结果"
              description="定价逻辑采用平台费 + Outcome 定价。平台负责可控执行与证据链，结果负责把价值直接映射到客户业务指标。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <AnimatedSection>
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                    <CircleDollarSign className="size-4 text-kendo" />
                  </div>
                  <h3 className="text-lg font-light tracking-tight">
                    定价与验证
                  </h3>
                </div>
                <div className="space-y-4 text-[13px] leading-relaxed text-muted-foreground font-extralight">
                  <p>平台费覆盖 Builder、Copilot、AgentOps 与交付能力。</p>
                  <p>
                    Outcome 定价覆盖已定义的业务完成结果，而不是仅按 token
                    或语音分钟计费。
                  </p>
                  <p className="text-foreground">
                    海外已有案例将客服 AI outcome 定价做到约 $0.99 / outcome
                    量级，验证企业愿意为结果而非能力件买单。
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.08}>
              <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                      3-Year Path
                    </p>
                    <h3 className="mt-2 text-lg font-light tracking-tight">
                      客户与 ARR 路径
                    </h3>
                  </div>
                  <Badge variant="secondary" className="text-[10px] font-normal">
                    Model assumption
                  </Badge>
                </div>
                <div className="space-y-3">
                  {revenuePath.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="grid min-w-0 grid-cols-[0.9fr_0.8fr_1fr] items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3"
                    >
                      <div className="min-w-0 truncate text-sm font-light tracking-tight">
                        {item.year}
                      </div>
                      <div className="min-w-0 truncate text-[12px] text-muted-foreground">
                        {item.customers}
                      </div>
                      <div className="min-w-0 text-right text-sm font-light tracking-tight truncate">
                        {item.arr}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Core Team"
              title="产品、算法、工程与增长能力在同一桌上"
              description="团队组合覆盖企业级 AI 产品定义、实时音视频、语音与多模态算法、学术资源，以及 2B 增长与 GTM。"
            />
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.06}>
                <div className="rounded-2xl border border-border bg-card p-5 h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-kendo/8">
                      <Users className="size-5 text-kendo" />
                    </div>
                    <div>
                      <h3 className="text-base font-light tracking-tight">
                        {member.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-[12px] leading-relaxed text-muted-foreground font-extralight">
                    {member.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[6px] size-1.5 rounded-full bg-kendo/40" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className={bpInset}>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Funding & Milestones"
              title="资金将用于平台化、交付能力与可复制的基础设施"
              description="本轮融资聚焦产品研发、算力、SRE / 安全 / 合规，以及灯塔客户交付。后续 A 轮资金将主要投入区域部署、平台扩张与 GPU 基础设施。"
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection>
              <FundingBars />
            </AnimatedSection>
            <div className="grid gap-4">
              <AnimatedSection delay={0.08}>
                <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                      <Cpu className="size-4 text-kendo" />
                    </div>
                    <h3 className="text-lg font-light tracking-tight">
                      GPU 参考价格
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {gpuPrices.map((item) => (
                      <div
                        key={item.label}
                        className="grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3"
                      >
                        <div>
                          <div className="text-sm font-light tracking-tight">
                            {item.label}
                          </div>
                          <div className="mt-1 text-[11px] text-muted-foreground font-extralight">
                            {item.note}
                          </div>
                        </div>
                        <div className="text-right text-sm text-foreground">
                          {item.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.14}>
                <div className="rounded-2xl border border-border bg-card p-5 md:p-6">
                  <div className="mb-5 flex items-center gap-2">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-kendo/8">
                      <Flag className="size-4 text-kendo" />
                    </div>
                    <h3 className="text-lg font-light tracking-tight">
                      18 个月目标
                    </h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {milestones.map((item) => (
                      <div
                        key={item}
                        className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-[13px] text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl border border-kendo/15 bg-kendo/5 px-4 py-4 text-[13px] leading-relaxed text-muted-foreground font-extralight">
                    A 轮规划融资目标为 <span className="text-foreground">1.5 亿 RMB</span>，
                    重点用于平台化、区域部署、销售扩张、GPU 基础设施和合规体系建设。
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
