import Navigation from './layout/navigation/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex'>
          git init
        </div>
      </main>
    </>
  );
}
