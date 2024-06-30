import Arrow from "@/assets/icons/arrow.svg";
import { UserInfo } from "./Components";

const PersonalAccount = () => {
  return (
    <section>
      <button className="text-sm text-[#76787A] font-semibold flex items-center gap-2">
        <Arrow className="w-2 h-[14px]" /> Вернуться к сотрудникам
      </button>
      <div className="w-full bg-[#232324] pt-10 px-10 pb-5 rounded-xl">
        <UserInfo
          name="Иван"
          surname="Иванов"
          middleName="Иванович"
          address="Россия, Красноярск"
          position="UI/UX designer"
        />
        <div className="flex gap-2 mt-[52px]">
          <button className="text-sm text-[#E1E3E6] font-semibold border-b border-[#0047BB]">
            Основная информация
          </button>
          <button className="text-sm text-[#E1E3E6] font-semibold">
            Отпуск
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonalAccount;
