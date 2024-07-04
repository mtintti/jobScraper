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

        if (currentUser && currentUser.id === '6686b07cdfa48c7c64bd2dc2') {
            console.log("Login clicked");
            LoginModal.onOpen();
            console.log("The signed in user is:", currentUser);
        } else if (currentUser && (!('role' in currentUser))) {
            await signOut();
            mutateCurrentUser();
            toast.success('You have logged out.');
            console.log("User logged out:", currentUser);
        }

    }, [currentUser, LoginModal, mutateCurrentUser]);
    if (currentUser) {
        console.log("The signed in user is: ", currentUser);
    }

    return (
        <div onClick={onClick} >
            <div className='text-lg font-normal text-zinc-900'>
                <p>
                    {currentUser && (currentUser.id === '6686b07cdfa48c7c64bd2dc2') ? 'Login' : 'Logout'}
                </p>
            </div>
        </div>
    );
}
export default LoginButton;
