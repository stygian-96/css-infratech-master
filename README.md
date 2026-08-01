
# CSS INFRATECH - Real Estate Management Landing Page


<img src="https://github.com/user-attachments/assets/c5463a31-b063-4064-bc4b-0e7e3b4aa73e" alt="Propease Thumbnail">

## 💻 Tech Stack

- **Next.js 15** – React framework for production
- **TailwindCSS** – Utility-first CSS framework
- **Shadcn UI** – Reusable components
- **Framer Motion** – Smooth animations
- **React Hook Form** – Form validations
- **Clerk** – Authentication
- **TypeScript** – Type-safe code
- **Number Flow** – Smooth number animations

## 🛠️ Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Shreyas-29/propease.git
    ```

2. Install dependencies:
    ```bash
    pnpm install
    # or
    yarn install
    ```

3. Run the development server:
    ```bash
    pnpm run dev
    # or
    yarn dev
    ```
4. Environment Variables
Rename `.env.example` to `.env`:

```env
    NEXT_PUBLIC_APP_NAME=PropEase

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/signin
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/signup
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_URL=/
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_URL=/
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser


## 🚀 Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
