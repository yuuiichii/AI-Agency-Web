import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { FormSubmission } from '../types/form';

interface FormState {
  submissions: FormSubmission[];
  addSubmission: (submission: Omit<FormSubmission, 'id' | 'createdAt' | 'status'>) => void;
  updateSubmissionStatus: (id: string, status: FormSubmission['status']) => void;
  settings: {
    domain: string;
    email: string;
  };
  updateSettings: (settings: { domain: string; email: string }) => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      submissions: [],
      settings: {
        domain: '',
        email: '',
      },
      addSubmission: (submission) => {
        set((state) => ({
          submissions: [
            ...state.submissions,
            {
              ...submission,
              id: crypto.randomUUID(),
              createdAt: new Date().toISOString(),
              status: 'pending',
            },
          ],
        }));
      },
      updateSubmissionStatus: (id, status) => {
        set((state) => ({
          submissions: state.submissions.map((sub) =>
            sub.id === id ? { ...sub, status } : sub
          ),
        }));
      },
      updateSettings: (settings) => {
        set({ settings });
      },
    }),
    {
      name: 'form-storage',
    }
  )
);