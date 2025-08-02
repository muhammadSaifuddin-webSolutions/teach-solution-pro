import { FaHireAHelper } from "react-icons/fa6";


export default function TextInput({
  register,
  errors,
  label,
  type = "text",
  name,
  disabled = false,
  toolTipText,
  unit,
  icon: Icon,
  placeholder,
  min,
  max,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
        {label}
        {toolTipText && (
          <span title={toolTipText}>
            <FaHireAHelper className="w-4 h-4 text-gray-400 cursor-pointer" />
          </span>
        )}
      </label>

      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={name}
          type={type}
          disabled={disabled}
          min={min}
          max={max}
          {...register(name, { required: true })}
          className={`w-full rounded-md bg-white border border-gray-300 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            Icon ? "pl-8" : ""
          } ${errors[name] ? "ring-red-500 focus:ring-red-500" : ""}`}
          placeholder={placeholder || label}
        />
        {unit && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm bg-white px-2 py-0.5 rounded">
            {unit}
          </div>
        )}
      </div>

      {errors[name] && (
        <p className="text-xs text-red-500 mt-1">{label} is required</p>
      )}
    </div>
  );
}
