import Button from "../Button";
import JobtrackerButton from "./JobtrackerButton";

interface Application {
    title: string;
    company: string;
    description: string;
    requirements: string;
    location: string;
    date: string;
    status: string;
}

const JobTable: React.FC = () => {
    const applications: Application[] = [
        { title: "Software Engineer", company: "ABC Inc.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", location: "New York, NY", date: "2024-05-30", status: "Pending" },
        { title: "Product Manager", company: "XYZ Corp.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", location: "San Francisco, CA", date: "2024-06-02", status: "Reviewed" },
        { title: "Data Scientist", company: "DataWorks", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", location: "Seattle, WA", date: "2024-06-10", status: "Pending" },
        { title: "Frontend Developer", company: "WebTech Solutions", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", location: "Los Angeles, CA", date: "2024-06-15", status: "Reviewed" },
        { title: "Cybersecurity Analyst", company: "SecureGuard", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", requirements: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", location: "Chicago, IL", date: "2024-06-20", status: "Rejected" },
    ];

    return (
        <div>
            <div className="relative w-full max-w-screen-xl mx-auto flex flex-col min-w-0 break-words w-full shadow-lg rounded-xl mg-6 mt-4 border border-solid border-l-0 border-r-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex">
                        <h3 className="font-extrabold text-zinc-900 text-lg p-4 m-2 text-center">Applications</h3>
                       <JobtrackerButton/>
                    </div>
                </div>
                <div className="block bg-transparent m-4 p-10 w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border border-solid border-l-0 border-r-0">
                                <th className="text-md px-6 py-3">Title</th>
                                <th className="text-md px-6 py-3">Company</th>
                                <th className="text-md px-6 py-3">Description</th>
                                <th className="text-md px-6 py-3">Requirements</th>
                                <th className="text-md px-6 py-3">Location</th>
                                <th className="text-md px-6 py-3">Date</th>
                                <th className="text-md px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications.map((application, index) => (
                                <tr key={index} className="text-center hover:bg-slate-50 group-hover/item:visible">
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">{application.title}</td>
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">{application.company}</td>
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">{application.description}</td>
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">{application.requirements}</td>
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">{application.location}</td>
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">{application.date}</td>
                                    <td className="text-md px-6 py-3 
                                    md:text-lg md:leading-6
                                     md:tracking-normal">
                                        <span className={`p-1.5 text-xs uppercase tracking-wider rounded-lg 
                                     ${getColorClass(application.status)}`}>
                                            {application.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


const getColorClass = (status: string): string => {
    switch (status.toLowerCase()) {
        case "pending":
            return "text-yellow-800 bg-yellow-200 hover:bg-yellow-300";
        case "reviewed":
            return "text-green-800 bg-green-200 hover:bg-green-300";
        case "rejected":
            return "text-red-800 bg-red-200 hover:bg-red-300";
        default:
            return "";
    }
}

export default JobTable;
