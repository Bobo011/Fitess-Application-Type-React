import { SelectedPage } from "@/shared/types"; 
import AnchorLink from "react-anchor-link-smooth-scroll"; 
import { motion } from "framer-motion"; 


const childVariant = {
  hidden: { opacity: 0, scale: 0.9 }, // Initial hidden state.
  visible: { opacity: 1, scale: 1 } // Visible state with full opacity and scale.
}


interface Props {
  icon: JSX.Element, // JSX.Element for rendering an icon.
  description: string, // Description text.
  title: string, // Title text.
  setSelectedPage: (value: SelectedPage) => void; // Callback function to set the selected page.
}

export const Benefit = ({ icon, description, title, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant} // Apply animation variants to the component.
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon} {/* Render the provided icon element. */}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4> {/* Display the title. */}
      <p className="my-3">{description}</p> {/* Display the description. */}
      {/* Create a smooth-scrolling anchor link with a callback to set the selected page. */}
      <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)} // Call the callback to set the selected page.
        href={`#${SelectedPage.ContactUs}`}>
        <p>Learn More</p> {/* Display the "Learn More" text. */}
      </AnchorLink>
    </motion.div>
  )
}
