import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class FellBulletHeathcliffAwakening implements Skill{
    readonly Name: string = "Fell Bullet";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 7;
    readonly Coins: number = 2;
    readonly CoinValue: number = +7;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If it was an A-Reson., gain (highest Reson. + 2) [Torn Memory] instead<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[Before Attack] Gain +1 [Poise] Count<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("+15% Damage on Critical Hit for every [Torn Memory] (max 105%)<br>"+
            "[On Hit] Inflict 5 [Bleed]<br>"+
            "[On Crit] Inflict 3 [Sinking]<br>"+
            "[On Crit Kill] If this unit has the Ammo effect, gain 1 Ammo (3 times per Encounter)", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/FellBullet/20707awakenprofile.png";
}