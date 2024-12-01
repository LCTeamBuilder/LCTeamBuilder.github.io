import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CapoteMeursaultCorrosion: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 37,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Gain 2 [Haste], 1 [Wrath Power Up] and 1 [Blunt Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 12 [Burn]<br>"+
            "[On Hit] Inflict [Tremor] by [Burn] on target<br>"+
            "[On Hit] Inflict 3 [Burn] on 5 random enemies<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2, If the [Tremor Burst] Staggered the target, inflict +4 [Burn] Count on 5 random units", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Capote/20504erosionprofile.png"
}