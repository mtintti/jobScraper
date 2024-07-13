import { create } from 'zustand';

type JobData = {
    title: string;
    company: string;
    location: string;
};

type JobStore = {
    jobData: JobData | null;
    setJobData: (data: JobData) => void;
};

export const useJobStore = create<JobStore>((set) => ({
    jobData: null,
    setJobData: (data) => set({jobData: data}),
}))