import {QueryClient} from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 60 * 1000 * 5,
        },
    },
});

export default queryClient;
