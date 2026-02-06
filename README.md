# Gabriel Temtsen's Portfolio

Welcome to my portfolio! Here you'll find information about my projects, skills, and experience.

## About Me

I am a passionate developer with experience in various technologies and a strong desire to learn and grow in the field of software development.

## Features

- Toggle between light and dark themes to view the portfolio in your preferred style.

## Projects

## Skills

## Contact

Feel free to reach out to me via [email](mailto:gabrieltemtsen@gmail.com) or connect with me on [Farcaster](https://www.warpcast.com/gabrieltemtsen).

## Contact Form Setup

To enable the contact form to send emails, create a `.env.local` file using the provided `.env.local.example` template and supply a [Resend](https://resend.com) API key:

```
RESEND_API_KEY=your_resend_api_key
CONTACT_RECEIVER_EMAIL=gabrieltemtsen@gmail.com
NEXT_PUBLIC_SITE_URL=https://your-deployed-domain.example
```

Deployments must include these variables so the API route can deliver messages to `gabrieltemtsen@gmail.com` and to generate canonical links and the dynamic sitemap.

Also set `NEXT_PUBLIC_SITE_URL` to the canonical site origin (used to protect the contact API and for SEO canonical links).

Thank you for visiting my portfolio!

## SEO

- `robots.txt` lives in `public/robots.txt` and allows full crawling.
- `sitemap.xml` is served dynamically from `/sitemap.xml` using `NEXT_PUBLIC_SITE_URL`.
