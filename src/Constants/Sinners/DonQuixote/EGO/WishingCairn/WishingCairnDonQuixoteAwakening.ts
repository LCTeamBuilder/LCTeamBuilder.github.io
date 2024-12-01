import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WishingCairnDonQuixoteAwakening: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +9,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict +4 [Bleed] Count<br>"+
            "[On Hit] Inflict 5 [Tremor]<br>"+
            "[Heads Hit] Inflict 2 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305awakenprofile.png"
}