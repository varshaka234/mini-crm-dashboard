function Sidebar() {
  return (
    <aside className="w-full md:w-64 md:min-h-screen bg-slate-900 text-white p-4 md:p-6">
      <h2 className="text-2xl font-bold mb-6 md:mb-10">
        Mini CRM
      </h2>

      <nav>
        <ul className="flex flex-row flex-wrap gap-2 md:flex-col md:space-y-3 md:gap-0">
          <li className="bg-indigo-600 p-3 rounded-lg cursor-pointer">
            Dashboard
          </li>

          <li className="p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
            Customers
          </li>

          <li className="p-3 rounded-lg hover:bg-slate-700 cursor-pointer">
            Settings
          </li>
        </ul>
      </nav>

      <div className="hidden md:block mt-20 p-3 text-slate-400 cursor-pointer hover:text-white">
        Logout
      </div>
    </aside>
  );
}

export default Sidebar;