import {
  Given as CucumberGiven,
  When as CucumberWhen,
  Then as CucumberThen,
} from "@cucumber/cucumber";
import { TestWorld } from "./world";

export const Given = CucumberGiven<TestWorld>;
export const When = CucumberWhen<TestWorld>;
export const Then = CucumberThen<TestWorld>;
