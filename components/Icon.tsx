export type Icons = "trash" | "logo" | "cart" | "trash-gray";

interface IconProps extends React.ImgHTMLAttributes<{}> {
  iconType: Icons;
  action?: string | (() => any);
}

const Icon: React.FC<IconProps & React.ImgHTMLAttributes<{}>> = ({
  iconType,
  action,
  ...props
}) => {
  return typeof action === "string" ? (
    <a
      href={action}
      style={{ height: "100%", display: "flex", alignItems: "center" }}
    >
      <img src={`../static/${iconType}.svg`} {...props} />
    </a>
  ) : (
    <>
      <img src={`../static/${iconType}.svg`} {...props} onClick={action} />
      <style jsx>{`
        .delete-palette {
          height: 40px;
        }
      `}</style>
    </>
  );
};

export default Icon;
