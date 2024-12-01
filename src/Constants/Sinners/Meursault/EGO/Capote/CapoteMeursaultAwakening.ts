import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const CapoteMeursaultAwakening: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +25,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Gain 2 [Haste], 1 [Wrath Power Up] and 1 [Blunt Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Burn]<br>"+
            "[On Hit] Inflict [Tremor] by target's [Burn] Count<br>"+
            "[On Hit] Inflict 3 [Burn] on 5 random enemies<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2, If the [Tremor Burst] Staggered the target, inflict +3 [Burn] Count on 5 random enemies", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Capote/20504awakenprofile.png"
}