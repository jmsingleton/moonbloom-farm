# Moonbloom Farms Website — Design Document

**Date:** 2026-02-13

## Overview

Brand and informational website for Moonbloom Farms, a micro farm in Glen Ellen, CA that grows flowers and food, raises chickens/quail, and sells curated gift items. The target audience is affluent local women in the Sonoma County area.

## Goals

- Drive visitors to the farm stand (not a destination farm — it's a farm stand)
- Build social media following (Instagram)
- Grow an email subscriber list

## Technology

- **Framework:** Astro (static site generator)
- **Output:** Static HTML/CSS/JS
- **Hosting:** Netlify (free tier, auto-deploy from GitHub)
- **Repository:** GitHub
- **Blog format:** Markdown files

## Site Structure

Hybrid approach: the home page previews all sections with condensed content, and dedicated pages go deeper.

### Pages

1. **Home** — Hero image, short about blurb, featured products preview, photo grid teaser, email signup, farm stand location/hours
2. **About** — The Moonbloom Farms story, the people behind it, the philosophy
3. **What We Grow & Sell** — Flowers, produce, eggs, gift items organized by category with photos and descriptions (no prices or cart)
4. **Gallery** — Responsive photo gallery of farm life, flowers, products, and seasons with lightbox view
5. **Blog** — Seasonal updates, what's available now, farm stories (Markdown-based)
6. **Contact** — Farm stand location with embedded Google Map, hours, social links, email signup

### Navigation

- Sticky header with farm logo and nav links
- Footer with social icons, email signup, and farm stand address

## Visual Design

**Direction:** Rustic elegant — upscale farmhouse feel

### Color Palette

- **Backgrounds:** Cream/off-white
- **Primary accent:** Deep forest green
- **Secondary accent:** Muted terracotta/clay
- **Highlights:** Soft gold
- **Text:** Charcoal (not pure black)

### Typography

- **Headings:** Serif font (e.g., Playfair Display or Lora)
- **Body:** Clean sans-serif (e.g., Lato or Source Sans)

### Textures & Details

- Subtle linen or paper-like background textures
- Thin botanical line-art dividers between sections
- Organic/rounded edges rather than hard boxes
- Full-bleed hero photography with natural light

### Overall Feel

Like a high-end farm-to-table restaurant menu or upscale farmers market brand — warm, natural, trustworthy, a little luxurious.

## Features

- **Email signup:** Inline form (name + email) in hero section and footer. Netlify Forms for initial capture, upgradeable to Mailchimp/ConvertKit later.
- **Social links:** Instagram and other platforms, prominent in header/hero and footer.
- **Farm stand info:** Address, seasonal hours, embedded Google Map on home and contact pages.
- **Blog:** Markdown-based posts via Astro content collections. Home page shows latest 2-3 posts.
- **Gallery:** Responsive photo grid with category filtering or single stream. Lightbox for enlarged views.
- **Mobile responsive:** Fully responsive design — critical for people searching on mobile in Sonoma.
- **Performance:** Static output for fast loading, even on spotty rural cell service.

## Out of Scope

- E-commerce / shopping cart / payments
- User accounts or login
- Database
- CMS (content managed via Markdown files and code)
