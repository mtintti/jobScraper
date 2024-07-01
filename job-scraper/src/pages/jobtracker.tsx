import Board from "@/components/layout/Board";
import Header from "@/components/layout/Header";
import JobTable from "@/components/layout/JobTable";
import { DragDropContext } from 'react-beautiful-dnd';


const JobTracker = () => {
    return (
        <div>
            <Header/>
            <Board/>
        </div>
    );
};

export default JobTracker;

            
           /* <Board/> */ 
           /* <JobTable />
            <div className="">
                <h1>Job Tracker</h1>
                <p>This is the job tracker page.</p>
            </div> */
