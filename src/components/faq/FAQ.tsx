import "./faq.scss";
import type { ReactElement } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DropDown from "../dropDown/DropDown";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ(): ReactElement {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqData: FAQItem[] = t("faq.items", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  function toggleItem(index: number): void {
    setOpenItem(openItem === index ? null : index);
  }

  return (
    <section id="faqComponent" data-aos="fade-up" data-aos-duration="800" aria-labelledby="faq-heading">
      <header className="faqHeader">
        <h2 id="faq-heading">{t("faq.title")}</h2>
        <p>{t("faq.subtitle")}</p>
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