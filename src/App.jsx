
import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import RecentCustomers from "./components/RecentCustomers";
import AddCustomer from "./components/AddCustomer";
import EditCustomer from "./components/EditCustomer";

function App() {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");

    if (savedCustomers) {
      return JSON.parse(savedCustomers);
    }

    return [
      {
        id: 1,
        name: "Anu",
        email: "anu@gmail.com",
        phone: "9876543210",
        company: "ABC Ltd",
        status: "Active",
        dateAdded: "2026-11-05",
      },
      {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com",
        phone: "9876543211",
        company: "XYZ Ltd",
        status: "Inactive",
        dateAdded: "2026-11-04",
      },
      {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com",
        phone: "9876543212",
        company: "PQR Ltd",
        status: "Active",
        dateAdded: "2026-11-05",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editingCustomer, setEditingCustomer] = useState(null);

  // Count active customers
  const activeCount = customers.filter(
    (customer) => customer.status === "Active",
  ).length;

  // Count inactive customers
  const inactiveCount = customers.filter(
    (customer) => customer.status === "Inactive",
  ).length;

  // Search and filter customers
  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || customer.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Show the five most recently added customers
  const recentCustomers = [...filteredCustomers]
    .sort(
      (a, b) =>
        new Date(b.dateAdded) - new Date(a.dateAdded),
    )
    .slice(0, 5);

  // Add customer
  function handleAddCustomer(newCustomer) {
    setCustomers([
      ...customers,
      {
        id: Date.now(),
        ...newCustomer,
        dateAdded: new Date().toISOString().slice(0, 10),
      },
    ]);
  }

  // Delete customer
  function handleDeleteCustomer(id) {
    setCustomers(customers.filter((customer) => customer.id !== id));
  }

  // Open edit form
  function handleEditCustomer(customer) {
    setEditingCustomer(customer);
  }

  // Save edited customer
  function handleSaveEdit(updatedCustomer) {
    setCustomers(
      customers.map((customer) =>
        customer.id === updatedCustomer.id ? updatedCustomer : customer,
      ),
    );

    setEditingCustomer(null);
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 min-w-0 p-4 md:p-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back! Here's your CRM overview.
        </p>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8">
          <StatCard title="Total Customers" count={customers.length} />
          <StatCard title="Active Customers" count={activeCount} />
          <StatCard title="Inactive Customers" count={inactiveCount} />
        </div>

        {/* Add or Edit Customer Form */}
        {editingCustomer ? (
          <EditCustomer
            key={editingCustomer.id}
            customer={editingCustomer}
            onSave={handleSaveEdit}
            onCancel={() => setEditingCustomer(null)}
          />
        ) : (
          <AddCustomer onAddCustomer={handleAddCustomer} />
        )}

        {/* Search Customers */}
        <input
          type="text"
          placeholder="Search customers by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg mt-6"
        />

        {/* Filter Customers by Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-3 rounded-lg mt-3 w-full sm:w-auto"
        >
          <option value="All">All Customers</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        {/* Customer Table */}
        <div className="mt-8">
          <RecentCustomers
            customers={recentCustomers}
            onDeleteCustomer={handleDeleteCustomer}
            onEditCustomer={handleEditCustomer}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
