import * as React from 'react';

declare const Button: React.ForwardRefExoticComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg';
    asChild?: boolean;
  } & React.RefAttributes<HTMLButtonElement>
>;

export { Button };
