type Icons = "trash" | "logo" | "cart";
type IconSize = "header" | "body";

interface IconProps extends React.ImgHTMLAttributes<{}> {
  iconType: Icons;
  size?: IconSize;
  action: string | (() => any);
}

const Icon: React.SFC<IconProps & React.ImgHTMLAttributes<{}>> = ({
  iconType,
  size,
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
    <img src={`../static/${iconType}.svg`} {...props} onClick={action} />
  );
};

export default Icon;
