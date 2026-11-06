
import { useState } from "react";

function EditCustomer({ customer, onSave, onCancel }) {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  const [phone, setPhone] = useState(customer.phone);
  const [company, setCompany] = useState(customer.company);
  const [status, setStatus] = useState(customer.status);

  function handleSubmit() {
    if (!name || !email || !phone || !company) {
      alert("Please fill in all fields");
      return;
    }

    onSave({
      ...customer,
      name,
      email,
      phone,
      company,
      status,
    });
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border mt-8">
      <h2 className="text-xl font-bold mb-5">Edit Customer</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg"
          placeholder="Customer Name"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg"
          placeholder="Email Address"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 rounded-lg"
          placeholder="Phone Number"
        />

        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-3 rounded-lg"
          placeholder="Company Name"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border p-3 rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-5 py-3 rounded-lg mt-5"
      >
        Save Changes
      </button>

      <button
        onClick={onCancel}
        className="bg-slate-500 text-white px-5 py-3 rounded-lg mt-5 ml-3"
      >
        Cancel
      </button>
    </div>
  );
}

export default EditCustomer;
