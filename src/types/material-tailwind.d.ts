import { ComponentProps } from 'react';

declare module '@material-tailwind/react' {
  // Extender Typography
  export interface TypographyProps extends Partial<ComponentProps<'p'>> {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'lead' | 'paragraph' | 'small';
    color?: 'inherit' | 'current' | 'black' | 'white' | 'blue-gray' | 'gray' | 'brown' | 'deep-orange' | 'orange' | 'amber' | 'yellow' | 'lime' | 'light-green' | 'green' | 'teal' | 'cyan' | 'light-blue' | 'blue' | 'indigo' | 'deep-purple' | 'purple' | 'pink' | 'red';
    textGradient?: boolean;
    as?: string | React.ComponentType<any>;
    className?: string;
  }

  // Extender Card
  export interface CardProps extends Partial<ComponentProps<'div'>> {
    variant?: 'filled' | 'gradient';
    color?: string;
    shadow?: boolean | 'sm' | 'md' | 'lg' | 'xl';
    floated?: boolean;
    className?: string;
  }

  // Extender CardHeader
  export interface CardHeaderProps extends Partial<ComponentProps<'div'>> {
    floated?: boolean;
    shadow?: boolean;
    className?: string;
  }

  // Extender CardBody
  export interface CardBodyProps extends Partial<ComponentProps<'div'>> {
    className?: string;
    floated?: boolean;
  }

  // Extender Input
  export interface InputProps extends Partial<Omit<ComponentProps<'input'>, 'size' | 'ref'>> {
    variant?: 'standard' | 'outlined' | 'static';
    size?: 'md' | 'lg';
    color?: string;
    label?: string;
    error?: boolean;
    success?: boolean;
    icon?: React.ReactNode;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    className?: string;
  }

  // Extender Radio
  export interface RadioProps extends Partial<Omit<ComponentProps<'input'>, 'type' | 'ref'>> {
    color?: string;
    label?: string;
    icon?: React.ReactNode;
    ripple?: boolean;
    className?: string;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
  }

  // Extender Textarea
  export interface TextareaProps extends Partial<Omit<ComponentProps<'textarea'>, 'size' | 'ref'>> {
    variant?: 'standard' | 'outlined' | 'static';
    size?: 'md' | 'lg';
    color?: string;
    label?: string;
    error?: boolean;
    success?: boolean;
    containerProps?: React.HTMLAttributes<HTMLDivElement>;
    labelProps?: React.HTMLAttributes<HTMLLabelElement>;
    className?: string;
  }

  // Extender IconButton
  export interface IconButtonProps extends Partial<ComponentProps<'button'>> {
    variant?: 'text' | 'filled' | 'gradient' | 'outlined';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    ripple?: boolean;
    className?: string;
  }

  // Extender Button
  export interface ButtonProps extends Partial<ComponentProps<'button'>> {
    variant?: 'text' | 'filled' | 'gradient' | 'outlined';
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    ripple?: boolean;
    className?: string;
    fullWidth?: boolean;
  }

  // Extender Navbar
  export interface NavbarProps extends Partial<ComponentProps<'nav'>> {
    variant?: 'filled' | 'gradient';
    color?: string;
    shadow?: boolean;
    blurred?: boolean;
    fullWidth?: boolean;
    className?: string;
  }

  // Extender Collapse
  export interface CollapseProps extends Partial<ComponentProps<'div'>> {
    open?: boolean;
    animate?: {
      mount?: object;
      unmount?: object;
    };
    className?: string;
  }

  // Extender Avatar
  export interface AvatarProps extends Partial<ComponentProps<'div'>> {
    variant?: 'circular' | 'rounded' | 'square';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    color?: string;
    className?: string;
    src?: string;
    alt?: string;
  }
} 