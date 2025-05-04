
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-wellness text-white">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Lifestyle?
            </h2>
            <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed">
              Join thousands of users who have improved their health, productivity, and wellbeing with LifeSync.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <div className="grid grid-cols-1 gap-4 min-[400px]:grid-cols-2">
              <Link to="/signup">
                <Button className="w-full bg-white text-wellness-primary hover:bg-white/90">
                  Get Started
                </Button>
              </Link>
              <Link to="/features">
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Free Trial</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">No Credit Card</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-1">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
