export default function Loading() {
  return (
    <>
      <p>Loading data....</p>
      <div className="flex justify-center items-center h-screen">
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            fill="none"
            strokeWidth="4"
          />
          <path className="opacity-75" fill="none" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
      </div>
    </>
  );
}
