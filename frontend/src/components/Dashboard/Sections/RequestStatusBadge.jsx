import React from 'react';

export default function RequestStatusBadge({ status }) {
  const styles = {
    pending: 'bg-yellow-100 text-yellow-800',
    ongoing: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const labels = {
    pending: 'Pending',
    ongoing: 'ongoing',
    completed: 'Completed',
    cancelled: 'Cancelled',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}