/*import useJobModal from "@/hooks/useJobModal";
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
    const [isJob, setIsJob] = useState(true);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        JobModal.onClose();
        JobModal.onOpen();
    }, [isLoading, JobModal, JobModal]);

    const jobClick = (() => {
        console.log("Job has been chosen");
        setIsJob(true);
    });

    const internClick = (() => {
        console.log("Internship has been chosen");
        setIsJob(false);
    });


    

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // TODO ADD LOG IN
            JobModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
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

            <div className="text-neutral-400 text-center mt-4">
                <p>Is this a:
                    <span onClick={jobClick} className="text-white cursor-pointer hover:underline"> Job
                    </span> or a
                    <span onClick={internClick} className="text-white cursor-pointer hover:underline"> Internship?
                    </span>
                </p>

            </div>
        </div>
    )

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p> Need to register?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline"
                > Create an account
                </span>
            </p>
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={JobModal.isOpen} title="Add Job" actionLabel="Add"
            onClose={JobModal.onClose} onSubmit={onSubmit} body={bodyContent} footer={footerContent} />
    );
}
export default JobModal;*/


// old job modal

/*
import useJobModal from "@/hooks/useJobModal";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
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
    const [isJob, setIsJob] = useState(true);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        JobModal.onClose();
        JobModal.onOpen();
    }, [isLoading, JobModal]);

    const jobClick = () => {
        console.log("Job has been chosen");
        setIsJob(true);
    };

    const internClick = () => {
        console.log("Internship has been chosen");
        setIsJob(false); 
    };

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);
            
            // TODO: Add job creation logic
            JobModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [JobModal]);

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
                placeholder="Description *Optional" 
                onChange={(e) => setDescription(e.target.value)} 
                value={description} 
                disabled={isLoading} 
            />
            <Input 
                placeholder="Requirements *Optional" 
                onChange={(e) => setRequirements(e.target.value)} 
                value={requirements} 
                disabled={isLoading} 
            />
            <Input 
                placeholder="Location" 
                onChange={(e) => setLocation(e.target.value)} 
                value={location} 
                disabled={isLoading} 
            />
            <Input 
                placeholder="Date" 
                onChange={(e) => setDate(e.target.value)} 
                value={date} 
                disabled={isLoading} 
            />
             
            <div className="text-neutral-400 text-center mt-4">
                <p>Is this a: 
                    <span 
                        onClick={jobClick} 
                        className={`cursor-pointer hover:underline ${isJob ? 'underline text-white' : ''}`}
                    > Job</span> or an 
                    <span 
                        onClick={internClick} 
                        className={`cursor-pointer hover:underline ${!isJob ? 'underline text-white' : ''}`}
                    > Internship?</span>
                </p>
            </div>
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p> Need to register?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
                    Create an account
                </span>
            </p>
        </div>
    );

    return (
        <Modal 
            disabled={isLoading} 
            isOpen={JobModal.isOpen} 
            title="Add Job or Internship" 
            actionLabel="Add" 
            onClose={JobModal.onClose} 
            onSubmit={onSubmit} 
            body={bodyContent} 
            footer={footerContent} 
        />
    );
};

export default JobModal;

*/

// passing current userId as a prop

import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import toast from "react-hot-toast";
import useJobModal from "@/hooks/useJobModal";
//import { User } from "../../../typings";


type JobModalProps = {
  currentUser: User;
};

const JobModal: React.FC<JobModalProps> = ({ currentUser }) => {
  const jobModal = useJobModal();

  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [requirements, setRequirements] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
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
    console.log("Job has been chosen");
    console.log("The current user of Job post is", currentUser.id);
    setIsJob(true);
  };

  const internClick = () => {
    console.log("Internship has been chosen");
    console.log("The current user of Internship post is", currentUser.id);
    setIsJob(false);
  };

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
/*
      const response = await fetch('/api/jobs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobTitle,
          company,
          description,
          requirements,
          location,
          date,
          status,
          isJob,
          userId: currentUser.id,
        }),
      });

      if (!response.ok) {
        toast.error('Failed to submit');
      }

      jobModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      
    }
  }, [jobTitle, company, description, requirements, location, date, status, isJob, currentUser.id, jobModal]);*/

  // added internships to go to the correct api endpoint
  const apiEndpoint = isJob ? '/api/jobs/add' : '/api/jobs/addInternship'; // Determine endpoint based on isJob flag

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // Adjust fields based on job or internship
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
            titleI: jobTitle, // Assuming jobTitle is shared between job and internship
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
} catch (error) {
  console.error('Error submitting job or internship:', error);
} finally {
  setIsLoading(false);
}
}, [isJob, jobTitle, company, description, requirements, location, date, status, currentUser.id, jobModal]);

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
        placeholder="Description *Optional"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        disabled={isLoading}
      />
      <Input
        placeholder="Requirements *Optional"
        onChange={(e) => setRequirements(e.target.value)}
        value={requirements}
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

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Need to register?
        <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
          {' '}
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={jobModal.isOpen}
      title="Add Job"
      actionLabel="Add"
      onClose={jobModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default JobModal;