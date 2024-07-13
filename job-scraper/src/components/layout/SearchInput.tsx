import { Dispatch, SetStateAction } from "react";

type SearchInputProps = {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
  };

function SearchInput({ input, setInput} : SearchInputProps) {
    
    return(
    <div className="flex flex-col items-center gap-6">
        <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-md border-2 border-gray-300 p-2 w-70"
            placeholder="Enter address.."></input>
    </div>
    );

}
export default SearchInput;