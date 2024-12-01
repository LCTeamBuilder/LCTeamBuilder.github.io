import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WishingCairnYiSangCorrosion: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sloth Fragility]<br>"+
            "[On Hit] Inflict 2 [Paralyze]<br>"+
            "[Heads Hit] Inflict 3 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/WishingCairn/20103erosionprofile.png"
}