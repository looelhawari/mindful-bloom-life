
import React from 'react';
import { Activity, Clock, Droplet, BookOpen, Heart, Trash2, BarChart, Users } from 'lucide-react';

const featuresData = [
  {
    icon: <Activity size={24} className="text-wellness-primary" />,
    title: "Personalized Diet Plans",
    description: "Tailored nutrition guidance to meet your individual health goals and dietary preferences."
  },
  {
    icon: <Clock size={24} className="text-wellness-primary" />,
    title: "Advanced Sleep Tracking",
    description: "Monitor sleep cycles and receive insights for better rest and improved energy."
  },
  {
    icon: <Heart size={24} className="text-wellness-primary" />,
    title: "Fitness Challenges",
    description: "Engaging activities and challenges designed to motivate and keep you active."
  },
  {
    icon: <BookOpen size={24} className="text-wellness-primary" />,
    title: "Study Management",
    description: "Tools to organize study schedules and optimize learning efficiency."
  },
  {
    icon: <Droplet size={24} className="text-wellness-primary" />,
    title: "Water Reminder",
    description: "Stay hydrated with timely reminders and track your daily water intake."
  },
  {
    icon: <Trash2 size={24} className="text-wellness-primary" />,
    title: "Break Bad Habits",
    description: "Support and motivation to overcome unwanted habits with progress tracking."
  },
  {
    icon: <BarChart size={24} className="text-wellness-primary" />,
    title: "Graph Analysis",
    description: "Visualize your progress across all wellness dimensions to stay motivated."
  },
  {
    icon: <Users size={24} className="text-wellness-primary" />,
    title: "User Connectivity",
    description: "Connect with others, join challenges, and earn rewards in a supportive community."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50" id="features">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-wellness-light px-3 py-1 text-sm text-wellness-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Everything You Need for a Balanced Life
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive suite of wellness tools helps you achieve harmony in all aspects of your life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-wellness-primary to-wellness-secondary transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
