"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="flex w-full">
        {/* Call Button */}
        <a
          href="tel:+919604795870"
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-4 font-semibold"
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919604795870"
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 font-semibold"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
