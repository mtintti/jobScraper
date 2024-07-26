
import { useCallback, useEffect, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import toast from "react-hot-toast";
import { useBoardStore } from "@/store/BoardStore";
import useJobModal from "@/hooks/useJobModal";
import { useJobStore } from "@/store/JobStore";

type JobModalProps = {
  currentUser: User;
};

const JobModal: React.FC<JobModalProps> = ({ currentUser }) => {
  const jobModal = useJobModal();
  const jobData = useJobStore((state) => state.jobData);
  const getBoard = useBoardStore((state) => state.getBoard);

  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState<string>('');
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isJob, setIsJob] = useState(true);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    jobModal.onClose();
    jobModal.onOpen();
  }, [isLoading, jobModal]);

  const jobClick = () => {
    setIsJob(true);
  };

  const internClick = () => {
    setIsJob(false);
  };

  // Jos jobModal on saanut JobDatan,
  // laitetaan data oikeisiin kohtiin.
  useEffect(() => {
    if (jobData) {
      setJobTitle(jobData.title);
      setCompany(jobData.company);
      setLocation(jobData.location);
    }
  }, [jobData]);
  

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

  const apiEndpoint = isJob ? '/api/jobs/add' : '/api/jobs/addInternship';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      
      ...(isJob
        ? {
            jobTitle,
            company,
            description,
            requirements,
            location,
            date,
            status,
          }
        : {
            titleI: jobTitle, 
            companyI: company,
            descriptionI: description,
            requirementsI: requirements,
            locationI: location,
            date: date,
            status: status,
          }),
      isJob,
      userId: currentUser.id,
    }),
  });

  if (!response.ok) {
    toast.error('Failed to submit');
  }
  toast.success("Post submitted!");
  jobModal.onClose();
  getBoard();
} catch (error) {
  console.error('Error submitting job or internship:', error);
} finally {
  setIsLoading(false);
}
}, [isJob, jobTitle, company, description, requirements, location, date, status, currentUser.id, jobModal, getBoard]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Title"
        onChange={(e) => setJobTitle(e.target.value)}
        value={jobTitle}
        disabled={isLoading}
      />
      <Input
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        disabled={isLoading}
      />
      <Input
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
        disabled={isLoading}
      />
      <Input
        placeholder="Date (YYYY-MM-DD)"
        onChange={(e) => setDate(e.target.value)}
        value={date}
        disabled={isLoading}
      />
      <Input
        placeholder="Status"
        onChange={(e) => setStatus(e.target.value)}
        value={status}
        disabled={isLoading}
      />
      <div className="text-neutral-400 text-center mt-4">
        <p>
          Is this a:
          <span onClick={jobClick} className="text-white cursor-pointer hover:underline">
            {' '}
            Job
          </span>{' '}
          or an
          <span onClick={internClick} className="text-white cursor-pointer hover:underline">
            {' '}
            Internship?
          </span>
        </p>
      </div>
    </div>
  );


  return (
    <Modal
      disabled={isLoading}
      isOpen={jobModal.isOpen}
      title="Add Post"
      actionLabel="Add"
      onClose={jobModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default JobModal;