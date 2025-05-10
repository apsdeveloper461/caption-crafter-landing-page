
import { Play } from "lucide-react";

export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Watch <span className="gradient-text">CaptionCrafter</span> in Action
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how effortless it is to create engaging captions for any platform in just seconds.
          </p>
        </div>
        
        <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="CaptionCrafter Demo" 
            className="w-full h-full object-cover opacity-60"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
              <Play size={36} className="text-brand-purple ml-1" />
            </button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-700">
            A quick 30-second demo showing how easy it is to generate captions.
          </p>
        </div>
      </div>
    </section>
  );
};
