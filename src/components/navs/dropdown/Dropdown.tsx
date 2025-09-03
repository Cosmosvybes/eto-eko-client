import { BiCaretDown, BiCaretRight } from "react-icons/bi";

const Dropdown = ({
  header,
  children,
  isOpen,
  handleOpenDropDown,
  isClosedNav,
}: {
  header: string;
  children?: string[];
  isOpen: boolean;
  isClosedNav: boolean;
  handleOpenDropDown(): void;
}) => {
  return (
    <>
      <div className="w-full  flex gap-2  h-auto flex-col justify-center items-start px-24">
        <button
          className="text-[#074941] border-none flex justify-center font-bold font-sans items-center  gap-2  text-2xl"
          onClick={handleOpenDropDown}
        >
          {header}

          {isOpen ? (
            <BiCaretRight
              className={`text-[#074941] transition ${
                children == undefined && "invisible"
              }   duration-300  text-xl inline`}
            />
          ) : (
            <BiCaretDown
              className={`text-[#074941]  transition duration-300 ${
                children == undefined && "invisible"
              }   text-xl inline`}
            />
          )}
        </button>

        {children && (
          <ul
            className={`list-none  transition flex flex-col gap-4 mt-2 items-start  duration-500 ${
              isClosedNav
                ? "visible opacity-100 h-[auto]"
                : " opacity-0 invisble h-0"
            }`}
          >
            {children.map((link) => (
              <li key={link} className="text-[#074941]">
                {" "}
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;
