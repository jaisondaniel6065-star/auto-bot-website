/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./**/*.html",
    "!./node_modules/**"
  ],
  safelist: [
    "text-primary", "border-b-2", "border-primary", "pb-1",
    "text-secondary", "hover:text-primary", "transition-colors",
    "scale-[0.98]", "opacity-1", "opacity-0"
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-container": "#f5f5f4",
        "tertiary": "#575858",
        "on-primary-fixed": "#410007",
        "on-error-container": "#93000a",
        "on-surface-variant": "#5c403f",
        "on-primary-container": "#fff2f1",
        "surface-container-lowest": "#ffffff",
        "surface-container-high": "#e8e8e8",
        "on-primary-fixed-variant": "#92001b",
        "background": "#f9f9f9",
        "error-container": "#ffdad6",
        "on-tertiary-fixed": "#1a1c1c",
        "inverse-primary": "#ffb3b1",
        "primary-fixed": "#ffdad8",
        "on-surface": "#1a1c1c",
        "surface-container-highest": "#e2e2e2",
        "surface": "#f9f9f9",
        "primary-container": "#d72638",
        "secondary": "#5f5e5e",
        "primary": "#b20024",
        "surface-bright": "#f9f9f9",
        "on-tertiary": "#ffffff",
        "outline-variant": "#e4bdbb",
        "surface-tint": "#bd0b29",
        "outline": "#906f6e",
        "tertiary-fixed": "#e3e2e2",
        "on-primary": "#ffffff",
        "on-tertiary-fixed-variant": "#464747",
        "secondary-fixed": "#e5e2e1",
        "secondary-fixed-dim": "#c8c6c5",
        "surface-dim": "#dadada",
        "on-error": "#ffffff",
        "tertiary-container": "#6f7070",
        "on-background": "#1a1c1c",
        "inverse-on-surface": "#f1f1f1",
        "secondary-container": "#e2dfde",
        "primary-fixed-dim": "#ffb3b1",
        "surface-container": "#eeeeee",
        "tertiary-fixed-dim": "#c6c6c6",
        "on-secondary-fixed": "#1c1b1b",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#474746",
        "on-secondary-container": "#636262",
        "surface-container-low": "#f3f3f3",
        "inverse-surface": "#2f3131",
        "on-secondary": "#ffffff",
        "surface-variant": "#e2e2e2"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "base": "8px",
        "margin-mobile": "16px",
        "xs": "4px",
        "margin-desktop": "64px",
        "lg": "48px",
        "gutter": "24px",
        "xl": "80px",
        "sm": "12px",
        "md": "24px"
      },
      fontFamily: {
        "headline-md": ["Montserrat", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-lg-mobile": ["Montserrat", "sans-serif"],
        "headline-lg": ["Montserrat", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "display-lg": ["Montserrat", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-bold": ["Inter", "sans-serif"]
      },
      fontSize: {
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg-mobile": ["28px", { lineHeight: "36px", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-bold": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }]
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
}
