export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="h-20 bg-navy flex items-center justify-center">
      <p className="text-center text-white i">{`© Ting-Ting Chen ${year}`}</p>
    </footer>
  );
}
