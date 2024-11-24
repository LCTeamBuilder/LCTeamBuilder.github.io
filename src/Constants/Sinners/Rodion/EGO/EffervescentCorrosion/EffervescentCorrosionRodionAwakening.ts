import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class EffervescentCorrosionRodionAwakening implements Skill{
    readonly Name: string = "Effervescent Corrosion";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 2;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] If main target has 50%+ hp, +1 Atk Weight;<br>"+
            "If main target has 75%+ hp, additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor] and +7 [Tremor] Count<br>"+
            "[Heads Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Rodion/EGO/EffervescentCorrosion/20904awakenprofile.png";
}