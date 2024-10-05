export function DropdownList({ label, name, options, value, onChange }) {
    return (
      <div>
        <label>{label}</label>
        <select name={name} value={value} onChange={onChange} required>
          <option value="">Select {label.toLowerCase()}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.full_name} {/* Ajusta según cómo se muestra el nombre en la base de datos */}
            </option>
          ))}
        </select>
      </div>
    );
  }
  