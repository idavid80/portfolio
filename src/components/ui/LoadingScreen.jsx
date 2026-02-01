import Spinner from "./Spinner";
import './styles/LoadingScreen.css'

export default function LoadingScreen() {
  return (
    <div className="spinner fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#EBEFF5] dark:bg-slate-950 transition-colors duration-500">
      <Spinner size={200} />
    </div>
  );
}