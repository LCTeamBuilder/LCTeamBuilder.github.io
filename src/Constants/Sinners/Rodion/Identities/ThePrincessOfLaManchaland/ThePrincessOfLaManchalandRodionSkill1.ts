import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePrincessOfLaManchalandRodionSkill1: Skill = {
    Name: "Begone…",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] On self and 1 ally with the highest max HP: consume up to 20 [Bloodfeast] and apply 1 [Blooming Thorn] for every 10 [Bloodfeast] consumed<br>"+
            "- Prioritizes &ltBloodfiend&gt allies<br>"+
            "- If the affected ally is a &ltBloodfiend&gt, this unit applies 1 additional [Blooming Thorn]<br>"+
            "- If this unit failed to consume [Bloodfeast], gain 5 [Bleed]<br>"+
            "[On Use] Coin Power +1 for every 6 [Bleed] on the target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Rupture]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/ThePrincessOfLaManchaland/Begone.png"
}