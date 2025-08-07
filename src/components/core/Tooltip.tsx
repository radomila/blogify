import { Tooltip as RadixTooltip } from 'radix-ui';
import { QuestionMarkIcon } from '@radix-ui/react-icons';
import Button from '@/components/core/Button/Button';

interface Props {
  text: string;
}

const Tooltip = ({ text }: Props) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <Button
            variant="default"
            size="default"
            className="inline-flex size-[30px] items-center justify-center rounded-full bg-background text-primary outline-2 outline-primary cursor-pointer"
            aria-label="Tooltip"
          >
            <QuestionMarkIcon role="img" />
          </Button>
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="select-none rounded bg-primary px-[15px] py-2.5 text-[16px] leading-6 text-background-light will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade max-w-[350px]"
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
