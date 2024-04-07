import Image from 'next/image';

export default function RemoteButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 z-50 p-2 rounded-full cursor-pointer ease-in-out"
      aria-label="Scroll to top"
    >
      <Image
        src="/remote-button.svg"
        alt="remote button"
        width={54}
        height={54}
      />
    </button>
  );
}
