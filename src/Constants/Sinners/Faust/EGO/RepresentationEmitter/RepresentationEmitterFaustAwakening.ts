import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RepresentationEmitterFaustAwakening: Skill = {
    Name: "Representation Emitter",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: -3,
    SkillDescription: [new SkillDescriptionPart("[After Attack] Heal 12 SP for 4 allies with the least SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Faust/EGO/RepresentationEmitter/20201awakenprofile.png"
}