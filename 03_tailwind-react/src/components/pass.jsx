import React, { useState, useCallback, useEffect, useRef } from 'react';

function Pass() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [spetialChar, setSpecialChar] = useState(false);
  const [number, setNumber] = useState(false);
  const [btncolor, setBtnColor] = useState("blue");
  let passwordRef = useRef();

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let numbers = "0123456789";
    let pass = "";

    if (spetialChar) chars += specialChars;
    if (number) chars += numbers;

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
  }, [length, spetialChar, number, setPassword]);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    setBtnColor("green");
    setTimeout(() => {
      setBtnColor("blue");
    }, 1000);
  };

  useEffect(() => {
    generatePassword();
  }, [generatePassword, length, spetialChar, number]);

  return (
    <>
      <div className="min-w-xl w-full max-w-4xl max-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white">Password Ganrator</h1>
        <div className="flex shadow mx-4 my-3 rounded-lg overflow-hidden mb-04">
          <input
            type="text"
            className="outline-none w-full py-1 px-3 bg-amber-50"
            value={password}
            readOnly
            placeholder="password"
            ref={passwordRef}
          />
          <button
            className="outline-none px-2 text-xl flex text-white shrink-0 hover:bg-blue-800"
            style={{ backgroundColor: btncolor }}
            onClick={copyToClipboard}
          >
            copy
          </button>
        </div>

        <div className="flex justify-between my-2 mt-4">
          <div className="flex gap-x-2 text-sm">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer"
            />
            <label>Lenght : {length}</label>
          </div>

          <div className="flex gap-x-2 text-sm">
            <input
              type="checkbox"
              id="specialChar"
              checked={spetialChar}
              onChange={() => setSpecialChar((prev) => !prev)}
            />
            <label htmlFor="specialChar">Include Special Characters</label>
          </div>

          <div className="flex gap-x-2 text-sm">
            <input
              type="checkbox"
              id="number"
              checked={number}
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="number">Include Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pass;
