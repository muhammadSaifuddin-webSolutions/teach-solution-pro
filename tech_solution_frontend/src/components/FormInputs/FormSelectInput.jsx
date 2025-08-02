import Select from "react-tailwindcss-select";


const FormSelectInput = ({
  label,
  options,
  option,
  setOption,
  href,
  toolTipText,
  labelShown = true,
  isSearchable = true,
  isMultiple = false,
  disabled = false,
}) => {
  return (
    <div>
      {labelShown && (
        <label className="pb-2 block text-sm font-medium leading-6 text-gray-900">
          Select {label}
        </label>
      )}
      <div className="flex items-center space-x-2">
        <Select
          isSearchable={isSearchable}
          isMultiple={isMultiple}
          isDisabled={disabled}
          primaryColor="blue"
          value={option}
          onChange={(selected) => setOption(selected)}
          options={options}
          placeholder={label}
          className={"p-4"}
        />

      </div>
    </div>
  );
};

export default FormSelectInput;
