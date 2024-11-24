import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class FluidSacDonQuixoteCorrosion implements Skill{
    readonly Name: string = "Fluid Sac";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 42;
    readonly Coins: number = 1;
    readonly CoinValue: number = -25;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
        "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Tremor]<br>"+
        "[On Hit] Inflict 10 [Sinking]<br>"+
        "If target is NOT Staggered, in Low Morale, nor in Panic, deal 50% of damage dealt as bonus damage", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/DonQuixote/EGO/FluidSac/20302erosionprofile.png";
}