import { useState } from "react";

function AddCustomer({ onAddCustomer }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("Active");
  function handleSubmit() {
    if (!name || !email || !phone || !company) {
      alert("Please fill in all fields");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }
    const newCustomer = {
      name,
      email,
      phone,
      company,
      status,
    };

    onAddCustomer(newCustomer);

    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setStatus("Active");
  }
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-8">
      <h2 className="text-xl font-bold text-slate-800 mb-5">
        Add New Customer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Customer Name"
          className="border p-3 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border p-3 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="border p-3 rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company Name"
          className="border p-3 rounded-lg"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <select className="border p-3 rounded-lg">
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-5 py-3 rounded-lg mt-5"
      >
        Add Customer
      </button>
    </div>
  );
}

export default AddCustomer;
