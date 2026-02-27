import Seo from '@/components/Seo';

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Seo title="Privacy | Gabe Dev" description="Privacy policy for Gabe Dev." path="/privacy" />
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-foreground/80">I only collect information you voluntarily submit via the contact form.</p>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-foreground/80">
        <li>Messages are sent via email and not stored on the site.</li>
        <li>Third-party links follow their own privacy practices.</li>
        <li>You can request deletion of any message you sent.</li>
      </ul>
      <p className="mt-6 text-sm text-foreground/70">Contact: gabrieltemtsen@gmail.com.</p>
    </div>
  );
}

