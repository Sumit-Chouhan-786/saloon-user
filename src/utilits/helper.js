import {
  BLOG_PATH,
  CONTACT_PATH,
  HOME_PATH,
  SERVICES_PATH,
} from "./Constant";
import tool from "../assets/images/png/scissor.png";
import beard from "../assets/images/png/beard.png";
import facial from "../assets/images/png/facial.png";
import razor from "../assets/images/png/razor.png";
import mustache from "../assets/images/png/mustache.png";
import hairStyling from "../assets/images/png/hair.png";
import review_img1 from "../assets/images/jpeg/review1.jpg";
import review_img2 from "../assets/images/jpeg/review2.jpg";
import review_img3 from "../assets/images/jpeg/review3.jpg";
import latest1 from "../assets/images/jpeg/latest1.jpg";
import latest2 from "../assets/images/jpeg/latest2.jpg";
import latest3 from "../assets/images/jpeg/latest3.jpg";
import latest4 from "../assets/images/jpeg/latest4.jpg";

// nav links
export const NavLinks = [
  { path: HOME_PATH, title: "Home" },
  { path: BLOG_PATH, title: "History" },
  { path: CONTACT_PATH, title: "Appointments" },
  { path: SERVICES_PATH, title: "Edit Appointments" },
];
export const servicesContent = [
  { image: tool, title: "HAIRCUT & BEARD TRIM" },
  { image: beard, title: "SHAVES & HAIRCUT" },
  { image: razor, title: "FACIAL & SHAVE" },
  { image: facial, title: "FACIAL" },
  { image: mustache, title: "MUSTACHE TRIMMING" },
  { image: hairStyling, title: "HAIR STYLING" },
];
export const REVIEWS = [
  {
    img: review_img1,
    name: "GLEN SPARKLE, MIAMI",
  },
  {
    img: review_img2,
    name: "JANE DOE, NEW YORK",
  },
  {
    img: review_img3,
    name: "JOHN HOOD, NY",
  },
];
export const LatestNewsBlog = [
  {
    img: latest1,
    title: "Vel Pellentesque",
    description: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    link: "#",
  },
  {
    img: latest2,
    title: "Porta Consequat ",
    description: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    link: "#",
  },
  {
    img: latest3,
    title: "Fringilla Augue",
    description: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    link: "#",
  },
  {
    img: latest4,
    title: "Libero Vestibulum",
    description: "Duis porta, ligula rhoncus euismod pretium, nisi tellus",
    link: "#",
  },
];
export const servicesPricing = [
  {
    title: "Haircut",
    price: "$20",
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
  {
    title: "Trimming",
    price: "$25",
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
  {
    title: "Shavings",
    price: "$15",
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
  {
    title: "Facial",
    price: "$20",
    description:
      "Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec.",
  },
];
