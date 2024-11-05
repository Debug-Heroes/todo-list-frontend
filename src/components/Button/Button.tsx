interface ButtonProps {
  label: string;
}

export default function Button ({ label }: ButtonProps) {
  return (
    <button className='bg-purple-700 text-sm px-10 py-2 rounded-md shadow-lg '>
      {label}
    </button>
  );
};