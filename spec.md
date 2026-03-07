# Anveshana Learning Centre

## Current State
The website has:
- Navbar with nav links (Home, About, Classes, Contact)
- Hero section with tagline, CTA, and logo card
- Highlights section (5 feature cards)
- Classes section (grades, subjects, boards)
- Enquiry form section
- Contact section with Google Maps embed
- Footer
- Admin panel to view enquiries

## Requested Changes (Diff)

### Add
1. **Announcement Banner** -- A dismissible top banner above the Navbar showing "Admissions Open for 2026–27. Limited Seats Available. Contact Now!" with a Contact Now CTA that scrolls to the contact section.
2. **Student & Parent Testimonials section** -- 4 testimonial cards with quotes and attribution. Placed after ClassesSection.
3. **Meet Your Teacher section** -- Teacher profile card with an AI-generated photo, 8 years CBSE experience, valuation and curriculum development expertise, and the Jnanagaurava Award mention. Placed after TestimonialsSection.
4. **Study Tips & Learning Resources section** -- 4 blog-style cards with article titles and short summaries: Board Exam Preparation, Maths Study Mistakes, Science Revision Techniques, Time Management. Placed after TeacherSection.
5. **Free Study Materials section** -- 4 resource cards (Formula Sheets, Sample Question Papers, Practice Worksheets, Important Notes for Class 8/9/10) with download buttons that show a "Coming Soon" toast. Placed after StudyTipsSection.

### Modify
- **Navbar** -- Add nav links for Testimonials, Teacher, Study Tips, Resources to desktop and mobile menus.
- **App.tsx** -- Insert all 5 new sections into the main layout in the correct order. Add announcement banner above Navbar.

### Remove
- Nothing removed.

## Implementation Plan
1. Generate teacher profile avatar image.
2. Create `AnnouncementBanner.tsx` -- dismissible strip with admission message and Contact Now button.
3. Create `TestimonialsSection.tsx` -- grid of 4 testimonial cards with quote, attribution, and decorative styling.
4. Create `TeacherSection.tsx` -- profile card with teacher photo, bio text (no name), 8 yrs CBSE experience, valuation/curriculum development, Jnanagaurava Award.
5. Create `StudyTipsSection.tsx` -- 4 article cards with title, short description, and a "Read More" button (non-functional, decorative).
6. Create `ResourcesSection.tsx` -- 4 download resource cards with download icon and a toast on click saying "Coming Soon – materials will be available shortly."
7. Update `Navbar.tsx` -- add Testimonials, Teacher, Study Tips, Resources nav links.
8. Update `App.tsx` -- render AnnouncementBanner above Navbar, insert all new sections into main.
