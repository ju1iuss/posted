"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
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
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5F4] text-stone-950 font-sans selection:bg-[#DDFC7B] flex flex-col items-center justify-center p-6 relative overflow-hidden" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e7e5e4_1px,transparent_1px),linear-gradient(to_bottom,#e7e5e4_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2.5 z-10">
        <Image src="/logo.svg" alt="Posted" width={28} height={28} />
        <span className="font-bold text-lg tracking-tight">Posted</span>
      </Link>

      <div className="w-full max-w-xl relative z-10">
        {/* Progress Bar */}
        {step < 5 && (
          <div className="flex gap-2 mb-12">
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
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              What's your <br/>
              <span className="text-[#DDFC7B] bg-black px-2">goal?</span>
            </h1>
            <div className="grid grid-cols-1 gap-3">
              {['Grow my personal brand', 'Drive sales/leads for my business', 'Build an audience from scratch', 'Scale my agency\'s content output', 'Improve content quality & consistency'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('goal', option)}
                  className="group flex justify-between items-center p-6 bg-white border-2 border-stone-200 rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left"
                >
                  <span className="font-bold text-lg">{option}</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              How do you want to <br/>
              <span className="text-[#DDFC7B] bg-black px-2">create content?</span>
            </h1>
            <div className="grid grid-cols-1 gap-3">
              {['Build content for TikTok myself', 'Get someone to build content for us', 'Scale existing content production', 'Learn content strategy & best practices', 'Automate content creation workflow'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('contentApproach', option)}
                  className="group flex justify-between items-center p-6 bg-white border-2 border-stone-200 rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left"
                >
                  <span className="font-bold text-lg">{option}</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              What's your <br/>
              <span className="text-[#DDFC7B] bg-black px-2">experience with TikTok?</span>
            </h1>
            <div className="grid grid-cols-1 gap-3">
              {['Never used TikTok', 'We have a TikTok account but struggling', 'We post regularly but want to scale', 'We\'re growing fast and want to optimize'].map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('tiktokExperience', option)}
                  className="group flex justify-between items-center p-6 bg-white border-2 border-stone-200 rounded-2xl hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-left"
                >
                  <span className="font-bold text-lg">{option}</span>
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
              Almost <br/>
              <span className="text-[#DDFC7B] bg-black px-2">there.</span>
            </h1>
            <form onSubmit={handleSubmit} className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(221,252,123,1)] p-8 rounded-3xl space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Vorname</label>
                <input 
                  required
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                  placeholder="Max"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Work Email</label>
                <input 
                  required
                  type="email"
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-1">Company / Website</label>
                <input 
                  required
                  className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-black transition-colors"
                  placeholder="company.com"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <Button type="submit" className="w-full py-7 bg-black text-white hover:bg-stone-800 rounded-xl font-black uppercase italic tracking-tighter text-lg mt-4">
                Sign Up <Sparkles size={18} className="ml-2 text-[#DDFC7B]" />
              </Button>
            </form>
          </div>
        )}

        {step === 5 && (
          <div className="text-center animate-fade-up">
            <div className="w-20 h-20 bg-[#DDFC7B] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-slow">
              <CheckCircle2 size={40} className="text-black" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none mb-6">
              Thanks,<br/>
              <span className="text-[#DDFC7B] bg-black px-2">you're in.</span>
            </h1>
            <p className="text-stone-500 text-lg font-medium mb-10 max-w-sm mx-auto">
              You are now on the waitlist. We'll reach out to your email as soon as a spot opens up.
            </p>
            <Link href="/">
              <Button variant="outline" className="rounded-full px-8 border-stone-200">
                Back to Home
              </Button>
            </Link>
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
