import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

// This hook is available if we ever switch from Google Forms to a custom backend.
// Currently not used - the contact form uses Google Forms embed.
export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: any) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit message");
      }

      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });
}
