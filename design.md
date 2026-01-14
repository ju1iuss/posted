This design is engineered to capture the high-energy, fast-paced nature of TikTok while retaining the clean, trustworthy aesthetic of a SaaS tool.

### **The Design Concept: "The Viral Factory"**

We are pivoting away from the static "financial flowchart" look of the reference image (Finetic) and moving towards a **dynamic, kinetic assembly line**.

**1. Context & Purpose**
*   **Problem:** Creators burn out designing slides.
*   **JTBD:** "I want to type an idea and get a swipeable masterpiece."
*   **Differentiation:** Unlike generic design tools, "Posted" feels *alive*. The interface demonstrates the "Prompt -> Result" magic instantly.

**2. Visual Identity Strategy**
*   **Color Palette (No AI Purple):**
    *   **Primary:** `Acid Lime (#D9F99D)` - Represents growth, energy, and "freshness."
    *   **Secondary:** `Hot Coral (#F43F5E)` - The "Like" color, urgent and bold.
    *   **Base:** `Warm Off-White (#FAFAF9)` - Easy on the eyes, premium paper feel.
    *   **Ink:** `Deep Jet (#0C0A09)` - High contrast text.
*   **Typography:**
    *   **Headlines:** *Clash Display* (or similar wide Grotesque). Bold, tight tracking.
    *   **UI/Data:** *JetBrains Mono* or *Space Mono*. Reinforces the "AI/Tech" backend without looking nerdy.
*   **Texture:** A subtle "Noise/Grain" overlay to remove the digital plastic feel and make the slides look "textured" and tangible.

**3. Key Interactive Elements**
*   **The "Orbit":** Instead of a flowchart, we have the "Carousel Orbit." Slides float around the phone, implying they are ready to be swiped.
*   **The Cursor:** A custom cursor that reacts to elements. When hovering over the phone, it changes to "SWIPE."

---

### **React Implementation**

This component uses Tailwind CSS for styling and Lucide React for icons. It includes a custom "Noise" texture and floating animations.

