import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "Is this Platform free?",
        answer: "Yes. It is a partially free platform.",
        value: "item-1",
    },
    {
        question: "What is the duration of your internship program?",
        answer:
            "6 months",
        value: "item-2",
    },
    {
        question:
            "What skills can interns expect to develop during their time at MasterSolis?",
        answer:
            "Practical exposure to real-world tech projects",
        value: "item-3",
    },
    {
        question: "What makes MasterSolis InfoTech different from other IT consulting companies?",
        answer: " Comprehensive Service Portfolio,Technology Focus,Expertise & Team Quality.",
        value: "item-4",
    },
    {
        question:
            "Do you offer guidance throughout the entire project lifecycle?",
        answer: "Yes,we do offer.",
        value: "item-5",
    },
];

export const FAQSection = () => {
    return (
        <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    FAQS
                </h2>

                <h2 className="text-3xl md:text-4xl text-center font-bold">
                    Common Questions
                </h2>
            </div>

            <Accordion type="single" collapsible className="AccordionRoot">
                {FAQList.map(({ question, answer, value }) => (
                    <AccordionItem key={value} value={value}>
                        <AccordionTrigger className="text-left">
                            {question}
                        </AccordionTrigger>

                        <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    );
};