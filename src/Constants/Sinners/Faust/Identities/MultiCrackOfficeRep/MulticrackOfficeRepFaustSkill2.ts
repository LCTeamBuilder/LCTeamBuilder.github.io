import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const MulticrackOfficeRepFaustSkill2: Skill = {
    Name: "Charge Countercurrent",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 5-9 [Charge] Count, consume 2(10 - current [Charge] Count)% HP to raise [Charge] Count to 10<br>"+
            "[On Use] Consume 10 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("At 3+ Reson. including this Skill, consume all [Charge] Count on self and deal +([Charge] + 4)% more damage for every [Charge] Count consumed by this Skill (max 180%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/ChargeCountercurrent.png"
}