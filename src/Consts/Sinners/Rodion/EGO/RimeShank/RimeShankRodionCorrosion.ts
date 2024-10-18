import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RimeShankRodionCorrosion implements Skill{
    readonly Name: string = "Rime Shank";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 21;
    readonly Coins: number = 1;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 3;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets the unit with the most HP<br>"+
            "If target's HP is above 50%, deal +30% damage"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "[On Hit] Inflict 10 [Sinking]<br>"+
            "[On Hit] Inflict +8 [Sinking] Count", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/RimeShank/20903erosionprofile.png";
}