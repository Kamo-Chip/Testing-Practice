import { caesarCipher } from "./caesar_cipher";

it("Shift by 13 units", ()=>{
    expect(caesarCipher("attack", 13)).toEqual("nggnpx")
})

it("Encrypt uppercase", ()=>{
    expect(caesarCipher("ATTACK", 13)).toEqual
})

