
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const WaterTracker = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Water Tracker</CardTitle>
        <CardDescription>Track your daily water intake</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 relative">
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-3xl font-bold">6/8</span>
              <span className="text-sm text-muted-foreground">cups</span>
            </div>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle 
                className="text-muted stroke-current" 
                strokeWidth="10" 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent"
              />
              <circle 
                className="text-wellness-primary stroke-current" 
                strokeWidth="10" 
                strokeLinecap="round" 
                cx="50" 
                cy="50" 
                r="40" 
                fill="transparent"
                strokeDasharray={2 * Math.PI * 40}
                strokeDashoffset={2 * Math.PI * 40 * (1 - 0.75)}
                transform="rotate(-90 50 50)"
              />
            </svg>
          </div>

          <div className="mt-6 flex gap-2 justify-center">
            <Button size="sm" variant="outline">
              <Droplet className="mr-1 h-4 w-4" />
              Add Cup
            </Button>
            <Button size="sm" variant="outline" className="text-wellness-primary">
              Set Reminder
            </Button>
          </div>

          <div className="mt-6 w-full">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Daily Goal</span>
              <span className="font-medium">8 cups (2L)</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WaterTracker;
