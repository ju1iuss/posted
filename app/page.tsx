"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sparkles, 
  TrendingUp, 
  MessageCircle, 
  Download,
  MousePointer2,
  ArrowRight,
  Zap,
  Brain,
  Dumbbell,
  Settings,
  DollarSign,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// --- Sub-components ---

const Navbar = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 bg-[#F5F5F4]/80 backdrop-blur-md animate-fade-in border-b border-stone-100">
      <div className="flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Posted" width={28} height={28} className="md:w-8 md:h-8" />
          <span className="font-bold text-lg md:text-xl tracking-tight text-black" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Posted</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-10 font-medium text-[15px] text-stone-600" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <a href="#case-studies" onClick={(e) => handleAnchorClick(e, 'case-studies')} className="hover:text-black transition-colors cursor-pointer">Case Studies</a>
        <a href="#strategy" onClick={(e) => handleAnchorClick(e, 'strategy')} className="hover:text-black transition-colors cursor-pointer">Strategy</a>
        <a href="#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')} className="hover:text-black transition-colors cursor-pointer">Pricing</a>
      </div>

      <Link href="/apply">
        <Button variant="secondary" size="default">
          <Sparkles size={14} />
          Generate Now
        </Button>
      </Link>
    </nav>
  );
};

const FloatingCard = ({ x, y, title, subtitle, icon: Icon, delay = 0 }: any) => (
  <div 
    className="absolute hidden lg:flex items-center gap-3 bg-white border border-stone-200 shadow-lg px-4 py-3 rounded-2xl z-10 animate-float pointer-events-none select-none"
    style={{ 
      top: y, 
      left: x, 
      fontFamily: 'Helvetica, Arial, sans-serif',
      animationDelay: `${delay}s`
    }}
  >
    <div className="text-black flex-shrink-0 bg-stone-50 rounded-lg p-2 border border-stone-200">
      <Icon size={20} strokeWidth={2} />
    </div>
    <div className="flex flex-col">
      <span className="font-bold text-sm text-black leading-tight">{title}</span>
      <span className="text-xs text-stone-400 leading-tight">{subtitle}</span>
    </div>
  </div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  </div>
);

