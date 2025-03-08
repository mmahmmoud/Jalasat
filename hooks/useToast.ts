import { toast } from '@/components/ui/ToastDemo'; // Adjust the import based on your project structure

export const useToast = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    toast({
      title: message,
      variant: type,
    });
  };

  return { showToast };
};