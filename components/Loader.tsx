import Image from 'next/image';

const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading..."
        width={50}
        height={50}
        priority // Ensures the image is loaded as a priority
        aria-busy="true" // Indicates that the loader is active for screen readers
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;