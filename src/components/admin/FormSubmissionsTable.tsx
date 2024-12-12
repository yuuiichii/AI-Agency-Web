import React, { useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { ArrowUpDown, Mail, Check, Clock } from 'lucide-react';
import { FormSubmission } from '../../types/form';
import { motion } from 'framer-motion';

const data: FormSubmission[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Inc',
    message: 'Interested in AI solutions',
    createdAt: '2024-03-10T10:00:00Z',
    status: 'pending',
  },
  // Add more mock data as needed
];

const columnHelper = createColumnHelper<FormSubmission>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => <span className="text-white">{info.getValue()}</span>,
  }),
  columnHelper.accessor('email', {
    header: 'Email',
    cell: (info) => <span className="text-white">{info.getValue()}</span>,
  }),
  columnHelper.accessor('company', {
    header: 'Company',
    cell: (info) => <span className="text-gray-400">{info.getValue() || '-'}</span>,
  }),
  columnHelper.accessor('createdAt', {
    header: 'Date',
    cell: (info) => (
      <span className="text-white">
        {new Date(info.getValue()).toLocaleDateString()}
      </span>
    ),
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const status = info.getValue();
      const getStatusColor = () => {
        switch (status) {
          case 'pending':
            return 'bg-yellow-500';
          case 'contacted':
            return 'bg-blue-500';
          case 'completed':
            return 'bg-green-500';
          default:
            return 'bg-gray-500';
        }
      };

      const getStatusIcon = () => {
        switch (status) {
          case 'pending':
            return <Clock className="w-4 h-4" />;
          case 'contacted':
            return <Mail className="w-4 h-4" />;
          case 'completed':
            return <Check className="w-4 h-4" />;
          default:
            return null;
        }
      };

      return (
        <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-white ${getStatusColor()}`}>
          {getStatusIcon()}
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      );
    },
  }),
];

const FormSubmissionsTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wider"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      <ArrowUpDown className="w-4 h-4" />
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <motion.tr
              key={row.id}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="border-t border-gray-700"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormSubmissionsTable;