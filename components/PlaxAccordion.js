"use client";
import { useState } from "react";

const PlaxAccordion = ({ dark }) => {
  const accordionData = [
    {
      id: 1,
      title: "Do you handle fiction and non-fiction?",
      desc: "Yes! Cookbooks, novels, manuals, memoirs—we&apos;ve done it all.",
    },
    {
      id: 2,
      title:
        "Can you publish under my Amazon KDP account?",
      desc: "Absolutely—we&apos;ll guide you through safe access sharing.",
    },
    {
      id: 3,
      title: "What file formats do you deliver?",
      desc: "ePub (Apple/Kobo), Mobi (Kindle), PDF + print-ready files.",
    },
    // {
    //   id: 4,
    //   title: "How can I contact Plax customer service?",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quo ullam maiores reiciendis, voluptatibus quae odio, accusamus facere vero consectetur! Omnis nobis voluptatum deserunt maxime, error dolor nulla, perspiciatis assumenda quisquam, fugiat magnam placeat culpa sit reprehenderit nesciunt quis praesentium! Quam ullam tempora quidem, totam autem explicabo alias, obcaecati quaerat earum nisi, asperiores ea perspiciatis iusto neque. Odit molestias voluptatem laboriosam distinctio delectus consequatur, quo nemo nihil, deleniti perspiciatis nisi itaque similique accusantium facilis asperiores dicta veniam voluptatum numquam aliquam!",
    // },
  ];
  const [active, setActive] = useState(0);
  return (
    <div className={`mil-accordion`}>
      {accordionData.map((item) => (
        <div
          className={`mil-accordion-group mil-up ${
            active == item.id ? " mil-active" : ""
          }`}
          key={item.id}
        >
          <div
            className={`mil-accordion-menu `}
            onClick={() => setActive(active == item.id ? null : item.id)}
          >
            <h5 className={dark ? "mil-light" : ""}>{item.title}</h5>
            <div className="mil-accordion-icon">
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="mil-accordion-content">
            <p
              className="mil-text-m mil-soft"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlaxAccordion;
