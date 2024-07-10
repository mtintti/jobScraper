import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

interface User {
    id: string;
    name: string;
    profileImage?: string;
    coverImage?: string;
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
