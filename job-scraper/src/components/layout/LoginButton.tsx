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
            console.log("User, ", currentUser, "logged out.")
        } else {
            console.log("Login clicked");
            LoginModal.onOpen();
            console.log("The signed in user is: " ,currentUser);
        }
    }, [currentUser, LoginModal, mutateCurrentUser]);
    if(currentUser) {
        console.log("The signed in user is: " ,currentUser);  
    }

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




/*
const LoginButton = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

    const onClick = useCallback(async () => {
        if (currentUser == "guest") { 
            loginModal.onOpen();
            console.log("The signed in user is: " ,currentUser);
        } else {
            await signOut();
            mutateCurrentUser();
            toast.success('You have logged out.');
            console.log("User, ", currentUser, "logged out.")
        }
    }, [currentUser, loginModal, mutateCurrentUser]);


    return (
        <div onClick={onClick}>
            <div className='text-lg font-normal text-zinc-900'>
                <p>{currentUser ? 'Logout' : 'Login'}</p>
            </div>
        </div>
    );
};
export default LoginButton;*/