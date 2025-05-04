
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 hero-pattern overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transform Your Lifestyle with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-wellness-primary to-wellness-secondary">
                  LifeSync
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your all-in-one solution for balanced living. Track diet, sleep, fitness, study habits, and more with personalized insights.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/signup">
                <Button className="bg-wellness-primary hover:bg-wellness-primary/90 h-12 px-6">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="h-12 px-6">
                  Explore Features
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <img
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-background"
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                />
                <img
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-background"
                  src="https://randomuser.me/api/portraits/men/21.jpg"
                />
                <img
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-background"
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                />
                <img
                  alt="User"
                  className="h-8 w-8 rounded-full border-2 border-background"
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                />
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by <span className="font-medium">10,000+</span> users worldwide
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[400px] lg:max-w-none relative">
            <div className="animate-float overflow-hidden rounded-2xl border bg-background shadow-xl">
              <img
                alt="App screenshot"
                className="aspect-[4/3] object-cover w-full"
                height="400"
                src="/lovable-uploads/ab0bd501-1493-4693-972a-3f6b2f9a9cf7.png"
                width="600"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-3xl bg-wellness-secondary p-6 shadow-lg hidden md:flex justify-center items-center text-white font-medium">
              AI-Powered
            </div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-3xl bg-wellness-accent p-6 shadow-lg hidden md:flex justify-center items-center text-wellness-dark font-medium">
              Holistic Living
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
