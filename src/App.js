import Routes from 'routes';
import { CssBaseline } from '@material-ui/core';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import Context from './context/app.state.context.js';


const reactQueryConfig = {
  refetchOnWindowFocus: false,
  retry: false
};

const defaultOptions = {
  queries: reactQueryConfig,
  mutations: reactQueryConfig
};

const queryClient = new QueryClient({
  defaultOptions
});



function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Context >
        <CssBaseline />
        <Routes />
      </Context>
      <Toaster position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
