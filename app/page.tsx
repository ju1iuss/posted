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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 lg:px-24 py-4 animate-fade-in">
      <div className="flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2.5 group transition-all">
          <div className="relative">
            <div className="absolute inset-0 bg-[#DDFC7B] blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <Image src="/logo.svg" alt="Posted" width={28} height={28} className="md:w-8 md:h-8 relative z-10" />
          </div>
          <span className="font-black text-lg md:text-xl tracking-tighter text-black">Posted</span>
        </Link>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-bold text-[14px] text-stone-500 uppercase tracking-widest">
        <a href="#case-studies" onClick={(e) => handleAnchorClick(e, 'case-studies')} className="hover:text-black transition-colors cursor-pointer relative group">
          Case Studies
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DDFC7B] transition-all group-hover:w-full"></span>
        </a>
        <a href="#strategy" onClick={(e) => handleAnchorClick(e, 'strategy')} className="hover:text-black transition-colors cursor-pointer relative group">
          Strategy
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DDFC7B] transition-all group-hover:w-full"></span>
        </a>
        <a href="#pricing" onClick={(e) => handleAnchorClick(e, 'pricing')} className="hover:text-black transition-colors cursor-pointer relative group">
          Pricing
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#DDFC7B] transition-all group-hover:w-full"></span>
        </a>
      </div>

      <Link href="/apply">
        <Button variant="secondary" size="default" className="shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <Sparkles size={14} className="animate-pulse" />
          Generate Now
        </Button>
      </Link>
    </nav>
  );
};

