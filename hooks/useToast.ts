import { toast } from 'sonner';

export const useToast = () => {
  const showToast = (
    title: string,
    description?: string,
    variant: 'default' | 'destructive' = 'default'
  ) => {
    toast(title, {
      description,
      className: variant === 'destructive' ? 'bg-red-500 text-white' : 'bg-dark-1 text-white',
    });
  };

  return { showToast };
};