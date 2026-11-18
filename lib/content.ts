// Single source of truth for content that appears both on the page and in
// structured data (JSON-LD), so the two can never drift apart.

export const site = {
  url: "https://www.opgenesis.com",
  name: "OP Genesis",
  legalName: "OP Genesis Healthcare Logistics Solutions",
  phoneDisplay: "407-874-7361",
  phoneE164: "+1-407-874-7361",
  phoneHref: "tel:+14078747361",
  email: "contact@opgenesis.com",
  city: "Orlando",
  region: "FL",
  postalCode: "32856",
  description:
    "GPS-tracked, HIPAA-compliant medical courier services for hospitals, labs, and pharmacies in Orlando, FL. Real-time dispatch. Monthly analytics. Request a demo."
};

export const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent("OP Genesis Demo Request")}`;
export const careersMailto = `mailto:${site.email}?subject=${encodeURIComponent("Careers at OP Genesis")}`;

export const counties = ["Orange", "Seminole", "Osceola", "Lake", "Volusia"];

export const faqs = [
  {
    question: "What areas does OP Genesis serve?",
    answer:
      "OP Genesis provides medical courier services throughout the Orlando metropolitan area and central Florida, including Orange, Seminole, Osceola, Lake, and Volusia counties. Service area expansions are available for healthcare networks with multi-location needs across the state."
  },
  {
    question: "Is OP Genesis HIPAA compliant?",
    answer:
      "Yes. OP Genesis maintains full HIPAA compliance on all deliveries, including digital chain of custody documentation, secure handling protocols, and trained staff requirements. Compliance documentation is available upon request."
  },
  {
    question: "What types of medical items does OP Genesis transport?",
    answer:
      "OP Genesis transports laboratory specimens, STAT and emergency deliveries, pharmaceutical medications, medical supplies, temperature-controlled items, and lab-to-lab transfers for hospital networks, clinical laboratories, and pharmacies across Florida."
  },
  {
    question: "How does OP Genesis handle delivery delays?",
    answer:
      "Our dispatch system monitors every driver's position in real time against live traffic data. When a delay is detected, the pickup is automatically reassigned to a nearby driver and your designated contact receives an immediate text and email update — before the delay affects your operation. No phone calls required."
  },
  {
    question: "Does OP Genesis provide proof of delivery?",
    answer:
      "Yes. Every delivery includes digital chain of custody documentation with timestamped pickup and delivery confirmation, driver identification, and recipient sign-off. Records are available through your client portal."
  },
  {
    question: "How do I start service with OP Genesis?",
    answer:
      "Request a 20-minute demo call through our website. We'll review your pickup locations, delivery volume, and service requirements, then provide a tailored proposal within one business day."
  }
];
