import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { signIn, signOut } from 'next-auth/react';
import { toast } from 'react-hot-toast';





const LoginButton = () => {
    const router = useRouter();
    const LoginModal = useLoginModal();
    
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

    const onClick = useCallback(async () => {
        if (currentUser) {
            await signOut();
            mutateCurrentUser(); 
            toast.success('You have logged out.');
        } else {
            console.log("Login clicked");
            LoginModal.onOpen();
        }
    }, [currentUser, LoginModal, mutateCurrentUser]);

    return (
        <div onClick={onClick} >
            <div className='text-lg font-normal text-zinc-900'>
                <p>
                    {currentUser ? 'Logout' : 'Login'}
                </p>
            </div>
        </div>
    );
}
export default LoginButton;