"use client";
import useToggleState from "@/hooks/useToggleState";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import NavProductModal from "./NavProductModal";
export default function NavSearchCompo() {
  const navToggle = useToggleState(false);

  return (
    <>
      <IconButton
        onClick={navToggle.onOpen}
        sx={{
          color: "primary",
        }}
      >
        <SearchIcon />
      </IconButton>

      {navToggle.state && <NavProductModal onClose={navToggle.onClose} />}
    </>
  );
}
