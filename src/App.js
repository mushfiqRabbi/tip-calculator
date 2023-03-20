import InputField from "./components/InputField";
import dollarLogo from "./icons/icon-dollar.svg";
import personLogo from "./icons/icon-person.svg";
import Label from "./components/Label";
import Tips from "./components/Tips";

function App() {
  return (
    <>
      <div className="bg-[#c5e4e7] h-full">
        <header>
          <div className="w-fit m-auto pt-10">
            <p className="text-[#00494d] uppercase font-bold text-2xl tracking-[.5rem] ">
              spli
            </p>
            <p className="text-[#00494d] uppercase font-bold text-2xl tracking-[.5rem] ">
              tter
            </p>
          </div>
        </header>
        <div className="bg-white h-full mt-10 rounded-t-3xl p-10">
          <InputField
            label="bill"
            src={dollarLogo}
            htmlFor="bill-amount"
          ></InputField>
          <section>
            <div className="mt-10">
              <Label label="select tip % "></Label>
              <Tips></Tips>
            </div>
          </section>
          <InputField
            label="number of people"
            src={personLogo}
            htmlFor="number"
          ></InputField>
        </div>
      </div>
    </>
  );
}

export default App;
