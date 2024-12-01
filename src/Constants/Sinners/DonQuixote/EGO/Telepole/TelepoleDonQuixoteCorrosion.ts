import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const TelepoleDonQuixoteCorrosion: Skill = {
    Name: "Telepole",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Gain +10 [Charge] Count snd 10 [Rupture]<br>"+
            "[After Attack] Give 5 [Fragile], 10 [Rupture], and +12 [Charge] Count to all allies")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/Telepole/20303erosionprofile.png"
}