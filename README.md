# Final Project Write-Up  
## Hogwarts Hub – Bootstrap Framework Project

https://mztofet.github.io/WDFinalProject/

### 1. Custom CSS That Couldn’t Be Replaced with Framework Utilities
I used Bootstrap for the majority of the styling, layout, spacing, and responsiveness. However, there were a few cases where Bootstrap utilities could not fully achieve the effect I needed:

- **Image Hover Effects:**  
  I added a small amount of custom CSS to create a zoom-and-glow hover effect on the house crest images. Bootstrap does not include built‑in hover animations like scaling or glowing, so this required custom CSS.

- **Consistent Image Heights:**  
  I used inline styles (`max-height` and `object-fit: cover`) to make all house images the same size. Bootstrap does not provide a utility class for enforcing a fixed height while maintaining aspect ratio.

- **Sorting Hat Hover Glow (Optional Enhancement):**  
  I added a subtle glow effect to the Sorting Hat image. This also required custom CSS because Bootstrap does not include drop-shadow hover utilities.

Other than these small enhancements, all layout, spacing, colors, and components were handled with Bootstrap utilities.

---

### 2. Most Challenging Component and Why
The **Sorting Hat feature** was the most challenging part of the project.  
This component required:

- A Bootstrap modal  
- Custom JavaScript  
- A timed animation that rapidly cycles through the four Hogwarts houses  
- Making sure the script loaded correctly and interacted with the modal  

The biggest challenge was ensuring the JavaScript executed at the right time and that the button IDs matched the script. Once the script was cleaned up and the DOMContentLoaded event was structured correctly, the feature worked smoothly.

---

### 3. Easiest Component and Why
The **Accordion for the Hogwarts Houses** was the easiest component to implement.  
Bootstrap provides a very clear structure for accordions, and I was able to:

- Add house‑specific colors  
- Center the images  
- Keep everything responsive  
- Use Bootstrap utilities instead of writing custom CSS  

Because Bootstrap handles all the collapsing/expanding behavior automatically, it required very little JavaScript or troubleshooting.

---

### 4. How the Framework Improved My Code
Using Bootstrap improved my code in several ways:

- **Reduced custom CSS:**  
  I relied heavily on Bootstrap utilities for spacing, layout, colors, borders, and responsiveness.

- **Cleaner HTML structure:**  
  Components like the navbar, accordion, modal, and tabs were easy to build without writing complex markup.

- **Built‑in responsiveness:**  
  My site automatically adjusts to mobile, tablet, and desktop without writing media queries.

- **Faster development:**  
  Instead of building everything from scratch, I could focus on design and interactivity.

---

### 5. Framework Features I Liked or Disliked
**Liked:**

- The accordion, modal, and tabs were extremely easy to implement.
- Utility classes like `text-center`, `mt-3`, `border-warning`, and `img-fluid` made styling fast and consistent.
- Bootstrap’s responsive grid and spacing system saved a lot of time.

**Disliked:**

- Some visual effects (like hover animations) still require custom CSS.
- Bootstrap’s default colors sometimes needed overriding to match the Harry Potter theme.
- The framework can feel restrictive when trying to create very custom layouts.

---

### Summary
This project helped me understand how modern frameworks like Bootstrap speed up development while keeping code organized and maintainable. I learned how to combine Bootstrap components with small amounts of custom CSS and JavaScript to create a polished, interactive website.