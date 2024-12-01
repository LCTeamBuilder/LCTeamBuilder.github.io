import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FellBulletHeathcliffAwakening: Skill = {
    Name: "Fell Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 7,
    Coins: 2,
    CoinValue: +7,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If it was an A-Reson., gain (highest Reson. + 2) [Torn Memory] instead<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[Before Attack] Gain +1 [Poise] Count<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("+15% Damage on Critical Hit for every [Torn Memory] (max 105%)<br>"+
            "[On Hit] Inflict 5 [Bleed]<br>"+
            "[On Crit] Inflict 3 [Sinking]<br>"+
            "[On Crit Kill] If this unit has the Ammo effect, gain 1 Ammo (3 times per Encounter)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Heathcliff/EGO/FellBullet/20707awakenprofile.png"
}