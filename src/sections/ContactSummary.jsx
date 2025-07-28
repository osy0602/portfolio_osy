import { useRef } from "react";
const ContactSummary = () => {
    const containerRef = useRef(null);
  return (
    <section
        ref = {containerRef}
        className="flex flex-col items-center justify-between min">
      
    </section>
  )
}

export default ContactSummary
