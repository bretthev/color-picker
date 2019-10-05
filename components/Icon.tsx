type Icons = "trash" | "logo" | "cart";
type IconSize = "header" | "body";

interface IconProps extends React.ImgHTMLAttributes<{}> {
  iconType: Icons;
  size?: IconSize;
}

const Icon: React.SFC<IconProps & React.ImgHTMLAttributes<{}>> = ({
  iconType,
  size,
  ...props
}) => <img src={`../static/${iconType}.svg`} {...props} />;

export default Icon;