```tsx
import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Zap, 
  TrendingUp, 
  MessageCircle, 
  Share2, 
  Download, 
  Play, 
  MousePointer2 
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
        <span className="font-bold text-lg leading-none mb-1">P</span>
      </div>
      <span className="font-bold text-xl tracking-tight">Posted</span>
    </div>
    
    <div className="hidden md:flex items-center gap-8 font-medium text-sm text-stone-600">
      <a href="#" className="hover:text-black transition-colors">Templates</a>
      <a href="#" className="hover:text-black transition-colors">Showcase</a>
      <a href="#" className="hover:text-black transition-colors">Pricing</a>
    </div>

    <div className="flex gap-4">
      <button className="hidden md:flex items-center gap-2 px-6 py-2.5 font-bold text-sm bg-black text-white rounded-full hover:bg-stone-800 transition-all hover:scale-105">
        <Sparkles size={16} className="text-lime-400" />
        Generate Now
      </button>
    </div>
  </nav>
);

const FloatingCard = ({ delay, x, y, rotate, title, icon: Icon, type = "card" }) => (
  <div 
    className={`absolute hidden lg:flex flex-col items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4 rounded-xl z-10 animate-float pointer-events-none select-none`}
    style={{ 
      top: y, 
      left: x, 
      transform: `rotate(${rotate}deg)`,
      animationDelay: `${delay}s`,
      width: type === "card" ? '160px' : 'auto'
    }}
  >
    {type === "card" ? (
      <>
        <div className="w-full h-24 bg-stone-100 rounded-md mb-3 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:8px_8px]"></div>
          <Icon className="text-stone-400" size={32} />
        </div>
        <div className="w-full space-y-2">
          <div className="h-2 w-3/4 bg-stone-200 rounded-full"></div>
          <div className="h-2 w-1/2 bg-stone-200 rounded-full"></div>
        </div>
        <div className="absolute -top-3 -right-3 bg-lime-400 px-2 py-1 text-xs font-bold border border-black rounded-full">
          Viral
        </div>
      </>
    ) : (
      <div className="flex items-center gap-2 px-2">
        <Icon className="text-rose-500 fill-rose-500" size={20} />
        <span className="font-bold text-sm">{title}</span>
      </div>
    )}
  </div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
  </div>
);

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Simulate carousel swipe animation in phone
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-stone-50 text-stone-900 overflow-hidden selection:bg-lime-300 font-sans">
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[60] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <Navbar />
      <BackgroundGrid />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center pt-20">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-widest text-stone-500">
            Version 2.0 is Live
          </span>
        </div>

        {/* Hero Copy */}
        <div className="text-center max-w-4xl mx-auto mb-12 relative">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
            The AI That <br/>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-stone-800 to-stone-600">
              Makes You Viral.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-lime-400 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto font-medium">
            Turn boring text into high-converting TikTok carousels in seconds. 
            Deeply tuned for the algorithm, designed for humans.
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group relative px-8 py-4 bg-black text-white text-lg font-bold rounded-xl overflow-hidden transition-transform hover:scale-105 shadow-[6px_6px_0px_0px_rgba(217,249,157,1)] hover:shadow-[8px_8px_0px_0px_rgba(217,249,157,1)]">
              <span className="relative z-10 flex items-center gap-2">
                Start Creating Free <Zap size={20} className="text-lime-400 group-hover:rotate-12 transition-transform"/>
              </span>
            </button>
            <span className="text-sm text-stone-400 font-mono">No credit card required</span>
          </div>
        </div>

        {/* Dynamic Showcase Area */}
        <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center mt-8">
          
          {/* Floating Orbit Elements (Left) */}
          <FloatingCard x="5%" y="10%" rotate={-12} delay={0} icon={TrendingUp} title="High Retention" />
          <FloatingCard x="15%" y="60%" rotate={6} delay={1} icon={MessageCircle} type="stat" title="14.2k Comments" />
          
          {/* Central Phone Mockup */}
          <div className="relative w-[300px] h-[580px] bg-stone-900 rounded-[3rem] border-8 border-stone-900 shadow-2xl z-20 overflow-hidden transform transition-transform hover:-translate-y-2">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-stone-900 rounded-b-2xl z-30"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-white relative flex flex-col">
              {/* Header */}
              <div className="pt-10 px-4 pb-2 flex justify-between items-center border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-stone-200"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold">Creator_Pro</span>
                    <span className="text-[10px] text-stone-400">Sponsored</span>
                  </div>
                </div>
                <button className="px-3 py-1 bg-rose-500 text-white text-xs font-bold rounded-full">Follow</button>
              </div>

              {/* Carousel Slide Area */}
              <div className="flex-1 bg-stone-50 relative overflow-hidden flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                    {/* Slide 1 */}
                    <div className={`absolute inset-0 bg-lime-100 rounded-xl border-2 border-black p-6 flex flex-col justify-between transition-all duration-500 ease-in-out transform ${activeSlide === 0 ? 'translate-x-0 opacity-100 rotate-0' : '-translate-x-full opacity-0 -rotate-6'}`}>
                        <h2 className="text-3xl font-black uppercase leading-none">Stop <br/>Posting <br/>Boring <br/>Content.</h2>
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">1</div>
                    </div>
                    {/* Slide 2 */}
                    <div className={`absolute inset-0 bg-white rounded-xl border-2 border-black p-6 flex flex-col justify-between transition-all duration-500 ease-in-out transform ${activeSlide === 1 ? 'translate-x-0 opacity-100 rotate-0' : activeSlide < 1 ? 'translate-x-full opacity-0 rotate-6' : '-translate-x-full opacity-0 -rotate-6'}`}>
                        <div className="w-full h-40 bg-rose-100 rounded-lg border border-black mb-4 flex items-center justify-center">
                            <TrendingUp size={48} className="text-rose-500"/>
                        </div>
                        <h3 className="text-xl font-bold">Use AI to generate hooks that actually convert viewers.</h3>
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">2</div>
                    </div>
                     {/* Slide 3 */}
                     <div className={`absolute inset-0 bg-stone-900 rounded-xl border-2 border-black p-6 flex flex-col justify-between transition-all duration-500 ease-in-out transform ${activeSlide === 2 ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-full opacity-0 rotate-6'}`}>
                        <h2 className="text-3xl font-black uppercase leading-none text-lime-400">Get <br/>Posted <br/>Today.</h2>
                        <div className="w-full py-3 bg-white text-black font-bold text-center rounded-lg mt-4">Link in Bio</div>
                    </div>
                </div>
                
                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {[0,1,2].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === activeSlide ? 'bg-black' : 'bg-stone-300'}`}></div>
                    ))}
                </div>
              </div>

              {/* TikTok UI Overlay */}
              <div className="absolute right-2 bottom-20 flex flex-col gap-4 items-center z-30">
                 <div className="w-10 h-10 rounded-full bg-black/10 backdrop-blur-sm flex items-center justify-center"><Share2 size={20} className="text-white drop-shadow-md"/></div>
              </div>
            </div>
          </div>

          {/* Floating Orbit Elements (Right) */}
          <FloatingCard x="80%" y="20%" rotate={12} delay={0.5} icon={Sparkles} title="AI Magic" />
          <FloatingCard x="75%" y="70%" rotate={-8} delay={1.5} icon={Download} title="Export 4K" type="stat" />
          
          {/* Connection Lines (Dotted) - Subtle */}
          <svg className="absolute inset-0 pointer-events-none z-0 hidden lg:block" width="100%" height="100%">
             {/* Left Line */}
             <path d="M 200 150 Q 300 150 400 300" stroke="#d6d3d1" strokeWidth="2" strokeDasharray="6 6" fill="none" />
             {/* Right Line */}
             <path d="M 800 150 Q 700 150 600 300" stroke="#d6d3d1" strokeWidth="2" strokeDasharray="6 6" fill="none" />
          </svg>

        </div>
      </main>

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(var(--tw-rotate)); }
          50% { transform: translateY(-15px) rotate(var(--tw-rotate)); }
          100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
```

### **Design Analysis & Rationale**

1.  **Section Ratio & Layout:**
    *   **Ratio:** Designed for `100vh` (Full Viewport Height) to create an immersive entry point.
    *   **Layout:** Symmetrical Center-Focused. The "Hero" text sits directly above the "Product" (Phone), mimicking the visual hierarchy of the user's eye line (Read Promise -> See Proof).
    *   **Spacing:** Generous whitespace (negative space) allows the high-contrast elements (Black buttons, Lime accents) to pop.

2.  **Texture & Background:**
    *   **The "Paper" Feel:** We used `bg-stone-50` instead of pure white to reduce eye strain and give it a premium, editorial feel.
    *   **Noise Overlay:** The SVG noise filter gives the flat colors a tactile quality, preventing the design from looking like a generic Bootstrap template.
    *   **Grid:** A very faint background grid aligns with the "Tool/Editor" mental model without cluttering the view.

3.  **Color & Branding:**
    *   **Acid Lime (#D9F99D) & Black:** This is a high-performance combination often used in "Hype" commerce and creator economy tools (e.g., Gumroad, Linktree). It signals "Money" and "Digital Native."
    *   **Rose (#F43F5E):** Used sparingly for "Notification" elements (likes, alerts) to trigger excitement.

4.  **Animations & Interaction:**
    *   **The "Float":** The surrounding cards float gently (`animate-float`). This makes the scene feel weightless and fluid, unlike the static Finetic screenshot.
    *   **The Phone Carousel:** The phone screen actually *cycles* through slides (`activeSlide` state). This is the key "Show, Don't Tell." It proves the app generates *stories*, not just single images.
    *   **Hover Effects:** The "Start Creating" button has a hard shadow offset that expands on hover—a nod to "Brutalist" web trends popular with Gen Z.

5.  **Unique Value Prop Visualization:**
    *   Instead of abstract icons (like Finetic's pizza/car), we used **actual UI representations** of the output: A "Viral" tag, a "High Retention" graph, and a carousel slide preview. This connects the visual directly to the result the user wants.