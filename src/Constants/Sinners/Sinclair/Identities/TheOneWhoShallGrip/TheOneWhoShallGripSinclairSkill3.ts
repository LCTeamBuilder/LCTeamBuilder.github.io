import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheOneWhoShallGripSinclairSkill3: Skill = {
    Name: "Self-destructive Purge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 30,
    Coins: 3,
    CoinValue: -12,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 15 SP<br>"+
            "If this unit is [Fanatic] , deal +15% damage<br>"+
            'If target is a &ltMechanical Amalgam&gt, deal +10% damage'),
        new SkillDescriptionPart("[On Hit] Raise Stagger Threshold by 50% of damage dealt", 2),
        new SkillDescriptionPart("[On Hit] If target has 5+ [Bleed], inflict 7 [Burn]<br>"+
            "[On Kill] Gain 1 [Blunt Power Up] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/TheOneWhoShallGrip/SelfdestructivePurge.png"
}