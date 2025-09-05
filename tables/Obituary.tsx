import React from "react";

interface ObituaryProps<T extends object> {
  data: T[];
  columns: (keyof T)[];
  columnNames: string[];
}

export default function Obituary<T extends object>({
  data,
  columns,
  columnNames,
}: ObituaryProps<T>) {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-4">
        No data available
      </p>
    );
  }

  const displayCols = columns.slice(0, 7);
  const displayNames = columnNames.slice(0, 7);

  return (
    <div className="overflow-x-auto rounded-lg shadow-md max-h-52">
      <table className="min-w-full border border-gray-200 dark:border-gray-700 text-sm text-center">
        <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 sticky top-0">
          <tr>
            {displayNames.map((name, idx) => (
              <th
                key={idx}
                className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 font-semibold"
              >
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 dark:hover:bg-gray-900"
            >
              {displayCols.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b border-gray-200 dark:border-gray-700"
                >
                  {String(row[col])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
