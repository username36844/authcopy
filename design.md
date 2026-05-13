# Final SaaS Design System

For your:

* light themed freelancer SaaS
* slate-based UI
* `blue-600` accent (`#2563EB` / close to your `#0066CC`)
* calm premium experience
* Linear/Mobbin-inspired interaction system

This is the finalized production-ready system.

---

# 1. COLOR SYSTEM

---

# App Foundation

## Main Background

```txt id="f1"
bg-slate-50
```

Use for:

* app background
* auth background
* dashboard background

Purpose:

* softer than white
* easier on eyes
* creates layered depth

---

## Surface Background

```txt id="f2"
bg-white
```

Use for:

* cards
* forms
* panels
* tables
* modals
* dropdowns

---

## Elevated Surface

```txt id="f3"
bg-white
border border-slate-200/70
shadow-sm
```

Use for:

* floating panels
* command menus
* popovers
* auth containers

---

# Text System

---

## Primary Text

```txt id="f4"
text-slate-900
```

---

## Secondary Text

```txt id="f5"
text-slate-500
```

---

## Muted Text

```txt id="f6"
text-slate-400
```

---

## Inverse Text

```txt id="f7"
text-white
```

---

# Accent System

---

## Primary Accent

```txt id="f8"
blue-600
```

Equivalent feel to:

```txt id="f9"
#0066CC
```

---

## Accent Hover

```txt id="f10"
blue-700
```

---

## Accent Active

```txt id="f11"
blue-800
```

---

## Accent Surface

```txt id="f12"
bg-blue-50
text-blue-700
```

Use for:

* active states
* selected filters
* highlighted pills
* navigation selection

---

## Accent Ring

```txt id="f13"
ring-blue-100
```

VERY important:
soft atmospheric focus.

---

# Border System

---

## Default Border

```txt id="f14"
border-slate-200/70
```

---

## Hover Border

```txt id="f15"
border-slate-300/70
```

---

## Strong Divider

```txt id="f16"
border-slate-200
```

Use sparingly.

---

# Status System

---

## Success

```txt id="f17"
bg-emerald-50
text-emerald-700
```

---

## Warning

```txt id="f18"
bg-amber-50
text-amber-700
```

---

## Error

```txt id="f19"
bg-red-50
text-red-700
```

---

## Info

```txt id="f20"
bg-blue-50
text-blue-700
```

---

## Neutral

```txt id="f21"
bg-slate-100
text-slate-700
```

---

# 2. RADIUS SYSTEM

VERY important for cohesion.

---

## Buttons

```txt id="f22"
rounded-full
```

Use for:

* primary buttons
* secondary buttons
* icon buttons
* pills

---

## Inputs

```txt id="f23"
rounded-xl
```

---

## Cards

```txt id="f24"
rounded-2xl
```

---

## Dropdowns / Popovers

```txt id="f25"
rounded-2xl
```

---

## Modals / Auth Containers

```txt id="f26"
rounded-3xl
```

---

## Small Surfaces

```txt id="f27"
rounded-lg
```

Use for:

* icon backgrounds
* mini indicators

---

# 3. INPUT SYSTEM

---

## Default Input

```txt id="f28"
bg-white
border border-slate-200
text-slate-900
placeholder:text-slate-400
rounded-xl
h-11
```

---

## Hover State

```txt id="f29"
hover:border-slate-300
```

---

## Focus State

```txt id="f30"
focus:border-blue-600
focus:ring-4
focus:ring-blue-100
focus:outline-none
```

---

## Disabled State

```txt id="f31"
bg-slate-100
text-slate-400
border-slate-200
```

---

# 4. BUTTON SYSTEM

---

# Primary Button

```txt id="f32"
bg-blue-600
text-white
hover:bg-blue-700
active:bg-blue-800
rounded-full
h-11 px-5
font-medium
transition-all duration-200
```

---

# Secondary Button

```txt id="f33"
bg-white
border border-slate-200
text-slate-700
hover:bg-slate-50
hover:border-slate-300
rounded-full
```

---

# Ghost Button

```txt id="f34"
text-slate-600
hover:bg-slate-100
rounded-full
```

