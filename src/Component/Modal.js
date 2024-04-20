import React, { useState, useEffect } from 'react';

export const Modal = ({ isOpen, onClose, onSave, data }) => {
  const [formData, setFormData] = useState(data || { name: '' }); // Initialize with an empty name for adding new items

  useEffect(() => {
    setFormData(data || { name: '' }); // Reset the form data when data changes
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const modalTitle = data ? 'Edit Item' : 'Add Item';

  
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>{modalTitle}</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <button onClick={handleSave}>Save</button>
          </form>
        </div>
      </div>
    )
  );
};
