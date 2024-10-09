function FormRow({ label, error, children }) {
  return (
    <div
      className="grid items-center grid-cols-[24rem_1fr_1.2fr] gap-6
     py-3 first:pt-0 last:pb-0 not-last:border-b not-last:border-gray-100
      has-button:flex has-button:justify-end has-button:gap-3"
    >
      {label && (
        <label className="font-semibold" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-2xl text-red-700">{error}</span>}
    </div>
  );
}

export default FormRow;
