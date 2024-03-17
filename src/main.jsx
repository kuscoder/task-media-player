import '@/styles/main.scss'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { App } from '@/components/App'

const queryClient = new QueryClient()
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
   <QueryClientProvider client={queryClient}>
      <App />
   </QueryClientProvider>
)
