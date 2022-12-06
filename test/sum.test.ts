// @ts-nocheck
import {
  gatheredParameters,
  oneParameterInArray,
  returnsString,
  returnsThreeLettersString,
  returnsTwoParametersAsArray,
  sum,
  withOneParameter,
} from "../src/exercises";

describe("add", () => {
  it("should sum of 2 and 3 equals to 5", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});

describe("returnsString", () => {
  it("should return any string", () => {
    expect(typeof returnsString() === "string").toBe(true);
  });
});

describe("returnsThreeLettersString", () => {
  it("should return any string", () => {
    expect(returnsThreeLettersString().length).toBe(3);
  });
});

describe("withOneParameter", () => {
  it("should return any string", () => {
    expect(withOneParameter("asdf")).toBe("asdf");
    expect(withOneParameter("3434")).toBe("3434");
    expect(withOneParameter(123)).toBe(123);
  });
});

describe("oneParameterInArray", () => {
  it("should return one argument in array", () => {
    expect(oneParameterInArray("asdf")).toEqual(["asdf"]);
  });
});

describe("returnsTwoParametersAsArray", () => {
  it("should return two argument in array", () => {
    expect(returnsTwoParametersAsArray("a", "b")).toEqual(["a", "b"]);
  });
});

describe("gatheredParameters", () => {
  it("should return two argument in array", () => {
    expect(gatheredParameters("a", "b", "c", "d")).toEqual([
      "a",
      "b",
      "c",
      "d",
    ]);
  });
});
