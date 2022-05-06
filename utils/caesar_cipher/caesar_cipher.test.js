import { caesarCipher } from "./caesar_cipher";

it("Shift by 13 units", ()=>{
    expect(caesarCipher("attack", 13)).toEqual("nggnpx")
})

it("Shift by 13 with space and capital", ()=>{
    expect(caesarCipher("ATTACK AT DAWN", 13)).toEqual("NGGNPX NG QNJA")
})

it("Shift by 8 units", ()=>{
    expect(caesarCipher("attack!", 8)).toEqual("ibbiks!")
})

