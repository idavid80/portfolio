import Spinner from "./Spinner";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#EBEFF5] dark:bg-slate-950 transition-colors duration-500">
      <Spinner size={200} />
    </div>
  );
}