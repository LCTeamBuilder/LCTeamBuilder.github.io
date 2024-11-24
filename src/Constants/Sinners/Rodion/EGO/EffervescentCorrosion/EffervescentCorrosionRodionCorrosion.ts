import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EffervescentCorrosionRodionCorrosion implements Skill{
    readonly Name: string = "Effervescent Corrosion";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 27;
    readonly Coins: number = 1;
    readonly CoinValue: number = -10;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] if main target has 50%+ hp, +1 Atk Weight;<br>"+
            "If main target has 75%+ hp, additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Heal 30% of damage dealt<br>"+
            "[On Hit] Inflict 5 [Defense Level Down]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904erosionprofile.png";
}