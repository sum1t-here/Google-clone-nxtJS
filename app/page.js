import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://imgs.search.brave.com/uqtIly62e-LFV_u6RVe9txi4zmA0Q0jrnHPzsqlbtH4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8yLzJmL0dv/b2dsZV8yMDE1X2xv/Z28uc3ZnLzY0MHB4/LUdvb2dsZV8yMDE1/X2xvZ28uc3ZnLnBu/Zw"
          alt="Google logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </div>
  );
}
