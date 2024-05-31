import useJobModal from '@/hooks/useJobModal';
import { useRouter } from 'next/router';
import { useCallback } from 'react';


const JobtrackerButton = () => {
    const router = useRouter();
    const JobModal = useJobModal();

    const onClick = useCallback(() => {
        console.log("JobtrackerButton clicked");
        JobModal.onOpen();
    }, [JobModal]);
    return (
        <div onClick={onClick} >
            <div className='mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center
            bg-sky-500 hover:bg-opacity-80 transition courser-ponter'>
                

            </div>
            <div className='mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500
            hover:bg-opacity-90 curser-pointer transition'>
                <p className='hidden lg:block text-center font-semibold text-white text-[20px]'>
                    Open
                </p>

            </div>
        </div>
    );
}
export default JobtrackerButton;