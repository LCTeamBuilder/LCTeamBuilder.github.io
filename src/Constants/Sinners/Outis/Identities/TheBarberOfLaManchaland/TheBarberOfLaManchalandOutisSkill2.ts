import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TheBarberOfLaManchalandOutisSkill2: Skill = {
    Name: "Scission",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 20% of the HP damage dealt (max 20)<br>"+
            "[On Use] Consume up to 60 [Bloodfeast] and gain 1 [Blood-tinged Scissorblades] for every 6 [Bloodfeast] consumed<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] If the target has [Sewing Target], inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sewing Target] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/TheBarberOfLaManchaland/Scission.png"
}