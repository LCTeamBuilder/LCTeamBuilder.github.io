import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ThePriestOfLaManchalandGregorSkill3: Skill = {
    Name: "Nightmare Hunt",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("On Hit with this Skill: heal 50% of the HP damage dealt (max 100 per Skill)<br>"+
            "[On Use] Deal +1.5% more damage for every X% missing HP on self<br>"+
            "[On Use] If the target has 6+ [Bleed], Coin Power +1<br>"+
            "[On Use] Consume every excess Stack of [Bloodied Hand] past 10 Stack to gain the following effects:<br>"+
            "- Heal (Stacks consumed x 3) HP on self<br>"+
            "- If this unit consumed 10+ Stack, Coin Power +1<br>"+
            "- If this unit consumed 20+ Stack, Reuse the final Coin<br>"+
            "[On Use] Gain 10 [Bleed]<br>"+
            "[After Attack] Heal 10% HP on self"),
        new SkillDescriptionPart("[On Hit] Gain 3 [Bloodied Hand]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Bleed] Count<br>"+
            "[On Hit] Inflict +2 [Rupture] Count", 2),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]<br>"+
            "[On Hit] Inflict 2 [Rupture]", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/TheUnforgivableSin.png"
}