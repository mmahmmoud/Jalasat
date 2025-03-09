import { useToast } from "@/hooks/useToast"; // Corrected import
import { Button } from "@/components/ui/button";

export const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div>
      <Button
        onClick={() => showToast("Success!", "Your action was successful.")}
      >
        Show Success Toast
      </Button>
      <Button
        variant="destructive"
        onClick={() => showToast("Error!", "Something went wrong.", "destructive")}
      >
        Show Error Toast
      </Button>
    </div>
  );
};