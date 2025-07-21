export default  function Selectbox({ classname = "", options = [], currentValue, ...props }) 
{
    return (
        <select
            {...props}
            defaultValue={currentValue}
            className={"border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 rounded-md mt-1 block w-fullmt-1mt-1 block w-full" + classname }
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}

        </select>
    );
}