import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RCorp4thPackReindeerIshmaelSkill3: Skill = {
    Name: "Mind Whip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 2,
    Coins: 4,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("Spend 8 [Charge] Count<br>"+
        "If at less than 8 [Charge] Count at Combat Start, target a random unit for an unopposed attack"),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 40% of damage dealt", 1),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 30% of damage dealt", 2),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 20% of damage dealt", 3),
    new SkillDescriptionPart("[On Hit] Inflict 1 [Sinking]<br>"+
        "[On Hit] Raise Stagger Threshold by 10% of damage dealt", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/RCorp4thPackReindeer/MindWhip.png"
}