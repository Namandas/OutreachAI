import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const plans = [
    {
      name: "Free Plan",
      description: "Kickstart your outreach journey with essential features.",
      price: "$0",
      features: [
        "Send up to 100 automated emails per month",
        "Track email open and click rates",
        "Basic template-based email creation",
      ],
      cta: "Start for Free",
    },
    {
      name: "Pro Plan",
      description: "Elevate your campaigns with AI-driven personalization.",
      price: "$79",
      features: [
        "All Free Plan features",
        "AI-powered personalized email automation",
        "Advanced analytics and performance insights",
      ],
      cta: "Upgrade Now",
    },
  ];

  return (
    <main className="flex w-full flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="relative">
          <div className="container mx-auto px-6 py-10 lg:py-16 text-center">
            {/* Navbar */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center font-bold text-blue-600">
                  AI
                </div>
                <span className="text-xl font-semibold text-white">
                  OutreachAI
                </span>
              </div>
              <nav className="hidden space-x-6 text-sm text-gray-300 md:block">
                <Link href="#features">Features</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#about">About</Link>
              </nav>
              <Link
                href="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            </div>

            {/* Hero Content */}
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Maximize Your Outreach Potential with AI
              </h1>
              <p className="mt-6 text-lg text-gray-300">
                Empower your email campaigns with smart AI-driven automation and
                insights. Scale your outreach, build connections, and convert
                leads like never before.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/get-started"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-60 md:h-96 w-full mt-10 flex justify-center">
              <Image
                src="/ColdMail-AI-Image.png"
                alt="ColdMail AI Email Automation"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 w-full">
      <div className="px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Why Choose OutreachAI?
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-500">
            Transform your email campaigns with cutting-edge AI technology
            designed for effortless automation and unmatched results.
          </p>
          <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Smart Automation",
                description:
                  "Leverage AI to automate your email outreach with precision and speed.",
                icon: "🤖",
              },
              {
                title: "Advanced Analytics",
                description:
                  "Gain actionable insights into your campaigns with detailed metrics.",
                icon: "📊",
              },
              {
                title: "Personalized Outreach",
                description:
                  "AI-driven personalization for emails that truly connect with your audience.",
                icon: "✉️",
              },
              {
                title: "Cost-Effective",
                description:
                  "Plans that scale with your needs, ensuring you only pay for what you use.",
                icon: "💰",
              },
              {
                title: "Easy Integration",
                description:
                  "Seamlessly integrates with popular CRMs and marketing tools.",
                icon: "🔗",
              },
              {
                title: "Reliable Support",
                description:
                  "24/7 customer support to keep your campaigns running smoothly.",
                icon: "📞",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-blue-900 text-white w-full">
          <div className="px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            About OutreachAI
          </h2>
          <p className="max-w-2xl mx-auto mt-4">
            OutreachAI was founded with a vision to simplify and enhance email
            marketing. We believe in the power of AI to revolutionize outreach,
            making it more effective, efficient, and accessible to everyone.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                🚀
              </div>
              <h3 className="mt-4 font-semibold">Mission</h3>
              <p className="text-gray-300 mt-2 text-sm">
                To empower businesses of all sizes to reach their audience
                effectively through AI-driven solutions.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                🌟
              </div>
              <h3 className="mt-4 font-semibold">Vision</h3>
              <p className="text-gray-300 mt-2 text-sm">
                To become the leading provider of AI-powered email marketing
                tools that inspire connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Choose the Perfect Plan
            </h2>
            <p className="max-w-2xl text-gray-500">
              Unlock the full potential of email automation with plans designed
              for every stage of your journey.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 justify-center items-center">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-blue-600">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {plan.description}
                  </p>
                </div>
                <div className="my-6">
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-500">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/get-started"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
