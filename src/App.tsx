import { QueryClientProvider } from "react-query";
import { Router } from "./routes/router-provider";
import { queryClient } from "./libs/react-query";
import { Toaster } from "sonner";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-right"
        richColors
      />
      <Router />
    </QueryClientProvider>
  )
}
