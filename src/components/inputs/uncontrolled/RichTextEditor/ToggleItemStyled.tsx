import { ToolbarToggleItemProps } from '@radix-ui/react-toolbar';
import { Toolbar } from 'radix-ui';
import { RefAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ToolbarToggleItemProps, RefAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const ToggleItemStyled = ({ children, className, selected, ...rest }: Props) => {
  return (
    <Toolbar.ToggleItem
      className={twMerge(
        'ml-0.5 inline-flex h-[25px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-primary focus:relative focus:shadow-[0_0_0_2px] focus:shadow-primary data-[state=on]:bg-primary data-[state=on]:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-lg data-[state=on]:hover:bg-primary',
        className,
      )}
      aria-selected={selected ? 'true' : 'false'}
      data-state={selected ? 'on' : 'off'}
      {...rest}
    >
      {children}
    </Toolbar.ToggleItem>
  );
};

export default ToggleItemStyled;
