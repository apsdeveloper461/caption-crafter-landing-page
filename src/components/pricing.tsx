
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "Free Forever",
    features: [
      "5 Captions per day",
      "1 Tone option",
      "Basic hashtag suggestions",
      "Standard support"
    ],
    cta: "Start for Free",
    ctaVariant: "outline",
    popular: false
  },
  {
    name: "Pro Plan",
    price: "$5/month",
    features: [
      "Unlimited captions",
      "All tones & features",
      "Advanced hashtags & CTAs",
      "Priority support",
      "Save favorite captions"
    ],
    cta: "Upgrade Now",
    ctaVariant: "default",
    popular: true
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 md:px-10 lg:px-20 relative theme-transition">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-background/50"></div>
      <div className="absolute inset-0 gradient-bg-subtle opacity-60"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Start for free today and unlock the power of AI-driven captions. 
            Need more flexibility? Upgrade to Pro for unlimited captions and additional tools to boost your social game!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-card p-8 rounded-lg shadow-lg border ${
                plan.popular ? 'border-brand-purple' : 'border-border'
              } relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group cursor-pointer professional-glass`}
            >
              {/* Gradient effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-transparent to-brand-light-purple/10 dark:to-brand-purple/10 rounded-lg"></div>
              
              {/* Animated border effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 border-2 border-brand-purple/70 rounded-lg animate-pulse-slow"></div>
              </div>
              
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-purple text-white py-1 px-4 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 text-foreground relative z-10">{plan.name}</h3>
              <p className={`text-3xl font-bold mb-6 ${plan.popular ? 'text-brand-purple' : 'text-foreground'} relative z-10`}>
                {plan.price}
              </p>
              
              <ul className="mb-8 space-y-3 relative z-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.ctaVariant as "outline" | "default"} 
                className={`w-full py-6 hover-border-btn relative z-10 ${plan.popular ? 'gradient-bg text-white hover:opacity-90' : ''}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
