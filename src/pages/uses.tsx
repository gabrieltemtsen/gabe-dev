import Seo from '@/components/Seo';

export default function Uses() {
  const items = [
    { label: 'Editor', value: 'VS Code + Copilot' },
    { label: 'Terminal', value: 'zsh + oh-my-zsh' },
    { label: 'Design', value: 'Figma' },
    { label: 'Stack', value: 'Next.js, TypeScript, Tailwind' },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Seo title="Uses | Gabe Dev" description="Tools and setup I use to build." path="/uses" />
      <h1 className="text-3xl font-bold">Uses</h1>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.label} className="glass p-4 rounded-lg">
            <span className="font-semibold">{item.label}:</span> <span className="text-foreground/80">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