const PhoneShowcase = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[260px] h-[520px] md:w-[280px] md:h-[560px] z-20 mx-auto animate-fade-up group">
      {/* Phone Frame with subtle float and tilt */}
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-stone-900 shadow-2xl border-4 border-stone-800 transition-transform duration-700 ease-in-out group-hover:scale-[1.02] animate-float-slow">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>

        {/* Status Bar */}
        <div className="absolute top-3 w-full px-6 flex justify-between items-center z-20 text-white text-[11px] font-semibold">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
              <rect x="0" y="6" width="3" height="6" rx="0.5"/>
              <rect x="4" y="4" width="3" height="8" rx="0.5"/>
              <rect x="8" y="2" width="3" height="10" rx="0.5"/>
              <rect x="12" y="0" width="3" height="12" rx="0.5"/>
            </svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
              <path d="M7 2C9.76 2 12.18 3.3 13.67 5.33L14 5L7 12L0 5L0.33 5.33C1.82 3.3 4.24 2 7 2Z" fillOpacity="0.3"/>
              <path d="M7 5C8.66 5 10.14 5.74 11.14 6.9L7 11L2.86 6.9C3.86 5.74 5.34 5 7 5Z"/>
            </svg>
            <svg width="22" height="10" viewBox="0 0 22 10" fill="currentColor">
              <rect x="0" y="1" width="18" height="8" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
              <rect x="2" y="3" width="14" height="4" rx="1"/>
              <rect x="19" y="3" width="2" height="4" rx="0.5" fillOpacity="0.4"/>
            </svg>
          </div>
        </div>
        
        <div className="w-full h-full pt-10 flex flex-col bg-black">
          {/* TikTok Header */}
          <div className="px-4 py-3 flex justify-center items-center">
            <div className="flex items-center gap-1">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="white">
                <path d="M8.5 0C8.5 2.5 10.5 4.5 13 4.5V7C11.5 7 10 6.5 8.5 5.5V12.5C8.5 15.5 6 18 3 18C0 18 -2.5 15.5 -2.5 12.5C-2.5 9.5 0 7 3 7V9.5C1.5 9.5 0 11 0 12.5C0 14 1.5 15.5 3 15.5C4.5 15.5 6 14 6 12.5V0H8.5Z"/>
              </svg>
              <span className="text-white font-bold text-sm tracking-tight">TikTok</span>
            </div>
          </div>

          {/* Content Area with Sliding Animation */}
          <div className="flex-1 relative mx-2 mb-2 rounded-xl overflow-hidden bg-white">
            {/* Progress Bar (Dynamic) */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 z-20 transition-all duration-300"></div>

            <div className="w-full h-full relative">
              {/* Slide 1 */}
              <div className={`absolute inset-0 bg-[#DDFC7B] p-5 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeSlide === 0 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[-100%] opacity-0 scale-95'}`}>
                <h2 className="text-[38px] font-black uppercase leading-[0.85] text-black tracking-tight pt-4">
                  Stop<br/>Posting<br/>Boring<br/>Content.
                </h2>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#DDFC7B] font-bold text-lg">1</div>
                  <div className="w-12 h-1.5 bg-black/10 rounded-full"></div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className={`absolute inset-0 bg-white p-5 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeSlide === 1 ? 'translate-x-0 opacity-100 scale-100' : activeSlide === 0 ? 'translate-x-[100%] opacity-0 scale-95' : 'translate-x-[-100%] opacity-0 scale-95'}`}>
                <div className="w-full h-40 bg-rose-50 rounded-2xl border-4 border-dashed border-rose-200 flex items-center justify-center animate-bounce-slow">
                  <TrendingUp size={48} strokeWidth={3} className="text-rose-500" />
                </div>
                <h3 className="text-2xl font-black leading-none uppercase text-black tracking-tighter">
                  Get More<br/>Reach Instantly.
                </h3>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">2</div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className={`absolute inset-0 bg-black p-5 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeSlide === 2 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[100%] opacity-0 scale-95'}`}>
                <h2 className="text-[38px] font-black uppercase leading-[0.85] text-[#DDFC7B] tracking-tight pt-4">
                  Viral<br/>Starts<br/>Here.
                </h2>
                <div className="space-y-3">
                  <Link href="/apply">
                    <div className="w-full py-4 bg-[#DDFC7B] text-black font-black text-center rounded-2xl text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all cursor-pointer active:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                    Join Now
                  </div>
                  </Link>
                </div>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 bg-[#DDFC7B] rounded-full flex items-center justify-center text-black font-bold text-lg">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SWIPE indicator */}
      <div className="absolute -right-24 md:-right-32 bottom-12 z-40 hidden md:flex items-center gap-1 animate-bounce-horizontal">
        <span className="font-bold text-sm tracking-wide uppercase text-black" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>Swipe</span>
        <MousePointer2 size={20} className="text-black -rotate-12" />
      </div>
    </div>
  );
};

