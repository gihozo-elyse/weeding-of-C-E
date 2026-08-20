# Claudine & Eustache — Wedding Invitation

A small one-page Next.js site: guests see a sealed envelope, tap it, and it opens
into the wedding invitation with the couple's photo, countdown, schedule, venue
and contact numbers.

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (version 18 or newer) installed.

```bash
cd wedding-invite
npm install
npm run dev
```

Open **http://localhost:3000** in your browser — that's the live preview.

## 2. Change the details

Everything text-related is in `app/page.js`:

- `WEDDING_DATE` — the date/time the countdown counts down to.
- `CONTACTS` — the phone numbers shown as call buttons.
- The schedule items (Gusaba, Gusezerana, Kwiyakira) and venue text.

The couple's photo is `public/couple.jpg` — replace that file (keep the same
name) to swap the photo.

Colors and fonts are in `app/globals.css` (gold `#B8933E`, wine `#6E2338`,
ivory `#FBF5EA`).

## 3. Put it online (free) so you can send a link

The easiest free option is **Vercel** (made by the creators of Next.js):

1. Go to https://vercel.com and sign up (free, can use GitHub or email).
2. Upload this folder as a new project — either:
   - push it to a GitHub repo and click "Import Project" on Vercel, or
   - install the Vercel CLI and run `npx vercel` inside this folder and follow
     the prompts.
3. Vercel gives you a link like `https://claudine-eustache.vercel.app` — that's
   the link you send to guests. You can also connect a custom domain later if
   you want something like `claudine-eustache.com`.

Any other Next.js-friendly host (Netlify, Cloudflare Pages, Render) also
works the same way.

## 4. Send it

Once deployed, share the link on WhatsApp — when a guest opens it, they'll
see the sealed envelope first, tap it, and watch it open into the invitation.
