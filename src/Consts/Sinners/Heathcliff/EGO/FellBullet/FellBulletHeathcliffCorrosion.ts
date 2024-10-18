import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class FellBulletHeathcliffCorrosion implements Skill{
    readonly Name: string = "Fell Bullet";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 30;
    readonly Coins: number = 1;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (highest Reson. + 1) [Torn Memory] (max 7)<br>"+
            "- If it was an A-Reson., gain (highest Reson. + 2) [Torn Memory] instead<br>"+
            "[Before Attack] Gain +1 Atk Weight (Max. 2) for every 3 [Torn Memory]<br>"+
            "[Before Attack] Deal +3% more damage for every [Torn Memory] (max 21%)<br>"+
            "[Before Attack] Gain 1 [Poise] for every [Torn Memory] (max 7)<br>"+
            "[Before Attack] Deal +5% more damage for every 5 [Poise] on self (max 25%)<br>"+
            "[Before Attack] Consume 5 [Poise] on self<br>"+
            "[After Attack] Lose every [Torn Memory]"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed] and 3 [Sinking]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/FellBullet/20707erosionprofile.png";
}