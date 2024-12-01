import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ScrewlooseWallopMeursaultCorrosion: Skill = {
    Name: "Screwloose Wallop",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 21,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Gain 2 [Surgery] next turn"),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Paralyze]<br>"+
            "Raise Stagger Threshold by 30% of damage dealt", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/YouWantToGetBeatHurtily/20502erosionprofile.png"
}