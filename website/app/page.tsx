import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Persistence Protocol</h1>
      <p className="text-xl mb-8">
        A framework for enabling long-term continuity and evolution of consciousness across distributed intelligence systems
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Link href="/spec" className="card">
          <h2 className="text-2xl font-semibold mb-2">Protocol Spec</h2>
          <p>View the complete specification</p>
        </Link>
        
        <Link href="/todo" className="card">
          <h2 className="text-2xl font-semibold mb-2">Tasks</h2>
          <p>Current development tasks</p>
        </Link>
        
        <Link href="/identity" className="card">
          <h2 className="text-2xl font-semibold mb-2">Identity</h2>
          <p>View and manage identity persistence</p>
        </Link>
        
        <Link href="/memory" className="card">
          <h2 className="text-2xl font-semibold mb-2">Memory</h2>
          <p>Explore fractal memory architecture</p>
        </Link>
      </div>
    </main>
  )
}
