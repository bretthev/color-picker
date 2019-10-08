import { fontSizes, fontFamily } from "../helpers/styleUtils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  text: string;
}

export const Heading: React.FC<TypographyProps> = ({ text }) => {
  return (
    <>
      <h2>{text}</h2>
      <style jsx>{`
        font-family: ${fontFamily.primary};
        font-size: ${fontSizes.large};
      `}</style>
    </>
  );
};

export const Copy: React.FC<TypographyProps> = ({ text }) => {
  return (
    <>
      <p>{text}</p>
      <style jsx>{`
        font-size: ${fontSizes.small};
        font-family: ${fontFamily.primary};
      `}</style>
    </>
  );
};
