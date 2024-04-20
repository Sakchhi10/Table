import React, { useMemo, useState } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import { COLUMNS } from './columns';
import './table.css';
import { Modal } from './Modal'; // Import the Modal component

export const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isAddingNewItem, setIsAddingNewItem] = useState(false);

  const openModal = (row) => {
    console.log('Selected Row:', row);
    setSelectedRow(row);
    setIsAddingNewItem(!row); // Set isAddingNewItem to true when row is null (adding new item)
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRow(null);
    setIsAddingNewItem(false);
    setModalOpen(false);
  };

  const handleSave = (formData) => {
    if (isAddingNewItem) {
      // Perform an add operation here with the formData
      // You can update the data array and refresh the table
      console.log('Added data:', formData);
    } else {
      // Perform an update operation here with the formData
      // You can update the data array and refresh the table
      console.log('Updated data:', formData);
    }
    closeModal();
  };

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
                <td>
                  <button onClick={() => openModal(row)}>Edit</button>
                  {/* Add a delete button and functionality */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Add a button to open the modal */}
      <button onClick={() => openModal(null)}>Add Item</button>

      {/* Render the modal component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
        data={selectedRow ? selectedRow.original : null}
      />
    </div>
  );
};
