import {describe, it, expect} from "vitest";
import {RandomizedSet} from "./solution"

describe("insert delete getrandom o1", () => {
  it("insert", () => {
    const rs = new RandomizedSet();
    expect(rs.insert(9)).toBeTruthy();
    expect(rs.insert(9)).toBeFalsy();
    expect(rs.insert(0)).toBeTruthy();
  })
  it("remove", () => {
    const rs = new RandomizedSet();
    expect(rs.insert(9)).toBeTruthy();
    expect(rs.insert(0)).toBeTruthy();
    expect(rs.remove(0)).toBeTruthy();
    expect(rs.remove(9)).toBeTruthy();
    expect(rs.remove(9)).toBeFalsy();
  })
  it("rand", () => {
    const rs = new RandomizedSet();
    expect(rs.insert(9)).toBeTruthy();
    expect(rs.getRandom()).toEqual(9);
  })
})
