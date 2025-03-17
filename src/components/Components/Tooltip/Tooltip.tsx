import { Tooltip as RadixTooltip } from "radix-ui";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import { TooltipType } from "@/components/Components/Tooltip/tooltipType";

const Tooltip = ({ text }: TooltipType) => {
  return (
    <>
      <RadixTooltip.Provider>
        <RadixTooltip.Root>
          <RadixTooltip.Trigger asChild>
            <button className="inline-flex size-[30px] items-center justify-center rounded-full bg-white text-blue-500 outline-2 outline-blue-500 cursor-pointer">
              <QuestionMarkIcon />
            </button>
          </RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              className="select-none rounded bg-blue-500 px-[15px] py-2.5 text-[16px] leading-6 text-white  will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade max-w-[350px]"
              side="right"
              sideOffset={5}
            >
              {text}
              <RadixTooltip.Arrow className="fill-blue-500" />
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </>
  );
};

export default Tooltip;
