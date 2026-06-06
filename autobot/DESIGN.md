---
name: Autobot
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5c403f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#906f6e'
  outline-variant: '#e4bdbb'
  surface-tint: '#bd0b29'
  primary: '#b20024'
  on-primary: '#ffffff'
  primary-container: '#d72638'
  on-primary-container: '#fff2f1'
  inverse-primary: '#ffb3b1'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#575858'
  on-tertiary: '#ffffff'
  tertiary-container: '#6f7070'
  on-tertiary-container: '#f5f5f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001b'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system is engineered for a premium automotive showroom experience, emphasizing precision, engineering excellence, and high-trust transactions. The target audience includes discerning buyers and enterprise partners who value reliability and a sophisticated, non-cluttered interface.

The visual style is **Corporate / Modern** with a focus on tactile premium quality. It utilizes a restrained but impactful color palette to guide the eye towards key actions and vehicle highlights. The aesthetic avoids all "tech-heavy" or gaming tropes, opting instead for a clean, editorial layout found in high-end automotive journals. The interface should feel substantial, grounded, and expensive.

## Colors
The color strategy employs a high-contrast "Power Palette." 

- **Primary Red (#D72638)** is reserved strictly for high-priority calls to action, brand-critical iconography, and active status indicators. 
- **The Grayscale Foundation** uses Black (#111111) for deep immersion backgrounds and Dark Charcoal (#1A1A1A) for structural elements. 
- **Silver Accents (#B8B8B8)** provide a metallic, machined quality to borders and secondary information.
- **Surface Neutrals** (White and Light Gray) are used to create expansive whitespace, ensuring vehicle imagery remains the focal point without visual interference.

## Typography
Typography is used to convey authority and modern precision. 

**Montserrat** is the display face, utilized in its Bold weight for all headings to create a strong, geometric impact reminiscent of automotive badging. **Inter** serves as the functional workhorse for all body copy and UI labels, chosen for its exceptional legibility and neutral, professional character. 

For mobile, headlines scale down to prevent awkward word breaks while maintaining their weight. Small labels should utilize increased letter spacing and uppercase styling to mimic technical specifications and professional documentation.

## Layout & Spacing
This design system follows a **Fixed Grid** philosophy on desktop to maintain an editorial, controlled feel, transitioning to a fluid model on mobile.

- **Grid:** A 12-column grid is used for desktop (max-width 1440px) with 24px gutters.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Margins:** Desktop layouts feature generous 64px outer margins to create a "gallery" effect. Mobile layouts tighten to 16px to maximize screen real estate.
- **Alignment:** Use heavy vertical rhythm; elements are grouped in clear blocks with significant `xl` (80px) spacing between major sections to allow the design to breathe.

## Elevation & Depth
Hierarchy is established through **Tonal Layers** and **Ambient Shadows**. 

Surfaces are primarily flat, but "raised" elements like cards and primary containers use subtle, extra-diffused shadows. These shadows should have a large blur radius (16px to 24px) and very low opacity (5-10%) to suggest a soft, natural overhead light source. 

On dark backgrounds, elevation is communicated through subtle 1px inner borders in Silver (#B8B8B8) at 10-15% opacity, rather than shadows, to maintain a crisp, machined look.

## Shapes
The shape language is defined by "Round 8" precision. All standard UI components—including buttons, input fields, and cards—utilize a 0.5rem (8px) corner radius. This provides a approachable yet structured feel that mirrors the aerodynamic curves of modern vehicle interiors. Larger containers may scale to 1rem (16px) for a softer, more premium enclosure.

## Components
- **Buttons:** Primary buttons use the Red (#D72638) fill with White text. Secondary buttons use a Silver (#B8B8B8) outline or Dark Charcoal background. All buttons maintain a height of 48px for a substantial, tactile feel.
- **Cards:** Cards use White backgrounds on Light Gray surfaces, or Dark Charcoal on Black surfaces. They feature the 8px corner radius and soft ambient shadows.
- **Input Fields:** Fields utilize a subtle 1px border in Silver (#B8B8B8). Focus states switch the border to Red (#D72638) with a 2px thickness.
- **Chips/Badges:** Used for vehicle specs (e.g., "Electric", "In Stock"). These use a Light Gray fill with Dark Charcoal text, keeping the aesthetic neutral so they don't compete with the Primary Red CTAs.
- **Lists:** Vehicle spec lists should be clean, using `body-sm` with Silver dividers to separate technical data points clearly.