import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ArdorBlossomStarIshmaelAwakening: Skill = {
    Name: "Ardor Blossom Star",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +22,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[Heads Hit] Raise Stagger Threshold by 40% of damage dealt<br>"+
            "[On Hit] Inflict [Burn] by Wrath Reson.<br>"+
            "[Heads Attack End] Inflict 5 [Burn] on 3 random enemies", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/ArdorBlossomStar/20803awakenprofile.png"
}