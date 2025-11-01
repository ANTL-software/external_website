import "./faq.scss";
import type { ReactElement } from "react";
import { useState } from "react";
import DropDown from "../dropDown/DropDown";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): ReactElement {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What industries do you serve?",
      answer: "We serve clients across industries, including technology, healthcare, finance, retail, and more."
    },
    {
      question: "Can your solutions scale with my business?",
      answer: "Yes, our solutions are designed to grow with your business and adapt to changing needs."
    },
    {
      question: "How do you ensure security and reliability?",
      answer: "We implement industry-standard security measures and conduct regular reliability assessments."
    },
    {
      question: "Do you offer dedicated teams for ongoing projects?",
      answer: "Absolutely! We provide dedicated teams that work exclusively on your projects for consistent results."
    }
  ];

  function toggleItem(index: number): void {
    setOpenItem(openItem === index ? null : index);
  }

  return (
    <section id="faqComponent" data-aos="fade-up" data-aos-duration="800" aria-labelledby="faq-heading">
      <header className="faqHeader">
        <h2 id="faq-heading">FAQs</h2>
        <p>Find clear, concise answers about our services, processes, and how we help businesses achieve their goals.</p>
      </header>
      <dl className="faqItems">
        {faqData.map((item, index) => (
          <DropDown
            key={index}
            question={item.question}
            isOpen={openItem === index}
            onToggle={() => toggleItem(index)}
          >
            <p>{item.answer}</p>
          </DropDown>
        ))}
      </dl>
    </section>
  );
}