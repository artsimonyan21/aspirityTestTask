import Container from "@/components/Container";
import LoadingEmployee from "@/components/LoadingEmployee";
import PersonalAccount from "@/components/PersonalAccount";
import PersonalInfo from "@/components/PersonalInfo";
import UserInfoProvider from "@/providers/UserInfo";

const Home = () => {
  return (
    <main className="bg-[#141414]">
      <UserInfoProvider>
        <Container>
          <PersonalAccount />
          <div className="grid grid-cols-12 gap-4 mt-4">
            <div className="lg:col-span-7 col-span-12 bg-[#232324] rounded-xl p-[30px]">
              <PersonalInfo />
            </div>
            <div className="lg:col-span-5 col-span-12 bg-[#232324] rounded-xl p-[30px]">
              <LoadingEmployee
                title="Персональная информация"
                percent="100"
                projectName="MedPoint 24"
                projectType="Коммерческий"
                userName="Анна Кузнецова"
                start="03 марта 2023"
                end="23 марта 2023"
              />
            </div>
          </div>
        </Container>
      </UserInfoProvider>
    </main>
  );
};

export default Home;
