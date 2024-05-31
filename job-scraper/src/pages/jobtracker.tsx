import Header from "@/components/layout/Header";
import JobTable from "@/components/layout/JobTable";

const JobTracker = () => {
    return (
        <div>
            <Header/>
            <JobTable />
            <div className="">
                <h1>Job Tracker</h1>
                <p>This is the job tracker page.</p>
            </div>
        </div>
    );
};

export default JobTracker;