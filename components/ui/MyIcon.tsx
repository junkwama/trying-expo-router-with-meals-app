import Ionicons from '@expo/vector-icons/Ionicons';
import { ComponentProps } from 'react';

export type MyIconProps = ComponentProps<typeof Ionicons>;
export type MyIconNameType = MyIconProps['name'];

export default ({ style, color, size = 24, onPress, name, ...props }: MyIconProps) => {
  return (
    <Ionicons
      style={style}
      name={name}
      size={size}
      color={color}
      {...props}
      onPress={onPress}
    />
  );
};