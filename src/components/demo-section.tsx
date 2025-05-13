import { Play, X } from "lucide-react";
import { useState } from "react";
import demoImage from "@/assets/lightDemoImg.png";

export const DemoSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="demo"
      className="py-20 px-6 md:px-10 lg:px-20 bg-background theme-transition"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Watch <span className="gradient-text">CaptionCrafter</span> in
            Action
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            See how effortless it is to create engaging captions for any
            platform in just seconds.
          </p>
        </div>

        <div
          className="relative rounded-xl overflow-hidden shadow-2xl aspect-video bg-gray-900 perspective-container reveal"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={demoImage}
            alt="CaptionCrafter Demo"
            className={`w-full h-full object-cover opacity-60 transition-transform duration-500 ${
              isHovered ? "scale-105" : ""
            }`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-brand-purple/10 to-brand-vivid-purple/10 backdrop-blur-sm dark:from-brand-purple/20 dark:to-brand-vivid-purple/20">
            <button
              className="w-20 h-20 bg-white dark:bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-white/100 transition-all duration-300 hover:scale-110"
              aria-label="Play demo video"
              onClick={() => setShowVideo(true)}
            >
              <Play size={36} className="text-brand-purple ml-1" />
            </button>
          </div>
        </div>
        {/* Video Modal */}
        {showVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setShowVideo(false)}
          >
            <div
              className="relative w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-6 -right-6 bg-white rounded-full p-2 shadow hover:bg-gray-200 transition"
                aria-label="Close video"
                onClick={() => setShowVideo(false)}
              >
                <X size={28} className="text-gray-700" />
              </button>
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
               
                src="https://www.youtube.com/embed/N1JTC3zveLI?autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="text-center mt-8 reveal">
          <p className="text-foreground/80">
            A quick demo showing how easy it is to generate captions.
          </p>
        </div>
      </div>
    </section>
  );
};
