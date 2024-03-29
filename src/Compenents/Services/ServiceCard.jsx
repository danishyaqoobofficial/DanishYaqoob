



const ServiceCard = (props) => {
    return (
        <>
            <div className="rounded-[8px] flex flex-col items-center px-[18px] py-[30px] bg-[#323846] h-[280px] w-[300px] cursor-pointer hover_shadow transition-three-second ">
                <i class=" text-[#01eefe] text-[22px] " className={props.icon}></i>
                <h2 className="text-[#fff] text-[18px] font-[600] mt-[12px] ">{props.title}</h2>
                <p className="text-[#ffffffbe] font-[500] text-[13px] text-center mt-[8px] "><p className="px-[8px] ">{props.h1}</p> {props.h2}</p>
                  <div className="rounded-[30px] mt-[15px] shadow px-[23px] py-[9px] text-[15px] transorm-scale font-[700] transition-three-second max-w-max cursor-pointer select-none text-[#20242d] bg-[#01eefe] ">
                    Service Now
                  </div>
            </div>
        </>
    )
}

export default ServiceCard