import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  const handleGeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}|:<>?-=[];,.~`";

    // for (let i = 1; i <= length; i++) {
    //   pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    // }

    // above for loop code can be written as below
    pass = Array.from({ length }, () =>
      str.charAt(Math.floor(Math.random() * str.length + 1))
    );
    setPassword(pass.join(""));

    // setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const handleCopyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    handleGeneratePassword();
  }, [length, numberAllowed, charAllowed, handleGeneratePassword]);

  return (
    <>
      <div className="w-full bg-slate-800 h-screen">
        <h1 className="text-orange-500 font-serif font-extrabold p-4 text-3xl border-4 rounded-full px-10 border-amber-100">
          Password Generator App
        </h1>

        <main className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-10 m-40 bg-red-500">
          <div className="flex shadow rounded-lg overflow-hidden mb-4 mx-4 size-11/12">
            <input
              className="outline-none rounded-lg w-full py-1 px-3 text-gray-700"
              type="text"
              value={password}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Password"
              ref={passwordRef}
              readOnly
            />
            <button
              onClick={handleCopyPassword}
              type="button"
              className="outline-none bg-gray-500 text-white px-3 py-0.5 shrink-0 hover:bg-orange-700"
            >
              Copy
            </button>
          </div>
          <div className="flex justify-items-center text-sm gap-x-2 mx-5">
            <div className="flex items-center gap-x-3">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => setLength(e.target.value)}
              />

              <label className="text-base text-white">Length : {length}</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label className="text-base text-white" htmlFor="numberInput">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-base text-white" htmlFor="charInput">
                Special Characters
              </label>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
