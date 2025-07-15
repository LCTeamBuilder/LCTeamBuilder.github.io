import { Ego, Skill } from "./Index";

export abstract class ExtraSkillsEgo extends Ego {
    abstract readonly ExtraAwakeningSkills: ReadonlyArray<Skill>;
    abstract readonly ExtraCorrosionSkills: ReadonlyArray<Skill>;
}