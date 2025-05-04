
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const taskCategories = [
  {
    title: "Morning Routine",
    time: "6:00 AM - 8:00 AM",
    tasks: [
      { id: 1, title: "Drink water", completed: true },
      { id: 2, title: "Complete morning workout", completed: true },
      { id: 3, title: "Prepare healthy breakfast", completed: false }
    ]
  },
  {
    title: "Study Session",
    time: "10:00 AM - 12:00 PM",
    tasks: [
      { id: 4, title: "Study calculus", completed: false },
      { id: 5, title: "Review biology notes", completed: false },
      { id: 6, title: "Complete physics homework", completed: false }
    ]
  },
  {
    title: "Evening Routine",
    time: "7:00 PM - 10:00 PM",
    tasks: [
      { id: 7, title: "Prepare dinner", completed: false },
      { id: 8, title: "Drink evening water", completed: false },
      { id: 9, title: "No screen time after 9 PM", completed: false }
    ]
  }
];

const DailyTasks = () => {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Daily Schedule</CardTitle>
        <CardDescription>Your planned activities for today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {taskCategories.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{category.title}</h3>
                <div className="flex items-center text-muted-foreground text-sm">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{category.time}</span>
                </div>
              </div>
              <div className="space-y-2">
                {category.tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="flex items-center justify-between p-2 rounded-md border"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${task.completed ? 'bg-wellness-primary text-white' : 'border border-muted-foreground'}`}>
                        {task.completed && <CheckCircle2 className="h-4 w-4" />}
                      </div>
                      <span className={task.completed ? 'text-muted-foreground line-through' : ''}>
                        {task.title}
                      </span>
                    </div>
                    {!task.completed && (
                      <Button variant="ghost" size="sm">
                        Complete
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyTasks;
