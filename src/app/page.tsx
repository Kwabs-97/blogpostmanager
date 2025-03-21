import TanstackQueryClientProvider from "@/Providers/QueryClientProvider";
import Home from "@/components/Home";
export default function HomePage() {
  return (
    <TanstackQueryClientProvider>
      <Home />
    </TanstackQueryClientProvider>
  );
}
