import useJobModal from "@/hooks/useJobModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";


const JobModal = () => {
    const JobModal = useJobModal();

    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading) {
            return;
        }
        JobModal.onClose();
        JobModal.onOpen();
    }, [isLoading, JobModal, JobModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // TODO ADD LOG IN
            JobModal.onClose();
        } catch (error){
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }, [JobModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Title"
            onChange={(e) => setJobTitle(e.target.value)}
            value={jobTitle}
            disabled={isLoading}
            />
            <Input placeholder="Company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            disabled={isLoading}>
           </Input>
           <Input placeholder="Description *Optional"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            disabled={isLoading}>
           </Input>
           <Input placeholder="Requirements *Optional"
            onChange={(e) => setRequirements(e.target.value)}
            value={requirements}
            disabled={isLoading}>
           </Input>
           <Input placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            disabled={isLoading}>
           </Input>
           <Input placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            disabled={isLoading}>
           </Input>
           <Input placeholder="Status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            disabled={isLoading}>
           </Input>
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p> Need to register?
                <span  onClick={onToggle} className="text-white cursor-pointer hover:underline"
                > Create an account
                </span>
            </p> 
        </div>
    )
    
    return(
        <Modal disabled={isLoading} isOpen={JobModal.isOpen} title="Add Job" actionLabel="Add"
         onClose={JobModal.onClose} onSubmit={onSubmit} body={bodyContent} footer={footerContent}/>
    );
}
export default JobModal;