import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HolidayHeathcliffAwakening implements Skill{
    readonly Name: string = "Holiday";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 17;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Hit] Randomly select one of the following effects: [Burn], [Bleed], [Tremor], [Rupture], or [Sinking]. Then, inflict 1 Potency of the selected effect next turn. Repeat the above process (2 + (Highest Glut. A-Reson.)) times. (7 times max)<br>"+
            "[On Kill] Randomly select one of the following effects: 2 [Poise] Count, 2 [Charge] Count, 2 [Haste], 2 [Offense Level Up], or 2 [Defense Power Up]. Then, apply the selected effect to 2 random allies next turn", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Heathcliff/EGO/Holiday/20705awakenprofile.png";
}