
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    water: 5,
    sleep: 7,
    fitness: 30,
    study: 2,
  },
  {
    name: 'Tue',
    water: 7,
    sleep: 6.5,
    fitness: 45,
    study: 3,
  },
  {
    name: 'Wed',
    water: 8,
    sleep: 8,
    fitness: 60,
    study: 4,
  },
  {
    name: 'Thu',
    water: 6,
    sleep: 7.5,
    fitness: 15,
    study: 1,
  },
  {
    name: 'Fri',
    water: 8,
    sleep: 7,
    fitness: 45,
    study: 2.5,
  },
  {
    name: 'Sat',
    water: 7,
    sleep: 9,
    fitness: 75,
    study: 0,
  },
  {
    name: 'Sun',
    water: 6,
    sleep: 8.5,
    fitness: 30,
    study: 1,
  },
];

const ActivityOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Weekly Activity</CardTitle>
          <CardDescription>Your activity trends over the past week</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="water" name="Water (cups)" fill="#3ABFF8" />
              <Bar dataKey="fitness" name="Fitness (mins)" fill="#9B87F5" />
              <Bar dataKey="study" name="Study (hrs)" fill="#4C956C" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Sleep Quality</CardTitle>
          <CardDescription>Your sleep patterns over the past week</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sleep" 
                name="Sleep (hrs)" 
                stroke="#9B87F5" 
                activeDot={{ r: 8 }} 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityOverview;
