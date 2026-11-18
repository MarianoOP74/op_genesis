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
    "GPS-tracked medical courier service with electronic chain of custody for hospitals, labs, and pharmacies in Orlando, FL. Monthly performance reports included. Request a demo."
};

export const demoMailto = `mailto:${site.email}?subject=${encodeURIComponent("OP Genesis Demo Request")}`;
export const careersMailto = `mailto:${site.email}?subject=${encodeURIComponent("Careers at OP Genesis")}`;

export const counties = ["Orange", "Seminole", "Osceola", "Lake", "Volusia"];

export const faqs = [
  {
    question: "What areas does OP Genesis serve?",
    answer:
      "OP Genesis provides medical courier services throughout the Orlando metropolitan area and central Florida, including Orange, Seminole, Osceola, Lake, and Volusia counties. Contact us about locations outside this area."
  },
  {
    question: "How does OP Genesis protect patient privacy?",
    answer:
      "Our handling procedures are built around HIPAA requirements. Drivers complete HIPAA awareness and chain-of-custody training before running routes, and every handoff is documented electronically. We'll walk your compliance team through our privacy and handling procedures before service starts."
  },
  {
    question: "What types of medical items does OP Genesis transport?",
    answer:
      "OP Genesis transports laboratory specimens, STAT and emergency deliveries, pharmaceutical medications, medical supplies, temperature-controlled items, and lab-to-lab transfers for hospitals, laboratories, pharmacies, medical suppliers, and home health agencies across central Florida."
  },
  {
    question: "How does OP Genesis handle delivery delays?",
    answer:
      "Every route is GPS-tracked and monitored by dispatch throughout the day. When traffic or a delay puts a pickup at risk, we re-route and send your designated contact an update with a new ETA — so you hear about it from us, not after the fact."
  },
  {
    question: "Does OP Genesis provide proof of delivery?",
    answer:
      "Yes. Every delivery includes digital chain of custody documentation with timestamped pickup and delivery confirmation, driver identification, and recipient sign-off. Records are summarized in your monthly report and available on request."
  },
  {
    question: "How do I start service with OP Genesis?",
    answer:
      "Request a 20-minute call through our website. We'll review your pickup locations, delivery volume, and service requirements, then send a tailored proposal. New clients can start with a no-risk 30–60 day pilot route with tracked on-time, response-time, and chain-of-custody results."
  }
];
