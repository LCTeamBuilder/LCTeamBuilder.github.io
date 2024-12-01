import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MulticrackOfficeFixerHeathcliffSkill3: Skill = {
    Name: "Photoelectric Harpoon",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 2 [Charge] on self (max 2)"),
        new SkillDescriptionPart("[On Hit] Gain +7 [Charge] Count", 2),
        new SkillDescriptionPart("[On Hit] Gain +([Charge] x 3) [Charge] Count (max 9)", 3),
        new SkillDescriptionPart("[On Hit] Inflict [Photoelectricity] equal to [Charge] (max 3)<br>"+
            "[On Hit] Inflict 1 [Blunt Fragility] for every 2 [Charge] (max 2)", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/MultiCrackOfficeFixer/PhotoelectricHarpoon.png"
}