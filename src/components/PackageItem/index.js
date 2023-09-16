
const PackageItem = ({ Package }) => {
    return (
        <div className="flex flex-col text-center py-[5px] px-[2px] rounded-[20px] text-[15px]   bg-[#4e8c32] flex-grow[4] flex-shrink[4] laptop:basis-[48%] tablet:basis-[30%] mobile:basis-[48%] border border-solid border-[#28a952]">
            <p>{Package?.name}:</p>
            <p>{Package?.value}</p>
        </div>
    )
}

export default PackageItem