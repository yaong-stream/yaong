'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();

const RqProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    )
}

export { RqProvider };
