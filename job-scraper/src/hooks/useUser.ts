import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

// new

interface User {
    id: string;
    name: string;
    profileImage?: string;
    coverImage?: string;
    // Add other fields as needed
}

const useUser = (userId: string) => {
    const {data, error, isLoading, mutate } = useSWR(userId ? '/api/users/${userId}' : null, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};
export default useUser;

// new useUser for jobModal
/*

const useUser = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);

    return {
        data,
        error,
        isLoading,
        mutate
    }
};

export default useUser;
*/