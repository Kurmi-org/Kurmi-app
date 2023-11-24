import NavLogin from "@/components/NavLogin";

export default function authLayout({ children }) {
  return (
    <>
        <NavLogin />
        {children}
    </>
  );
}