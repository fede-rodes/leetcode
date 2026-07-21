import {describe, it, expect} from "vitest"
import { canCompleteCircuit } from "./solution"

describe("gas station", () => {
  it("case 1", () => {
    // Arrange
    const gas = [1,2,3,4,5]
    const cost = [5,4,3,2,1]
    // Act
    const actual = canCompleteCircuit(gas, cost)
    // Assert
    expect(actual).toEqual(2)
  })
  it("case 2", () => {
    // Arrange
    const gas = [1,2,3,4,4]
    const cost = [5,4,3,2,1]
    // Act
    const actual = canCompleteCircuit(gas, cost)
    // Assert
    expect(actual).toEqual(-1)
  })
  it("case 3", () => {
    // Arrange
    const gas = [0,0,0,0,100]
    const cost = [5,4,3,2,1]
    // Act
    const actual = canCompleteCircuit(gas, cost)
    // Assert
    expect(actual).toEqual(4)
  })
  it("case 4", () => {
    // Arrange
    const gas = [100,1,1,1,3]
    const cost = [104,1,1,1,0]
    // Act
    const actual = canCompleteCircuit(gas, cost)
    // Assert
    expect(actual).toEqual(-1)
  })
})
