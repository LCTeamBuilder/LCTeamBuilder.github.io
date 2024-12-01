import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheBarberOfLaManchalandOutisSkill1: Skill = {
    Name: "Sewing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 10% of the HP damage dealt (max 10)<br>"+
            "[On Use] Consume up to 40 [Bloodfeast] and gain 1 [Blood-tinged Scissorblades] for every 8 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain +2 [Bleed] Count<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict +1 [Bleed] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict +1 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/Sewing.png"
}