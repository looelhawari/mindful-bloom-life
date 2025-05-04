
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Activity, Clock, Droplet, BookOpen, Heart, 
  Trash2, CheckCircle2, TrendingUp, FlaskConical 
} from 'lucide-react';

const DashboardCards = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
          <Droplet className="h-4 w-4 text-wellness-primary" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-2xl font-bold">6/8 cups</div>
          <Progress value={75} className="h-2" />
          <p className="text-xs text-muted-foreground">
            75% of daily goal completed
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sleep Quality</CardTitle>
          <Clock className="h-4 w-4 text-wellness-primary" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-2xl font-bold">7.5 hrs</div>
          <Progress value={85} className="h-2" />
          <p className="text-xs text-muted-foreground">
            Slept 85% of recommended time
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Fitness</CardTitle>
          <Heart className="h-4 w-4 text-wellness-primary" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-2xl font-bold">2/3 workouts</div>
          <Progress value={67} className="h-2" />
          <p className="text-xs text-muted-foreground">
            67% of weekly goal completed
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Diet Plan</CardTitle>
          <Activity className="h-4 w-4 text-wellness-primary" />
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-2xl font-bold">1,824 kcal</div>
          <Progress value={92} className="h-2" />
          <p className="text-xs text-muted-foreground">
            92% of daily calories consumed
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCards;
