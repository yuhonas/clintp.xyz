# Design System

## 1. Overview & Creative North Star
**Creative North Star: "The Galactic Dashboard"**

This design system is a love letter to the mid-century space race, viewed through the lens of a high-performance, futuristic cockpit. It rejects the sterility of modern flat design in favor of "Analog-Digital Synthesis"—an aesthetic where the tactile warmth of 1960s mission control meets the ethereal clarity of deep-space computing.

To break the "template" look, we employ **intentional asymmetry** and **tonal layering**. Layouts should feel like a custom-engineered instrument panel: large, authoritative typography anchors the experience, while interactive elements float within "glass" modules. We avoid the rigid 12-column grid in favor of a "modular-clustered" approach, where information is grouped in high-contrast blocks of varying heights and depths.

---

## 2. Colors & Atmospheric Depth

### The Tonal Palette
Our palette is rooted in the void of space (`surface`: #131313) but energized by the "Cosmic Violet" (`primary-container`: #A78BFA).

*   **Primary (`#cebdff`) / Primary Container (`#a78bfa`):** Used for "Active State" glows and key navigational nodes.
*   **Surface Tiers:** Use `surface-container-lowest` (#0E0E0E) for deep backgrounds and `surface-container-highest` (#353534) for elevated controls.

### The "No-Line" Rule
**Standard 1px borders are strictly prohibited.** To define sections, use background shifts. A section should transition from `surface` to `surface-container-low` (#1C1B1B) to signal a change in context. Boundaries are felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials:
1.  **Base Layer:** `surface` (The void).
2.  **Middle Layer:** `surface-container-low` (The console deck).
3.  **Top Layer:** `surface-container-high` (The interface modules).

### The "Glass & Gradient" Rule
To achieve the retro-futurist "CRT" feel, use **Glassmorphism**. Floating cards must use a semi-transparent `surface-variant` with a `backdrop-filter: blur(12px)`. main CTAs should utilize a linear gradient from `primary` (#CEBDFF) to `primary-container` (#A78BFA) at a 135-degree angle to simulate a glowing phosphor screen.

---

## 3. Typography: The Editorial Command
The typography creates a hierarchy of "Mission Critical" vs. "Support Data."

*   **Display (Space Grotesk):** These are your headlines. They must be bold, geometric, and carry a slight `letter-spacing: -0.02em`. They mimic the technical posters of NASA’s golden era.
*   **Body (Inter/Mono):** Body text must be clean and functional. For technical data or "readouts," use the Monospace variant to reinforce the computer-terminal aesthetic.
*   **Hierarchy as Identity:** Use extreme scale contrast. A `display-lg` headline (3.5rem) should sit directly above a `label-md` (0.75rem) sub-header to create an authoritative, editorial look.

---

## 4. Elevation & Depth: Tonal Layering

### The Layering Principle
Forget box-shadows. Depth is achieved by "stacking" surface tokens. Place a `surface-container-lowest` module inside a `surface-container-high` area to create an "inset" look, reminiscent of physical toggle-switch housings on a dashboard.

### Ambient Shadows
When an element must float (like a modal), use a **Diffused Glow** rather than a shadow.
*   **Shadow:** Blur: 40px, Spread: -10px, Color: `rgba(167, 139, 250, 0.08)` (a tint of our Primary). This simulates ambient light reflecting off a screen.

### The "Ghost Border" Fallback
If accessibility requires a container edge, use a "Ghost Border": `outline-variant` at **15% opacity**. It should be barely perceptible, serving only as a subtle catch-light on the edge of the "glass."

---

## 5. Components

### Buttons (The Glow-Switch)
*   **Primary:** Gradient fill (Primary to Primary-Container), `roundness-md`, with a subtle outer glow on hover.
*   **Secondary:** Ghost-style. No fill, `ghost-border` (20% opacity), text in `primary`.
*   **Tertiary:** All caps `label-md` typography with a `primary` underline that expands on hover.

### Input Fields (The Data Entry)
*   **Style:** Inset appearance using `surface-container-lowest`.
*   **Interaction:** On focus, the "Ghost Border" increases to 50% opacity and the label (Space Grotesk) shifts to `primary` color.

### Cards & Modules
*   **Constraint:** Absolutely no divider lines.
*   **Separation:** Use 2rem to 4rem of vertical whitespace. If grouping is required, wrap items in a `surface-container-low` card with a `roundness-lg` (1rem).

### The "Scanline" Overlay
For Hero sections or primary cards, apply a CSS repeating-linear-gradient overlay at 3% opacity to mimic the texture of a vintage CRT monitor.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace negative space. Let the "Deep Space Black" (`#131313`) give the content room to breathe.
*   **Do** use asymmetrical layouts. Align a headline to the far left and the body text to a narrow center column.
*   **Do** use `primary-fixed` (#E8DDFF) for small labels to ensure high-contrast readability against dark backgrounds.

### Don’t:
*   **Don’t** use pure `#000000`. Use the specified `surface` tokens to maintain tonal depth.
*   **Don’t** use standard "drop shadows" (Black/0,0,0). Shadows must always be tinted by the primary or surface color.
*   **Don’t** use sharp 90-degree corners. Everything has a minimum of `roundness-sm` (0.25rem) to feel like molded industrial plastic or machined glass.
*   **Don’t** use dividers. If you feel the urge to add a line, add 16px of padding instead.

---

## 7. Signature Elements
*   **The Status Indicator:** Use a small, pulsing `primary` dot next to headlines to indicate "Live" or "Active" states, mimicking a hardware LED.
*   **The Monospace Readout:** Wrap secondary metadata (dates, categories, tags) in a subtle `surface-container-highest` pill using `body-sm` Monospace.
