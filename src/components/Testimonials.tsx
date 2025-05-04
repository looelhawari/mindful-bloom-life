
import React from 'react';

const testimonials = [
  {
    quote: "LifeSync has completely transformed my daily routine. The sleep tracking feature has improved my rest quality immensely.",
    author: "Sarah Johnson",
    role: "Fitness Enthusiast",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "As a student, the study management tools have helped me stay organized and focused. My grades have improved significantly!",
    author: "Michael Chen",
    role: "College Student",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    quote: "The personalized diet plans are amazing! I've lost 15 pounds and feel more energetic than ever before.",
    author: "Emily Rodriguez",
    role: "Working Professional",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-wellness-light px-3 py-1 text-sm text-wellness-primary">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Real Results from Real Users
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how LifeSync has helped transform lives and improve wellbeing.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 pt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl border bg-background p-6 shadow-md">
              <svg
                className="absolute right-4 top-4 h-8 w-8 text-wellness-light"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5" />
              </svg>
              <div className="mb-4 mt-8">
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.avatar}
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
