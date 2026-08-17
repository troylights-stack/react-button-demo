import { Button } from './components/Button'

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gray-50 p-8">
      <h1 className="text-2xl font-semibold text-gray-900">Button variants</h1>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary" disabled>
          Primary disabled
        </Button>
        <Button variant="secondary" disabled>
          Secondary disabled
        </Button>
        <Button variant="ghost" disabled>
          Ghost disabled
        </Button>
      </div>
    </div>
  )
}

export default App
