import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RoseateDesireHongLuCorrosion: Skill = {
    Name: "Roseate Desire",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the highest Speed"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Defense Power Down]<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Inflict 4 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/HongLu/EGO/RoseataDesire/20602erosionprofile.png"
}