import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const ElectricScreamingDonQuixoteCorrosion: Skill = {
    Name: "Electric Screaming",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 2,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets Randomly<br>"+
        "[Before Attack] Gain +1 Atk Weight (Max. 3) for every Envy Reson. above 2<br>"+
        "[Before Attack] Deal +((Envy Reson. - 3) x 12)% more damage (max 36%)<br>"+
        "[Before Attack] At less than 20 [Charge] Count, spend 1% of this unit's Max HP per missing [Charge] Count to raise [Charge] Count to 20<br>"+
        "[Before Attack] Spend up to 20 [Charge] to deal +5% more damage for every spent [Charge] Count (max 100%)"),
        new SkillDescriptionPart("[On Kill] Gain +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306erosionprofile.png"
}