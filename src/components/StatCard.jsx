function StatCard({ title, count }) {

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">

      <h3 className="text-slate-500 text-sm">
        {title}
      </h3>

      <h1 className="text-3xl font-bold text-slate-800 mt-2">
        {count}
      </h1>

    </div>
  );
}

export default StatCard;