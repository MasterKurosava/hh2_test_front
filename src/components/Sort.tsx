interface SortProps {
    className?: string;
  }
  
  export const Sort: React.FC<SortProps> = ({ className }) => {
    return (
      <div className={`flex items-center justify-center bg-black text-white w-full h-full text-center ${className}`}>
        Сортировочный центр
      </div>
    );
  };
  
  export default Sort;
  