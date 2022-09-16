import { PlusCircle, IconProps } from "phosphor-react";
import { ButtonIconStyles } from "./styles";

export interface ButtonIconProps {
  name: string;
  icon: React.ComponentType<IconProps>;
}

export const ButtonIcon = ({ name, icon: Icon }: ButtonIconProps) => {
  return (
    <ButtonIconStyles type={"button"}>
      <Icon size={28} />
      <span>{name}</span>
    </ButtonIconStyles>
  );
};
