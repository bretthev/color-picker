import Icon from "./Icon";

interface EraseProps extends React.HTMLAttributes<HTMLElement> {
  action: (e: any) => void;
}

const EraseCard: React.FC<EraseProps> = ({ action }) => {
  return (
    <>
      <div className="erase-card" onClick={action}>
        <Icon className="delete-palette" iconType="trash-gray" />
      </div>
      <style jsx>{`
        background-color: #f3f3f3;
        height: 125px;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        border: 15px solid #f3f3f3;
        :hover {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default EraseCard;
