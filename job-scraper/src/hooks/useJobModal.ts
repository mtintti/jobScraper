import { create } from 'zustand';

interface TrackerModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

const useJobModal = create<TrackerModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set ({ isOpen: true}),
    onClose: () => set({ isOpen:false}),
}));
export default useJobModal;