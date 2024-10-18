import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CapoteIshmaelCorrosion implements Skill{
    readonly Name: string = "Capote";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 27;
    readonly Coins: number = 1;
    readonly CoinValue: number = -7;
    readonly AttackWeight: number = 4;
    readonly SkillLevel: number = 3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Give 1 [Wrath Fragility] and [Wrath DMG Up] to all units next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 5 [Burn]<br>"+
            "[On Hit] Target loses 15 SP<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2; if the burst Staggered the target, inflict 2 [Burn] on 3 random units", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Ishmael/EGO/Capote/20804erosionprofile.png";
}