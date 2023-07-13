import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <div className="mb-20 bg-yellow-400">
      <h1 className="text-center px-4 py-8 font-bold text-2xl">
        <HighlightIcon />
        ToDo
      </h1>
    </div>
  );
}

export default Header;
