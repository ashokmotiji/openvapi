import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-zinc-900 h-screen p-4">
          <h1 className="text-2xl font-bold text-violet-500 mb-8">OpenVapi</h1>
          <nav className="space-y-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-zinc-800 text-white">Agents</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800">Calls</a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-zinc-800">Analytics</a>
          </nav>
        </div>
        
        <div className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-semibold">Agents</h2>
              <Button className="bg-violet-600 hover:bg-violet-700 text-lg px-6 py-6">+ New Agent</Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {/* Agent Cards */}
              <div className="bg-zinc-900 rounded-3xl p-6 hover:ring-2 hover:ring-violet-500 transition-all">
                <div className="h-2 w-2 bg-green-500 rounded-full mb-4"></div>
                <h3 className="text-xl font-medium">Sales Assistant</h3>
                <p className="text-zinc-400 mt-1">English • Llama 3.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}