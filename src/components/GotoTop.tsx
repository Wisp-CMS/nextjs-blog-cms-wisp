
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export const GotoTop = () => {
    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    
  // Once the component has mounted, we can safely render
    return (
        <Button variant="ghost" onClick={scrollToTop} className="p-2"> 
             <ArrowUp className="w-6 h-6" /> 
        </Button>
    );
};
