import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from 'recharts';
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

interface BoardData {
    columns: [string, ColumnData][];
}

const SuccessRatePieChart: React.FC = () => {
    const [data, setData] = useState<{ category: string, successRate: number }[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/jobs/getJobsGroupedByStatus');
                const board: BoardData = response.data;

                if (board && board.columns) {
                    const jobData = board.columns.flatMap(([status, columnData]) => columnData.posts);

                    const categoryData = jobData.reduce((acc, job) => {
                        const category = job.title.split(' ')[0]; // Assuming category is the first word of the title
                        if (!acc[category]) {
                            acc[category] = { total: 0, successful: 0 };
                        }
                        acc[category].total += 1;
                        if (job.status === 'Offer') { // Assuming 'Offer' status indicates success
                            acc[category].successful += 1;
                        }
                        console.log("ACC data: " + acc);
                        return acc;
                    }, {} as Record<string, { total: number, successful: number }>);

                    const transformedData = Object.keys(categoryData).map(category => ({
                        category,
                        successRate: (categoryData[category].successful / categoryData[category].total) * 100
                    }));

                    setData(transformedData);
                } else {
                    console.error('Data was in wrong format:', response.data);
                    
                }
            } catch (error) {
                console.error('Error while fetching data:', error);
                
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie data={data} dataKey="successRate" nameKey="category" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label />
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default SuccessRatePieChart;