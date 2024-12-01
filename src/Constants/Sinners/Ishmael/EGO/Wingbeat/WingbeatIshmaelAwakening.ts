import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WingbeatIshmaelAwakening: Skill = {
    Name: "Wingbeat",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If this Skill's healing exceeds this unit's max HP, redirect the excess healing to 1 ally with the least HP percentage instead"),
        new SkillDescriptionPart("[On Hit] Heal 20% of Max HP on self", 1),
        new SkillDescriptionPart("[Heads Hit] Lose 1~2 SP<br>"+
            "[Heads Hit] Reuse this Coin (5 times per Skill)<br>"+
            "[On Hit] Heal self by 8~12% of damage dealt<br>"+
            "[On Hit] Inflict 1 [Gluttony Fragility]<br>"+
            "[On Hit] Inflict 1~4 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/Wingbeat/20806awakenprofile.png"
}