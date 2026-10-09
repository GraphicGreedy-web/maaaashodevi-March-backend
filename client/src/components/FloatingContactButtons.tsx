import { Phone } from "lucide-react";

const phoneNumber = "91 9131714171";

const WhatsAppIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 32 32"
    className="h-7 w-7 fill-current"
  >
    <path d="M16 3a12.8 12.8 0 0 0-11 19.33L3.1 29l6.84-1.8A12.9 12.9 0 1 0 16 3Zm0 23.45a10.58 10.58 0 0 1-5.38-1.47l-.39-.23-4.06 1.07 1.09-3.95-.25-.41A10.62 10.62 0 1 1 16 26.45Zm5.83-7.94c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.31-.83 1.04-1.02 1.26-.19.2-.38.23-.7.08-.32-.16-1.36-.5-2.58-1.61a9.7 9.7 0 0 1-1.79-2.23c-.19-.32 0-.49.14-.64.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.2.05-.39-.03-.55-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.55.08-.84.39-.29.32-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.2 2.22 3.38 5.37 4.74.75.32 1.34.52 1.8.67.76.24 1.46.2 2 .12.61-.09 1.9-.78 2.17-1.53.27-.76.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
  </svg>
);

const FloatingContactButtons = () => (
  <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3 sm:bottom-7 sm:right-7">
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Maa Aasho Devi Tours on WhatsApp"
      title="Chat on WhatsApp"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-4 ring-white/80 transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
    >
      <WhatsAppIcon />
    </a>
    <a
      href={`tel:+${phoneNumber}`}
      aria-label="Call Maa Aasho Devi Tours"
      title="Call us"
      className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-white/80 transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40"
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  </div>
);

export default FloatingContactButtons;
