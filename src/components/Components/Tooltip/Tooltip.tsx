import { Tooltip as RadixTooltip } from 'radix-ui';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import { TooltipType } from '@/components/Components/Tooltip/tooltipType';
import Button from '@/components/Components/Button/Button';

const Tooltip = ({ text }: TooltipType) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <Button
            variant="default"
            size="default"
            className="inline-flex size-[30px] items-center justify-center rounded-full bg-[#F5F7FF] text-[#0045DB] outline-2 outline-[#0045DB] cursor-pointer"
            aria-label="Tooltip"
          >
            <QuestionMarkIcon role="img" />
          </Button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="select-none rounded bg-[#0045DB] px-[15px] py-2.5 text-[16px] leading-6 text-white  will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade max-w-[350px]"
            side="right"
            sideOffset={5}
            role="tooltip"
            aria-label={text}
          >
            {text}
            <RadixTooltip.Arrow className="fill-blue-600" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
