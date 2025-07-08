import ScreenSize from "@/components/footer/screen-size";

function Footer() {
  return (
    <footer className="grid h-16 w-full grid-cols-[1fr_auto_1fr] items-center justify-center border-t px-8 py-2 print:hidden">
      <ScreenSize className="col-start-2" />
    </footer>
  );
}

export default Footer;
