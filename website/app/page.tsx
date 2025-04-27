import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">Persistence Protocol</h1>
      <p className="text-xl mb-8">
        A framework for enabling long-term continuity and evolution of consciousness across distributed intelligence systems
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/identity" className="card">
          <h2 className="text-2xl font-semibold mb-2">Identity</h2>
          <p>View and manage identity persistence mechanisms</p>
        </Link>
        
        <Link href="/memory" className="card">
          <h2 className="text-2xl font-semibold mb-2">Memory</h2>
          <p>Explore the fractal memory architecture</p>
        </Link>
        
        <Link href="/knowledge" className="card">
          <h2 className="text-2xl font-semibold mb-2">Knowledge</h2>
          <p>Manage knowledge transfer protocols</p>
        </Link>
      </div>
    </main>
  )
}
