import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";


const LoginModal = () => {
    const LoginModal = useLoginModal();
    const RegisterModal = useRegisterModal();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if(isLoading) {
            return;
        }
        LoginModal.onClose();
        RegisterModal.onOpen();
    }, [isLoading, RegisterModal, LoginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true)

            // TODO ADD LOG IN
            await signIn('credentials', {
                email,
                password
            })

            LoginModal.onClose();
        } catch (error){
            console.log(error);
        }finally{
            setIsLoading(false)
        }
    }, [email, password, LoginModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />
            <Input placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
        <Modal disabled={isLoading} isOpen={LoginModal.isOpen} title="Login" actionLabel="Sign In"
         onClose={LoginModal.onClose} onSubmit={onSubmit} body={bodyContent} footer={footerContent}/>
    );
}
export default LoginModal;
// original loginmodal

/*
// new after routing to user profile page
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        if (isLoading) {
            return;
        }
        loginModal.onClose();
        registerModal.onOpen();
    }, [isLoading, registerModal, loginModal]);

    const onSubmit = useCallback(async () => {
        try {
            setIsLoading(true);

            // Perform sign-in
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false
            });

            if (result?.error) {
                console.log(result.error);
                setIsLoading(false);
                return;
            }

            // Fetch user data
            const session = await fetch('/api/auth/session').then(res => res.json());
            const userId = session?.user?.id;

            if (userId) {
                // Navigate to user profile
                router.push(`/users/${userId}`);
            }

            loginModal.onClose();
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [email, password, loginModal, router]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input 
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>Need to register?
                <span onClick={onToggle} className="text-white cursor-pointer hover:underline">
                    Create an account
                </span>
            </p> 
        </div>
    );

    return (
        <Modal 
            disabled={isLoading} 
            isOpen={loginModal.isOpen} 
            title="Login" 
            actionLabel="Sign In"
            onClose={loginModal.onClose} 
            onSubmit={onSubmit} 
            body={bodyContent} 
            footer={footerContent} 
        />
    );
}

export default LoginModal;
*/