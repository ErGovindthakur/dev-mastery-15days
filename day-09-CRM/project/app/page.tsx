import Link from "next/link";

import {
  ArrowRight,
  Upload,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-blue-500/10
          blur-3xl
        "
      />

      {/* Navbar */}

      <header
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-8
          py-6
        "
      >
        <h1
          className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-blue-400
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          CRM Pro
        </h1>

        <Link
          href="/dashboard"
          className="
            rounded-xl
            border
            border-slate-700
            px-5
            py-2
            hover:bg-slate-900
          "
        >
          Dashboard
        </Link>
      </header>

      {/* Hero */}

      <section
        className="
          mx-auto
          max-w-5xl
          px-8
          py-28
          text-center
        "
      >
        <div
          className="
            mb-6
            inline-flex
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            text-blue-400
          "
        >
          Dealer Import Management
        </div>

        <h1
          className="
            text-6xl
            font-bold
            leading-tight
          "
        >
          Manage Dealer Imports
          <br />

          <span
            className="
              bg-gradient-to-r
              from-blue-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Without Spreadsheet Chaos
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            text-slate-400
          "
        >
          Upload CSV files, validate data,
          track upload history, and manage
          dealers from one modern dashboard.
        </p>

        <div
          className="
            mt-10
            flex
            justify-center
            gap-4
          "
        >
          <Link
            href="/dashboard"
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-medium
              hover:bg-blue-700
            "
          >
            Get Started

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/uploads"
            className="
              rounded-xl
              border
              border-slate-700
              px-6
              py-3
              hover:bg-slate-900
            "
          >
            View Uploads
          </Link>
        </div>
      </section>

      {/* Features */}

      <section
        className="
          mx-auto
          grid
          max-w-6xl
          gap-6
          px-8
          pb-20
          md:grid-cols-3
        "
      >
        <FeatureCard
          icon={<Upload size={24} />}
          title="CSV Uploads"
          description="Import dealer records instantly."
        />

        <FeatureCard
          icon={
            <ShieldCheck size={24} />
          }
          title="Validation"
          description="Detect invalid data before saving."
        />

        <FeatureCard
          icon={<BarChart3 size={24} />}
          title="Analytics"
          description="Track uploads and success rates."
        />
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-6
        transition-all
        hover:-translate-y-1
        hover:border-blue-500/30
      "
    >
      <div className="mb-4 text-blue-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        {description}
      </p>
    </div>
  );
}