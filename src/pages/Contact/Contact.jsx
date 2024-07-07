import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <div className=" bg-white sm:mt-[10vh] sm:max-w-[70%]   sm:rounded-tr-[150px] sm:rounded-br-[150px]">
        <form action="" className=" flex flex-col justify-center p-4  gap-6  ">
          <h1 className=" text-center text-[35px]"> Contact Our Expert </h1>
          <label htmlFor="Name" className=" text-[20px]">
            {" "}
            Name
          </label>
          <input type="text" className=" formcss" />
          <label htmlFor="Email"> Email</label>
          <input type="email" className="formcss" />
          <label htmlFor="PhoneNumber">PhoneNo .</label>
          <input type="text" className="formcss" />
          <label htmlFor="Address">Address</label>
          <input type="text" className="formcss" />
          <button className="  p-3 bg-violet-500 text-white w-[200px]  rounded-xl hover:via-violet-700    items-center ">
            Sumbit
          </button>
        </form>
      </div>
    </>
  );
};