const CaseStudySection = () => {
  const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/7.png'];
  
  return (
    <section id="case-studies" className="w-full py-20 bg-white border-t border-stone-100 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black mb-4" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            TikTok carousels are a proven format.
          </h2>
          <p className="text-stone-500 font-medium italic">
            Swipe through examples of viral carousels from creators using this format.
          </p>
        </div>
      </div>

      {/* Marquee/Slideshow Container - Two Rows */}
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* First Row - Scroll Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee flex gap-4 md:gap-6 min-w-full">
            {[...images, ...images].map((src, i) => (
              <div key={`row1-${i}`} className="relative flex-shrink-0 w-[220px] md:w-[300px] aspect-[5/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.08),0px_2px_8px_rgba(0,0,0,0.06)] border-2 border-black/5 hover:scale-105 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.10),0px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-500 bg-stone-50">
                <Image 
                  src={src} 
                  alt={`Case Study ${i + 1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row - Scroll Right (reverse) */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee-reverse flex gap-4 md:gap-6 min-w-full">
            {[...images, ...images].map((src, i) => (
              <div key={`row2-${i}`} className="relative flex-shrink-0 w-[220px] md:w-[300px] aspect-[5/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0px_8px_24px_rgba(0,0,0,0.08),0px_2px_8px_rgba(0,0,0,0.06)] border-2 border-black/5 hover:scale-105 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.10),0px_4px_12px_rgba(0,0,0,0.08)] transition-all duration-500 bg-stone-50">
                <Image 
                  src={src} 
                  alt={`Case Study ${i + 1}`} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Footer Component ---

const Footer = () => (
  <footer className="w-full py-20 bg-stone-50 border-t border-stone-200">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="space-y-6 max-w-sm">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="Posted" width={32} height={32} />
            <span className="font-bold text-xl tracking-tight text-black">Posted</span>
          </div>
          <p className="text-stone-500 text-sm leading-relaxed font-medium">
            The AI-powered factory for viral TikTok carousels. Turn text into swipeable masterpieces in seconds.
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Instagram', 'TikTok'].map((social) => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-400 hover:text-black hover:border-black transition-all">
                <span className="sr-only">{social}</span>
                <div className="w-4 h-4 bg-current rounded-sm opacity-20"></div>
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-stone-400">Product</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="#" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Templates</a></li>
              <li><a href="#" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Showcase</a></li>
              <li><a href="#" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Pricing</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-stone-400">Company</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="#" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">About</a></li>
              <li><a href="#" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Blog</a></li>
              <li><a href="#" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Affiliate</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-stone-400">Legal</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="https://tasy.ai/imprint" target="_blank" rel="noopener noreferrer" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Imprint</a></li>
              <li><a href="https://tasy.ai/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Privacy</a></li>
              <li><a href="https://tasy.ai/terms" target="_blank" rel="noopener noreferrer" className="hover:text-[#DDFC7B] hover:bg-black px-1 -mx-1 transition-all">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-stone-400 uppercase tracking-tighter">
        <p>© 2026 Posted</p>
        <p className="flex items-center gap-2">
          <span className="text-black font-black">Posted</span> — App by <a href="https://tasy.ai" target="_blank" rel="noopener noreferrer" className="text-black font-black hover:text-[#DDFC7B] transition-colors">Tasy AI</a>
        </p>
      </div>
    </div>
  </footer>
);

// --- Main Hero Component ---

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen bg-[#F5F5F4] text-stone-950 overflow-x-hidden selection:bg-[#DDFC7B]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      <BackgroundGrid />

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center items-center pt-32 pb-16">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm mb-6 animate-fade-in">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDFC7B] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DDFC7B]"></span>
          </span>
          <span className="text-xs font-medium text-stone-600" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            <span className="font-bold text-stone-900">Platform Open</span>
            <span className="mx-1.5">•</span>
            <span>Get Started Now</span>
          </span>
        </div>

        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto mb-10 relative px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[82px] font-black tracking-tight mb-5 leading-[0.95] text-black animate-fade-up" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Build TikTok carousels <br className="hidden sm:block" />
            <span style={{ color: '#595547' }}>
              that{' '}
              <span className="relative inline-block">
                <span className="relative z-10">boost your reach</span>
                <svg className="absolute w-full h-3 sm:h-4 md:h-5 -bottom-1 left-0 text-[#DDFC7B] animate-draw-line" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M2 8 Q 25 12 50 8 Q 75 4 98 8" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              {' '}automatically.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-500 max-w-lg mx-auto font-normal leading-relaxed animate-fade-up [animation-delay:200ms]" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
            Turn boring text into high-converting TikTok carousels in seconds. 
            Deeply tuned for the algorithm, designed for humans.
          </p>
          
          <div className="mt-8 animate-fade-up [animation-delay:400ms]">
            <Link href="/apply">
              <Button variant="primary" size="lg" className="group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
              Start Creating Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#DDFC7B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Button>
            </Link>
          </div>
        </div>

        {/* Showcase Section */}
        <div className="relative w-full max-w-5xl h-[400px] sm:h-[480px] flex items-center justify-center mt-8 md:mt-20">
          
          {/* Floating Cards */}
          <FloatingCard x="8%" y="15%" icon={TrendingUp} title="TrendingUp" subtitle="High Retention" delay={0.2} />
          <FloatingCard x="5%" y="60%" icon={MessageCircle} title="MessageCircle" subtitle="14.2k Comments" delay={0.4} />
          
          <PhoneShowcase />

          <FloatingCard x="72%" y="15%" icon={Sparkles} title="Sparkles" subtitle="AI Magic" delay={0.6} />
          <FloatingCard x="75%" y="60%" icon={Download} title="Download" subtitle="Export 4K" delay={0.8} />
          
          {/* Decorative Dotted Curved Lines */}
          <svg className="absolute inset-0 pointer-events-none z-0 hidden lg:block" width="100%" height="100%">
            <path d="M 220 120 Q 320 140 420 240" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 6" fill="none" className="animate-draw-line" />
            <path d="M 200 340 Q 300 340 400 300" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 6" fill="none" className="animate-draw-line" />
            <path d="M 780 120 Q 680 140 580 240" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 6" fill="none" className="animate-draw-line" />
            <path d="M 800 340 Q 700 340 600 300" stroke="#d4d4d4" strokeWidth="1.5" strokeDasharray="6 6" fill="none" className="animate-draw-line" />
          </svg>
        </div>
      </main>

      <CaseStudySection />

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-24 bg-black text-white relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDFC7B] text-black text-[10px] font-black uppercase tracking-tighter mb-8">
            Simple Pricing
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-none uppercase">
            Start creating <br/>
            <span className="text-[#DDFC7B]">viral content today.</span>
          </h2>
          
          <p className="text-stone-400 max-w-xl mx-auto mb-10 text-lg font-medium leading-relaxed">
            One simple plan for serious creators. Get unlimited access to the AI factory and dominate the algorithm.
          </p>
          
          <div className="max-w-sm mx-auto bg-stone-900 border-2 border-[#DDFC7B] rounded-[2.5rem] p-8 mb-12 shadow-[0px_0px_50px_rgba(221,252,123,0.15)]">
            <div className="text-[#DDFC7B] font-black text-sm uppercase tracking-widest mb-2">Pro Plan</div>
            <div className="flex items-end justify-center gap-1 mb-6">
              <span className="text-5xl font-black text-white">200€</span>
              <span className="text-stone-500 font-bold mb-1">/month</span>
            </div>
            
            <ul className="text-left space-y-4 mb-8">
              {[
                'Unlimited AI Generations',
                '4K High-Res Exports',
                'Custom Brand Templates',
                'Priority Support',
                '3-Day Free Trial'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                  <Sparkles size={16} className="text-[#DDFC7B]" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link href="/apply">
              <Button variant="secondary" size="lg" className="w-full bg-[#DDFC7B] text-black hover:bg-lime-300 border-none font-black uppercase italic group">
                <span className="flex items-center gap-2">
                  Start 3-Day Free Trial
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
          </div>
          
          <p className="text-stone-500 text-sm font-mono tracking-tighter">No credit card required to start</p>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full py-32 bg-stone-50 overflow-hidden border-t border-stone-200">
        <div className="container mx-auto px-6 mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
            Accounts are bringing in <br/>
            <span className="bg-black text-[#DDFC7B] px-4 py-1 inline-block transform rotate-1">millions of views</span>
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Independent creators are outperforming the algorithm every single day. 
            High retention, high engagement, zero friction.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="flex gap-8 animate-marquee py-10 px-4">
            {[8, 9, 10, 11, 12, 8, 9, 10, 11, 12].map((num, i) => (
              <div key={i} className="flex-shrink-0 group">
                <div className="relative w-[280px] aspect-[9/16] bg-stone-900 rounded-[2.5rem] border-[6px] border-stone-800 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-500 group-hover:-rotate-1">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-stone-800 rounded-b-xl z-20"></div>
                  
                  <Image 
                    src={`/${num}.jpeg`} 
                    alt={`Viral Result ${num}`}
                    fill
                    className="object-cover"
                  />
                  
                  {/* View Count Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <TrendingUp size={14} className="text-emerald-500" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Reach Boost</span>
                      </div>
                      <div className="text-xl font-black text-black">
                        {num === 8 ? "1.2M" : num === 9 ? "842k" : num === 10 ? "2.4M" : num === 11 ? "530k" : "1.8M"} views
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dominance at Scale Section */}
      <section id="strategy" className="w-full py-32 bg-white relative overflow-hidden border-t border-stone-100 scroll-mt-20">
        <BackgroundGrid />
        <div className="container mx-auto px-6 text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6">
            Dominance at Scale.
          </h2>
          <p className="text-stone-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Spin up 10 niche accounts. Funnel all traffic to one offer. <br className="hidden md:block" />
            One AI brain, infinite reach.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
          {/* Central Hub */}
          <div className="relative z-20 group">
            <div className="w-36 h-36 md:w-64 md:h-64 bg-black rounded-3xl md:rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 md:p-8 shadow-[0px_0px_50px_rgba(221,252,123,0.3)] border-2 border-[#DDFC7B] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(221,252,123,0.1)_0%,transparent_70%)]"></div>
              <h3 className="text-white font-bold text-sm md:text-xl mb-2 md:mb-4 leading-tight relative z-10">Main Offer / <br/>Website Link</h3>
              <div className="bg-stone-900/50 backdrop-blur-sm p-2 md:p-4 rounded-xl md:rounded-2xl border border-white/10 w-full relative z-10">
                <div className="flex items-center justify-center gap-1 md:gap-2 mb-0.5 md:mb-1">
                  <span className="text-xl md:text-4xl font-black text-[#DDFC7B]">24,892</span>
                  <ArrowRight size={16} className="text-[#DDFC7B] -rotate-45 md:hidden" />
                  <ArrowRight size={24} className="text-[#DDFC7B] -rotate-45 hidden md:block" />
                </div>
                <span className="text-stone-400 text-[8px] md:text-xs font-bold uppercase tracking-widest">Visits</span>
              </div>
            </div>
          </div>

          {/* Satellite Accounts - Positioned in a circle */}
          {[
            { image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces', name: 'AI_Hustle', views: '+12.5k', pos: 'top-0 left-[5%] sm:left-[10%] md:left-[20%]' },
            { image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces', name: 'Stoic_Mind', views: '+8.1k', pos: 'top-0 right-[5%] sm:right-[10%] md:right-[20%]' },
            { image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces', name: 'Fit_Tok', views: '+15.3k', pos: 'top-[40%] -right-4 sm:right-0 md:right-[5%]' },
            { image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces', name: 'Tech_Finds', views: '+10.2k', pos: 'bottom-0 right-[5%] sm:right-[10%] md:right-[20%]' },
            { image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces', name: 'Money_Map', views: '+18.9k', pos: 'bottom-0 left-[5%] sm:left-[10%] md:left-[20%]' },
            { image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=faces', name: 'Daily_Facts', views: '+9.4k', pos: 'top-[40%] -left-4 sm:left-0 md:left-[5%]' },
          ].map((acc, i) => (
            <div 
              key={i} 
              className={`absolute ${acc.pos} z-30 animate-float scale-75 md:scale-100`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="bg-white border-2 border-stone-100 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] rounded-2xl px-3 py-2 md:px-5 md:py-3 flex items-center gap-3 md:gap-4 hover:border-black transition-all group cursor-default min-w-[140px] md:min-w-[180px]">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-stone-200 flex-shrink-0">
                  <Image 
                    src={acc.image}
                    alt={acc.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xs md:text-sm text-black">{acc.name}</span>
                  <span className="text-[8px] md:text-[10px] font-bold text-stone-400 uppercase tracking-tight">{acc.views} views/day</span>
                </div>
              </div>
            </div>
          ))}

          {/* Connection Lines with Particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600" preserveAspectRatio="none">
            {/* Top Left */}
            <path id="path0" d="M 250 100 Q 350 200 450 250" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            {/* Top Right */}
            <path id="path1" d="M 750 100 Q 650 200 550 250" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            {/* Right */}
            <path id="path2" d="M 850 300 L 600 300" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            {/* Bottom Right */}
            <path id="path3" d="M 750 500 Q 650 400 550 350" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            {/* Bottom Left */}
            <path id="path4" d="M 250 500 Q 350 400 450 350" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" />
            {/* Left */}
            <path id="path5" d="M 150 300 L 400 300" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" fill="none" />

            {/* Moving Particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={i} r="4" fill="#DDFC7B" className="animate-particle">
                <animateMotion 
                  dur={`${2 + Math.random()}s`} 
                  repeatCount="indefinite" 
                  path={i === 0 ? "M 250 100 Q 350 200 450 250" : i === 1 ? "M 750 100 Q 650 200 550 250" : i === 2 ? "M 850 300 L 600 300" : i === 3 ? "M 750 500 Q 650 400 550 350" : i === 4 ? "M 250 500 Q 350 400 450 350" : "M 150 300 L 400 300"} 
                />
              </circle>
            ))}
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-32 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-16 text-center text-black">
              Frequently Asked <br/>
              <span className="text-[#DDFC7B] bg-black px-4 py-1 inline-block transform -rotate-1">Questions</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "The Format",
                  items: [
                    { q: "Why use carousels over video?", a: "Carousels currently get 3x more engagement on TikTok. They allow viewers to consume information at their own pace, leading to higher conversion rates." },
                    { q: "How do I get ideas for posts?", a: "Our AI scans trending hooks in your niche daily. Just type your topic, and we'll suggest 5 viral angles instantly." },
                    { q: "Where do I find photos?", a: "Posted includes a library of high-quality assets, or you can upload your own. Our AI can also generate custom backgrounds for you." }
                  ]
                },
                {
                  title: "Strategy & Sales",
                  items: [
                    { q: "How do I sell my product?", a: "The final slide is a 'Conversion Engine.' We design it to drive traffic directly to your link in bio, Shopify, or SaaS landing page." },
                    { q: "Does this work for any niche?", a: "If your audience is human, yes. We have templates for everything from Finance and SaaS to Fitness and E-commerce." },
                    { q: "Can I run ads with these?", a: "Absolutely. You can export as high-res images or auto-playing videos optimized for TikTok Ads Manager." }
                  ]
                },
                {
                  title: "Posted General",
                  items: [
                    { q: "Can I use this on other apps?", a: "Yes. Our exports work perfectly for Instagram Carousels, LinkedIn Documents, and YouTube Shorts." },
                    { q: "How many team members?", a: "Our Agency plan supports up to 10 team members with shared folders and collaborative workspaces." },
                    { q: "How do I cancel?", a: "One click in your dashboard. No hidden fees, no phone calls. You keep access until your billing cycle ends." }
                  ]
                }
              ].map((category, i) => (
                <div key={i} className="space-y-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-6 bg-[#DDFC7B] border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"></div>
                    <h3 className="font-mono text-xs font-black uppercase tracking-widest text-stone-400">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {category.items.map((item, j) => (
                      <div key={j} className="group">
                        <h4 className="font-bold text-lg mb-2 text-black leading-tight group-hover:text-stone-600 transition-colors">
                          {item.q}
                        </h4>
                        <p className="text-stone-500 text-sm leading-relaxed font-medium">
                          {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 bg-stone-50 border-2 border-dashed border-stone-200 rounded-3xl text-center">
              <p className="font-bold mb-4 text-black">Still have questions?</p>
              <Button variant="outline" className="rounded-full px-8 border-black text-black hover:bg-black hover:text-white transition-all">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; stroke-dasharray: 1000; }
          to { stroke-dashoffset: 0; stroke-dasharray: 1000; }
        }
        .animate-draw-line {
          animation: drawLine 2s ease-in-out forwards;
        }
        @keyframes bounceHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        .animate-bounce-horizontal {
          animation: bounceHorizontal 2s ease-in-out infinite;
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.95; }
        }
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 40s linear infinite;
        }
        @keyframes particlePulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        .animate-particle {
          filter: drop-shadow(0 0 4px #DDFC7B);
        }
      `}</style>
    </div>
  );
}
