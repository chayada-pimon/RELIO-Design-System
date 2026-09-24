import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

function App() {
  return (
    <main className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center gap-4 p-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>shadcn/ui is set up</CardTitle>
          <CardDescription>
            Vite + React + Tailwind + shadcn, ready to go.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="Try typing here" />
          <div className="flex items-center gap-2">
            <Button>Primary action</Button>
            <Badge variant="secondary">New</Badge>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default App
