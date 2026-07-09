import React from "react";

export interface Column<T = any> {
  key: string;
  header: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  render?: (row: T, index: number) => React.ReactNode;
}

interface TableProps<T = any> {
  columns: Column<T>[];
  data: T[];
  containerClassName?: string;
  tableClassName?: string;
}

export const Table = <T,>({
  columns,
  data,
  containerClassName = "table-responsive",
  tableClassName = "table align-middle table-borderless",
}: TableProps<T>) => {
  return (
    <div className={containerClassName}>
      <table className={tableClassName}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className={col.className || "table-header-text"}
                style={col.style}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={col.className}
                  style={col.style}
                >
                  {col.render ? col.render(row, rowIndex) : (row as any)[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
