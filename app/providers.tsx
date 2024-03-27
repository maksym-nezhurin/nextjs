'use client';
import {useState} from "react";
import { Toaster} from "react-hot-toast";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const Providers = ({ children }) => {
	const [queryClient] = useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 1000 * 60
			}
		}
	}));

	return (<>
		<QueryClientProvider client={queryClient}>
			<Toaster position={'bottom-center'} />
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</>)
}

export default Providers;