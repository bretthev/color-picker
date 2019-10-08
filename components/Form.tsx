import { Copy } from "./Typography";
import Button from "./Button";
import { fontSizes } from "../helpers/styleUtils";

interface FormProps extends React.HTMLAttributes<HTMLElement> {
  submit: (arg: any) => void;
  inputChange: (arg: any) => void;
  inputValue?: string;
}

const Form: React.FC<FormProps> = ({ submit, inputChange, inputValue }) => {
  return (
    <>
      <form onSubmit={submit}>
        <Copy text="Name and save your color palette" />
        <div className="input-container">
          <input
            className="form-input"
            type="text"
            placeholder="Color palette name"
            value={inputValue}
            onChange={inputChange}
          />
          <Button label="Submit" action={submit} />
        </div>
      </form>
      <style jsx>{`
        .input-container {
          display: flex;
          width: 100%;
          flex-direction: column;
        }
        justify-content: space-between;
        .form-input {
          height: 45px;
          border-radius: 10px;
          padding-left: 20px;
          border: 1px solid #d9d9d9;
          margin-bottom: 20px;
          width: 300px;
          font-size: ${fontSizes.small};
        }
        @media (min-width: 600px) {
          .input-container {
            flex-direction: row;
            width: 45%;
          }
          .form-input {
            margin-bottom: unset;
          }
        }
      `}</style>
    </>
  );
};

export default Form;
