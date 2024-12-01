import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ShiAssocSouthSection5IshmaelSkill3: Skill = {
    Name: "Catch Breath",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise] Count, +50% Critical Damage"),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Crit] At less than 25% HP, heal 100% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ShiAssociationSouthSection5/CatchBreath.png"
}