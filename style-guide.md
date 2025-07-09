Generate a complete React + Vite + Tailwind CSS landing page project.

## Project Overview

A multi-vendor booking system landing page for booking DJs, Food Trucks, and Venues. It includes client login, vendor login, bookings page, customer support, and a blog.

## Fonts

Use "Plus Jakarta Sans" from Google Fonts in all components.

## Colors

Define Tailwind CSS custom colors:

- Gradient (brand primary): from #FF295D via #E31B95 to #C817AE
- White: #FFFFFF
- Black: #000000
- Gray shades: #666666, #2F2F2F, #AFADAF, #979797
- Blue: #2970BE
- Green: #04C373, #1C752E
- Yellow: #FFD500
- Accent: #FCF6D8, #FFEDF0

## Typography scale

- Heading 1: Bold, 60px
- Heading 2: Bold, 50px
- Heading 3: Bold/Regular, 40px
- Subtitle 1: Semi Bold, 25px
- Subtitle 2: Semi Bold, 21px
- Subtitle 3: Regular/SemiBold, 19px
- Subtitle 4: Medium/Regular, 18px
- Subtitle 5: Regular, 17px
- Subtitle 6: Medium/Regular, 16px
- Subtitle 7: Regular, 15px
- Subtitle 8: Regular/Bold, 14px
- Button 1: Bold/Medium, 20px
- Button 2: Bold/Medium, 18px

## Spacing

Use spacing scale:

- Small: 8px
- Medium: 16px
- Large: 24px
- Extra Large: 40px+

## Buttons

Primary Button:

- Gradient background
- White text
- Rounded corners (8px)
- Hover: darker gradient

Secondary Button:

- White background
- 2px solid gradient border
- Gradient text
- Rounded corners (8px)

## Layout

Create these pages:

- / (Landing page)
- /client-login (Client login)
- /vendor-login (Vendor login)
- /bookings (Booking catalog)
- /support (Customer support with FAQ and contact)
- /blog (Blog list and single post view)

## Components

Organize components in folders under /src/components:

- Common: Header, Footer, Button, Input, Loader, Modal
- Client: ClientLoginForm, Booking page after login
- Pricing page
- Bookings: BookingCard, BookingList, BookingDetails
- Blog: BlogList, BlogPost
- CustomerSupport: SupportForm, FAQ

## Folder Structure

- /src
  /components
  /pages
  /styles
  /utils
  /hooks

## Tailwind Config

Extend Tailwind theme with the specified colors, font family, font sizes, and spacing.
Configure gradient utilities for the brand gradient.

## Landing Page Features

- Hero section with background image, title, and call-to-action book now and search button with parameters selection.
- Showcase vendors and categories.
- Customer testimonials section.
- Success Stories section.
- Reviews
  See attached image for better refrence
  Generate code with clean separation of concerns, Tailwind classes matching the style guide, and placeholder content ready to be replaced with real data.
