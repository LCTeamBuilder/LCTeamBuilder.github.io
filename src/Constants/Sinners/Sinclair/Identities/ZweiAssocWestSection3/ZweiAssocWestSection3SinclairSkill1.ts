import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ZweiAssocWestSection3SinclairSkill1: Skill = {
    Name: "Suppressing.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +3 [Aggro] to this Skill Slot next turn<br>"+
            "[On Use] Gain 2 [Defense Level Up]<br>"+
            "[On Use] If the target has 4+ [Tremor] Count, Clash Power +2<br>"+
            "[Clash Win] Gain +3 [Tremor] Count"),
        new SkillDescriptionPart("[Hit after Clash Win] Inflict +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Defense Level Up] next turn", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Sinclair/ZweiAssocWestSection3/Suppressing.png"
}