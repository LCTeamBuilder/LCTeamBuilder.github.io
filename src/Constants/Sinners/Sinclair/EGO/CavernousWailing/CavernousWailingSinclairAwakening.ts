import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CavernousWailingSinclairAwakening: Skill = {
    Name: "Cavernous Wailing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 16,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. - 2) Atk Weight (max 2)"),
        new SkillDescriptionPart("[After Attack] Apply 20% of this unit's max HP as Shield to self and (1 + (highest Reason. - 2)) allies with the least current HP, and apply 2 [Blubberbubble] as well<br>"+
            "(max of other allies that gain [Blubberbubble]: 3)<br>"+
            "- If the affected unit already has [Blubberbubble], change the [Blubberbubble] value to 2<br>"+
            "- At 4+ highest Gloom A-Reason., this Skill's above effects change to 'apply 3 [Blubberbubble]' and 'change the [Blubberbubble] value to 3' instead.", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006awakenprofile.png"
}