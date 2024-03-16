import Counter from "./counter";

const Header = () => {
  return (
    <header className="mx-auto h-16 w-full bg-red-500 flex px-20 py-2 justify-around items-center">
      <span>My Header</span>

      <Counter />
    </header>
  );
};

export default Header;
