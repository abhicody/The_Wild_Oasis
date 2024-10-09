function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-20 px-3 py-0">
      <span className="flex  items-center gap-3 font-medium">
        <svg className="w-6 h-6 text-gray-50">{icon}</svg>
        {label}
      </span>
      {children}
    </div>
  );
}

export default DataItem;
