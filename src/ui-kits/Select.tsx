import type {FC} from 'react';

interface Props {
  label: string;
  options: {value: string; label: string}[];
  value: string;
  onChange: (value: string) => void;
}

export const Select: FC<Props> = ({label, options, value, onChange}) => (
  <div className="flex flex-col">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      className="w-full p-2 border border-b-0 rounded-lg"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
