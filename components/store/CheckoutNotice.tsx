"use client";

import { useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";

export function CheckoutNotice() {
  const [notice, setNotice] = useState(false);
  return (
    <div>
      <button type="button" onClick={() => setNotice(true)} className="button-primary w-full" aria-describedby="checkout-note">
        Continue to checkout <ArrowRight className="h-4 w-4" />
      </button>
      <p id="checkout-note" aria-live="polite" className="mt-3 flex min-h-5 items-start justify-center gap-1.5 text-center text-xs leading-5 text-mist">
        {notice ? <><LockKeyhole className="mt-0.5 h-3.5 w-3.5 shrink-0" />Checkout is not connected yet. No payment has been taken.</> : "Secure checkout will be available once payments are connected."}
      </p>
    </div>
  );
}
