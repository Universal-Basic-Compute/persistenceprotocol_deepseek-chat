import { promises as fs } from 'fs';
import path from 'path';
import JsonViewer from '@/components/JsonViewer';

export default async function TodoPage() {
  const filePath = path.join(process.cwd(), 'todolist.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const todoData = JSON.parse(fileContents);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Development Tasks</h1>
      <JsonViewer data={todoData} />
    </div>
  );
}
