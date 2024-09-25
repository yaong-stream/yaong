'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


const queryClient = new QueryClient();

const RqProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export { RqProvider };
