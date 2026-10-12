import { useAuth } from "@/hooks/useAuth";
import { menuLinks } from "@/routes/nav.path";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function NavItems() {
  const { user } = useAuth();

  return (
    <>
      {menuLinks.map((item) => (
        <Typography
          key={item.link}
          href={item.link}
          component={Link}
          sx={{
            fontSize: "18px",
            color: "text.primary",
            textDecoration: "none",
            fontWeight: "normal",
          }}
        >
          {item.text}
        </Typography>
      ))}
      {!user && (
        <Typography
          href={"/register/login"}
          component={Link}
          sx={{
            fontSize: "18px",
            color: "text.primary",
            textDecoration: "none",
            fontWeight: "normal",
          }}
        >
          Login
        </Typography>
      )}
    </>
  );
}
