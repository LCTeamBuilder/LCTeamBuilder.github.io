import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ScrewlooseWallopMeursaultAwakening: Skill = {
    Name: "Screwloose Wallop",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 23,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Gain 3 [Protection]<br>"+
            "[After Attack] Gain 1 [Surgery] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502awakenprofile.png"
}