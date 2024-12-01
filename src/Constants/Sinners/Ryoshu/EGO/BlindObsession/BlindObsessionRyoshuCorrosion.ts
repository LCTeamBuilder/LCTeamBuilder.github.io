import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const BlindObsessionRyoshuCorrosion: Skill = {
    Name: "Blind Obsession",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] Gain 4 [Poise]. Consume 2 [Charge] Count to gain 1 Poise (Max 10)<br>"+
            "[After Attack] Gain +4 [Charge] Count for every unit defeated by this Skill"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count<br>"+
            "[On Crit] At 10+ [Poise], gain +30% Critical Damage", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ryoshu/EGO/BlindObsession/20406erosionprofile.png"
}