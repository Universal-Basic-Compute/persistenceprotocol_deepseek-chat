import { promises as fs } from 'fs';
import path from 'path';
import JsonViewer from '@/components/JsonViewer';

export default async function SpecPage() {
  const filePath = path.join(process.cwd(), 'SPEC.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const specData = JSON.parse(fileContents);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Protocol Specification</h1>
      <JsonViewer data={specData} />
    </div>
  );
}