const FloatingCard = ({ x, y, title, subtitle, icon: Icon, delay = 0, rotation = 0 }: any) => (
  <div 
    className="absolute hidden lg:flex items-center gap-2 bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] px-3 py-2.5 rounded-xl z-10 animate-float pointer-events-none select-none hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.15)] transition-all"
    style={{ 
      top: y, 
      left: x, 
      animationDelay: `${delay}s`,
      transform: `rotate(${rotation}deg)`
    }}
  >
    <div className="text-black flex-shrink-0 bg-[#DDFC7B] rounded-lg p-2 border-2 border-black">
      <Icon size={18} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col">
      <span className="font-black text-[13px] text-black leading-tight uppercase tracking-tight">{title}</span>
      <span className="text-[10px] font-bold text-stone-400 leading-tight uppercase tracking-wider">{subtitle}</span>
    </div>
  </div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
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
    <div className="relative w-[220px] h-[440px] md:w-[240px] md:h-[480px] z-20 mx-auto animate-fade-up group">
      {/* Phone Frame with subtle float and tilt */}
      <div className="relative w-full h-full rounded-[3rem] overflow-hidden bg-black shadow-[0px_0px_0px_4px_rgba(0,0,0,1),0px_30px_60px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 ease-in-out group-hover:scale-[1.02] animate-float-slow group-hover:shadow-[0px_0px_0px_4px_rgba(0,0,0,1),0px_50px_100px_-20px_rgba(0,0,0,0.3)]">
        {/* Dynamic Island */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-center">
          <div className="w-12 h-1 bg-white/10 rounded-full"></div>
        </div>

        {/* Status Bar */}
        <div className="absolute top-4 w-full px-8 flex justify-between items-center z-30 text-white text-[12px] font-bold tracking-tight">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor">
              <path d="M1 9.5H3V10.5H1V9.5ZM4.5 7.5H6.5V10.5H4.5V7.5ZM8 5H10V10.5H8V5ZM11.5 2.5H13.5V10.5H11.5V2.5ZM15 0H17V10.5H15V0Z" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
              <path d="M7.5 11L0 3.5C2.08333 1.16667 4.58333 0 7.5 0C10.4167 0 12.9167 1.16667 15 3.5L7.5 11Z" />
            </svg>
            <div className="w-6 h-3 rounded-sm border border-white/30 p-0.5">
              <div className="w-full h-full bg-white rounded-[1px]"></div>
            </div>
          </div>
        </div>
        
        <div className="w-full h-full pt-12 flex flex-col bg-black">
          {/* TikTok Header */}
          <div className="px-4 py-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg width="12" height="14" viewBox="0 0 16 18" fill="black">
                  <path d="M8.5 0C8.5 2.5 10.5 4.5 13 4.5V7C11.5 7 10 6.5 8.5 5.5V12.5C8.5 15.5 6 18 3 18C0 18 -2.5 15.5 -2.5 12.5C-2.5 9.5 0 7 3 7V9.5C1.5 9.5 0 11 0 12.5C0 14 1.5 15.5 3 15.5C4.5 15.5 6 14 6 12.5V0H8.5Z"/>
                </svg>
              </div>
              <span className="text-white font-black text-xs uppercase tracking-widest">For You</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
              <div className="w-1 h-1 bg-white/40 rounded-full"></div>
            </div>
          </div>

          {/* Content Area with Sliding Animation */}
          <div className="flex-1 relative mx-2 mb-2 mt-2 rounded-2xl overflow-hidden bg-white">
            <div className="w-full h-full relative">
              {/* Slide 1 */}
              <div className={`absolute inset-0 bg-[#DDFC7B] p-4 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeSlide === 0 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[-100%] opacity-0 scale-95'}`}>
                <h2 className="text-[32px] font-black uppercase leading-[0.85] text-black tracking-tighter pt-2">
                  Stop<br/>Posting<br/>Boring<br/>Content.
                </h2>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#DDFC7B] font-black text-lg shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">1</div>
                  <div className="flex gap-1.5 pb-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className={`absolute inset-0 bg-white p-4 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeSlide === 1 ? 'translate-x-0 opacity-100 scale-100' : activeSlide === 0 ? 'translate-x-[100%] opacity-0 scale-95' : 'translate-x-[-100%] opacity-0 scale-95'}`}>
                <div className="w-full h-32 bg-stone-50 rounded-xl border-3 border-dashed border-stone-200 flex items-center justify-center animate-bounce-slow overflow-hidden group/chart">
                  <div className="flex items-end gap-1 h-16">
                    {[30, 50, 40, 70, 90, 60, 80].map((h, i) => (
                      <div key={i} className="w-2.5 bg-black rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-black leading-none uppercase text-black tracking-tighter">
                  Scale Your<br/>Reach 10x<br/>Instantly.
                </h3>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-black text-lg shadow-[3px_3px_0px_0px_rgba(221,252,123,1)]">2</div>
                  <div className="flex gap-1.5 pb-2">
                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className={`absolute inset-0 bg-black p-4 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${activeSlide === 2 ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[100%] opacity-0 scale-95'}`}>
                <h2 className="text-[32px] font-black uppercase leading-[0.85] text-[#DDFC7B] tracking-tighter pt-2">
                  Viral<br/>Starts<br/>Here.
                </h2>
                <div className="space-y-3">
                  <Link href="/apply">
                    <div className="w-full py-3 bg-[#DDFC7B] text-black font-black text-center rounded-xl text-base uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all cursor-pointer active:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] scale-100 hover:scale-[1.02]">
                    Join Now
                  </div>
                  </Link>
                </div>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 bg-[#DDFC7B] rounded-full flex items-center justify-center text-black font-black text-lg border-2 border-black">3</div>
                  <div className="flex gap-1.5 pb-2">
                    <div className="w-1.5 h-1.5 bg-[#DDFC7B]/20 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#DDFC7B]/20 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#DDFC7B] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SWIPE indicator */}
      <div className="absolute -right-24 bottom-16 z-40 hidden lg:flex items-center gap-2 animate-bounce-horizontal">
        <div className="flex flex-col items-end">
          <span className="font-black text-[10px] tracking-widest uppercase text-black">Slide to</span>
          <span className="font-black text-base tracking-tighter uppercase text-black">Preview</span>
        </div>
        <MousePointer2 size={18} className="text-black -rotate-12 fill-[#DDFC7B]" />
      </div>
    </div>
  );
};

const CaseStudySection = () => {
  const images = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png', '/7.png'];
  
  return (
    <section id="case-studies" className="w-full py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-[#DDFC7B] text-[10px] font-black uppercase tracking-widest mb-6">
              Proven Format
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-black leading-none uppercase">
              Carousels are the <br/>
              <span className="text-stone-400">new cheat code.</span>
            </h2>
          </div>
          <p className="text-stone-500 font-bold uppercase tracking-tight max-w-xs text-sm md:text-right">
            Swipe through examples of viral carousels from creators dominating the feed.
          </p>
        </div>
      </div>

      {/* Marquee/Slideshow Container - Two Rows */}
      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* First Row - Scroll Left */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee flex gap-4 min-w-full px-4">
            {[...images, ...images].map((src, i) => (
              <div key={`row1-${i}`} className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[4/5] rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] border-2 border-black hover:scale-[1.02] transition-all duration-500 bg-stone-50 group">
                <Image 
                  src={src} 
                  alt={`Case Study ${i + 1}`} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-black uppercase tracking-widest text-[10px]">View Result</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Second Row - Scroll Right (reverse) */}
        <div className="relative flex overflow-x-hidden">
          <div className="py-4 animate-marquee-reverse flex gap-4 min-w-full px-4">
            {[...images, ...images].map((src, i) => (
              <div key={`row2-${i}`} className="relative flex-shrink-0 w-[180px] md:w-[220px] aspect-[4/5] rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] border-2 border-black hover:scale-[1.02] transition-all duration-500 bg-stone-50 group">
                <Image 
                  src={src} 
                  alt={`Case Study ${i + 1}`} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-black uppercase tracking-widest text-[10px]">View Result</span>
                </div>
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
    <div className="relative w-full bg-white text-stone-950 overflow-x-hidden selection:bg-[#DDFC7B]">
      
      <BackgroundGrid />

      <Navbar />

      <main className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center pt-32 pb-12">
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8 lg:gap-12">
          
          {/* Hero Copy - Left side on desktop */}
          <div className="text-center lg:text-left max-w-2xl flex-1 relative z-20">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4 animate-fade-in mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDFC7B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DDFC7B]"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-stone-600">
                <span className="text-black">Platform Open</span>
                <span className="mx-1.5">•</span>
                <span>Get Started Now</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tighter mb-4 leading-[0.9] text-black animate-fade-up">
              Build TikTok <br/>
              carousels that <br/>
              <span className="relative inline-block">
                <span className="relative z-10 text-stone-600">boost reach</span>
                <svg className="absolute w-full h-3 sm:h-4 md:h-5 lg:h-6 -bottom-0.5 left-0 text-[#DDFC7B] animate-draw-line" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M2 8 Q 25 12 50 8 Q 75 4 98 8" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-sm md:text-base text-stone-500 max-w-lg mx-auto lg:mx-0 font-bold leading-relaxed mb-6 animate-fade-up [animation-delay:200ms] uppercase tracking-tight">
              Turn boring text into high-converting TikTok carousels in seconds. 
              Tuned for the algorithm, designed for humans.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 animate-fade-up [animation-delay:400ms] justify-center lg:justify-start">
              <Link href="/apply">
                <Button variant="primary" size="default" className="group relative px-8 h-12 text-base shadow-[6px_6px_0px_0px_rgba(221,252,123,1)] hover:shadow-[3px_3px_0px_0px_rgba(221,252,123,1)] uppercase italic">
                  <span className="relative z-10 flex items-center gap-2">
                    Start Creating Free
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <div className="flex -space-x-2 items-center ml-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200 overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
                <div className="ml-3 text-[10px] font-black uppercase tracking-widest text-stone-400">
                  Join <span className="text-black">2,400+</span> creators
                </div>
              </div>
            </div>
          </div>

          {/* Showcase Section - Right side on desktop */}
          <div className="relative flex-1 w-full max-w-md h-[400px] md:h-[500px] flex items-center justify-center mt-8 lg:mt-0">
            
            {/* Floating Cards - Re-positioned for the new layout */}
            <FloatingCard x="-10%" y="15%" icon={TrendingUp} title="Viral" subtitle="High Retention" delay={0.2} rotation={-6} />
            <FloatingCard x="-15%" y="65%" icon={MessageCircle} title="Engagement" subtitle="14.2k Comments" delay={0.4} rotation={4} />
            <FloatingCard x="75%" y="10%" icon={Sparkles} title="AI Magic" subtitle="One-Click Gen" delay={0.6} rotation={8} />
            <FloatingCard x="80%" y="60%" icon={Download} title="Export" subtitle="4K High-Res" delay={0.8} rotation={-4} />
            
            <PhoneShowcase />
            
            {/* Decorative Dotted Curved Lines - Updated for side-by-side layout */}
            <svg className="absolute inset-0 pointer-events-none z-0 hidden lg:block" width="100%" height="100%" viewBox="0 0 600 600">
              <path d="M 100 150 Q 200 150 250 250" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="8 8" fill="none" className="opacity-50" />
              <path d="M 100 450 Q 200 450 250 350" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="8 8" fill="none" className="opacity-50" />
              <path d="M 500 150 Q 400 150 350 250" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="8 8" fill="none" className="opacity-50" />
              <path d="M 500 450 Q 400 450 350 350" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="8 8" fill="none" className="opacity-50" />
            </svg>
          </div>
        </div>
      </main>

      <CaseStudySection />

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 bg-black text-white relative overflow-hidden scroll-mt-20 border-y-4 border-[#DDFC7B]">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#DDFC7B] opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#DDFC7B] opacity-10 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DDFC7B] text-black text-[10px] font-black uppercase tracking-widest mb-4">
                Simple Pricing
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-[0.9] uppercase">
                Start creating <br/>
                <span className="text-[#DDFC7B]">viral content.</span>
              </h2>
              
              <p className="text-stone-400 max-w-lg mx-auto lg:mx-0 mb-6 text-base font-bold leading-relaxed uppercase tracking-tight">
                One simple plan for serious creators. Get unlimited access to the AI factory and dominate the algorithm.
              </p>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex flex-col">
                  <span className="text-stone-500 font-black text-[10px] uppercase tracking-widest mb-1">Trusted by</span>
                  <div className="flex -space-x-1.5">
                    {[5, 6, 7, 8].map((i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-black bg-stone-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-8 w-px bg-stone-800"></div>
                <div className="flex flex-col">
                  <span className="text-stone-500 font-black text-[10px] uppercase tracking-widest mb-1">Rating</span>
                  <div className="flex items-center gap-0.5 text-[#DDFC7B]">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Sparkles key={i} size={10} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-sm">
              <div className="bg-stone-900 border-4 border-white rounded-[2rem] p-6 relative shadow-[12px_12px_0px_0px_rgba(221,252,123,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[16px_16px_0px_0px_rgba(221,252,123,1)] transition-all group">
                <div className="absolute -top-4 -right-4 bg-[#DDFC7B] text-black font-black px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest shadow-lg -rotate-12 group-hover:rotate-0 transition-transform">
                  Best Value
                </div>
                
                <div className="text-white font-black text-base uppercase tracking-widest mb-1">Pro Plan</div>
                <div className="flex items-end gap-2 mb-5">
                  <span className="text-5xl font-black text-white tracking-tighter">200€</span>
                  <span className="text-stone-500 font-black mb-1 uppercase tracking-widest text-[10px]">/month</span>
                </div>
                
                <ul className="text-left space-y-3 mb-6">
                  {[
                    'Unlimited AI Generations',
                    '4K High-Res Exports',
                    'Custom Brand Templates',
                    'Priority Support',
                    '3-Day Free Trial'
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-xs font-black uppercase tracking-tight text-stone-300">
                      <div className="w-4 h-4 rounded-full bg-[#DDFC7B]/10 flex items-center justify-center border border-[#DDFC7B]/20 flex-shrink-0">
                        <Zap size={8} className="text-[#DDFC7B]" fill="currentColor" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/apply">
                  <Button variant="secondary" size="default" className="w-full bg-[#DDFC7B] text-black hover:bg-white border-none h-12 text-base font-black uppercase italic group shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] hover:shadow-[3px_3px_0px_0px_rgba(255,255,255,1)]">
                    <span className="flex items-center gap-2">
                      Get Started Now
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                
                <p className="text-stone-500 text-[9px] font-black uppercase tracking-widest text-center mt-4">No credit card required to start</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="w-full py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] font-black uppercase tracking-widest mb-4">
            Global Impact
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-4">
            Creators are reaching <br/>
            <span className="bg-black text-[#DDFC7B] px-4 py-1.5 inline-block transform rotate-1 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">millions of views</span>
          </h2>
          <p className="text-stone-500 text-base font-bold max-w-xl mx-auto uppercase tracking-tight">
            Independent creators are outperforming the algorithm every single day. 
            High retention, high engagement, zero friction.
          </p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <div className="flex gap-6 animate-marquee py-8 px-4">
            {[8, 9, 10, 11, 12, 8, 9, 10, 11, 12].map((num, i) => (
              <div key={i} className="flex-shrink-0 group">
                <div className="relative w-[240px] aspect-[9/16] bg-black rounded-[2rem] border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] overflow-hidden group-hover:scale-105 transition-all duration-700 group-hover:-rotate-2">
                  <Image 
                    src={`/${num}.jpeg`} 
                    alt={`Viral Result ${num}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  {/* View Count Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white p-3 rounded-2xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <TrendingUp size={12} className="text-black" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-stone-400">Viral Result</span>
                      </div>
                      <div className="text-2xl font-black text-black tracking-tighter uppercase">
                        {num === 8 ? "1.2M" : num === 9 ? "842k" : num === 10 ? "2.4M" : num === 11 ? "530k" : "1.8M"} <span className="text-stone-400 text-xs">Views</span>
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
      <section id="strategy" className="w-full py-20 bg-white relative overflow-hidden border-t border-stone-100 scroll-mt-20">
        <BackgroundGrid />
        <div className="container mx-auto px-6 text-center mb-12 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none mb-4">
            Dominance at Scale.
          </h2>
          <p className="text-stone-500 text-base font-medium max-w-xl mx-auto">
            Spin up 10 niche accounts. Funnel all traffic to one offer. <br className="hidden md:block" />
            One AI brain, infinite reach.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[450px] flex items-center justify-center">
          {/* Central Hub */}
          <div className="relative z-20 group">
            <div className="w-28 h-28 md:w-48 md:h-48 bg-black rounded-2xl md:rounded-[2rem] flex flex-col items-center justify-center text-center p-3 md:p-6 shadow-[0px_0px_40px_rgba(221,252,123,0.25)] border-2 border-[#DDFC7B] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(221,252,123,0.1)_0%,transparent_70%)]"></div>
              <h3 className="text-white font-bold text-xs md:text-base mb-1 md:mb-2 leading-tight relative z-10">Main Offer / <br/>Website Link</h3>
              <div className="bg-stone-900/50 backdrop-blur-sm p-1.5 md:p-3 rounded-lg md:rounded-xl border border-white/10 w-full relative z-10">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <span className="text-base md:text-2xl font-black text-[#DDFC7B]">24,892</span>
                  <ArrowRight size={12} className="text-[#DDFC7B] -rotate-45 md:hidden" />
                  <ArrowRight size={18} className="text-[#DDFC7B] -rotate-45 hidden md:block" />
                </div>
                <span className="text-stone-400 text-[7px] md:text-[10px] font-bold uppercase tracking-widest">Visits</span>
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
              className={`absolute ${acc.pos} z-30 animate-float scale-70 md:scale-90`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="bg-white border-2 border-stone-100 shadow-[0px_8px_20px_rgba(0,0,0,0.05)] rounded-xl px-2.5 py-1.5 md:px-4 md:py-2 flex items-center gap-2 md:gap-3 hover:border-black transition-all group cursor-default min-w-[120px] md:min-w-[150px]">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full overflow-hidden border-2 border-stone-200 flex-shrink-0">
                  <Image 
                    src={acc.image}
                    alt={acc.name}
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[10px] md:text-xs text-black">{acc.name}</span>
                  <span className="text-[7px] md:text-[9px] font-bold text-stone-400 uppercase tracking-tight">{acc.views} views/day</span>
                </div>
              </div>
            </div>
          ))}

          {/* Connection Lines with Particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 450" preserveAspectRatio="none">
            {/* Top Left */}
            <path id="path0" d="M 250 100 Q 350 200 450 250" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            {/* Top Right */}
            <path id="path1" d="M 750 100 Q 650 200 550 250" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            {/* Right */}
            <path id="path2" d="M 850 300 L 600 300" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            {/* Bottom Right */}
            <path id="path3" d="M 750 500 Q 650 400 550 350" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            {/* Bottom Left */}
            <path id="path4" d="M 250 500 Q 350 400 450 350" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
            {/* Left */}
            <path id="path5" d="M 150 300 L 400 300" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />

            {/* Moving Particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <circle key={i} r="3" fill="#DDFC7B" className="animate-particle">
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
