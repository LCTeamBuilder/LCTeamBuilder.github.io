import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3SinclairSkill2: Skill = {
    Name: "Combat Preparation",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 1 [Defense Level Up] for every 2 [Tremor] Count on self (max 3)<br>"+
            "[On Use] At 4+ [Defense Level Up], Coin Power +1<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[Hit after Clash Win] On 2 other allies with the lowest HP percentage, apply 2 [Defense Level Up] next turn", 1),
        new SkillDescriptionPart("[On Hit] On 2 other allies with [Defense Level Up], apply (([Defense Level Up] on the ally)/2) [Offense Level Up] next turn (once per turn, max 3)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/CombatPreparation.png"
}