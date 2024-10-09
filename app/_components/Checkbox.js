function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div
      className="flex-1 items-center gap-5 h-6 w-6 outline-offset-2 origin-center
    accent-[var(--color-brand-600)] 
    disabled:accent-[var(--color-brand-600)]"
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
}

export default Checkbox;
