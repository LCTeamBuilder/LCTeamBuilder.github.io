import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const FellBulletYiSangAwakening: Skill = {
    Name: "Fell Bullet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 18,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 7,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the ally with the least HP<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If the said Reson. was a Pride Reson., gain (highest Reson. x 2) [Torn Memory] instead (max 7)<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("This Coin only deals damage against the main target.<br>"+
            "If the main target is an ally, deal +15% more damage for every [Torn Memory] (max 105%)<br>"+
            "[On Ally Kill] Apply 3 [Poise] to self and 2 allies<br>"+
            "[On Ally Kill] +1 E.G.O resource for the killed ally's Skill 1 and 2 Affinities<br>"+
            "[On Ally Kill Fail] Gain 3 [Poise]", 1),
        new SkillDescriptionPart("This Coin only deals damage against the sub-targets<br>"+
            "- If the first Coin failed to kill the ally, 1 random sub-target takes damage<br>"+
            "+9% Damage on Critical Hit for every [Torn Memory] (max 63%)<br>"+
            "[On Crit] Inflict 3 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/FellBullet/20107awakenprofile.png"
}