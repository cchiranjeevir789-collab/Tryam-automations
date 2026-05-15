/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Settings, 
  MessageSquare, 
  Rocket, 
  DollarSign, 
  Phone, 
  Cpu, 
  Clock, 
  Bot, 
  UserPlus, 
  Zap, 
  TrendingUp, 
  MinusCircle,
  BarChart3,
  Network,
  Workflow
} from "lucide-react";

const Logo = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex flex-col items-center gap-2 mb-12"
  >
    <div className="relative group">
      <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full scale-150 animate-pulse" />
      <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Stylized Bull Logo based on provided image */}
        <path 
          d="M20 30C20 15 40 10 50 25C60 10 80 15 80 30C80 45 65 65 50 85C35 65 20 45 20 30Z" 
          fill="white" 
          fillOpacity="0.05" 
        />
        <path 
          d="M15 35C15 15 40 10 50 35C60 10 85 15 85 35C85 55 60 75 50 90C40 75 15 55 15 35Z" 
          stroke="white" 
          strokeWidth="2" 
          strokeOpacity="0.2" 
        />
        <path 
          d="M25 35C25 22 42 18 50 35C58 18 75 22 75 35C75 50 58 65 50 75C42 65 25 50 25 35Z" 
          stroke="white" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        />
        <path 
          d="M40 50L50 58L60 50M50 35V65" 
          stroke="#00d1ff" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="text-center mt-4">
      <h1 className="text-5xl font-black tracking-[0.2em] text-white">TRYAM</h1>
      <p className="text-[10px] tracking-[0.7em] text-brand-accent font-black mt-1 uppercase opacity-90">Automations</p>
    </div>
  </motion.div>
);

const FeatureCard = ({ title, items, icon: Icon, rightIcon: RightIcon }: any) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative group overflow-hidden border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-white/5 to-transparent hover:border-brand-accent/50 transition-colors"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
       {RightIcon && <RightIcon size={120} className="text-white" />}
    </div>

    <div className="flex gap-6 items-start">
      <div className="p-4 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 text-brand-accent">
        <Icon size={32} />
      </div>
      
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase group-hover:text-brand-accent transition-colors">{title}</h3>
        <ul className="space-y-3">
          {items.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-2 text-white/70 text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-accent group-hover:w-full transition-all duration-500" />
  </motion.div>
);

const BenefitCard = () => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative border border-white/10 rounded-3xl p-8 bg-gradient-to-br from-white/5 to-transparent flex flex-col md:flex-row justify-between items-center gap-8"
  >
    <div className="flex gap-6 items-start">
      <div className="p-4 rounded-2xl bg-brand-blue/20 border border-brand-blue/30 text-brand-accent">
        <TrendingUp size={32} />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-6 tracking-tight uppercase">Key Agency Benefits</h3>
        <ul className="space-y-4">
          {[
            { text: "INCREASED PROFIT MARGINS", icon: DollarSign },
            { text: "REDUCED OVERHEAD COSTS", icon: MinusCircle },
            { text: "SCALABLE OUTPUT (Without Headcount)", icon: BarChart3 }
          ].map((benefit, i) => (
            <li key={i} className="flex items-center gap-3 text-white/90 font-semibold text-lg tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-accent" />
              {benefit.text}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="relative">
      <Network size={140} className="text-white opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
         <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_10px_#00d1ff]" />)}
         </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center selection:bg-brand-accent selection:text-black pt-20 pb-32 px-4">
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-brand-blue/10 to-transparent pointer-events-none" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-blue/5 blur-[120px] rounded-full" />
      <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-brand-accent/5 blur-[100px] rounded-full" />
      
      {/* Logos and Hero */}
      <Logo />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
          SCALE YOUR WEB AGENCY <br />
          WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent drop-shadow-[0_0_15px_rgba(0,209,255,0.3)]">TRYAM AUTOMATIONS</span>
        </h2>
        <p className="text-xl md:text-2xl text-white/60 font-medium tracking-wide uppercase">
          BOOST MARGINS, DELIVER FASTER, & UNLOCK NEW SERVICES WITH AI
        </p>
      </motion.div>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-6">
        <FeatureCard 
          title="AI-Powered Workflows"
          icon={Settings}
          rightIcon={Workflow}
          items={[
            "Automate repetitive backend tasks.",
            "Cut project delivery time by up to 30%.",
            "Streamline development cycles."
          ]}
        />
        <FeatureCard 
          title="Client Onboarding & Support"
          icon={UserPlus}
          rightIcon={Bot}
          items={[
            "Intelligent AI-driven chatbots for 24/7 service.",
            "Personalize client interactions.",
            "Improve response efficiency."
          ]}
        />
        <FeatureCard 
          title="Elevated Client Services"
          icon={Zap}
          rightIcon={Rocket}
          items={[
            "Integrate custom AI features directly into client web projects.",
            "Leverage our pre-built frameworks.",
            "Deliver more value faster."
          ]}
        />
      </div>

      {/* Benefits Card Full Width */}
      <div className="w-full max-w-7xl mb-24">
        <BenefitCard />
      </div>

      {/* CTA Section */}
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl w-full"
      >
        <h3 className="text-3xl font-black mb-8 italic tracking-widest uppercase opacity-80">Ready to Automate & Grow?</h3>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-brand-blue to-brand-accent p-[2px] rounded-2xl group transition-all duration-300"
        >
          <div className="bg-brand-dark w-full h-full rounded-[14px] py-6 px-12 group-hover:bg-transparent transition-colors flex items-center justify-center gap-4">
            <span className="text-2xl md:text-4xl font-black tracking-tight text-white group-hover:text-black transition-colors">LET'S TALK!</span>
          </div>
        </motion.button>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3 text-brand-accent">
            <Phone className="fill-brand-accent text-brand-accent" />
            <span className="text-xl font-bold tracking-wider">CALL / WHATSAPP</span>
          </div>
          <div className="h-px md:h-8 w-12 md:w-px bg-white/20" />
          <a href="tel:+918217037173" className="text-2xl md:text-3xl font-black tracking-tighter hover:text-brand-accent transition-colors">
            +91 82170 37173
          </a>
        </div>
      </motion.div>

      {/* Decorative Laptop / UI elements floating at bottom */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-brand-blue/20 blur-[100px] -z-10" />
    </div>
  );
}
