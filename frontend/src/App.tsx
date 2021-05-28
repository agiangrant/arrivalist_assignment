
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';
import Header from './app/Header';
import TripDashboard from './trip/TripDashboard';

const queryClient = new QueryClient();

const Container = styled.div`
  min-height: 100vh;
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Header />
        <TripDashboard />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
