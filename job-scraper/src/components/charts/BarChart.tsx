// /api/jobs/getJobsGroupedByStatus

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

interface JobPost {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string;
  location: string;
  postedDate: string;
  status: string;
  userId: string;
}

interface ColumnData {
  id: string;
  posts: JobPost[];
}

const ChartComponent: React.FC = () => {
  const [data, setData] = useState<{ status: string, count: number }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/jobs/getJobsGroupedByStatus'); // Adjust the endpoint if necessary
        const board = response.data;

        if (board && board.columns ) {
          const transformedData = board.columns.map(([status, columnData]: [string, ColumnData]) => {
            return {
              status,
              count: columnData.posts.length
            };
          });
          setData(transformedData);
        } else {
          console.error('Data format is incorrect:', response.data);
          setError('Received data is not in expected format');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalPostings = Math.max(...data.map(d => d.count), 0);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="0 0" />
        <XAxis dataKey="status" />
        <YAxis domain={[0, totalPostings + 1]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartComponent;
