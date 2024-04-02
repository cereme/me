import content from './content.json';

export default function Resume() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
          {content.headline}
      </main>
    );
  }
  