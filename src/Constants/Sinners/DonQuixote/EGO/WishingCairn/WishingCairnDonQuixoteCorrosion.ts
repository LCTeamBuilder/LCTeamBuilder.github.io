import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const WishingCairnDonQuixoteCorrosion: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 24,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Crit] Trigger [Tremor Burst]<br>"+
            "[On Crit] Inflict 8 [Bleed]<br>"+
            "[Tails Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 2", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/WishingCairn/20305erosionprofile.png"
}