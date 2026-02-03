"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight, Star, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: '',
    contentApproach: '',
    tiktokExperience: '',
    name: '',
    email: '',
    company: ''
  });

  const handleSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => setStep(prev => prev + 1), 300); // Snappy transition
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStep(5);
        // Redirect to app after a short delay to show success
        setTimeout(() => {
          window.location.href = 'https://app.posted.dev';
        }, 2500);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] text-stone-950 font-sans selection:bg-[#DDFC7B] flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <Link href="/" className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center gap-2 z-10">
        <Image src="/logo.svg" alt="Posted" width={24} height={24} className="sm:w-7 sm:h-7" />
        <span className="font-bold text-base sm:text-lg tracking-tight">Posted</span>
      </Link>

      <div className="w-full max-w-xl relative z-10 mt-12 sm:mt-0">
        {/* Progress Bar */}
        {step < 5 && (
          <div className="flex gap-1.5 sm:gap-2 mb-8 sm:mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div 
                key={s} 
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-black' : 'bg-stone-200'}`}
              />
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8">
              What's your <br/>
              <span className="text-[#DDFC7B] bg-black px-2">goal?</span>
            </h1>
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {['Grow my personal brand', 'Drive sales/leads for my business', 'Build an audience from scratch', 'Scale my agency\'s content output', 'Improve content quality & consistency'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('goal', option)}
                  className="group flex justify-between items-center p-4 sm:p-6 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left"
                >
                  <span className="font-bold text-base sm:text-lg">{option}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8">
              How do you want to <br/>
              <span className="text-[#DDFC7B] bg-black px-2">create content?</span>
            </h1>
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {['Build content for TikTok myself', 'Get someone to build content for us', 'Scale existing content production', 'Learn content strategy & best practices', 'Automate content creation workflow'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('contentApproach', option)}
                  className="group flex justify-between items-center p-4 sm:p-6 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left"
                >
                  <span className="font-bold text-base sm:text-lg">{option}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8">
              What's your <br/>
              <span className="text-[#DDFC7B] bg-black px-2">experience with TikTok?</span>
            </h1>
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {['Never used TikTok', 'We have a TikTok account but struggling', 'We post regularly but want to scale', 'We\'re growing fast and want to optimize'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('tiktokExperience', option)}
                  className="group flex justify-between items-center p-4 sm:p-6 bg-white border-2 border-stone-200 rounded-xl sm:rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left"
                >
                  <span className="font-bold text-base sm:text-lg">{option}</span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-up">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-6 sm:mb-8 text-center sm:text-left">
              Join 500+ <br/>
              <span className="text-[#DDFC7B] bg-black px-2">creators.</span>
            </h1>
            
            <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(221,252,123,1)] sm:shadow-[8px_8px_0px_0px_rgba(221,252,123,1)] p-5 sm:p-8 rounded-2xl sm:rounded-3xl space-y-6">
              {/* Rating / Social Proof */}
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-stone-400">4.9/5 Rating</span>
              </div>

              {/* Case Study Example */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="text-[#DDFC7B]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">Result: 1.2M Views in 7 Days</h4>
                    <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed">
                      "I spent 5 minutes on Posted and the first carousel went viral. My engagement is up 340%."
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">The Process</h5>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#DDFC7B] border border-black flex items-center justify-center text-[10px] font-black">1</div>
                    <span className="text-xs sm:text-sm font-bold">Plan your TikTok brand account setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#DDFC7B] border border-black flex items-center justify-center text-[10px] font-black">2</div>
                    <span className="text-xs sm:text-sm font-bold">Generate 10+ slides automatically</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#DDFC7B] border border-black flex items-center justify-center text-[10px] font-black">3</div>
                    <span className="text-xs sm:text-sm font-bold">Export and post to TikTok</span>
                  </div>
                </div>
              </div>

              <a href="https://app.posted.dev" className="block">
                <Button className="w-full py-6 sm:py-7 bg-black text-white hover:bg-stone-800 rounded-xl font-black uppercase italic tracking-tighter text-base sm:text-lg mt-2 group">
                  Start creating <Sparkles size={18} className="ml-2 text-[#DDFC7B] group-hover:scale-110 transition-transform" />
                </Button>
              </a>
              
              <p className="text-center text-[10px] font-bold text-stone-400 uppercase tracking-tight">
                3-Day Free Trial • No Credit Card Required
              </p>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center animate-fade-up">
            <div className="w-20 h-20 bg-[#DDFC7B] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
              <CheckCircle2 size={40} className="text-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-6">
              Welcome<br/>
              <span className="text-[#DDFC7B] bg-black px-2">on board.</span>
            </h1>
            <p className="text-stone-500 text-lg font-medium mb-10 max-w-sm mx-auto">
              Redirecting you to the platform...
            </p>
            <a href="https://app.posted.dev">
              <Button variant="outline" className="rounded-full px-8 border-stone-200">
                Click here if not redirected
              </Button>
            </a>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
