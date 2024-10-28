import { BsCoin } from "react-icons/bs";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Header = () => {
const [open, setOpen] = useState(false)



  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-8 items-center">
       <div onClick={()=>setOpen((!open))} className="text-3xl lg:hidden">
        {
            open === true ? <ImCross /> : <TiThMenu />
        }
       </div>
       <div>
       <img src="../../../logo.png" alt="" />
       </div>
        </div>

        <div className={`flex gap-8 flex-col lg:flex-row hover:bg-slate-500 lg:flex   lg:justify-between lg:gap-8 absolute lg:static bg-slate-300 lg:bg-white 
        ${open? '' : 'hidden'}
        top-[110px] left-10 p-6 `}>
           <a href="/home">Home</a>
            <a href="/home">Fixture</a>
            <a href="/home">Teams</a>
            <a href="/home">Schedules</a>
        </div>

        <div>
        <button className="btn border-2 rounded-2xl flex item-center font-bold">
            <p>
              <span> </span>Coin
            </p>
            <p className="bg-yellow-400 rounded-full text-xl">
              <BsCoin />
            </p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Header;
