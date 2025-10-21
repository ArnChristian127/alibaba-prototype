"use client";
interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input(props: InputProps) {
  return (
    <div className={props.className}>
      <label className="font-medium">{props.label}</label>
      <input
        className="w-full outline-none bg-gray-600 rounded-md p-2 px-3 mt-1"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