---

# Danger Button

```txt id="f35"
bg-red-600
hover:bg-red-700
text-white
rounded-full
```

---

# 5. ICON SYSTEM

Inspired by:

* Mobbin
* Linear
* Raycast

---

## Icon Library

Recommended:

```txt id="f36"
Lucide
```

---

## Default Icon

```txt id="f37"
text-slate-500
```

---

## Hover Icon

```txt id="f38"
hover:text-slate-700
```

---

## Active Icon

```txt id="f39"
text-blue-600
```

---

# Icon Interaction Surface

```txt id="f40"
size-9
rounded-full
transition-all duration-200
hover:bg-slate-100
active:scale-[0.96]
```

---

# Active Icon Surface

```txt id="f41"
bg-blue-50
text-blue-600
```

---

# Destructive Icon Surface

```txt id="f42"
hover:bg-red-50
hover:text-red-600
```

---

# 6. CARD SYSTEM

---

# Default Card

```txt id="f43"
bg-white
border border-slate-200/70
rounded-2xl
shadow-[0_1px_2px_rgba(15,23,42,0.04)]
```

---

# Hover Card

```txt id="f44"
hover:border-slate-300/70
hover:shadow-[0_4px_12px_rgba(15,23,42,0.06)]
transition-all duration-200
```

---

# 7. AUTH SURFACE

---

```txt id="f45"
bg-white/90
backdrop-blur-xl
border border-slate-200/70
rounded-3xl
shadow-[0_8px_32px_rgba(15,23,42,0.08)]
```

---

# 8. STATUS PILL SYSTEM

---

## Pill Base

```txt id="f46"
rounded-full
h-6
px-2.5
text-xs
font-medium
inline-flex items-center gap-1
```

---

## Todo

```txt id="f47"
bg-slate-100
text-slate-700
```

---

## In Progress

```txt id="f48"
bg-blue-50
text-blue-700
```

---

## Completed

```txt id="f49"
bg-emerald-50
text-emerald-700
```

---

## Review

```txt id="f50"
bg-amber-50
text-amber-700
```

---

## Blocked

```txt id="f51"
bg-red-50
text-red-700
```

---

# 9. SIDEBAR SYSTEM

---

## Sidebar

```txt id="f52"
bg-white
border-r border-slate-200/70
```

---

## Sidebar Item

```txt id="f53"
text-slate-600
hover:bg-slate-100
hover:text-slate-900
rounded-xl
```

---

## Active Sidebar Item

```txt id="f54"
bg-blue-50
text-blue-700
```

---

# 10. SHADOW SYSTEM

IMPORTANT:
Keep shadows soft and atmospheric.

---

## Small Shadow

```txt id="f55"
shadow-[0_1px_2px_rgba(15,23,42,0.04)]
```

---

## Medium Shadow

```txt id="f56"
shadow-[0_4px_12px_rgba(15,23,42,0.06)]
```

---

## Large Shadow

```txt id="f57"
shadow-[0_8px_32px_rgba(15,23,42,0.08)]
```

---

# 11. MOTION SYSTEM

---

## Standard Transition

```txt id="f58"
transition-all duration-200 ease-out
```

---

## Premium Easing

```txt id="f59"
cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Auth Transition

```txt id="f60"
fade + slight upward movement
```

NOT:

* dramatic slides
* bouncy animations
* large scaling

---

# 12. TYPOGRAPHY SYSTEM

---

## Headings

```txt id="f61"
font-semibold tracking-tight text-slate-900
```

---

## Body

```txt id="f62"
text-slate-600
```

---

## Labels

```txt id="f63"
text-sm font-medium text-slate-500
```

---

## Small Meta Text

```txt id="f64"
text-xs text-slate-400
```

---

# FINAL DESIGN IDENTITY

Your SaaS should now feel:

```txt id="f65"
calm
professional
focused
breathable
structured
premium
```

Like:

# a modern operational workspace for freelancers.

NOT:

* flashy startup software
* overdesigned productivity app
* generic admin template

This system is cohesive with:

* your auth flow
* your copy system
* your onboarding
* your product structure
* your audience
* your UX goals.
