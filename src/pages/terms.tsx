import Seo from '@/components/Seo';

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Seo title="Terms | Gabe Dev" description="Terms of service for Gabe Dev." path="/terms" />
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-foreground/80">These terms are a simple, common-sense outline for using this site.</p>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-foreground/80">
        <li>Be respectful and lawful in your use of the site.</li>
        <li>Do not abuse forms or attempt to disrupt service.</li>
        <li>Content is provided as-is without warranty.</li>
      </ul>
      <p className="mt-6 text-sm text-foreground/70">Questions? Email gabrieltemtsen@gmail.com.</p>
    </div>
  );
}

