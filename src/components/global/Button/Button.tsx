interface IButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<IButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="download-button transform active:scale-95 bg-yellow-500 hover:bg-yellow-400 text-black px-16 py-6 rounded-lg font-bold tracking-widest w-full"
    >
      {label}
    </button>
  );
};

export default Button;
