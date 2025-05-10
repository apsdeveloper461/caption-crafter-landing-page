
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
    <section id="pricing" className="py-20 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Start for free today and unlock the power of AI-driven captions. 
            Need more flexibility? Upgrade to Pro for unlimited captions and additional tools to boost your social game!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-lg shadow-lg border ${
                plan.popular ? 'border-brand-purple' : 'border-gray-100'
              } relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-purple text-white py-1 px-4 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                  POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-3xl font-bold mb-6 ${plan.popular ? 'text-brand-purple' : ''}`}>
                {plan.price}
              </p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-brand-purple mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.ctaVariant as "outline" | "default"} 
                className={`w-full py-6 ${plan.popular ? 'gradient-bg text-white hover:opacity-90' : ''}`}
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
