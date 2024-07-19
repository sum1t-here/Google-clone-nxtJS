import SearchHeader from "@/components/SearchHeader";
import "./../global.css";

export default function layout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
