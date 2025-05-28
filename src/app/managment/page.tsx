import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { ManagmentDemo } from "@/components/Managment";
import { Nav } from "@/components/Nav";
import { MainManagment } from "@/components/Template/MainManagment";

export default function Managment() {
  return (
    <div className="px-4 md:px-10 mx-auto max-w-screen">
      <Container>
        <ManagmentDemo />
        <MainManagment />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
          <div>
            <MainManagment />
          </div>
          <div>
            <MainManagment />
          </div>
        </div>
        <MainManagment />
      </Container>
    </div>
  );
}
