
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeatureDetail from '@/components/FeatureDetail';
import { Activity, Clock, Droplet, BookOpen, Heart, Trash2, BarChart, Users } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

const FeaturesPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-wellness-light px-3 py-1 text-sm text-wellness-primary">
                  LifeSync Features
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Comprehensive Tools for a Balanced Life
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our features work together to help you achieve harmony in all aspects of your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div id="diet">
          <FeatureDetail
            icon={<Activity size={24} className="text-wellness-primary" />}
            title="Personalized Diet Plans"
            description="Our AI-powered nutrition system creates personalized meal plans based on your health goals, dietary restrictions, and food preferences. Track calories and nutrients, receive shopping lists, and get meal suggestions that adapt to your progress."
            image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            bgClass="bg-white"
          />
        </div>

        <div id="sleep">
          <FeatureDetail
            icon={<Clock size={24} className="text-wellness-primary" />}
            title="Advanced Sleep Tracking"
            description="Optimize your rest with our comprehensive sleep analysis. Track sleep cycles, get insights on your sleep quality, and receive personalized recommendations to improve your sleep habits. Wake up refreshed with smart alarms aligned to your natural cycles."
            image="https://images.unsplash.com/photo-1586368390837-9f20e93077a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            isReversed={true}
            bgClass="bg-gray-50"
          />
        </div>

        <div id="fitness">
          <FeatureDetail
            icon={<Heart size={24} className="text-wellness-primary" />}
            title="Fitness Challenges"
            description="Stay motivated with personalized fitness challenges. Compete with friends or join community challenges to keep your momentum going. From beginner to advanced, our adaptive system grows with you and celebrates every achievement."
            image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            bgClass="bg-white"
          />
        </div>

        <div id="study">
          <FeatureDetail
            icon={<BookOpen size={24} className="text-wellness-primary" />}
            title="Study Management"
            description="Boost your academic performance with our study tools. Create optimized study schedules, minimize distractions with focus modes, and track your learning progress. Our system adapts to your learning patterns to help you retain more information with less effort."
            image="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            isReversed={true}
            bgClass="bg-gray-50"
          />
        </div>

        <div id="water">
          <FeatureDetail
            icon={<Droplet size={24} className="text-wellness-primary" />}
            title="Water Reminder"
            description="Stay hydrated throughout the day with personalized water intake goals and timely reminders. Track your consumption with an easy cup-counting system, and see how proper hydration improves your overall wellbeing over time."
            image="https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            bgClass="bg-white"
          />
        </div>

        <div id="habits">
          <FeatureDetail
            icon={<Trash2 size={24} className="text-wellness-primary" />}
            title="Break Bad Habits"
            description="Take control of unwanted behaviors with our habit-breaking system. Set goals, track your progress, and get motivation when you need it most. Our approach combines behavioral science with personalized support to help you make lasting positive changes."
            image="https://images.unsplash.com/photo-1558554142-0b016c857381?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            isReversed={true}
            bgClass="bg-gray-50"
          />
        </div>

        <div id="analytics">
          <FeatureDetail
            icon={<BarChart size={24} className="text-wellness-primary" />}
            title="Graph Analysis"
            description="Visualize your progress across all wellness dimensions with comprehensive analytics. Identify patterns, track improvements, and stay motivated with clear visual representations of your journey. Our insights help you understand where to focus for maximum impact."
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            bgClass="bg-white"
          />
        </div>

        <div id="social">
          <FeatureDetail
            icon={<Users size={24} className="text-wellness-primary" />}
            title="User Connectivity"
            description="Join a supportive community of like-minded individuals. Connect with friends, participate in group challenges, and earn rewards for your achievements. Share your journey, get inspiration from others, and celebrate successes together."
            image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
            isReversed={true}
            bgClass="bg-gray-50"
          />
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
