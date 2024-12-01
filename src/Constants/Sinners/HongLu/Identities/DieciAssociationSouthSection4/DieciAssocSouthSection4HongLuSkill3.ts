import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const DieciAssocSouthSection4HongLuSkill3: Skill = {
    Name: "Cyclical Knowledge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 2+ [Insight], gain Coin Power equal to [Insight]<br>"+
            "[On Use] Deal +3% more damage per [Sinking] on target (Max 30%)"),
        new SkillDescriptionPart("[On Hit] Inflict +4 [Sinking] Count<br>"+
            "[After Attack] If target is Staggered or defeated, heal 10 SP", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/HongLu/DieciAssociationSouthSection4/CyclicalKnowledge.png"
}