import React from 'react';

interface JsonViewerProps {
  data: any;
}

export default function JsonViewer({ data }: JsonViewerProps) {
  return (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto text-sm">
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}
