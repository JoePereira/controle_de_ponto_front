interface IButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="w-96 h-12 font-bold bg-orange-500 text-black p-2 mb-6 rounded hover:bg-orange-600"
    >
      {label}
    </button>
  );
};

export default Button;
