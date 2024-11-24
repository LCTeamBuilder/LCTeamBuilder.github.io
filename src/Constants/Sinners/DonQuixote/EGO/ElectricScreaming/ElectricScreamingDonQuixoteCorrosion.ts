import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ElectricScreamingDonQuixoteCorrosion implements Skill{
    readonly Name: string = "Electric Screaming";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 28;
    readonly Coins: number = 1;
    readonly CoinValue: number = -12;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets Randomly<br>"+
        "[Before Attack] Gain +1 Atk Weight (Max. 3) for every Envy Reson. above 2<br>"+
        "[Before Attack] Deal +((Envy Reson. - 3) x 12)% more damage (max 36%)<br>"+
        "[Before Attack] At less than 20 [Charge] Count, spend 1% of this unit's Max HP per missing [Charge] Count to raise [Charge] Count to 20<br>"+
        "[Before Attack] Spend up to 20 [Charge] to deal +5% more damage for every spent [Charge] Count (max 100%)"),
        new SkillDescriptionPart("[On Kill] Gain +3 [Charge] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/ElectricScreaming/20306erosionprofile.png";
}