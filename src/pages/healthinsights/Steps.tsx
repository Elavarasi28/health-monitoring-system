import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface StepsProps {
  stepsData: any[];
  barSize: number;
}

const Steps: React.FC<StepsProps> = ({ stepsData, barSize }) => (
  <Card className="h-80 flex flex-col w-full min-w-0">
    <CardHeader>
      <CardTitle>Steps</CardTitle>
    </CardHeader>
    <CardContent className="flex-1 flex items-center w-full min-w-0">
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={stepsData} barSize={barSize}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="steps" fill="#22c55e" name="Steps" barSize={barSize} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default Steps; 