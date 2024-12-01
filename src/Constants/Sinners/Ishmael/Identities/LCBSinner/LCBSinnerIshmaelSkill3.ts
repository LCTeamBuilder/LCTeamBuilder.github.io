import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LCBSinnerIshmaelSkill3: Skill = {
    Name: "Shield Bash",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +12,
    AttackWeight: 1,
    SkillLevel: -1,
    SkillDescription: [new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst], Inflict 1 [Blunt Fragility]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/LCBSinner/Guard.png", 
    // At time of writing this is incorrectly named in the source folder. To avoid having to manually rename this every time the
    // skill icon folder is overwritten and the rename script is ran, for the time being this will use the incorrect name until either
    // the source folder is fixed or the script is edited to automatically rename this file.
}