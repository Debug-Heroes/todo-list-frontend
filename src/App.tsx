import { QueryClientProvider } from "react-query";
import { Router } from "./routes/router-provider";
import { queryClient } from "./libs/react-query";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}
