import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const AEDDHeathcliffCorrosion: Skill = {
    Name: "AEDD",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -7,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain +1 [Charge] Count for every 10% of missing HP (Max 7)<br>"+
            "Gain 2 [Haste] next turn"),
        new SkillDescriptionPart("[On Hit] Spend all [Charge] Count to deal bonus Gloom damage by ([Charge] Count*2,5)% of damage dealt (Max 50%)<br>"+
            "[After Attack] Spend all [Charge] Count<br>"+
            "[Tails Attack End] Lose HP by 10% of Max HP to gain +10 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/AEDD/20703erosionprofile.png"
}