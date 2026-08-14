import {describe, it, expect} from "vitest"
import { countSubAnagram } from "./solution"

describe("count substring anagrams", () => {
    it("ex 1", () => {
        // Arrage
        const s = "gattactat";
        const anagram = "att";
        // Act
        const actual = countSubAnagram(s, anagram)
        // Assert
        expect(actual).toEqual(3)
    })
})