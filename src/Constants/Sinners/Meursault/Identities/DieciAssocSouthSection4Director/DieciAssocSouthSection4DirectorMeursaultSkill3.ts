import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4DirectorMeursaultSkill3: Skill = {
    Name: "Scorch Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +5% more damage for every [Insight] (max 45%)<br>"+
            "[On Use] Coin Power +1 for every 6 [Sinking] on target (max 2)<br>"+
            "[Before Attack] Consume all [Erudition] on self and gain the same value as additional [Insight]<br>"+
            "[After Attack] At 4+ [Insight], reset value to 1 (if this Skill defeats an enemy, reset value to 3 instead)"),
        new SkillDescriptionPart("[On Hit] Inflict [Sinking] Potency/Count equal to [Insight] against the target (how much of that [Sinking] is Potency or Count is randomly determined)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/DieciAssocSouthSection4Director/ScorchKnowledge.png"
}