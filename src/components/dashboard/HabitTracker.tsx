
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, XCircle, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

const habitData = [
  { 
    name: 'No Smoking', 
    streak: 14, 
    progress: 70, 
    days: [true, true, true, true, true, false, true] 
  },
  { 
    name: 'No Social Media', 
    streak: 5, 
    progress: 45, 
    days: [true, true, false, true, true, true, false] 
  },
  { 
    name: 'Morning Workout', 
    streak: 21, 
    progress: 90, 
    days: [true, true, true, true, true, true, true] 
  }
];

const HabitTracker = () => {
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Habit Tracker</CardTitle>
        <CardDescription>Track your progress breaking bad habits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {habitData.map((habit, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{habit.name}</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 mr-1 text-wellness-primary" />
                  <span className="font-medium">{habit.streak} day streak</span>
                </div>
              </div>
              
              <Progress value={habit.progress} className="h-2" />
              
              <div className="flex justify-between items-center mt-2">
                <div className="grid grid-cols-7 gap-1">
                  {habit.days.map((completed, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div 
                        className={cn(
                          "w-8 h-8 flex items-center justify-center rounded-full",
                          completed ? "bg-wellness-primary/20" : "bg-muted"
                        )}
                      >
                        {completed ? (
                          <CheckCircle2 className="h-5 w-5 text-wellness-primary" />
                        ) : (
                          <XCircle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{daysOfWeek[idx]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default HabitTracker;
