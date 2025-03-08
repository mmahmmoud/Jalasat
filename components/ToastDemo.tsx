// components/ToastDemo.tsx
import { useToast } from "@/hooks/useToast"; // Import from the new file
import { Button } from "@/components/ui/button"; // Assuming you have a Button component
import { toast } from '@/components/ui/toast';

export const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
};