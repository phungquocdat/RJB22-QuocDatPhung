import React from "react";
import AccordionItem from "./AccordionItem";

export default function ListAccordionItem() {
  const AccordionData = [
    {title: "SIMPLE PANELS",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {title: "TOGGLE INFORMATION",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {title: "NICE TOUCH",
      content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div>
    {AccordionData.map((item, index) => (
        <AccordionItem key={`item-${index}`} index={index} item={item} />
    )
    )}
    </div>
  )
}
