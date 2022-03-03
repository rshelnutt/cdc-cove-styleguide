import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from 'react-accessible-accordion';

const AccordionPanel = () => {
  return (
    <Accordion allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Accordion Item 1
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          Accordion Item 1 content is displayed here.
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Accordion Item 2
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          Accordion Item 2 content is displayed here.
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Accordion Item 3
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          Accordion Item 3 content is displayed here.
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionPanel
