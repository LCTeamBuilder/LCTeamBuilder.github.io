import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RoseateDesireIshmaelAwakening: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -13,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Offense Level Down]<br>"+
            "[On Hit] Inflict 3 [Paralyze] <br>"+
            "[On Hit] Inflict 3 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/RoseataDesire/20802awakenprofile.png"
}