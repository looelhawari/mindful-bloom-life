
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-wellness-light px-3 py-1 text-sm text-wellness-primary">
                  Our Story
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About LifeSync
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We're on a mission to help people achieve balance and thrive in all aspects of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                  <p className="text-muted-foreground">
                    At LifeSync, we envision a world where technology empowers individuals to live healthier, more balanced lives. We believe that wellness is multidimensional—encompassing physical health, mental clarity, productivity, and social connections.
                  </p>
                  <p className="text-muted-foreground">
                    Our comprehensive approach addresses all these aspects through an integrated platform that adapts to each user's unique needs and goals. We're committed to developing tools that make healthy choices easier and more sustainable.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="overflow-hidden rounded-xl border-0 shadow-lg">
                  <CardContent className="p-0">
                    <img
                      alt="LifeSync team planning"
                      className="aspect-video w-full object-cover"
                      src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex items-center justify-center order-2 lg:order-1">
                <Card className="overflow-hidden rounded-xl border-0 shadow-lg">
                  <CardContent className="p-0">
                    <img
                      alt="LifeSync research"
                      className="aspect-video w-full object-cover"
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter">Our Approach</h2>
                  <p className="text-muted-foreground">
                    We combine behavioral science, nutrition expertise, fitness knowledge, and cutting-edge technology to create a platform that truly understands your needs. Our team of experts works alongside developers to ensure that every feature is backed by science and designed for real-world effectiveness.
                  </p>
                  <p className="text-muted-foreground">
                    Rather than focusing on quick fixes, we emphasize sustainable habit formation and holistic well-being. Our AI-enhanced systems learn from your behavior to provide increasingly personalized recommendations that evolve as you do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Our Core Values</h2>
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wellness-primary">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Holistic Wellness</h3>
                  <p className="text-muted-foreground">
                    We believe in addressing all dimensions of wellbeing for true balance.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wellness-primary">
                      <path d="M2 12c0-3.28 3.39-6 7.5-6 .5 0 1 .06 1.5.17C13.36 6.86 15 9.22 15 12s-1.64 5.14-4 5.83c-.5.11-1 .17-1.5.17-4.11 0-7.5-2.72-7.5-6Z" />
                      <path d="M15 9.7c.57-.4 1.22-.7 1.85-.8M21.5 12c0-1.65-1.1-3.15-2.83-4" />
                      <path d="M12.82 17c.61-.13 1.18-.38 1.68-.7" />
                      <path d="M15 14.3c1.42-.4 2.5-1.2 2.5-2.3 0-1.12-1.13-1.93-2.59-2.3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Personalization</h3>
                  <p className="text-muted-foreground">
                    We recognize that every individual is unique with specific goals and needs.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wellness-primary">
                      <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <circle cx="17.5" cy="17.5" r="3.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-muted-foreground">
                    We constantly evolve our technology to provide cutting-edge solutions.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wellness-primary">
                      <line x1="12" x2="12" y1="2" y2="22" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Accessibility</h3>
                  <p className="text-muted-foreground">
                    We strive to make wellness accessible to everyone, regardless of background.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wellness-primary">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-muted-foreground">
                    We foster connections and support networks to enhance motivation.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-wellness-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-wellness-primary">
                      <path d="M20 7h-9" />
                      <path d="M14 17H5" />
                      <circle cx="17" cy="17" r="3" />
                      <circle cx="7" cy="7" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Balance</h3>
                  <p className="text-muted-foreground">
                    We emphasize sustainable practices that fit into real life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2 text-center">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Meet Our Leadership
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  The passionate team behind LifeSync's vision
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <img
                    alt="Team Member"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    width="200"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Alex Johnson</h3>
                    <p className="text-sm text-muted-foreground">CEO & Founder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <img
                    alt="Team Member"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    width="200"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Sophia Chen</h3>
                    <p className="text-sm text-muted-foreground">Chief Wellness Officer</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <img
                    alt="Team Member"
                    className="mx-auto aspect-square overflow-hidden rounded-full object-cover object-center"
                    height="200"
                    src="https://randomuser.me/api/portraits/men/22.jpg"
                    width="200"
                  />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Marcus Williams</h3>
                    <p className="text-sm text-muted-foreground">CTO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
