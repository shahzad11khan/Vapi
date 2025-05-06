interface TopBarButton {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

interface TopBarProps {
  title: string;
  buttons: TopBarButton[];
}

const TopBar: React.FC<TopBarProps> = ({ title, buttons }) => {
  return (
    <div className="flex flex-col md:flex-row  md:justify-between gap-4 ">
      <p className="text-sm font-semibold text-white">{title}</p>
      <div className="flex lg:w-[426px] gap-2">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={btn.onClick}
            className={`w-1/2 mb-5 py-2 rounded-lg transition ${
              btn.variant === 'primary'
                ? 'bg-[#55761C] hover:bg-[#446013] text-white'
                : 'bg-[#1C1C1C] hover:bg-[#333] text-white'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
