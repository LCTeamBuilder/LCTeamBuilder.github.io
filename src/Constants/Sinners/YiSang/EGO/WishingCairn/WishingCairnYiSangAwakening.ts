import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WishingCairnYiSangAwakening: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sloth Fragility]<br>"+
            "[Heads Hit] Inflict 3 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/WishingCairn/20103awakenprofile.png"
}