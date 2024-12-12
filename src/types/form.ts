export interface FormSubmission {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'completed';
}